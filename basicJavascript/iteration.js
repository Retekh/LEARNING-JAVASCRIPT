/** Console.log a list of cryptos on different lines ____________________________*/
 


const myWallet = ['BTC', 'BNB', 'DAI', 'USDT', 'ETH'];

function allCryptos(wallet) { 

  for (let counter = 0; counter + 1 < wallet.length; counter++) {
  console.log(wallet[counter]);
  }
  return wallet[wallet.length - 1];
}
console.log(allCryptos(myWallet));



console.log('___________');
/** Without using a function _____________________________________________________*/



for (let counter = 0; counter < myWallet.length; counter++) {
    console.log(myWallet[counter]);
}



console.log('___________');
/**Made even simpler using iteration _______________________________________________ */



for (let crypto of myWallet) {
    console.log(crypto);
}



console.log('___________');
/** _________________________________________________________________________________ */



for (let crypto in myWallet) {
    console.log(myWallet[crypto]);
}



console.log('___________');
/** While loop _________________________________________________________________*/



const stableCoins = ['Dai', 'USDT', 'USDC', 'Tether'];

let i = 0;

while (i < stableCoins.length) {
    console.log(stableCoins[i]);
    i++;
}
