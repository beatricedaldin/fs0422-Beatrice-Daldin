type lot = number | string | undefined

interface ISmartphone {
    carica:number
    costoCallMinuto:number
    costoSms:number
    costoInternetSec:number
    setInternet(secondi:number):void
    setCarica(unaRicarica :number):void
    setChiamata(minutiDurata:number):void
    setMessaggio():void
    numero404():number
}
abstract class Users{
    nome : string | undefined
    protected email : lot
    constructor(nome : string | undefined, email : lot){
        this.nome = nome
        this.email = email
    }
}

class User  extends Users implements ISmartphone{
    carica: number
    costoCallMinuto:number
    costoSms:number
    costoInternetSec:number
    private password: lot
    constructor(carica: number, nome : string | undefined, email : lot, password : lot){
        super(nome, email)
        this.carica = carica
        this.costoCallMinuto = 0.20
        this.costoSms = 0.10
        this.costoInternetSec = 0.05
        this.password = password 
    }
    setCarica(unaRicarica : number){
      this.carica +=unaRicarica
    }
    setChiamata(minutiDurata: number){
        let costoChiamata = this.costoCallMinuto * minutiDurata
        this.carica -= costoChiamata
    }
    setMessaggio(){
        this.carica -= this.costoSms
    }
    numero404(): number {
        return this.carica
    }
    setInternet(secondi:number){
        let costoInternet = this.costoInternetSec * secondi
        this.carica -= costoInternet
    }
}

class Contacts extends Users {

    numTel:string | undefined
    constructor(nome : string | undefined, email : lot, numTel:string | undefined){
        super(nome, email)
        this.numTel = numTel
    }
}