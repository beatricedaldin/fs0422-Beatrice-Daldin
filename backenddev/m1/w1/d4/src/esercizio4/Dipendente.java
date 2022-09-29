package esercizio4;

public class Dipendente {
	private double stipendioBase;
	private int matricola;
	private double stipendio;
	double importoOrarioStraordinario; 
	private Livello livello;
	Dipartimento dipartimento;
	
	
	public Dipendente(int matricola, Dipartimento dipartimento){
		this.stipendio = stipendioBase;
		this.importoOrarioStraordinario = 30;
		this.livello = Livello.OPERAIO;
		this.matricola = matricola;
		this.dipartimento = dipartimento;
	}
	
	public Dipendente(double stipendioBase, int matricola, Livello livello, Dipartimento dipartimento, double importoOrarioStraordinario){
		this.stipendioBase = stipendioBase;
		this.matricola = matricola;
		this.stipendio = stipendioBase;
		this.importoOrarioStraordinario = importoOrarioStraordinario;
		this.livello = livello;
		this.dipartimento = dipartimento;
	}
	
	public String stampaDipendente() {
		return "Numero di matricola: " + matricola + "\n Stipendio Base: " + stipendioBase + "\n Stipendio: "+ stipendio + "\n Importo Orario Straordinario: " + importoOrarioStraordinario + "\n Livello: " + livello + "\n Dipartimento: " + dipartimento;
	}
	
	public Livello promuovi() {
		Livello ruolo = livello;
		
		switch (ruolo){
			case OPERAIO: 
				livello = Livello.IMPIEGATO;
				stipendioBase = stipendioBase*1.2;						
						break;
			case IMPIEGATO: 
				livello = Livello.QUADRO;
				stipendioBase = stipendioBase*1.5;
			break;
			case QUADRO: 
				livello = Livello.DIRIGENTE;
				stipendioBase = stipendioBase*2;
			break;
			case DIRIGENTE: 
				System.out.println("Il livello è già al massimo");
				break;
			
		};
		return livello;
	}
	
	public double calcolapaga(Dipendente x) {
		return stipendioBase;
	}
	public double calcolapaga(Dipendente x, int oreEx) {
		return stipendioBase+(importoOrarioStraordinario*oreEx);
	}
	
	public Livello getLivello() {
		return livello;
	}

	public int getMatricola() {
		return matricola;
	}

	public double getStipendio() {
		return stipendio;
	}

	public double getStipendioBase() {
		return stipendioBase;
	}
	
	
	
}
