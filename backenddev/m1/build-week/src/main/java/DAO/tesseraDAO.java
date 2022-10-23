package DAO;

import java.time.LocalDateTime;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.criteria.Root;

import classi.Tessera;
import classi.Utente;

public class tesseraDAO {

	private static final String b = "build-week";
	
	
	public static void save(Tessera t1) {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
		
		EntityManager em = emf.createEntityManager();
		
		EntityTransaction t = em.getTransaction();
		
		
		//bigliettiEmessi.add(bigliettoSingolo);
		
		t.begin();
		em.persist(t1);
		t.commit();
		
		em.close();
		emf.close();
		
	}
	public static Tessera cercaPerId(long id) {
	       
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        
		EntityManager em = emf.createEntityManager();

		Tessera t= em.find(Tessera.class, id);

        em.close();
        emf.close();

        if(!t.equals(null))
        return t;
        else {
            System.out.println("non ho trovato niente");
            return null;
            
        }
        
	}
    public static void delete(Tessera u) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();

        t.begin();

        em.remove(u);

        t.commit();

        em.close();
        emf.close();

    }
    
    public static void rinnovoTessera(long id){

        EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        EntityManager em = emf.createEntityManager();
        EntityTransaction t = em.getTransaction();
           CriteriaBuilder cb = em.getCriteriaBuilder();
           t.begin();

        CriteriaUpdate<Tessera> update = cb.createCriteriaUpdate(Tessera.class);

        Root tesseraroot = update.from(Tessera.class);

    update.set("rinnovo",  LocalDateTime.now().plusYears(1) );
     update.where(cb.equal(tesseraroot.get("id_tessera"), id));
     em.createQuery(update).executeUpdate();

     t.commit();

     em.close();
     emf.close();

    }
}
