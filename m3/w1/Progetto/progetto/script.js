"use strict";
//ONLOAD OROLOGIO & POWERON
let allTimeCont = document.getElementsByClassName('time');
let mainScreen = document.querySelector('#schermataMain');
let startScreen = document.querySelector('#schermataStart');
let powerOnScreen = document.querySelector('#schermataPwr');
let powerBtn = document.querySelector('#powerOn');
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
setInterval(function () {
    let d = new Date();
    let ora = addZero(d.getHours());
    let min = addZero(d.getMinutes());
    let sec = addZero(d.getSeconds());
    for (let timeContainer of allTimeCont) {
        timeContainer.innerHTML = ora + ":" + min + ":" + sec;
    }
}, 1000);
powerBtn === null || powerBtn === void 0 ? void 0 : powerBtn.addEventListener('click', function () {
    startScreen === null || startScreen === void 0 ? void 0 : startScreen.classList.add('active');
    powerOnScreen === null || powerOnScreen === void 0 ? void 0 : powerOnScreen.classList.add('disabled');
});
///////////////////////////////////////////////
//START
let inptPsw = document.querySelector('#psw');
let inptNome = document.querySelector('#nome');
let inptEmail = document.querySelector('#email');
let startBtn = document.querySelector('#start');
let saldoSim = document.querySelector('#saldoSim');
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', function () {
    if ((inptPsw === null || inptPsw === void 0 ? void 0 : inptPsw.value) == '' && (inptNome === null || inptNome === void 0 ? void 0 : inptNome.value) == '' && (inptEmail === null || inptEmail === void 0 ? void 0 : inptEmail.value) == '') {
        Swal.fire('Devi riempire i campi vuoti!');
    }
    else {
        location.reload();
        let psw = inptPsw === null || inptPsw === void 0 ? void 0 : inptPsw.value;
        let nomeUser = inptNome === null || inptNome === void 0 ? void 0 : inptNome.value;
        let email = inptEmail === null || inptEmail === void 0 ? void 0 : inptEmail.value;
        let saldo = saldoSim === null || saldoSim === void 0 ? void 0 : saldoSim.value;
        let user = new User(Number(saldo), nomeUser, email, psw);
        localStorage.setItem("user", JSON.stringify(user) || "");
    }
});
let owner = JSON.parse(localStorage.getItem('user') || "");
let user = new User(owner.carica, owner.nome, owner.email, owner.password);
Object.assign(user, owner);
console.log(user);
//Con l'addeventlistener non funzionava
function showPsw() {
    if ((inptPsw === null || inptPsw === void 0 ? void 0 : inptPsw.type) === "password") {
        inptPsw.type = "text";
    }
    else {
        inptPsw.type = "password";
    }
}
if (owner) {
    mainScreen === null || mainScreen === void 0 ? void 0 : mainScreen.classList.add('active');
    powerOnScreen === null || powerOnScreen === void 0 ? void 0 : powerOnScreen.classList.add('disabled');
}
////////////////////////////////////////////////////
///////SETTINGS
let setBtn = document.querySelector('#settings');
let setScreen = document.querySelector('#schermataSettings');
let goBackBtns = document.getElementsByClassName('goBack');
let resetBtn = document.querySelector('#reset');
let rechargeScreen = document.querySelector('#schermataRicarica');
setBtn === null || setBtn === void 0 ? void 0 : setBtn.addEventListener('click', function () {
    mainScreen === null || mainScreen === void 0 ? void 0 : mainScreen.classList.remove('active');
    setScreen === null || setScreen === void 0 ? void 0 : setScreen.classList.add('active');
});
for (let goBackBtn of goBackBtns) {
    goBackBtn === null || goBackBtn === void 0 ? void 0 : goBackBtn.addEventListener('click', function () {
        location.reload();
    });
}
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', function () {
    Swal.fire({
        title: 'Sei sicuro?',
        text: "Questa azione è irreversibile: perderai ogni dato contenuto in questo telefono!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ripristina'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            location.reload();
        }
    });
});
let nomeWidget = document.querySelector('#nomeWidget');
let creditoResiduo = document.querySelector('#creditoResiduo');
nomeWidget.innerHTML = 'Ciao, ' + user.nome;
creditoResiduo.innerHTML = 'Il tuo credito residuo è di ' + user.carica + ' €';
//////////////////////////////////////////////////
//////////RUBRICA&AGGIUNGICONTATTI
let rubrica = document.querySelector('#rubrica');
let addressScreen = document.querySelector('#schermataChiamate');
let appendoCont = document.querySelector('#listaContatti');
let addContacts = document.querySelector('#schermataRubrica');
let calls = document.querySelector('#call');
rubrica === null || rubrica === void 0 ? void 0 : rubrica.addEventListener('click', function () {
    addContacts === null || addContacts === void 0 ? void 0 : addContacts.classList.add('active');
    mainScreen === null || mainScreen === void 0 ? void 0 : mainScreen.classList.remove('active');
});
calls === null || calls === void 0 ? void 0 : calls.addEventListener('click', function () {
    addressScreen === null || addressScreen === void 0 ? void 0 : addressScreen.classList.add('active');
    mainScreen === null || mainScreen === void 0 ? void 0 : mainScreen.classList.remove('active');
});
let contact1 = new Contacts('Mamma', 'mamma@gmail.com', '123467890');
let contact2 = new Contacts('Marco', 'marcof@gmail.com', '0987654321');
let contact3 = new Contacts('Maria Lavoro', 'mariak@gmail.com', '6543210987');
let arr = [];
arr.push(contact1, contact2, contact3);
for (let item of arr) {
    let post = document.createElement('div');
    post.classList.add('post');
    let p1 = document.createElement('p');
    p1.classList.add('cNome');
    let p2 = document.createElement('p');
    p1.classList.add('cTel');
    let callBtn = document.createElement('button');
    callBtn.classList.add('callBtn');
    callBtn.innerHTML = `<i class="fa-solid fa-phone"></i>`;
    p1.innerHTML = item.nome;
    p2.innerHTML = item.numTel;
    post.append(p1, p2, callBtn);
    appendoCont === null || appendoCont === void 0 ? void 0 : appendoCont.append(post);
}
/*let arrPost : HTMLCollectionOf<Element> = document.getElementsByClassName('post')
console.log(arrPost)
console.log(arr)

let addNome : HTMLInputElement | null = document.querySelector('#addNome')
let addEmail : HTMLInputElement | null = document.querySelector('#addEmail')
let addTel : HTMLInputElement | null = document.querySelector('#addTel')
let add : HTMLButtonElement | null = document.querySelector('#add')


add?.addEventListener('click', function():void{
    let addContact : Contacts = new Contacts(addNome?.value, addEmail?.value, addTel?.value)
    arr.push(addContact)
    console.log(arr)
    addNome!.value = ''
    addEmail!.value = ''
    addTel!.value = ''
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Hai aggiunto un nuovo contatto!',
        showConfirmButton: false,
        timer: 1500
      })
})*/
/////////////////////////////////////////////////////
//CHIAMATE
let callBtns = document.getElementsByClassName('callBtn');
for (let btn of callBtns) {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
        if (user.carica > 0) {
            let minsCall = Math.floor((Math.random() * 60) - 1);
            user.setChiamata(minsCall);
            owner.carica = parseFloat(user.carica.toFixed(2));
            localStorage.setItem('user', JSON.stringify(owner));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'La tua chiamata di ' + minsCall + ' minuti ' + 'è terminata!',
                showConfirmButton: false,
                timer: 2500
            });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Il tuo credito residuo non è sufficiente!'
            });
        }
    });
}
//////////////////////////////////////////////////
////////RICARICA
let goToR = document.querySelector('#ricarica');
let rechargeBtn = document.querySelector('#unaRicarica');
let inptRecharge = document.querySelector('#inptRicarica');
goToR === null || goToR === void 0 ? void 0 : goToR.addEventListener('click', function () {
    mainScreen === null || mainScreen === void 0 ? void 0 : mainScreen.classList.remove('active');
    rechargeScreen === null || rechargeScreen === void 0 ? void 0 : rechargeScreen.classList.add('active');
});
rechargeBtn === null || rechargeBtn === void 0 ? void 0 : rechargeBtn.addEventListener('click', function () {
    user.setCarica(Math.floor(Number(inptRecharge === null || inptRecharge === void 0 ? void 0 : inptRecharge.value)));
    creditoResiduo.innerHTML = 'Il tuo credito residuo è di ' + user.carica + ' €';
    inptRecharge.value = '';
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Hai effettuato una ricarica!',
        showConfirmButton: false,
        timer: 1500
    });
    owner.carica = user.carica;
    localStorage.setItem('user', JSON.stringify(owner));
    console.log(owner);
});
///////////////////////////////////////////////////
//////////MESSAGGI
let sms = document.querySelector('#sms');
let textScreen = document.querySelector('#schermataMessaggi');
let addText = document.querySelector('#send');
let chat = document.querySelector('#him');
let textMessage = document.querySelector('#textMessage');
let arrFrasi = ['Ciao!', 'Qui piove, da Te?', `Come è andato il colloquio?`, `Hai visto l'ultima puntata?`, 'Salve!', 'Buongiorno', 'Birretta?', 'Come stai?', `Com'è andata ieri sera?`, 'Sei viva?', 'Pizza?', `Stasera vai all'allenamento?`];
let randSent = document.getElementsByClassName('sent');
sms === null || sms === void 0 ? void 0 : sms.addEventListener('click', function () {
    mainScreen === null || mainScreen === void 0 ? void 0 : mainScreen.classList.remove('active');
    textScreen === null || textScreen === void 0 ? void 0 : textScreen.classList.add('active');
    for (let sent of randSent) {
        let randNumSent = Math.floor(Math.random() * (arrFrasi.length));
        let sentence = arrFrasi[randNumSent];
        sent.innerHTML = sentence;
    }
});
addText === null || addText === void 0 ? void 0 : addText.addEventListener('click', function () {
    if (user.carica > 0) {
        let chatRow = document.createElement('div');
        chatRow.classList.add('flexTextIcs');
        let text = document.createElement('p');
        text.classList.add('text');
        text.innerHTML = textMessage.value;
        let delX = document.createElement('p');
        delX.classList.add('ics');
        delX.innerHTML = '+';
        chatRow.append(delX, text);
        chat === null || chat === void 0 ? void 0 : chat.append(chatRow);
        textMessage.value = '';
        delX.addEventListener('click', function () {
            chat === null || chat === void 0 ? void 0 : chat.removeChild(chatRow);
        });
        user.setMessaggio();
        owner.carica = parseFloat(user.carica.toFixed(2));
        localStorage.setItem('user', JSON.stringify(owner));
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Il tuo credito residuo non è sufficiente!'
        });
    }
});
//////////////////////////////////////////////////
////////INTERNET
let intBtn = document.querySelector('#internet');
let intScreen = document.querySelector('#schermataInternet');
intBtn === null || intBtn === void 0 ? void 0 : intBtn.addEventListener('click', function () {
    timer();
    mainScreen === null || mainScreen === void 0 ? void 0 : mainScreen.classList.remove('active');
    intScreen === null || intScreen === void 0 ? void 0 : intScreen.classList.add('active');
    let secondi = 0;
    function timer() {
        setTimeout(function () {
            secondi++;
            let secondis = document.querySelector('#secondis');
            user.carica--;
        }, 1000);
    }
    owner.carica = parseFloat(user.carica.toFixed(2));
    localStorage.setItem('user', JSON.stringify(owner));
});
