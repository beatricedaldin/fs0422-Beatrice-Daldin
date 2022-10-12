import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import models1.Cat;
import models1.Dog;

public class main {
	
	public static final String pu = "esercizio1210";

	public static void main(String[] args) {
		

	}
	
	public static void s1() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(pu);
		EntityManager em = emf.createEntityManager();
		EntityTransaction t = em.getTransaction();
		
		Dog d1 = new Dog("Pippo", 5, "Gianfranco");
		Dog d2 = new Dog ("Birillo", 3, "Filippo");
		Cat c1 = new Cat ("Gomitolo", 1, 3);
		Cat c2 = new Cat ("Birba", 10, 5);
		em.persist(d1);
		em.persist(d2);
		em.persist(c1);
		em.persist(c2);
		
		t.commit();
		em.close();
		emf.close();
	}

}
