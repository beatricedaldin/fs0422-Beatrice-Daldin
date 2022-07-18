let data = new Date()

// metodo 1

data;
console.log(data)


let dataAttuale = document.getElementById('data-attuale')
dataAttuale.innerHTML = data


// metodo 2


let dataAttuale2 = document.getElementById('data-attuale2')
dataAttuale2.innerHTML = data.toLocaleDateString()



// mostrare ogni elemento

console.log(data.getDate())
console.log(data.getMonth() + 1)
console.log(data.getFullYear())
console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getSeconds())



//mostare ora in tempo reale

setInterval(function() {
    
 let time = new Date()
 
 let oraInTempoReale = document.querySelector('#oraInTempoReale')
 oraInTempoReale.innerHTML = time.toLocaleTimeString()   
},1000)



// data formattazione europea

let dataEuropea = new Date (2022, 6 , 18 , 15, 56, 15, 1)
console.log(dataEuropea)

let dataFormattata = document.getElementById('data-europea')
dataFormattata.innerHTML = dataEuropea


// prove

console.log (data.getDay())


if(data.getDay() == 0){

    console.log('Domenica')
} else if ( data.getDay() == 1) {
    console.log('Lunedì')
} else if ( data.getDay() == 2) {
    console.log('Martedì')
} else if ( data.getDay() == 3) {
    console.log('Mercoledì')
} else if ( data.getDay() == 4) {
    console.log('Giovedì')
} else if ( data.getDay() == 5) {
    console.log('Venerdì')
} else if ( data.getDay() == 6) {
    console.log('Sabato')
} 

// prove ora

console.log (data.toLocaleTimeString())


