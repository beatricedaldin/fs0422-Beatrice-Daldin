package com.beatricedaldin.gestioneprenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatricedaldin.gestioneprenotazioni.entities.Building;
import com.beatricedaldin.gestioneprenotazioni.repositories.BuildingRepo;

@Service
public class BuildingService {
	
	@Autowired
	BuildingRepo br;
	
	public void saveBuilding(Building b) {
		br.save(b);
	}
	
	public List<Building> getAllBuildings(){
		return br.findAll();
	}
	
	public void deleteBuildingById(long id) {
		br.deleteById(id);
	}

}
