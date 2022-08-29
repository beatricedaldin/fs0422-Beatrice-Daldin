let player1 : number = 25

let player2 : number = 87

let randomNum : number = Math.floor(Math.random () * (100-1) + 1);
console.log(randomNum);


if (player1 === randomNum) {
    console.log("Il giocatore uno ha vinto");
};

if (player2 === randomNum) {
    console.log("Il giocatore due ha vinto");
};

if (Math.abs(randomNum - player1) > Math.abs(randomNum - player2)) 
{console.log("Nessuno dei due ha vinto ma il giocatore due si è avvicinato di piu")};

if (Math.abs(randomNum - player2) > Math.abs(randomNum - player1))  
{console.log("Nessuno dei due ha vinto ma il giocatore uno si è avvicinato di piu")};


// switch (randomNum) {

// case  player1 == randomNum : (console.log("player1 ha vinto"))
// break;

// case 1 : player2 == randomNum;
// console.log("player2 ha vinto")
// break;

// case 2 : Math.abs(randomNum - player1) > Math.abs(randomNum - player2);
// console.log("Nessuno dei due ha vinto ma il giocatore due si è avvicinato di piu")
// break;

// case 3 : Math.abs(randomNum - player2) > Math.abs(randomNum - player1);
// console.log("Nessuno dei due ha vinto ma il giocatore uno si è avvicinato di piu")
// break;
// }
