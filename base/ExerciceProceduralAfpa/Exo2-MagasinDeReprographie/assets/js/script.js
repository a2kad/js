let inputNumber = document.getElementById('inputNumber')
let resultatField = document.getElementById('resultatField')
let num10 = document.getElementById('num10')
let res10 = document.getElementById('res10')
let num20 = document.getElementById('num20')
let res20 = document.getElementById('res20')
let num30 = document.getElementById('num30')
let res30 = document.getElementById('res30')

inputNumber.addEventListener('input', function () {
    let inputNumberValue = inputNumber.value
    let prix = 0
    console.log(inputNumberValue)
    if (inputNumberValue > 0 && inputNumberValue <= 10) {
        prix = inputNumberValue * 0.1
        resultatField.innerText = prix.toFixed(2) + ' €'
        num10.innerHTML = `${inputNumberValue} x 0.10 &euro;`
        res10.innerHTML = ` : ${prix.toFixed(2)} &euro;`
    } else if (inputNumberValue > 10 && inputNumberValue <= 30) {
        prix = 10*0.1+(inputNumberValue-10) * 0.09
        resultatField.innerText = prix.toFixed(2) + ' €'
        num10.innerHTML = `10 x 0.10 &euro;`
        res10.innerHTML = ` : 1 &euro;`
        num20.innerHTML = `${inputNumberValue-10} x 0.09 &euro;`
        res20.innerHTML = ` : ${(prix-1).toFixed(2)} &euro;`
    }else if (inputNumberValue > 30 ) {
        prix = 10*0.1+20*0.09+(inputNumberValue-30) * 0.08
        resultatField.innerText = prix.toFixed(2) + ' €'
        num10.innerHTML = `10 x 0.10 &euro;`
        res10.innerHTML = ` : 1 &euro;`
        num20.innerHTML = `20 x 0.09 &euro;`
        res20.innerHTML = ` : 1.80 &euro;`
        num30.innerHTML = `${inputNumberValue-30} x 0.08 &euro;`
        res30.innerHTML = ` : ${(prix-2.8).toFixed(2)} &euro;`
    }else if (inputNumberValue <= 0 ) {
        resultatField.innerText = '0 €'
        num10.innerHTML = `0 x 0.10 &euro;`
        res10.innerHTML = ` : 0 &euro;`
        num20.innerHTML = `0 x 0.09 &euro;`
        res20.innerHTML = ` : 0 &euro;`
        num30.innerHTML = `0 x 0.08 &euro;`
        res30.innerHTML = ` : 0 &euro;`
    }
})