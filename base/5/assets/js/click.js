const buttonClickMe = document.getElementById('buttonClickMe')

const buttonReset = document.getElementById('buttonReset')

function reset (){
    let messageField = document.getElementById('messageField')
    messageField.innerText = 'Let\'s start!'
    compteur = 0
}

buttonReset.addEventListener('click', function(){
    reset()
})

let compteur = 0

function clickMe (){
    compteur++
    let messageField = document.getElementById('messageField')
    messageField.innerText = compteur
    if (compteur==1){
        setInterval(showTimer,1000)
    }
}


buttonClickMe.addEventListener('click', function(){
        clickMe()
})

let timer = 5
let timerField = document.getElementById('timerField')

function showTimer(){
    if (timer==0){
        window.alert(`Vous avez clické ${compteur}`)
        location.reload()
    }else{
        timerField.innerText = timer
        timer--
    }
    
}
