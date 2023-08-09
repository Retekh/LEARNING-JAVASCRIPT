import {$from_list, $to_list, $from_coin, $to_coin, paprikaApi, _1inchApi} from "./variables.js"


// Functions

    // Async Functions 
    async function getCoins() {
        try {
            let response = await fetch(paprikaApi)
            let data = await response.json()
        
            let coinList = Object.values(data)
                .filter(coins => coins.rank > 0 & coins.rank < 11)
            let fromCoinList = coinList
                .map(coins => `<button class='${coins.name} button'>${coins.name}</button>`)
                .join('')
            let toCoinList = coinList
                .map(coins => `<button class='${coins.name} button'>${coins.name}</button>`)
                .join('')
            
            $from_list.innerHTML = `<ol>${fromCoinList}</ol>`
            $to_list.innerHTML = `<ol>${toCoinList}</ol>`
            }
            catch (error) {
                console.log(`Type Error ${error}`)
            }

    }

    async function getCoinAddress(tokenList) {
        const response = await fetch(_1inchApi)
        const data = await response.json()
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


export {getCoins, fromButtonClicked, toButtonClicked, arrowClicked, mouseOutList, $from_list, $to_list}