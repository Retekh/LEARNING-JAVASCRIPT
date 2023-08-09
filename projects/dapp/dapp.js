import { $from_list, $to_list, $from_arrow, $to_arrow, $to_coin, $from_coin } from "./variables.js"
import {getCoins, fromButtonClicked, toButtonClicked, arrowClicked, mouseOutList} from "./functions.js"



getCoins()

// Event Listeners
$from_arrow.addEventListener('click', arrowClicked)
$to_arrow.addEventListener('click', arrowClicked)

$from_list.addEventListener('mouseleave', mouseOutList)
$to_list.addEventListener('mouseleave', mouseOutList)

$from_list.addEventListener('click', fromButtonClicked)
$to_list.addEventListener('click', toButtonClicked)
console.log(`From: ${$to_coin.innerText}\nTo:`)

