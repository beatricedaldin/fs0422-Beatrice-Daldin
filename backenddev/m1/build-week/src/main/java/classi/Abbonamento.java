package classi;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ManyToAny;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@Data
@NoArgsConstructor
@AllArgsConstructor

//@DiscriminatorColumn("abbonamenti")
public class Abbonamento extends Biglietto{
    
//	@GeneratedValue(strategy = GenerationType.IDENTITY)



	@ManyToOne
	@JoinColumn(name = "tesseraId")
	private Tessera tessera;
	
	@Enumerated(EnumType.STRING)
	private Periodicità periodicità;

	public Abbonamento() {
		
	}

	public Abbonamento(Rivenditore rivenditore, Automezzo automezzo) {
		super(rivenditore, automezzo);
		
	}
	
	// trovare un modo per calcolare la validità
	
	public Tessera getTessera() {
		return tessera;
	}

	public void setTessera(Tessera tessera) {
		this.tessera = tessera;
	}

	public Periodicità getPeriodicità() {
		return periodicità;
	}

	public void setPeriodicità(Periodicità periodicità) {
		this.periodicità = periodicità;
	}

	
	
	
    
}
