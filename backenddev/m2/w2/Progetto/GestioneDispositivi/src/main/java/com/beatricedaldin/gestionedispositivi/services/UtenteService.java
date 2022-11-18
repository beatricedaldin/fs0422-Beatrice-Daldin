package com.beatricedaldin.gestionedispositivi.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatricedaldin.gestionedispositivi.entities.Utente;
import com.beatricedaldin.gestionedispositivi.repositories.UtenteRepo;


@Service
public class UtenteService {
	
	@Autowired
	UtenteRepo ur;
	
	 public Iterable<Utente> getAll() {
	        return ur.findAll();
	    }
	    public void addUtente(Utente u) {
	        ur.save(u);
	    }
	    public Optional<Utente> getById(long id) {
	        return ur.findById(id);
	    }
	    public void deleteById(long id) {
	        ur.deleteById(id);
	    }

	    public Optional<Utente> getByName(String u){
	        return ur.findByUsername(u);
	    }

}
