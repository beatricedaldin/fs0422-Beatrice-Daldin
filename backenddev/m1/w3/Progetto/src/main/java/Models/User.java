package Models;

import java.time.LocalDate;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;



public class User {

//	- Nome
//	- Cognome
//	- Data di nascita
//	- Numero di tessera
	
	@Id
	@SequenceGenerator(name="utente_sequence", sequenceName="utente:sequence", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="utente_sequence")
	private int id;
	public String name;
	public String lastname;
	public LocalDate birthdate;
	public long cardNumber;
	
	
	
}
