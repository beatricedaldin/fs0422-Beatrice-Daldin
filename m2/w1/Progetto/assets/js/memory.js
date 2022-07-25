let ilMioArray = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];




let arrayComparison = [];


let carteTrovate = document.getElementsByClassName("find");
let modal = document.querySelector("#modal");
let timer = document.querySelector(".timer");
var Interval;
let mainMenu = document.querySelector('#mainMenu');









/*--------------------------------------------------*/
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

let modalita = '';

function startTimer(){
  
  if ( modalita == 'free mode' ){
    let secs = 0
    let mins = 0
    Interval = setInterval(function(){
    timer.innerHTML = 'Tempo: ' + mins + ' minuti ' +secs + ' secondi';
    secs++;

  if(secs == 60){
    mins++;
    secs = 0;
  }  
  },1000) 
  } else if( modalita == 'arcade mode' ){
    let secs = 40
    Interval = setInterval(function(){
    timer.innerHTML = 'Tempo: ' + secs + " secondi";
    secs--;
    if(secs < 0){
    clearInterval(Interval);
    loseModal();
  }
  },1000);
}    
}



/*STARTGAME*/

function startGame(){  

  mainMenu.classList.add('disattiva');
  let arrayShuffle = shuffle(ilMioArray);
  clearInterval(Interval);
  arrayComparison = [];
  let lista = document.querySelector('#griglia');
  lista.innerHTML ="";
  
  for(var i = 0; i < ilMioArray.length; i++){ 
    let carta = document.createElement('div');   
    let card = document.createElement('div');
    card.classList.add('card');
    document.querySelector('#griglia').appendChild(carta).appendChild(card);
    card.innerHTML = arrayShuffle[i];
    card.addEventListener('click', displayIcon);
    card.addEventListener("click", apriModal);
  }
    
  startTimer();
}

let ricominciabtn = document.querySelector('#button')

ricominciabtn.addEventListener('click', startGame)




/*------------------------------------------------*/
function displayIcon() {
  var card = document.getElementsByClassName("card");
  var cards = [...card];

  this.classList.toggle("show");
  arrayComparison.push(this);
  var len = arrayComparison.length;
    
  if (len === 2) {
        
    if (arrayComparison[0].innerHTML == arrayComparison[1].innerHTML) {
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


/*FINE PARTITA*/

function apriModal(){  
  console.log(modalita)
  console.log(carteTrovate)
  if (carteTrovate.length == ilMioArray.length){
    clearInterval(Interval);
    modal.classList.add("active");
    document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;

    
    if ( modalita == 'arcade mode' ){
      let testoModal = document.querySelector('#testoModal')
      testoModal.innerHTML = 'Congratulazioni! Hai completato il gioco prima dello scadere del tempo. Ti rimanevano ancora: '

    }  
  }
}

function loseModal(){
  clearInterval(Interval);
  modal.classList.add("active");
  testoModal.innerHTML = 'Mi dispiace, il tempo è scaduto!';
  tempoTrascorso.innerHTML ='';
}


let nuovaPartitabtn = document.querySelector('#button2')

function playAgain(){
  modal.classList.remove("active");
  startGame();
}

nuovaPartitabtn.addEventListener('click', playAgain)
  

/*TAKE IT EASY MODE*/

let freeModeBtn = document.querySelector('#freeMode');

function freeMode (){
  modalita = 'free mode';
  startGame()
}

freeModeBtn.addEventListener('click', freeMode);


/* TORNARE AL MENU PRINCIPALE */

let goBackBtn = document.querySelector('.goBack')

goBackBtn.addEventListener('click', function() {
  mainMenu.classList.remove('disattiva');
  clearInterval(Interval);
  timer.innerHTML = '';
})


/*ARCADE MODE*/

let arcadeModeBtn = document.querySelector('#arcadeMode')

function arcadeMode(){
  modalita = 'arcade mode';
  startGame();
}

arcadeModeBtn.addEventListener('click', arcadeMode)





  




