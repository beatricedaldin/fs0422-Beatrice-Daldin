package classi;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
public abstract class Biglietto {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id_biglietto;
		
		
		private LocalDate dataEmissione;
		
		@ManyToOne
		//@JoinColumn(name="id_biglietto")
		private Rivenditore rivenditore;
		
		@ManyToOne
		private Automezzo automezzo;
		
		

		public Biglietto(Rivenditore rivenditore, Automezzo automezzo) {
			this.rivenditore = rivenditore;
			this.automezzo = automezzo;
			this.dataEmissione = LocalDate.now();
		}
		public Biglietto() {}

		public long getId_biglietto() {
			return id_biglietto;
		}

		public void setId_biglietto(long id_biglietto) {
			this.id_biglietto = id_biglietto;
		}

		public LocalDate getDataEmissione() {
			return dataEmissione;
		}

		public void setDataEmissione(LocalDate dataEmissione) {
			this.dataEmissione = dataEmissione;
		}

		public Rivenditore getRivenditore() {
			return rivenditore;
		}

		public void setRivenditore(Rivenditore rivenditore) {
			this.rivenditore = rivenditore;
		}

		public Automezzo getAutomezzo() {
			return automezzo;
		}

		public void setAutomezzo(Automezzo automezzo) {
			this.automezzo = automezzo;
		}
		
		
		
}
