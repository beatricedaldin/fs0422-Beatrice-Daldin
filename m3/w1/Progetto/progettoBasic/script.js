"use strict";
class FirstUser {
    constructor(carica, nChiamate) {
        this.carica = carica;
        this.nChiamate = nChiamate;
        this.costoPerMinuto = 0.20;
    }
    setCarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    setChiamata(minutiDurata) {
        let costoChiamata = this.costoPerMinuto * minutiDurata;
        this.carica -= costoChiamata;
        this.nChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNChiamate() {
        return this.nChiamate;
    }
    setAzzeraChiamate() {
        this.nChiamate = 0;
    }
}
class SecondUser {
    constructor(carica, nChiamate) {
        this.carica = carica;
        this.nChiamate = nChiamate;
        this.costoPerMinuto = 0.20;
    }
    setCarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    setChiamata(minutiDurata) {
        let costoChiamata = this.costoPerMinuto * minutiDurata;
        this.carica -= costoChiamata;
        this.nChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNChiamate() {
        return this.nChiamate;
    }
    setAzzeraChiamate() {
        this.nChiamate = 0;
    }
}
class ThirdUser {
    constructor(carica, nChiamate) {
        this.carica = carica;
        this.nChiamate = nChiamate;
        this.costoPerMinuto = 0.20;
    }
    setCarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    setChiamata(minutiDurata) {
        let costoChiamata = this.costoPerMinuto * minutiDurata;
        this.carica -= costoChiamata;
        this.nChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNChiamate() {
        return this.nChiamate;
    }
    setAzzeraChiamate() {
        this.nChiamate = 0;
    }
}
let carlo = new FirstUser(15, 0);
carlo.setCarica(50);
carlo.setChiamata(10);
carlo.setChiamata(15);
console.log('Il Saldo di Carlo è di ' + carlo.numero404() + ' €');
console.log('Carlo ha effettuato ' + carlo.getNChiamate() + ' chiamate');
let deborah = new SecondUser(10, 5);
console.log('Deborah ha già effettuato ' + deborah.getNChiamate() + ' chiamate');
deborah.setAzzeraChiamate();
deborah.setChiamata(50);
deborah.setCarica(30);
deborah.setChiamata(15);
console.log('Il Saldo di Deborah è di ' + deborah.numero404() + ' €');
console.log('Deborah ha effettuato ' + deborah.getNChiamate() + ' chiamate');
let giorgio = new ThirdUser(0, 0);
giorgio.setCarica(10);
giorgio.setChiamata(5);
console.log('Il Saldo di Giorgio è di ' + giorgio.numero404() + ' €');
console.log('Giorgio ha effettuato ' + giorgio.getNChiamate() + ' chiamate');
//# sourceMappingURL=script.js.map