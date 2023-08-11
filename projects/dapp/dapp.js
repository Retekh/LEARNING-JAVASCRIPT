import { $from_list, $to_list, $from_arrow, $to_arrow, $to_coin, $from_coin } from "./variables.js"
import {getCoins, getCoinAddress, fromButtonClicked, toButtonClicked, arrowClicked, mouseOutList, hideMenu, quoteClicked, hoverForm, renderForm} from "./functions.js"



getCoins()
   .then(getCoinAddress)
   .then(renderForm)
   

// Event Listeners
$from_arrow.addEventListener('click', arrowClicked)
$to_arrow.addEventListener('click', arrowClicked)

$from_list.addEventListener('mouseleave', mouseOutList)
$to_list.addEventListener('mouseleave', mouseOutList)

$from_list.addEventListener('click', fromButtonClicked)
$to_list.addEventListener('click', toButtonClicked)
document.querySelector('.quote-bg').addEventListener('click', hideMenu)
document.querySelector('.get_quote').addEventListener('click', quoteClicked)

window.onload = hoverForm()
