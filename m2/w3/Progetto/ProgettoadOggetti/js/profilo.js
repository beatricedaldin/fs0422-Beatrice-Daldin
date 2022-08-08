let params = new URLSearchParams(location.search);
let userId = params.get('id')
console.log(userId)

fetch('http://localhost:3000/utenti'+'/'+userId)
.then(res => res.json())
.then(utente => {

    let proUser = document.querySelector('#profileUsername')
    proUser.innerHTML = utente.username
    let firstName = document.querySelector('#firstName')
    firstName.innerHTML = utente.firstName
    let lastName = document.querySelector('#lastName')
    lastName.innerHTML = utente.lastName
    let gender = document.querySelector('#gender')
    gender.innerHTML = utente.gender
    let email = document.querySelector('#email')
    email.innerHTML = utente.email
    let house = document.querySelector('#house')
    house.innerHTML = utente.house
    let role = document.querySelector('#role')
    role.innerHTML = utente.role
    

})

let goBackBtn = document.querySelector('#goBack')
goBackBtn.addEventListener('click', function(){
    location.href='index.html'
})