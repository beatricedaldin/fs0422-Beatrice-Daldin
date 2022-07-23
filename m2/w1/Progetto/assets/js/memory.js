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
/*-----------------------------------------------------*/


function startTimer(){
    var secs = 0, mins = 0,  hrs = 0;
    Interval = setInterval(function(){
    timer.innerHTML = 'Tempo: ' + mins + " minuti " + secs + " secondi";
      secs++;
      if(secs == 60){
        mins++;
        secs = 0;
      }
      if(mins == 60){
        hrs++;
        mins = 0;
      }
    },1000);
  }





/*CREO LA FUNZIONE STARTGAME, CREO LE CARTE, ASSEGNO LA FUNZIONE SHUFFLE AL MIO ARRAY E FACCIO PARTIRE IL TIMER,
ASSEGNO L'EVENTO CLICK A TUTTI GLI ELEMENTI DEL MIO ARRAY, CALLBACK DELLE FUNZIONI già A DISPOSIZIONE SOTTO*/

let ricominciabtn = document.querySelector('#button')

function startGame(){  

    let arrayShuffle = shuffle(arrayAnimali);
  
    clearInterval(Interval);
    arrayComparison = [];
  
    let lista = document.querySelector('#griglia');
    lista.innerHTML ="";
  
     for(var i = 0; i < 24; i++){ 
        let carta = document.createElement('div');   
        let card = document.createElement('div');
        card.classList.add('card');
           document.querySelector('#griglia').appendChild(carta).appendChild(card);
        card.innerHTML = arrayShuffle[i];
      }
    
    startTimer();
  
    let card = document.getElementsByClassName('card');
   
  
    for (var i = 0; i < card.length; i++){
      card[i].addEventListener("click", displayIcon);
      card[i].addEventListener("click", apriModal);
    }
  
  }

  ricominciabtn.addEventListener('click', startGame)




/*------------------------------------------------*/
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
            }, 500);
        }
    }
}
/*-----------------------------------------------*/



function apriModal(){  
    if (carteTrovate.length == 24){
        clearInterval(Interval);
        modal.classList.add("active");
        document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
    }
  }

  let nuovaPartitabtn = document.querySelector('#button2')

  function playAgain(){
    modal.classList.remove("active");
    startGame();
  }

  nuovaPartitabtn.addEventListener('click', playAgain)
  
  



