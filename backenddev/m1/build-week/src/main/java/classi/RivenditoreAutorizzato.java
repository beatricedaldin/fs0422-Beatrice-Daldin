package classi;

import java.util.Set;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class RivenditoreAutorizzato extends Rivenditore{
	
	
	public RivenditoreAutorizzato() {
		super(TipoVenditore.RIVENDITORE);
	
	}
	
	
}
