package com.beatricedaldin.gestioneprenotazioni.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.beatricedaldin.gestioneprenotazioni.entities.WorkingStation;

@Repository
public interface WorkingStationRepo extends JpaRepository<WorkingStation, Long>{

}
