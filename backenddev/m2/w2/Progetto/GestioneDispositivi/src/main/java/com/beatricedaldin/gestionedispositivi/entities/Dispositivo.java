package com.beatricedaldin.gestionedispositivi.entities;


import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name="dispositivi")
public class Dispositivo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long Id;
	
	@ManyToOne
	@JoinColumn(name = "utente_id")
	Utente utente;
	
	@Enumerated(EnumType.STRING)
	StatoDispositivo statodispositivo;
	
	@Enumerated(EnumType.STRING)
	TipoDispositivo td;
	

}
