let inputNumber = document.getElementById('inputNumber')

let infoField = document.getElementById('infoField')

let buttonPlay = document.getElementById('buttonPlay')

guessNumber = 13

function infoWrite(inputNumber) {
    infoField.innerText('GO !')
    if (guessNumber < 0 || guessNumber > 20) {
        infoField.innerText('Enter the number between 0 and 20')
    } else if (inputNumber > guessNumber) {
        infoField.innerText('Less')
    } else if (inputNumber < guessNumber) {
        infoField.innerText('More')
    } else if (inputNumber > guessNumber) {
        infoField.innerHTML('<img src="assets/img/bingo.png">')
    }
}

buttonPlay.addEventListener('click', function(){
    infoWrite(inputNumber)
})