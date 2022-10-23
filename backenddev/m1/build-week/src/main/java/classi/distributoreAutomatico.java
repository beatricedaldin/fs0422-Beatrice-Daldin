package classi;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class distributoreAutomatico extends Rivenditore {
	
	@Enumerated(EnumType.STRING)
	@Column(name = "AttivitàDistributore")
	private AttivitàDistributori attività;
	
	public distributoreAutomatico() {
		super(TipoVenditore.DISTRIBUTORE);
		this.attività = AttivitàDistributori.ATTIVO;
		
	}
	
	public AttivitàDistributori getAttività() {
		return attività;
	}
	public void setAttività(AttivitàDistributori attività) {
		this.attività = attività;
	}
	
} 

