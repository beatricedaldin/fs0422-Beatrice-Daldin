import java.time.LocalDate;

import DAO.automezzoDAO;
import DAO.bigliettoDAO;
import DAO.rivenditoreDAO;
import DAO.tesseraDAO;
import DAO.utenteDAO;
import DAO.viaggioDAO;
import classi.Abbonamento;
import classi.Autobus;
import classi.Automezzo;
import classi.BigliettoSingolo;
import classi.Periodicità;
import classi.Rivenditore;
import classi.RivenditoreAutorizzato;
import classi.StatoServizio;
import classi.Tessera;
import classi.TipoVenditore;
import classi.Tram;
import classi.Utente;
import classi.Viaggio;
import classi.Zona;
import classi.distributoreAutomatico;

public class main {

	public static void main(String[] args) {
		
		
//		
//	Utente u = new Utente();
//	u.setNome("Gino");
//	utenteDAO.save(u);	
//		Utente u1 = utenteDAO.cercaPerId(1);
//		Tessera t = new Tessera();
//	t.setUtente(u1);
//	tesseraDAO.save(t);
		
//		System.out.println(u1);
		
//		Tessera t1 = tesseraDAO.cercaPerId(1);
//		u1.setTessera(t1);
//		utenteDAO.save(u1);
		
//		testSetUtente("Carla", "Cosa");		
//testSetViaggio(Zona.CENTRO, Zona.OSPEDALE);
//testSetAutobus(StatoServizio.ATTIVO);
//testSetTram(StatoServizio.ATTIVO);
//testSetViaggio(Zona.SCUOLA, Zona.CENTRO);
//testSetRivenditoreAutorizzato();
//testSetdistributoreAutomatico();
//testSetAbbonamento(Periodicità.MENSILE, 1, 1);
//testSetUtente("Loktar", "Ogar");
//testSetAbbonamento(Periodicità.SETTIMANALE, 2, 2);
//testSetBigliettoSingolo(2,1);
		
//	bigliettoDAO.updateAbbonamentoRinnovoSettimanale(1);
	

		
	}
	
	public static void testSetUtente(String n, String c) {
		Utente u = new Utente ();
		u.setNome(n);
		u.setCognome(c);
		Tessera t = new Tessera();
		t.setEmissione(LocalDate.now());
		t.setScadenzaTessera(LocalDate.now().plusYears(1));
		t.setUtente(u);
		u.setTessera(t);
		utenteDAO.save(u);
		
	}
	
	public static void testSetViaggio(Zona p, Zona a) {
		Viaggio v1 = new Viaggio();
		v1.setPartenza(p);
		v1.setArrivo(a);
		viaggioDAO.save(v1);
		
	}
	
	public static void testSetAutobus(StatoServizio s) {
		Autobus a = new Autobus();
		a.setStato(s);
//		a.setViaggio(v);
		automezzoDAO.save(a);
		
	}
	
	public static void testSetTram(StatoServizio s) {
		Tram t = new Tram();
		t.setStato(s);
//		t.setViaggio(v);
		automezzoDAO.save(t);
		
	}
	
	public static void testSetRivenditoreAutorizzato() {
		RivenditoreAutorizzato r = new RivenditoreAutorizzato();
		r.setTipoVenditore(TipoVenditore.RIVENDITORE);
		rivenditoreDAO.save(r);
	}
	public static void testSetdistributoreAutomatico() {
		distributoreAutomatico d = new distributoreAutomatico();
		d.setTipoVenditore(TipoVenditore.DISTRIBUTORE);
		rivenditoreDAO.save(d);
	}
	
	public static void testSetBigliettoSingolo(long id, long idRiv) {
		Automezzo a = automezzoDAO.cercaPerId(id);
		Rivenditore r = rivenditoreDAO.cercaPerId(idRiv);
		BigliettoSingolo b = new BigliettoSingolo();
		b.setAutomezzo(a);
		b.setRivenditore(r);
		bigliettoDAO.save(b);
	}
	
	public static void testSetAbbonamento(Periodicità p, long id, long idRiv) {
		Rivenditore r = rivenditoreDAO.cercaPerId(idRiv);
		Tessera t = tesseraDAO.cercaPerId(id);
		Abbonamento a = new Abbonamento();
		a.setPeriodicità(p);
		a.setDataEmissione(LocalDate.now());
		a.setTessera(t);
		a.setRivenditore(r);
		bigliettoDAO.save(a);
	}
	
	public static void eliminaViaggio(long id) {
		Viaggio v = viaggioDAO.cercaPerId(id);
		viaggioDAO.delete(v);
	}
	
	public static void eliminaUtente(long id) {
		Utente u = utenteDAO.cercaPerId(id);
		utenteDAO.delete(u);
	}
	
	public static void eliminaAutomezzo(long id) {
		Automezzo a = automezzoDAO.cercaPerId(id);
		automezzoDAO.delete(a);
	}
	
	public static void eliminaTessera(long id) {
		Tessera t = tesseraDAO.cercaPerId(id);
		tesseraDAO.delete(t);
	}
	
	public static void eliminaRivenditore(long id) {
		Rivenditore r = rivenditoreDAO.cercaPerId(id);
		rivenditoreDAO.delete(r);
	}
	
	
	
	


}
