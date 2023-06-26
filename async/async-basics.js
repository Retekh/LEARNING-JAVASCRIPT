let paprikaApi = 'https://api.1inch.exchange/v3.0/1/tokens';

async function getPaprikaApi() {
    let response = await fetch(paprikaApi);
    let data = await response.json();
    function paprikaCoinToOrderedList() {
        let result = '<ol>'
        for(let amount = 0; amount <= 9; amount++) {
            result += '<li>' + data[Object.keys(data)[amount]].symbol + '</li>';
        }
        return result + '</ol>';
    }
    document.body.innerHTML = `
        <h1>Snow Coin</h1>
        <h1>Top Ten Coins</h1>
        ${paprikaCoinToOrderedList()}
    `;
    return data + '<= data';
}
getPaprikaApi();