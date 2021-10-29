let can = document.getElementById('can1')
can.innerText = 'Canadian Dollars'
can.addEventListener('click', function() {
let canCurrency = prompt('How much do you have in Canadian Dollars?', 0)

function cdToUsd() {

    if (canCurrency = !isNaN) {
    let convertCdToUsd = (canCurrency * .81)
    console.log(convertCdToUsd)
    } else {
        console.log('Please insert a numerical value')
    }
}

/*
document.querySelector('#searchText').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
*/