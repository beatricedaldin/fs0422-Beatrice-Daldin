package com.beatricedaldin.gestioneprenotazioni.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.beatricedaldin.gestioneprenotazioni.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{

}
