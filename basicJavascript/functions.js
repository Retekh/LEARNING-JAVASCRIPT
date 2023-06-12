function createTransaction(ticker, amount) {
    const transaction = {};
    transaction.amount = amount;
    transaction.ticker = ticker;
    return transaction;
}

createTransaction('ETH', 2e18);
console.log(createTransaction);

function calculateVelocity(v0, acc, time) {
    return v0 + acc * time;
}

console.log(calculateVelocity(5, 4, 2))
