package DAO;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import classi.Biglietto;
import classi.Rivenditore;

public class rivenditoreDAO {
private static final String b = "build-week";
	
	
	public static void save(Rivenditore r1) {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
		
		EntityManager em = emf.createEntityManager();
		
		EntityTransaction t = em.getTransaction();
		
		
		//bigliettiEmessi.add(bigliettoSingolo);
		
		t.begin();
		em.persist(r1);
		t.commit();
		
		em.close();
		emf.close();
		
	}

	public static Rivenditore cercaPerId(long id) {
       
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        
		EntityManager em = emf.createEntityManager();

		Rivenditore t= em.find(Rivenditore.class, id);

        em.close();
        emf.close();

        if(!t.equals(null))
        return t;
        else {
            System.out.println("non ho trovato niente");
            return null;
            
        }
        
	}
        public static void delete(Rivenditore e) {
            EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
            EntityManager em = emf.createEntityManager();
            EntityTransaction t = em.getTransaction();

            t.begin();

            em.remove(e);

            t.commit();

            em.close();
            emf.close();

        }
}
