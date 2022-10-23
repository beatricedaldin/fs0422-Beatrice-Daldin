package DAO;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.criteria.Root;

import classi.Abbonamento;
import classi.Biglietto;
import classi.BigliettoSingolo;

public class bigliettoDAO {
	
	private static final String b = "build-week";
	
	
	public static void save(Biglietto b1) {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
		
		EntityManager em = emf.createEntityManager();
		
		EntityTransaction t = em.getTransaction();
		
		t.begin();
		em.persist(b1);
		t.commit();
		
		em.close();
		emf.close();
		
	}

	public static Biglietto cercaPerId(long id) {
       
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
        
		EntityManager em = emf.createEntityManager();

		Biglietto t= em.find(Biglietto.class, id);

        em.close();
        emf.close();

        if(!t.equals(null))
        return t;
        else {
            System.out.println("non ho trovato niente");
            return null;
            
        }
        
	}
        public static void delete(Biglietto e) {
            EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
            EntityManager em = emf.createEntityManager();
            EntityTransaction t = em.getTransaction();

            t.begin();

            em.remove(e);

            t.commit();

            em.close();
            emf.close();

        }
        
        
        public static void updateBigliettoVidimato(long id){

            EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
            EntityManager em = emf.createEntityManager();
            EntityTransaction t = em.getTransaction();
               CriteriaBuilder cb = em.getCriteriaBuilder();
               t.begin();

            CriteriaUpdate<Biglietto> update = cb.createCriteriaUpdate(Biglietto.class);

           Root bigliettoroot = update.from(Biglietto.class);

            update.set("vidimato", true);
         update.where(cb.equal(bigliettoroot.get("id"), id));
         em.createQuery(update).executeUpdate();

         t.commit();

         em.close();
         emf.close();

        }
        
        public static void updateAbbonamentoRinnovoMensile(long nAbb){

            EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
            EntityManager em = emf.createEntityManager();
            EntityTransaction t = em.getTransaction();
               CriteriaBuilder cb = em.getCriteriaBuilder();
               t.begin();

            CriteriaUpdate<Abbonamento> update = cb.createCriteriaUpdate(Abbonamento.class);

            Root abbonamentoroot = update.from(Abbonamento.class);

            update.set("dataEmissione", LocalDateTime.now());
         update.where(cb.equal(abbonamentoroot.get("id"),nAbb));
         em.createQuery(update).executeUpdate();

         t.commit();

         em.close();
         emf.close();

        }
        
        
        public static void updateAbbonamentoRinnovoSettimanale(long id){

            EntityManagerFactory emf = Persistence.createEntityManagerFactory(b);
            EntityManager em = emf.createEntityManager();
            EntityTransaction t = em.getTransaction();
                CriteriaBuilder cb = em.getCriteriaBuilder();
                t.begin();

             CriteriaUpdate<Abbonamento> update = cb.createCriteriaUpdate(Abbonamento.class);

             Root abbonamentoroot = update.from(Abbonamento.class);

             update.set("dataEmissione", LocalDate.now());
         update.where(cb.equal(abbonamentoroot.get("id_biglietto"), id));
         em.createQuery(update).executeUpdate();

         t.commit();

         em.close();
         emf.close();

      }
        
        
    }
	
	


	
	
	

