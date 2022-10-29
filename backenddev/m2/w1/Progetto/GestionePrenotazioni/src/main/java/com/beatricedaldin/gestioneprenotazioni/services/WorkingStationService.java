package com.beatricedaldin.gestioneprenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatricedaldin.gestioneprenotazioni.entities.WorkingStation;
import com.beatricedaldin.gestioneprenotazioni.repositories.WorkingStationRepo;


@Service
public class WorkingStationService {

	@Autowired
	WorkingStationRepo ws;
	
	public void saveWS(WorkingStation w) {
		ws.save(w);
	}
	
	public List<WorkingStation> getAllWS(){
		return ws.findAll();
	}
	
	public void deleteWSById(long id) {
		ws.deleteById(id);
	}
}
