class Utente{
    constructor(username, firstname, lastname, gender, email, role, house, id){
        this.username = username
        this.firstName = firstname
        this.lastName = lastname
        this.gender = gender
        this.email = email
        this.role = role
        this.house = house
        this.id = id
    }
}


fetch('http://localhost:3000/utenti')
.then(res => res.json())
.then(utenti => {

    let container = document.createElement('div');
    container.classList.add('container');
    document.body.append(container)
    let board = document.createElement('div');
    board.classList.add('board');
    container.append(board);
    let caption = document.createElement('h2');
    caption.innerHTML = 'ONLINE Users';
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
        
        utente = new Utente(utente.username, utente.firstName, utente.lastName, utente.gender, utente.email, utente.role, utente.house, utente.id)
        console.log(utente)
        let nickname = document.createElement('a')
        nickname.innerHTML = utente.username
        listaUtenti.append(nickname)
        
        nickname.href = 'utente.html?id=' + utente.id
        console.log(utente)
        console.log(utente.id)

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



