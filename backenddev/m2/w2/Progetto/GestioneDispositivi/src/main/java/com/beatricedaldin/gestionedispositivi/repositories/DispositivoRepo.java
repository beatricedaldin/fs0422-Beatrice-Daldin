package com.beatricedaldin.gestionedispositivi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.beatricedaldin.gestionedispositivi.entities.Dispositivo;


@Repository
public interface DispositivoRepo extends JpaRepository<Dispositivo, Long>{

}
