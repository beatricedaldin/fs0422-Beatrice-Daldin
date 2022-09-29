package esercizio4;

public class Main {


	public static void main(String[] args) {
		Dipendente dip1 = new Dipendente ( 1, Dipartimento.PRODUZIONE);
		Dipendente dip2 = new Dipendente ( 2,Dipartimento.PRODUZIONE);
		Dipendente dip3 = new Dipendente (2000, 3, Livello.IMPIEGATO, Dipartimento.AMMINISTRAZIONE, 35);
		Dipendente dip4 = new Dipendente (5000, 4, Livello.DIRIGENTE, Dipartimento.VENDITE, 50);
		System.out.println(dip1.stampaDipendente());
		System.out.println(dip2.stampaDipendente());
		System.out.println(dip3.stampaDipendente());
		System.out.println(dip4.stampaDipendente());
		
		dip1.promuovi();
		System.out.println(dip1.stampaDipendente());
		
		dip3.promuovi();
		System.out.println(dip3.stampaDipendente());

	}

}
