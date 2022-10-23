package classi;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="viaggio")

public class Viaggio {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToMany(mappedBy="viaggio")
	private Set<Automezzo> automezzi;
	
	@Enumerated(EnumType.STRING)
	private Zona partenza;
	@Enumerated(EnumType.STRING)
	private Zona arrivo;
	
//	private LocalTime orarioPartenza;
//	private LocalTime orarioArrivo;
	
	public Viaggio() {}

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Set<Automezzo> getAutomezzi() {
		return automezzi;
	}

	public void setAutomezzi(Set<Automezzo> automezzi) {
		this.automezzi = automezzi;
	}

	public Zona getPartenza() {
		return partenza;
	}

	public void setPartenza(Zona partenza) {
		this.partenza = partenza;
	}

	public Zona getArrivo() {
		return arrivo;
	}

	public void setArrivo(Zona arrivo) {
		this.arrivo = arrivo;
	}
	
}
