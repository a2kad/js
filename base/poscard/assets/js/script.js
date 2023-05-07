let inputTitle = document.getElementById('inputTitle')
let inputText = document.getElementById('inputText')
let inputMer = document.getElementById('inputMer')
let inputMontagne = document.getElementById('inputMontagne')
let inputCampagne = document.getElementById('inputCampagne')
let inputVerdana = document.getElementById('inputVerdana')
let inputQuattrocento = document.getElementById('inputQuattrocento')
let inputPinyonScript = document.getElementById('inputPinyonScript')

function insertTitle(title) {
    let postCardTitle = document.getElementById('postCardTitle')
    postCardTitle.innerText = title
}

inputTitle.addEventListener('keyup', function () {
    let title = inputTitle.value
    insertTitle(title)
})

function insertText(text) {
    let postCardText = document.getElementById('postCardText')
    postCardText.innerText = text
}

inputText.addEventListener('keyup', function () {
    let text = inputText.value
    insertText(text)
})

function insertImg(img) {    
    let postCardImage = document.getElementById('postCardImage')
    if (img == 'inputMer') {        
        postCardImage.innerHTML = '<img src="assets/img/sea.jpg" class="img-fluid" alt="Mer">'
    } else if (img == 'inputMontagne') {        
        postCardImage.innerHTML = '<img src="assets/img/montagne.jpg" class="img-fluid" alt="Montagne">'
    } else if (img == 'inputCampagne') {        
        postCardImage.innerHTML = '<img src="assets/img/campagne.jpg" class="img-fluid" alt="Campagne">'
    }
}

inputMer.addEventListener('click', function () {
    let imgmer = 'inputMer'    
    insertImg(imgmer)
})
inputMontagne.addEventListener('click', function () {
    let imgMontagne = 'inputMontagne'    
    insertImg(imgMontagne)
})
inputCampagne.addEventListener('click', function () {
    let imgCampagne = 'inputCampagne'    
    insertImg(imgCampagne)
})

function changeFont (font){
    let postCardTitle = document.getElementById('postCardTitile')
    let postCardText = document.getElementById('postCardText')
    if (font=='verdana'){
        console.log('verdana')
        // postCardTitle.style.fontFamily = "Verdana"
        postCardText.style.fontFamily = "Verdana"
    }else if (font=='Quattrocento'){
        console.log('Quattrocento')
        // postCardTitle.style.fontFamily = "Roboto"
        postCardText.style.fontFamily = "Quattrocento"
    }else if (font=='PinyonScript'){
        console.log('PinyonScript')
        // postCardTitle.style.fontFamily = "Arial"
        postCardText.style.fontFamily = "Pinyon Script"
    }
    
}
inputVerdana.addEventListener('click', function(){
    let fontV = 'verdana'
    changeFont(fontV)
})
inputQuattrocento.addEventListener('click', function(){
    let fontR = 'Quattrocento'
    changeFont(fontR)
})
inputPinyonScript.addEventListener('click', function(){
    let fontA = 'PinyonScript'
    changeFont(fontA)
})