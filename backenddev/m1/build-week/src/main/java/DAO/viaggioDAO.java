package DAO;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import classi.Viaggio;



public class viaggioDAO {
	
private static final String b = "build-week";
	
	
	public static void save(Viaggio v) {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
		
		EntityManager em = emf.createEntityManager();
		
		EntityTransaction t = em.getTransaction();
		
		
		t.begin();
		em.persist(v);
		t.commit();
		
		em.close();
		emf.close();
		
	}

	public static Viaggio cercaPerId(long id) {
       
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        
		EntityManager em = emf.createEntityManager();

		Viaggio t= em.find(Viaggio.class, id);

        em.close();
        emf.close();

        if(!t.equals(null))
        return t;
        else {
            System.out.println("non ho trovato niente");
            return null;
            
        }
        
	}
        public static void delete(Viaggio e) {
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
