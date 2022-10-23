package classi;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="utenti")

public class Utente {
	
	
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String Nome;
	
	private String Cognome;
	
	@OneToOne(cascade=CascadeType.PERSIST)
	private Tessera tessera;
	
public Utente(String n, String c, Tessera t) {
		this.Nome = n;
		this.Cognome = c;
		this.tessera = t;
	}
public Utente() {}

public long getId_utente() {
	return id;
}
public void setId_utente(long id_utente) {
	this.id = id_utente;
}
public String getNome() {
	return Nome;
}
public void setNome(String nome) {
	Nome = nome;
}
public String getCognome() {
	return Cognome;
}
public void setCognome(String cognome) {
	Cognome = cognome;
}
public Tessera getTessera() {
	return tessera;
}
public void setTessera(Tessera tessera) {
	this.tessera = tessera;
}
}
