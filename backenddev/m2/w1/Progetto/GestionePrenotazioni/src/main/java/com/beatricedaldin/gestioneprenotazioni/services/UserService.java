package com.beatricedaldin.gestioneprenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatricedaldin.gestioneprenotazioni.entities.User;
import com.beatricedaldin.gestioneprenotazioni.repositories.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo ur;
	
	public void saveCar(User u) {
		ur.save(u);
	}
	
	public List<User> getAllUsers(){
		return ur.findAll();
	}
	
	public void deleteUserById(long id) {
		ur.deleteById(id);
	}
}
