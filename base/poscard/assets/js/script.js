let inputTitle = document.getElementById('inputTitle')
let inputText = document.getElementById('inputText')
let inputMer = document.getElementById('inputMer')
let inputMontagne = document.getElementById('inputMontagne')
let inputCampagne = document.getElementById('inputCampagne')
let inputVerdana = document.getElementById('inputVerdana')
let inputQuattrocento = document.getElementById('inputQuattrocento')
let inputPinyonScript = document.getElementById('inputPinyonScript')
let inputColor = document.getElementById('inputColor')
let postCardText = document.getElementById('postCardText')
let inputStyle = document.getElementById('inputStyle')
let print = document.getElementById('print')

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
        postCardText.style.fontFamily = "Verdana"
    }else if (font=='Quattrocento'){
        postCardText.style.fontFamily = "Quattrocento"
        postCardText.style.fontSize = "24px"
    }else if (font=='PinyonScript'){
        postCardText.style.fontFamily = "Pinyon Script"
        postCardText.style.fontSize = "36px"
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

function changeColor(color){
    postCardText.style.color = color
}

inputColor.addEventListener('change', function(){
    let color = inputColor.value
    changeColor(color)
})

function changeStyle (style) {
    if (style=='normal'){
        postCardText.style.fontWeight = 'normal'
        postCardText.style.fontStyle = 'normal'
    }else if(style=='italic'){
        postCardText.style.fontWeight = 'normal'
        postCardText.style.fontStyle = 'italic'
    }else if (style=='bold'){
        postCardText.style.fontWeight = 'bold'
    }
}

inputStyle.addEventListener('click', function(){
    let style = inputStyle.value
    changeStyle(style)
})

function printPostCard(){
    window.print()
}

print.addEventListener('click', function(){
    printPostCard()
})