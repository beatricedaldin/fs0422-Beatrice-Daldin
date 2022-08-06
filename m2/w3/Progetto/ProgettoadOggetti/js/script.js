class User{
    constructor(username, name, lastName, gender, email, role, house){
        this.username = username
        this.firstName = name
        this.lastName = lastName
        this.gender = gender
        this.email = email
        this.role = role
        this.house = house
    }
}


const apiUrl = 'users.json';

fetch(apiUrl)
.then(res => res.json())
.then(res => {

    let container = document.querySelector('#container');
    let board = document.createElement('div');
    board.classList.add('board');
    container.append(board);
    let caption = document.createElement('h2');
    caption.innerHTML = 'Utenti';
    let listaUtenti = document.createElement('div');
    listaUtenti.classList.add('listaUtenti');
    board.append(caption,listaUtenti);
    let addButton = document.createElement('button');
    addButton.classList.add('addBtn');
    addButton.innerHTML = "Aggiungi Utente";
    container.append(addButton)


    for(let utente of res){
        let nickname = document.createElement('p')
        nickname.innerHTML = utente.username
        listaUtenti.append(nickname)

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