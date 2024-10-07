import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-o1js';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('isPlatformBrowser returned true. Executing ngOnInit() client side');
      (async () => {
        // load o1js
        const o1js = await import('o1js');
        const {Mina, PublicKey, fetchAccount} = o1js;
        const {Add} = await import('../../../../docs/04-zkapp-browser-ui/contracts/build/src/');
        // connect Mina to testnet
        const Network = Mina.Network(
          'https://api.minascan.io/node/devnet/v1/graphql'
        );
        Mina.setActiveInstance(Network);
        const zkAppAddress = `B62qnTDEeYtBHBePA4yhCt4TCgDtA4L2CGvK7PirbJyX4pKH8bmtWe5`;
        await fetchAccount({publicKey: zkAppAddress});
        const zkApp = new Add(PublicKey.fromBase58(zkAppAddress));
        console.log("Current num: ", zkApp.num.get().toString());

        const mina = (window as any).mina;
        const walletKey: string = (await mina.requestAccounts())[0];
        console.log(`Using key:${walletKey}`);

        await fetchAccount({publicKey: PublicKey.fromBase58(walletKey)});
        console.log("Calling Add.compile()");
        await Add.compile();
        console.log("Add.compile() completed");
        const transaction = await Mina.transaction(async () => {
          await zkApp.update();
        });
        await transaction.prove();
        const { hash } = await (window as any).mina.sendTransaction({
          transaction: transaction.toJSON(),
        });

        const transactionLink = `https://minascan.io/devnet/tx/${hash}`;
        console.log(`View transaction at ${transactionLink}`);
      })();
    }
  }
}
