package com.beatricedaldin.gestioneprenotazioni.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.beatricedaldin.gestioneprenotazioni.entities.Building;
import com.beatricedaldin.gestioneprenotazioni.entities.User;
import com.beatricedaldin.gestioneprenotazioni.entities.WorkStationType;
import com.beatricedaldin.gestioneprenotazioni.entities.WorkingStation;

@Configuration
public class conf {
	@Bean
	@Scope("prototype")
	public User getUser1() {
		return User.builder()
				.username("uno")
				.fullName("Gino Paoli")
				.email("ginopaoli@me.com")
				.build();
	}
	
	@Bean
	@Scope("prototype")
	public User getUser2() {
		return User.builder()
				.username("macheneso")
				.fullName("Rita Ora")
				.email("ritaora@gmail.com")
				.build();
	}
	
	@Bean
	@Scope("prototype")
	public User getUser3() {
		return User.builder()
				.username("tirolumido")
				.fullName("Mel Babbiona")
				.email("babbiona@mail.com")
				.build();
	}
	
	@Bean
	@Scope("prototype")
	public Building getEd1() {
		return Building.builder()
				.address("Ah boh 5")
				.city("Firenze")
				.name("Blu")
				.build();
	}
	
	@Bean
	@Scope("prototype")
	public Building getEd2() {
		return Building.builder()
				.address("Viale dei Mille 1")
				.city("Siena")
				.name("Giallo")
				.build();
	}
	
	@Bean
	@Scope("prototype")
	public Building getEd3() {
		return Building.builder()
				.address("Via Enrico 2")
				.city("San Gimignano")
				.name("Blallo")
				.build();
	}
	
	@Bean
	@Scope("prototype")
	public WorkingStation getWorkStation1() {
		return WorkingStation.builder()
				.workstationtype(WorkStationType.MEETINGROOM)
				.building(getEd3())
				.description("uau")
				.maxoccupants(15)
				.build();
	}
	
	@Bean
	@Scope("prototype")
	public WorkingStation getWorkStation2() {
		return WorkingStation.builder()
				.workstationtype(WorkStationType.PRIVATE)
				.building(getEd1())
				.description("uau2")
				.maxoccupants(9)
				.build();
	}
	
	@Bean
	@Scope("prototype")
	public WorkingStation getWorkStation3() {
		return WorkingStation.builder()
				.workstationtype(WorkStationType.OPENSPACE)
				.building(getEd2())
				.description("uau3")
				.maxoccupants(30)
				.build();
	}
}
