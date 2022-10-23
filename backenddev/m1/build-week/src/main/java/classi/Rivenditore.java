package classi;

import java.util.Set;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)

public abstract class Rivenditore {
	
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToMany(mappedBy="rivenditore")
	private Set<Biglietto> bigliettiEmessi;
	
	@Enumerated(EnumType.STRING)
	private TipoVenditore tipoVenditore;
	
	public Rivenditore(TipoVenditore v) {
	}
	public Rivenditore() {}
	

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Set<Biglietto> getBigliettiEmessi() {
		return bigliettiEmessi;
	}
	public void setBigliettiEmessi(Set<Biglietto> bigliettiEmessi) {
		this.bigliettiEmessi = bigliettiEmessi;
	}
	public TipoVenditore getTipoVenditore() {
		return tipoVenditore;
	}
	public void setTipoVenditore(TipoVenditore tipoVenditore) {
		this.tipoVenditore = tipoVenditore;
	}
}
