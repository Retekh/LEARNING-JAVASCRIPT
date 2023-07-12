let paprikaApi = 'https://api.coinpaprika.com/v1/coins';

async function getPaprikaApi() {
    let response = await fetch(paprikaApi)
    let data = await response.json();
    let coinList = Object.values(data)
    let listItems = coinList
                        .filter(value => 0 < value.rank & value.rank <= 4)
                        .map(value => `<li>Token Name: ${value.name}, Token Rank: ${value.rank}</li>`).join('') + '<ol>'
    document.body.innerHTML = `
    ${listItems} 
    `
    


   
    
}
getPaprikaApi();