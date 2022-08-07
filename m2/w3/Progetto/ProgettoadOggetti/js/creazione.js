class Utente{
    constructor(username, firstname, lastname, gender, email, role, house){
        this.username = username
        this.firstName = firstname
        this.lastName = lastname
        this.gender = gender
        this.email = email
        this.role = role
        this.house = house
    }
}

const apiUrl = 'users.json';

let subBtn = document.querySelector('#subBtn')

subBtn.addEventListener('click', function(){
    

    let username = document.querySelector('#usernameInput')
    let name = document.querySelector('#nameInput')
    let surname = document.querySelector('#lastNameInput')
    let email = document.querySelector('#exampleInputEmail1')
    let house = document.querySelector('#selectH')
    let valueH = house.options[house.selectedIndex].text;
    let gender = document.querySelector('#selectG')
    var valueG = gender.options[gender.selectedIndex].text;
    let role = document.querySelector('#selectR')
    var valueR = role.options[role.selectedIndex].text;

    let utente = {
        username: username.value,
        firstName: name.value,
        lastName: surname.value,
        gender: valueG,
        email: email.value,
        role: valueR,
        house: valueH
        }
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
            position: 'top-end',
            icon: 'success',
            title: 'A new user just popped up!',
            text:`The User ${res.username} has been created`,
            showConfirmButton: false,
            timer: 4000
        })
    })
    .then(() =>{
        location.href = "index.html"
    })
})

