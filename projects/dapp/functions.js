import {$from_list, $to_list, $from_coin, $to_coin, paprikaApi, _1inchApi} from "./variables.js"


// Functions

    // Async Functions 
    async function getCoins() {
        try {
            let response = await fetch(paprikaApi)
            let data = await response.json()
        
            let coinList = Object.values(data)
                .filter(coins => coins.rank > 0 & coins.rank < 11)
            
            return coinList.map(token => token.symbol)
            }
            catch (error) {
                console.log(`Type Error ${error}`)
            }

    }

    async function getCoinAddress(tickerList) {
        const response = await fetch(_1inchApi)
        const data = await response.json()
        let tokenList = Object.values(data.tokens)
       
        let CoinList = tokenList
            .filter(token => tickerList.includes(token.symbol))
            .map(coins => `<button class='${coins.symbol} button'>${coins.symbol}</button>`)
            .join('')
      
            $from_list.innerHTML = `<ol>${CoinList}</ol>`
            $to_list.innerHTML = `<ol>${CoinList}</ol>`  
        
        return tokenList.filter(token => tickerList.includes(token.symbol));
    }

    function renderForm(tokens) {
        const options = tokens.map(tokens => `<option value='${tokens.address}'>${tokens.name} ${tokens.symbol}</option>`)
        console.log(tokens, 'Option:', options)
    }   

    // Hover functions 

    let nIntervalId;

    function hoverForm() {
        let margin = 200;

        if (!nIntervalId) {
            nIntervalId = setInterval(() => {

                margin = (margin + 1) * (6 / 7)
                document.querySelector('.crypto_converter_container').style.marginTop = `${margin}vh`;
                
            }, 20) 
        }
        setTimeout(() => {
            console.log('finished')
            clearInterval(nIntervalId)
            nIntervalId = true;
        }, 5000)
    }

    // Listener Functions

    function arrowClicked(ev) {
        ev.target.className == 'from_arrow row1' ? $from_list.classList.toggle('active') : $to_list.classList.toggle('active')
    }

    function mouseOutList(ev) {
        ev.target.className == 'to_list active' ? $to_list.classList.toggle('active') : $from_list.classList.toggle('active') 
    }

    function fromButtonClicked(ev) {
        $from_coin.innerText = ev.target.innerText
    } 

    function toButtonClicked(ev) {
        $to_coin.innerText = ev.target.innerText

    }

    function hideMenu(ev) {
        const $quote_bg = document.querySelector('.quote-bg').classList.remove('blur')
        document.querySelector('.quote').style.marginTop = '100vh'; 
        console.log('Me')


    }

    let mIntervalId;


    function quoteClicked(ev) {
        console.log($from_coin.innerTex)
        document.querySelector('.quote-bg').classList.add('blur')
    let top = 100;

    if (!mIntervalId) {
        mIntervalId = setInterval(() => {

            top = (top + 2.3) * (6 / 7)
            document.querySelector('.quote').style.top = `${top}vh`;
            
        }, 20) 
    }
    setTimeout(() => {
        console.log('finished2hover')
        clearInterval(mIntervalId)
        mIntervalId = true;
    }, 5000)


    }

export {renderForm, hoverForm, quoteClicked, getCoins, getCoinAddress, fromButtonClicked, toButtonClicked, arrowClicked, mouseOutList, $from_list, $to_list, hideMenu}