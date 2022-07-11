


function result() {
    let display = document.querySelector('#display');
    let tot = eval(display.value)

    display.value = tot
}


function addSymb(coso){
    let display = document.querySelector('#display');
    let symb = coso.getAttribute('data-symb');

    console.log(coso.getAttribute('data-symb'))

    display.value += coso.getAttribute('data-symb')

}

function cleanUp(){
    document.querySelector('#display').value = '';
    

}

function del(){
    let canc = document.querySelector('#display').value;
    document.querySelector('#display').value = 
    canc.substr(0, canc.length - 1);

}



/* NOPE. QUESTO VA OLTRE LE MIE CAPACITà.
DOVREBBE ESSERE UN IF DENTRO LA FUNZIONE RESULT()
CHE FACCIA UN CHECK PER VEDERE SE ESISTE UN SIMBOLO √, A
QUEL PUNTO ELIMINARLO, FARE LE OPERAZIONI MATEMATICHE NELLA 
SEQUENZA DI DEFAULT E, POI, LA RADICE QUADRATA.
IL PROBLEMA SORGE QUANDO DEVO FARE LA RADICE QUADRATA 
DI UN SINGOLO NUMERO, IN UNA STRINGA PIENA DI OPERAZIONI
MATEMATICHE. 
ESISTE UN MODO CHE NON SIA MATH.SQRT() PER FARE LA RADICE?
ESISTE UN SEMPLICE SIMBOLO RICONOSCIBILE DALLE OPERAZIONI DI 
DEFAULT?
MI ESPLODE IL CERVELLO.



function root(){
    let display = document.querySelector('#display').value
    console.log(typeof display)
    display.replace('√', '')
    let tot = eval(display.value)
    console.log(typeof display)
    console.log(display)
    document.querySelector('#display').value = Math.sqrt(tot)
} */
