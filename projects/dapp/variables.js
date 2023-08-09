const paprikaApi = 'https://api.coinpaprika.com/v1/coins'
const _1inchApi = 'https://api.1inch.io/v5.2/56/tokens'

const $from_list = document.querySelector('.from_list')
const $to_list = document.querySelector('.to_list')

const $from_coin = document.querySelector('.from_coin')
const $to_coin = document.querySelector('.to_coin')

const $from_arrow = document.querySelector('.from_arrow')
const $to_arrow = document.querySelector('.to_arrow')


export {$from_list, $to_list, $from_coin, $to_coin, paprikaApi, _1inchApi, $from_arrow, $to_arrow}