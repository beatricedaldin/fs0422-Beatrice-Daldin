package com.beatricedaldin.gestionedispositivi.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatricedaldin.gestionedispositivi.entities.Dispositivo;
import com.beatricedaldin.gestionedispositivi.repositories.DispositivoRepo;

@Service
public class DispositivoService {
	
	@Autowired
	DispositivoRepo dr;
	
	 public void addUser(Dispositivo d) {
	        dr.save(d);
	    }
	 
	 public Optional<Dispositivo> getById(long id) {
	        return dr.findById(id);
	    }
	 
	 public void deleteById(long id) {
	        dr.deleteById(id);
	    }

}
