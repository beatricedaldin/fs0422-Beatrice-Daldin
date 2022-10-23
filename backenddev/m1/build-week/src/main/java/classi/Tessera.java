package classi;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name="tessera")
public class Tessera {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_tessera;
	
	@OneToOne
	private Utente utente;
	
	private LocalDate emissione;
	
	private LocalDate scadenzaTessera;
	
	public Tessera(Utente u) {
		this.utente = u;
		this.emissione = LocalDate.now();
		this.scadenzaTessera = LocalDate.now().plusYears(1);
		
	}
	public long getId_tessera() {
		return id_tessera;
	}
	public void setId_tessera(int id_tessera) {
		this.id_tessera = id_tessera;
	}
	public Utente getUtente() {
		return utente;
	}
	public void setUtente(Utente utente) {
		this.utente = utente;
	}
	public LocalDate getEmissione() {
		return emissione;
	}
	public void setEmissione(LocalDate emissione) {
		this.emissione = emissione;
	}
	public LocalDate getScadenzaTessera() {
		return scadenzaTessera;
	}
	public void setScadenzaTessera(LocalDate scadenzaTessera) {
		this.scadenzaTessera = scadenzaTessera;
	}
	public Tessera() {}

	public void rinnova() {

		if( LocalDate.now().compareTo(scadenzaTessera) < 0 ) {

			scadenzaTessera = scadenzaTessera.plusYears(1);

		} else {

			scadenzaTessera = LocalDate.now().plusYears(1);

		}

	}
}
