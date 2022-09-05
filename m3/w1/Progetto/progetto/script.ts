//ONLOAD OROLOGIO & POWERON

let allTimeCont: HTMLCollectionOf<Element> = document.getElementsByClassName('time')
let mainScreen: HTMLBodyElement | null = document.querySelector('#schermataMain')
let startScreen: HTMLBodyElement | null = document.querySelector('#schermataStart')
let powerOnScreen: HTMLBodyElement | null = document.querySelector('#schermataPwr')
let powerBtn: HTMLBodyElement | null = document.querySelector('#powerOn')


function addZero(i: number | string) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(function (): any {
    let d: Date = new Date()
    let ora: string | number = addZero(d.getHours())
    let min: string | number = addZero(d.getMinutes())
    let sec: string | number = addZero(d.getSeconds())

    for (let timeContainer of allTimeCont) {
        timeContainer.innerHTML = ora + ":" + min + ":" + sec;
    }
}, 1000)


powerBtn?.addEventListener('click', function (): void {
    startScreen?.classList.add('active')
    powerOnScreen?.classList.add('disabled')
})

///////////////////////////////////////////////

//START

let inptPsw: HTMLInputElement | null = document.querySelector('#psw')
let inptNome: HTMLInputElement | null = document.querySelector('#nome')
let inptEmail: HTMLInputElement | null = document.querySelector('#email')
let startBtn: HTMLButtonElement | null = document.querySelector('#start')
let saldoSim: HTMLInputElement | null = document.querySelector('#saldoSim')


startBtn?.addEventListener('click', function (): void {
    if (inptPsw?.value == '' && inptNome?.value == '' && inptEmail?.value == '') {
        Swal.fire('Devi riempire i campi vuoti!')
    } else {
        location.reload()
        let psw: lot = inptPsw?.value
        let nomeUser: string | undefined = inptNome?.value
        let email: lot = inptEmail?.value
        let saldo: string | undefined = saldoSim?.value
        let user: User = new User(Number(saldo), nomeUser, email, psw)
        localStorage.setItem("user", JSON.stringify(user) || "")

    }
})

let owner: object = JSON.parse(localStorage.getItem('user') || "")
let user: User = new User(owner.carica, owner.nome, owner.email, owner.password);
Object.assign(user, owner);
console.log(user)

//Con l'addeventlistener non funzionava
function showPsw() {
    if (inptPsw?.type === "password") {
        inptPsw.type = "text";
    } else {
        inptPsw!.type = "password";
    }
}

if (owner) {
    mainScreen?.classList.add('active')
    powerOnScreen?.classList.add('disabled')
}

////////////////////////////////////////////////////
///////SETTINGS

let setBtn: HTMLButtonElement | null = document.querySelector('#settings')
let setScreen: HTMLBodyElement | null = document.querySelector('#schermataSettings')
let goBackBtns: HTMLCollectionOf<Element> = document.getElementsByClassName('goBack')
let resetBtn: HTMLButtonElement | null = document.querySelector('#reset')
let rechargeScreen: HTMLBodyElement | null = document.querySelector('#schermataRicarica')


setBtn?.addEventListener('click', function (): void {
    mainScreen?.classList.remove('active')
    setScreen?.classList.add('active')
})

for (let goBackBtn of goBackBtns) {
    goBackBtn?.addEventListener('click', function (): void {
        location.reload()
    })
}

resetBtn?.addEventListener('click', function (): void {
    Swal.fire({
        title: 'Sei sicuro?',
        text: "Questa azione è irreversibile: perderai ogni dato contenuto in questo telefono!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ripristina'
    }).then((result: any): void => {
        if (result.isConfirmed) {
            localStorage.clear()
            location.reload()
        }
    })
})

let nomeWidget: HTMLBodyElement | null = document.querySelector('#nomeWidget')
let creditoResiduo: HTMLBodyElement | null = document.querySelector('#creditoResiduo')

nomeWidget!.innerHTML = 'Ciao, ' + user.nome
creditoResiduo!.innerHTML = 'Il tuo credito residuo è di ' + user.carica + ' €'


//////////////////////////////////////////////////
//////////RUBRICA&AGGIUNGICONTATTI

let rubrica: HTMLButtonElement | null = document.querySelector('#rubrica')
let addressScreen: HTMLBodyElement | null = document.querySelector('#schermataChiamate')
let appendoCont: HTMLBodyElement | null = document.querySelector('#listaContatti')
let addContacts: HTMLBodyElement | null = document.querySelector('#schermataRubrica')
let calls: HTMLButtonElement | null = document.querySelector('#call')

rubrica?.addEventListener('click', function (): void {
    addContacts?.classList.add('active')
    mainScreen?.classList.remove('active')
})
calls?.addEventListener('click', function (): void {
    addressScreen?.classList.add('active')
    mainScreen?.classList.remove('active')
})

let contact1: Contacts = new Contacts('Mamma', 'mamma@gmail.com', '123467890')
let contact2: Contacts = new Contacts('Marco', 'marcof@gmail.com', '0987654321')
let contact3: Contacts = new Contacts('Maria Lavoro', 'mariak@gmail.com', '6543210987')

