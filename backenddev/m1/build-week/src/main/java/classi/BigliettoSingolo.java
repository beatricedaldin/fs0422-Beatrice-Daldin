package classi;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BigliettoSingolo extends Biglietto {
	
	private boolean vidimato = false;

	public BigliettoSingolo() {
	}

	public BigliettoSingolo(Rivenditore rivenditore, Automezzo automezzo) {
		super(rivenditore, automezzo);
		
	}
	

}
