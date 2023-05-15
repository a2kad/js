let inputField = document.getElementById('inputField')
let resultatField = document.getElementById('resultatField')
let minisculeSymbol = new RegExp('[a-z]')
let manisculeSymbol = new RegExp('[A-Z]')
let shiffreSymbol = new RegExp('[0-9]')
let specialSymbol = new RegExp('[\\W]')



inputField.addEventListener('input', function () {
    let compteur = 0
    console.log(inputField.value)
    if (minisculeSymbol.test(inputField.value)) {
        compteur = compteur + 1

    }
    if (manisculeSymbol.test(inputField.value)) {
        compteur = compteur + 1

    }
    if (shiffreSymbol.test(inputField.value)) {
        compteur = compteur + 1

    }
    if (specialSymbol.test(inputField.value)) {
        compteur = compteur + 1

    }
    if (inputField.value.length < 8) {
        compteur = compteur - 1
    }
    console.log(compteur)

    if (compteur == 1 || compteur == 0){
        resultatField.innerHTML = '<p style="color:red;">Dangereux</p>'
    } else if (compteur == 2){
        resultatField.innerHTML = '<p style="color:#fed000;">Moyen</p>'
    }else if (compteur == 3){
        resultatField.innerHTML = '<p style="color:#89D700;">Sécurisé</p>'
    }else if (compteur == 4){
        resultatField.innerHTML = '<p style="color:green;">Très sécurisé</p>'
    }else{
        resultatField.innerText = ''
    }
})
