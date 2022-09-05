"use strict";
class Users {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class User extends Users {
    constructor(carica, nome, email, password) {
        super(nome, email);
        this.carica = carica;
        this.costoCallMinuto = 0.20;
        this.costoSms = 0.10;
        this.costoInternetSec = 0.05;
        this.password = password;
    }
    setCarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    setChiamata(minutiDurata) {
        let costoChiamata = this.costoCallMinuto * minutiDurata;
        this.carica -= costoChiamata;
    }
    setMessaggio() {
        this.carica -= this.costoSms;
    }
    numero404() {
        return this.carica;
    }
    setInternet(secondi) {
        let costoInternet = this.costoInternetSec * secondi;
        this.carica -= costoInternet;
    }
}
class Contacts extends Users {
    constructor(nome, email, numTel) {
        super(nome, email);
        this.numTel = numTel;
    }
}
