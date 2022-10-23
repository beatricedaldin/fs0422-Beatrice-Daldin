package DAO;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import classi.Automezzo;
import classi.Biglietto;

public class automezzoDAO {
private static final String b = "build-week";
	
	
	public static void save(Automezzo au1) {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
		
		EntityManager em = emf.createEntityManager();
		
		EntityTransaction t = em.getTransaction();
		
		
		//bigliettiEmessi.add(bigliettoSingolo);
		
		t.begin();
		em.persist(au1);
		t.commit();
		
		em.close();
		emf.close();
		
	}

	public static Automezzo cercaPerId(long id) {
       
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        
		EntityManager em = emf.createEntityManager();

		Automezzo t= em.find(Automezzo.class, id);

        em.close();
        emf.close();

        if(!t.equals(null))
        return t;
        else {
            System.out.println("non ho trovato niente");
            return null;
            
        }
        
	}
        public static void delete(Automezzo e) {
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
