package com.beatricedaldin.gestioneprenotazioni.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.beatricedaldin.gestioneprenotazioni.entities.Building;

@Repository
public interface BuildingRepo extends JpaRepository<Building, Long>{

}
