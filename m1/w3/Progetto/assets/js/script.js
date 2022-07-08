


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

/* OVVIAMENTE NON FUNZIONA

function root(){
    let display = document.querySelector('#display').value
    console.log(typeof display)
    display.replace('√', '')
    let tot = eval(display.value)
    console.log(typeof display)
    console.log(display)
    document.querySelector('#display').value += Math.sqrt(display)
} */
