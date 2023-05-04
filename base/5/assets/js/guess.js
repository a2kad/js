let infoField = document.getElementById('infoField')

let buttonPlay = document.getElementById('buttonPlay')

function infoWrite() {
    //infoField.innerText = 'GO !'
    guessNumber = 13

    let inputNumber = document.getElementById('inputNumber').value
    console.log(inputNumber)
    if (inputNumber < 0 || inputNumber > 20) {
        infoField.innerText = "Enter the number between 0 and 20"
    } else if (inputNumber > guessNumber) {
        infoField.innerText = "Less"
    } else if (inputNumber < guessNumber) {
        infoField.innerText = "More"
    } else if (inputNumber == guessNumber) {
        infoField.innerHTML = "<img src=\"assets/img/bingo.png\" style=\"width:200px;\">"
    } else {
        infoField.innerText = "Enter the number between 0 and 20"
    }
}

buttonPlay.addEventListener('click', function () {
    console.log('ok')
    infoWrite()
})