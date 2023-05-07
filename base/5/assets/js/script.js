// Je declare ma fonction
function makeAlert() {
    window.alert('BOOM !')
}
const monBouton = document.getElementById('myButton')

const myButton = document.querySelector('#myButton')
//nomBouton.onclick = makeAlert

monBouton.addEventListener("click", function () {
    makeAlert()
})
function writeMessage(name) {
    let myDiv = document.getElementById('message')
    myDiv.innerText = `Bonjour, ${name}, comment allez-vous?`
}
let mxButton = document.getElementById('mxButton')
mxButton.addEventListener('click', function () {
    let inputFirstName = document.getElementById('inputFirstName')
    let name = inputFirstName.value
    if (name == '') {
        window.alert('Enter the name')
    } else {
        writeMessage(name)
    }
})
