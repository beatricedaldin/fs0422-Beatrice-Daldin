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

fetch(apiUrl)
.then(res => res.json())
.then(utenti => {

    let container = document.getElementById('container');
    let board = document.createElement('div');
    board.classList.add('board');
    container.append(board);
    let caption = document.createElement('h2');
    caption.innerHTML = 'Users';
    let listaUtenti = document.createElement('div');
    listaUtenti.classList.add('listaUtenti');
    board.append(caption,listaUtenti);
    let newUser = document.createElement('button');
    newUser.classList.add('addBtn');
    newUser.innerHTML = "New User";
    container.append(newUser)
    newUser.addEventListener('click', function(){
        location.href = "creaUtente.html"
    })


    for(let utente of utenti){
        
        utente = new Utente(utente.username, utente.firstName, utente.lastName, utente.gender, utente.email, utente.role, utente.house)
        console.log(utente)
        let nickname = document.createElement('p')
        nickname.innerHTML = utente.username
        listaUtenti.append(nickname)
        nickname.addEventListener('click', function(){
            location.href = "utente.html"
        })

        if(utente.house == "Gryffindor"){
            nickname.style.color = 'red'
        } else if(utente.house == "Hufflepuff"){
            nickname.style.color = 'yellow'
        } else if(utente.house == "Ravenclaw"){
            nickname.style.color = "blue"
        } else if(utente.house == "Slytherin"){
            nickname.style.color = "green"
        }

        if(utente.role == "Mod"){
            nickname.style.fontStyle = "italic"
        }
        if(utente.role == "Admin"){
            nickname.style.fontWeight = "bold"
        }
    

    }

})



