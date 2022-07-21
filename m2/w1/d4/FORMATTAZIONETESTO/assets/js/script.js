let testo = document.querySelector('.formattazione')


function corsivo (){

    testo.style.fontStyle = 'italic'

}

function grassetto (){

    testo.style.fontWeight = 'bolder'

}

function maiuscolo () {

    testo.style.textTransform = 'uppercase' 

}

function minuscolo () {

    testo.style.textTransform = 'lowercase' 
}

function sottolineato () {

    testo.style.textDecoration = 'underline' 

}

function remove(){
 
    testo.removeAttribute('style')

}


let btnCorsivo = document.getElementById('corsivo')
btnCorsivo.addEventListener('click', corsivo)
btnCorsivo.addEventListener('dblclick', remove)

let btnGrassetto = document.getElementById('grassetto')
btnGrassetto.addEventListener('click', grassetto)
btnGrassetto.addEventListener('dblclick', remove)

let btnMaiuscolo = document.getElementById('maiuscolo')
btnMaiuscolo.addEventListener('click', maiuscolo)
btnMaiuscolo.addEventListener('dblclick', remove)


let btnMinuscolo = document.getElementById('minuscolo')
btnMinuscolo.addEventListener('click', minuscolo)
btnMinuscolo.addEventListener('dblclick', remove)

let btnSottolineato = document.getElementById('sottolineato')
btnSottolineato.addEventListener('click', sottolineato)
btnSottolineato.addEventListener('dblclick', remove)