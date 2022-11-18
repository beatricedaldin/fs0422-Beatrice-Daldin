package com.beatricedaldin.gestionedispositivi.entities;

import java.util.List;

import javax.persistence.*;


import lombok.Data;

@Data
@Entity
@Table(name="utenti")

public class Utente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long Id;
	String nome;
	String cognome;
	String username;
	String email;
	
	@OneToMany  
	(mappedBy = "utente")
	List <Dispositivo> dispositivo;
	
}
