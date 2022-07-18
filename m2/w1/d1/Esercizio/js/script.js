let date = new Date();
date.toLocaleDateString()
console.log(date)

let dataCompleta = document.querySelector('#dataCompleta')
dataCompleta.innerHTML = date

let soloData = document.querySelector('#soloData')
soloData.innerHTML = date.toLocaleDateString()

let soloOra = document.querySelector('#soloOra')
soloOra.innerHtml = date.toLocaleTimeString()
console.log(soloOra.innerHtml)

let giorno = document.querySelector('#giorno')
giorno.innerHTML = date.getDate()

let mese = document.querySelector('#mese')
mese.innerHTML = date.getMonth()

let anno = document.querySelector('#anno')
anno.innerHTML = date.getFullYear()

let nomeGiorno = document.querySelector('#nomeGiorno')

if (date.getDay = 0){
    nomeGiorno.innerHTML = 'Domenica'
} else if (date.getDay = 1){
    nomeGiorno.innerHTML = 'Lunedì'
} else if (date.getDay = 2){
    nomeGiorno.innerHTML = 'Martedì'
} else if (date.getDay = 3){
    nomeGiorno.innerHTML = 'Mercoledì'
} else if (date.getDay = 4){
    nomeGiorno.innerHTML = 'Giovedì'
} else if (date.getDay = 5){
    nomeGiorno.innerHTML = 'Venerdì'
} else if (date.getDay = 6){
    nomeGiorno.innerHTML = 'Sabato'
}  


let ora = document.querySelector('#ora')
ora.innerHTML = date.getHours()

let minuti = document.querySelector('#minuti')
minuti.innerHTML = date.getMinutes()

let secondi = document.querySelector('#secondi')
secondi.innerHTML = date.getSeconds()


let oraInTempoReale = document.querySelector('#oraInTempoReale')

setInterval(function(){
    date.setSeconds( date.getSeconds() + 1 )
    oraInTempoReale.innerHTML = date.toLocaleTimeString()
}, 1000)


