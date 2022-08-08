class Utente{
    constructor(username, firstname, lastname, gender, email, role, house,id){
        this.username = username
        this.firstName = firstname
        this.lastName = lastname
        this.gender = gender
        this.email = email
        this.role = role
        this.house = house
    }
}

const apiUrl = 'http://localhost:3000/utenti';
let subBtn = document.querySelector('#subBtn')

subBtn.addEventListener('click', function(e){
    e.preventDefault();

    let username = document.querySelector('#usernameInput').value
    let name = document.querySelector('#nameInput').value
    let surname = document.querySelector('#lastNameInput').value
    let email = document.querySelector('#exampleInputEmail1').value
    let house = document.querySelector('#selectH')
    let valueH = house.options[house.selectedIndex].text;
    let gender = document.querySelector('#selectG')
    var valueG = gender.options[gender.selectedIndex].text;
    let role = document.querySelector('#selectR')
    var valueR = role.options[role.selectedIndex].text;

    let utente = new Utente (username, name, surname, valueG, email, valueR, valueH)
    console.log(utente)

    let options = {
        method: 'POST',
        body: JSON.stringify(utente),
        headers:{
            "content-type":"application/json"
        }
    }
    
    fetch(apiUrl,options)
    .then(res => res.json())
    .then(res => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'A new user just popped up!',
            text:`The User ${res.username} has been created`,
            showConfirmButton: false,
            timer: 3000
        })
        document.querySelector('#myForm').reset();

    })
          
    
})

let goBackBtn = document.querySelector('#home')
goBackBtn.addEventListener('click', function(){
    location.href="index.html"
})

