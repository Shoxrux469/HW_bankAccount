
let name = 'Alex'
let money = 10000
let account = 7777

let askForName = prompt('What is your name?')


if (askForName === name) {
    let askForAccount = +prompt('What is your account number?')
    console.log('Right')
    if (askForAccount === account) {
        let askForMoney = +prompt('How much money would you like to receive?')
        console.log('Right')
        if (askForMoney <= money) {
            let result = money - askForMoney
            console.log('Right')
            alert('You received ' + askForMoney + ', so You have ' + result + ' in your account')
        } else {
            alert('Bye')
        }
    } else {
        alert('Bye')
    }
} else {
    alert('Bye')
}