let number = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operator')
let result = document.getElementById('result')
let reset = document.getElementById('reset')
let operationField = document.getElementById('operationField')

let nb1 = ''
let nb2 = ''
let display = ''

let myOperator = ''


number.forEach(element => {
    element.addEventListener('click', function () {
        display = operationField.innerText + element.value
        operationField.innerText += element.value
        console.log('display : '+display)
    })

});

operator.forEach(element => {
    element.addEventListener('click', function () {
        nb1 = operationField.innerText
        myOperator = element.value
        
        operationField.innerText = ''
    })
});

result.addEventListener('click', function () {
    if (myOperator == '+') {
        operationField.innerText = Number(nb1) + Number(operationField.innerText)
    }
})

reset.addEventListener('click', function () {
    operationField.innerText = 'AC'
})


/*let operatorCalc = ''
number.forEach(element => {
    element.addEventListener('click', function () {
        display += element.value
        if (operatorK) {
            nb1 += element.value
            operationField.innerText += element.value
        }
        // else if (result) {
        //     result.addEventListener('click', function () {
        //         getResult(display)
        //     })
        // }
        else if(nb1!='') {
            nb2 += element.value
            operationField.innerText += element.value
        }
        console.log('NB1 : ' + nb1 + ' NB2 : ' + nb2)
        console.log('display :' + display)
    })
})
operatorK.forEach(element => {
    element.addEventListener('click', function () {
        operatorCalc = element.value
        operationField.innerText += element.value
        display += element.value
        console.log('Operator : ' + operatorCalc)
    })
})
function getResult(disp) {
    operationField.innerText = eval(disp)
}

function getReset() {
    let nb1 = ''
    let nb2 = ''
    let operatorCalc = ''
    let display = ''
    operationField.innerText = '0'
}*/