let arr: object[] = []
arr.push(contact1, contact2, contact3)

for (let item of arr) {
    let post: HTMLDivElement = document.createElement('div')
    post.classList.add('post')
    let p1: HTMLParagraphElement = document.createElement('p')
    p1.classList.add('cNome')
    let p2: HTMLParagraphElement = document.createElement('p')
    p1.classList.add('cTel')
    let callBtn: HTMLButtonElement = document.createElement('button')
    callBtn.classList.add('callBtn')
    callBtn.innerHTML = `<i class="fa-solid fa-phone"></i>`
    p1.innerHTML = item.nome
    p2.innerHTML = item.numTel
    post.append(p1, p2, callBtn)
    appendoCont?.append(post)
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

let callBtns: HTMLCollectionOf<Element> = document.getElementsByClassName('callBtn')

for (let btn of callBtns) {
    btn?.addEventListener('click', function (): void {
        if (user.carica > 0) {
            let minsCall: number = Math.floor((Math.random() * 60) - 1)
            user.setChiamata(minsCall)
            owner.carica = parseFloat(user.carica.toFixed(2))
            localStorage.setItem('user', JSON.stringify(owner))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'La tua chiamata di ' + minsCall + ' minuti ' + 'è terminata!',
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Il tuo credito residuo non è sufficiente!'
            })
        }
    })
}


//////////////////////////////////////////////////
////////RICARICA

let goToR: HTMLButtonElement | null = document.querySelector('#ricarica')
let rechargeBtn: HTMLButtonElement | null = document.querySelector('#unaRicarica')
let inptRecharge: HTMLInputElement | null = document.querySelector('#inptRicarica')


goToR?.addEventListener('click', function (): void {
    mainScreen?.classList.remove('active')
    rechargeScreen?.classList.add('active')
})

rechargeBtn?.addEventListener('click', function (): void {
    user.setCarica(Math.floor(Number(inptRecharge?.value)))
    creditoResiduo!.innerHTML = 'Il tuo credito residuo è di ' + user.carica + ' €'
    inptRecharge!.value = ''
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Hai effettuato una ricarica!',
        showConfirmButton: false,
        timer: 1500
    })
    owner.carica = user.carica
    localStorage.setItem('user', JSON.stringify(owner))
    console.log(owner)
})

///////////////////////////////////////////////////
//////////MESSAGGI
let sms: HTMLButtonElement | null = document.querySelector('#sms')
let textScreen: HTMLBodyElement | null = document.querySelector('#schermataMessaggi')
let addText: HTMLInputElement | null = document.querySelector('#send')
let chat: HTMLDivElement | null = document.querySelector('#him')
let textMessage: HTMLInputElement | null = document.querySelector('#textMessage')
let arrFrasi: string[] = ['Ciao!', 'Qui piove, da Te?', `Come è andato il colloquio?`, `Hai visto l'ultima puntata?`, 'Salve!', 'Buongiorno', 'Birretta?', 'Come stai?', `Com'è andata ieri sera?`, 'Sei viva?', 'Pizza?', `Stasera vai all'allenamento?`]
let randSent: HTMLCollectionOf<Element> = document.getElementsByClassName('sent')

sms?.addEventListener('click', function (): void {
    mainScreen?.classList.remove('active')
    textScreen?.classList.add('active')
    for (let sent of randSent) {
        let randNumSent: number = Math.floor(Math.random() * (arrFrasi.length))
        let sentence: string = arrFrasi[randNumSent]
        sent.innerHTML = sentence
    }
})




addText?.addEventListener('click', function (): void {
    if (user.carica > 0) {

        let chatRow: HTMLDivElement = document.createElement('div')
        chatRow.classList.add('flexTextIcs')
        let text: HTMLParagraphElement = document.createElement('p')
        text.classList.add('text')
        text.innerHTML = textMessage!.value
        let delX: HTMLParagraphElement = document.createElement('p')
        delX.classList.add('ics')
        delX.innerHTML = '+'
        chatRow.append(delX, text)
        chat?.append(chatRow)
        textMessage!.value = ''

        delX.addEventListener('click', function (): void {
            chat?.removeChild(chatRow);
        })



        user.setMessaggio()
        owner.carica = parseFloat(user.carica.toFixed(2))
        localStorage.setItem('user', JSON.stringify(owner))

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Il tuo credito residuo non è sufficiente!'
        })
    }
})


//////////////////////////////////////////////////
////////INTERNET

let intBtn: HTMLButtonElement | null = document.querySelector('#internet')
let intScreen: HTMLBodyElement | null = document.querySelector('#schermataInternet')

intBtn?.addEventListener('click', function (): void {
    timer()
    mainScreen?.classList.remove('active')
    intScreen?.classList.add('active')

    let secondi: number = 0

    function timer(): void {
        setTimeout(function () {
            secondi++
            let secondis: HTMLBodyElement | null = document.querySelector('#secondis')

            user.carica--
        }, 1000)
    }


    owner.carica = parseFloat(user.carica.toFixed(2))
    localStorage.setItem('user', JSON.stringify(owner))

})



















