/** async function getCoinPaprikaApi() {
    let response = await fetch('https://api.coinpaprika.com/v1/coins');
    let data = await response.json();
    function getCryptos() {
        let result = "<ol>";
        for(let cryptos = 0; cryptos <= 19; cryptos++) {
            result += '<li>' + data[cryptos].name + '</li>';
            
        }
            return result + '</ol>';
        }
    document.body.innerHTML = `<h1>Top Twenty Cryptos</h1>
    ${getCryptos()}
    `;
    return data;
}

getCoinPaprikaApi(); */

async function parseTokens() {
    try {
    let response = await fetch('https://api.1inch.exchange/v3.0/1/tokens');
    let data = await response.json();
    document.body.innerHTML = `
    <h1>Tokens</h1>
    ${data.tokens.name}
    `;
    console.log(data);
} catch(e) {
    console.log(`Error: ${e}`)
} 

}

parseTokens();