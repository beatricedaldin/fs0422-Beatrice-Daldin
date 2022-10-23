package classi;


import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Tram extends Automezzo{
	 int capienza = 60;
	 
	 public Tram() {}
}
