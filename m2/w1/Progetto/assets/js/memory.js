let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];



let arrayComparison = [];
document.body.onload = startGame();

let carteTrovate = document.getElementsByClassName("find");
let modal = document.querySelector("#modal");
let timer = document.querySelector(".timer");
var Interval;



/*FISHER-SHUFFLE*/

function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}


function startTimer(){
    var s = 0, m = 0,  h = 0;
    Interval = setInterval(function(){
    timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
      s++;
      if(s == 60){
        m++;
        s = 0;
      }
      if(m == 60){
        h++;
        m = 0;
      }
    },1000);
  }





/*CREO LA FUNZIONE STARTGAME, CREO LE CARTE, ASSEGNO LA FUNZIONE SHUFFLE AL MIO ARRAY E FACCIO PARTIRE IL TIMER,
ASSEGNo L'EVENTO CLICK A TUTTI GLI ELEMENTI DEL MIO ARRAY, CALLBACK DELLE FUNZIONI già A DISPOSIZIONE SOTTO*/


function startGame(){  

    let arrayShuffle = shuffle(arrayAnimali);
  
    clearInterval(Interval);
    arrayComparison = [];
  
    let lista = document.querySelector('#griglia');
    while (lista.hasChildNodes()) {  
      lista.removeChild(lista.firstChild);
    }
  
     for(var i = 0; i < 24; i++){ 
        let carta = document.createElement('div');   
        let card = document.createElement('div');
        card.classList.add('card');
           document.querySelector('#griglia').appendChild(carta).appendChild(card);
        card.innerHTML = arrayShuffle[i];
      }
    
    startTimer();
  
    let card = document.getElementsByClassName('card');
    let cards = [...card];
  
    for (var i = 0; i < cards.length; i++){
      cards[i].addEventListener("click", displayIcon);
      cards[i].addEventListener("click", apriModal);
    }
  
  }





function displayIcon() {
    var card = document.getElementsByClassName("card");
    var cards = [...card];

    this.classList.toggle("show");
    arrayComparison.push(this);
    var len = arrayComparison.length;
    
    if (len === 2) {
        
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            
            cards.forEach(function(item) {
                item.classList.add('disabled');
            });
           
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                cards.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < carteTrovate.length; i++) {
                        carteTrovate[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}



//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte

// una funzione che nasconde la modale alla fine e riavvia il gioco

// una funzione che calcola il tempo e aggiorna il contenitore sotto

function apriModal(){  
    if (carteTrovate.length == 24){
        clearInterval(Interval);
        modal.classList.add("active");
        document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
        closeModal();
    }
  }
  
  function chiudiModal(){  
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("active");
        startGame();
    });
  }

  function playAgain(){
    modal.classList.remove("active");
    startGame();
  }


