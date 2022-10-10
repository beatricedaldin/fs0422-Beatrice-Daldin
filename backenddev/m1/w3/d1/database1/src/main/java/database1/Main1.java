package database1;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import models.Student;

public class Main1 {
	
	public static void main (String[] args) {
 System.out.println("here");
 
 EntityManagerFactory emf = Persistence.createEntityManagerFactory("database1");
 EntityManager em = emf.createEntityManager();
 
 Student s = new Student("Mario", "Rossi", "5,6,7,8");
 EntityTransaction t = em.getTransaction();
 t.begin();
 em.persist(s);
 t.commit();
 em.close();
 emf.close();
	}
	
}
