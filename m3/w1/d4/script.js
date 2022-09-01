"use strict";
class AEBG {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return this.prezzoivainclusa * this.saldo / 100;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
fetch("Abbigliamento.json")
    .then(res => res.json())
    .then(vestiti => {
    console.log(vestiti);
    vestiti.map((x) => {
        let capoAbbigliamento = new AEBG(x.id, x.codprod, x.collezione, x.capo, x.modello, x.quantita, x.colore, x.prezzoivaesclusa, x.prezzoivainclusa, x.disponibile, x.saldo);
        console.log(capoAbbigliamento);
        console.log(capoAbbigliamento.getSaldoCapo());
        console.log(capoAbbigliamento.getAcquistoCapo());
    });
});
//# sourceMappingURL=script.js.map