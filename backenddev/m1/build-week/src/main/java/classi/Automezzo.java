package classi;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import java.util.Set;

import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)

public class Automezzo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Enumerated(EnumType.STRING)
	private StatoServizio stato;
	
	@OneToMany(mappedBy = "automezzo")
	private Set<Biglietto> biglietti;
	
	@ManyToOne
	private Viaggio viaggio;
	
	public Automezzo() {}
	
	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public StatoServizio getStato() {
		return stato;
	}

	public void setStato(StatoServizio stato) {
		this.stato = stato;
	}

	public Set<Biglietto> getBiglietti() {
		return biglietti;
	}

	public void setBiglietti(Set<Biglietto> biglietti) {
		this.biglietti = biglietti;
	}

	public Viaggio getViaggio() {
		return viaggio;
	}

	public void setViaggio(Viaggio viaggio) {
		this.viaggio = viaggio;
	}

	
	
}
