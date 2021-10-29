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


/*
document.querySelector('#searchText').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
*/