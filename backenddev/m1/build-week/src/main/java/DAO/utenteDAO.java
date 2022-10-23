package DAO;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import classi.Biglietto;
import classi.Utente;

public class utenteDAO {
	
	private static final String b = "build-week";
	
	
	public static void save(Utente u1) {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
		
		EntityManager em = emf.createEntityManager();
		
		EntityTransaction t = em.getTransaction();
		
		
		//bigliettiEmessi.add(bigliettoSingolo);
		
		t.begin();
		em.persist(u1);
		t.commit();
		
		em.close();
		emf.close();
		
	}
	public static Utente cercaPerId(long id) {
	       
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        
		EntityManager em = emf.createEntityManager();

		Utente t= em.find(Utente.class, id);

        em.close();
        emf.close();

        if(!t.equals(null))
        return t;
        else {
            System.out.println("non ho trovato niente");
            return null;
            
        }
        
	}
    public static void delete(Utente u) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        t.begin();

        em.remove(u);

        t.commit();

        em.close();
        emf.close();

    }
}
