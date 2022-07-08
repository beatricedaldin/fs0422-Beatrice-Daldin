// Upper e Lower Case
let frase = "Giovanni è innamorato di Lucia"

console.log(frase.toLowerCase())
console.log(frase.toUpperCase())


//Dividere la stringa in lettere, prendere due lettere e fare una nuova stringa
let coso = frase.split("")
console.log(coso)
let primaLettera = coso[Math.floor(Math.random() * frase.length)]
let secondaLettera = coso[Math.floor(Math.random() * frase.length)]
let nuovaParola = primaLettera + secondaLettera
console.log(nuovaParola)





// Crea un array di persone, seleziono il terzo valore, output lunghezza array, aggiungo persona alla fine dell'array
let lista = 
[ 'Massimo', 'Teresa', 'Matteo', 'Igor', 'Irene', 'Marco' ]
console.log(lista)
console.log(lista[2])
console.log(lista.length)
let nome1 = lista.push('Giorgia')
console.log(lista)




//Funzione, lista di numeri, prendo due numeri e faccio un monte di operazioni
function operazioni(){
        let lista2 = [ 1, 2, 3, 4 ]
        let a = lista2[Math.floor(Math.random() * lista2.length)]
        console.log(a)
        let b = lista2[Math.floor(Math.random() * lista2.length)]
        console.log(b)
        let somma = a + b
        console.log(somma)
        let sottrazione = a - b
        console.log(sottrazione)
        let divisione = a / b
        console.log(divisione)
        let moltiplicazione = a * b
        console.log(moltiplicazione)
       




}
operazioni()




//Usare pop, push, shift, unshift applicato ad un array

let cose = ['borsa', 'borsello', 'fiori', 'giornale', 'ombrello']

let x = cose.pop()
console.log(x)
console.log(cose)
let y = cose.push('lampada')
console.log(cose)
let z = cose.shift()
console.log(cose)
let j = cose.unshift('mouse')
console.log(cose)


