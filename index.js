let can = document.getElementById('can1')
can.innerText = 'Canadian Dollars'
can.addEventListener('click', function() {
let canCurrency = prompt('How much do you have in Canadian Dollars?', 0)
// console.log(`Canadian Currency Value: ${canCurrency}`)
let canWrite = document.getElementById('canDiv')

    if (canCurrency >= 0.00 && canCurrency <= 1000000000000000000000000000) {
    let convertCdToUsd = (canCurrency * .81).toFixed(2)
    console.log(`Canadian Currency Value: ${canCurrency}`)
    console.log(`US Currency Value: ${convertCdToUsd}`)
    }
    else {
    console.log('Please insert a valid currency amount')   
    }
})

let mex = document.getElementById('mex1')
mex.innerText = 'Mexican Pesos'
mex.addEventListener('click', function() {
let mexCurrency = prompt('How much do you have in Mexican Pesos?', 0)
// console.log(`Mexican Currency Value: ${mexCurrency}`)

    if (mexCurrency >= 0.00 && mexCurrency <= 1000000000000000000000000000) {
    let convertMpToUsd = (mexCurrency * .047).toFixed(2)
    console.log(`Mexican Currency Value: ${mexCurrency}`)
    console.log(`US Currency Value: ${convertMpToUsd}`)
    }
    else {
    console.log('Please insert a valid currency amount')   
    }
})

let europe = document.getElementById('europe')
europe.innerText = 'Euros'
europe.addEventListener('click', function() {
let euroCurrency = prompt('How much do you have in Euros?', 0)
// console.log(`Mexican Currency Value: ${mexCurrency}`)

    if (euroCurrency >= 0.00 && euroCurrency <= 1000000000000000000000000000) {
    let convertEToUsd = (euroCurrency * 1.13).toFixed(2)
    console.log(`European Currency Value: ${euroCurrency}`)
    console.log(`US Currency Value: ${convertEToUsd}`)
    }
    else {
    console.log('Please insert a valid currency amount')   
    }
})

/*
document.querySelector('#searchText').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
*/