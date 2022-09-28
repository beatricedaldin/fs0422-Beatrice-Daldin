package consegna2809;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println(pariDispari("ciao"));
		System.out.println(pariDispari("tre"));
		
		System.out.println(annoBisestile(2024));
		System.out.println(annoBisestile(2020));
		System.out.println(annoBisestile(2022));
		
		int s;
		System.out.println("Inserisci un numero per il conto alla rovescia:");
		s = scanner.nextInt();
		System.out.println(contoAllaRovescia(s));
	}

	public static boolean pariDispari(String x) {
		boolean res = x.length()%2 == 0? true:false;
		return res;
	}
	public static boolean annoBisestile(int x) {
		boolean res = x%4 == 0? true:false;
		return res;
	}
	
	public static void stampaNum(int x) {
		switch(x) {
		case 0: 
			System.out.println("zero");
			break;
		case 1:
			System.out.println("uno");
			break;
		case 2: 
			System.out.println("due");
			break;
		case 3:
			System.out.println("tre");
			break;
		default:
			System.out.println("Errore:il numero è maggiore di tre!");
		
		
		}
	}
	
	
	public static int contoAllaRovescia(int x) {
		for(int i = x; i>=0; i--) {
			System.out.println(i);
		}
		
	}
}


