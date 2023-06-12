/** Creating a function thats side effect logs each crypto. */

const crypto = ['BTC', 'DAI', 'ETH', 'USDC']

crypto.forEach(function(crypto) {
    console.log(crypto);
});