let submitBtn = document.querySelector('#submit')
let container = document.querySelector('#container')
let nameForm = document.querySelector('#name')
let reviewForm = document.querySelector('#review')

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    /* Metodo estremamente semplice che non salva i dati al reload della pagina

    let date = new Date()
    let post = document.createElement('div')
    post.classList.add('post')
    let nameGuest = document.createElement('p')
    nameGuest.classList.add('nameGuest')
    nameGuest.innerHTML = nameForm.value
    let reviewGuest = document.createElement('p') 
    reviewGuest.classList.add('reviewGuest')
    reviewGuest.innerHTML = reviewForm.value
    let dateGuest = document.createElement('p')
    dateGuest.classList.add('dateGuest')
    dateGuest.innerHTML = date
    post.append(nameGuest, reviewGuest, dateGuest)
    container.append(post)*/
    let dateGuest = new Date()
    let reviewGuest = reviewForm.value + ' on ' + dateGuest 
    let nameGuest = nameForm.value
    localStorage.setItem(nameGuest, reviewGuest)
    location.reload()
    
    
})

/* LocalStorage ma tutte le date si aggiornano al refresh  della pagina*/

Object.keys(localStorage).forEach((key) => {
    let value = localStorage.getItem(key)
    console.log(value)
    console.log(key)
    let post = document. createElement('div')
    post.classList.add('post')
    post.innerHTML = key + ' says: ' + value 
    container.append(post)
})