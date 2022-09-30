package classes;

import java.util.Arrays;
import java.util.Scanner;

import interfacesAbstract.ElementoMultimediale;

public class Main {

	public static void main(String[] args) {
		String title;
        int startV;
        int startB;
        int time;
        int file;

        System.out.println("PLAYER");
        System.out.println("Creiamo insieme 5 file multimediali...");
        Scanner in = new Scanner(System.in);
        ElementoMultimediale[] arr = new ElementoMultimediale[5];
        for (int i = 0; i < 5; i++) {
            
            boolean flag = true;
            while (flag) {
                System.out.println("Che file multimediale vuoi inserire? (1 Immagine 2 Audio 3 Video)");
                file = in.nextInt();
                in.nextLine();
                switch (file) {

                case 1:
                    System.out.println("Inserisci il titolo dell'immagine:");
                    title = in.nextLine();
                    System.out.println("Inserisci un valore per la Luminosità di " + title + "...(da 0 a 100)");
                    startB = in.nextInt();
                    in.nextLine();
                    if(startB>=0 && startB<=100) {
                    arr[i] = new Image(title, startB);
                    flag = false;}
                    else {
                    System.out.println("Il valore inserito non è valido!");
                    System.out.println("Reinserisci un valore per la Luminosità di " + title + "...(DA 0 A 100)");
                    startB = in.nextInt();}
                    break;
                case 2:
                    System.out.println("Inserisci il titolo Audio:");
                    title = in.nextLine();
                    System.out.println("Inserisci un valore per il Volume di " + title + "...(da 0 a 100)");
                    startV = in.nextInt();
                    in.nextLine();
                    System.out.println("Inserisci durata(minuti) Audio " + title + "...");
                    time = in.nextInt();
                    in.nextLine();
                    if(startV>=0 && startV<=100) {
                    arr[i] = new Audio(title, startV, time);
                    flag = false;}
                    else {
                    	System.out.println("Il valore Volume inserito non è valido!");
                    	System.out.println("Reinserisci un valore per il Volume di " + title + "...(DA 0 A 100)");
                    startV = in.nextInt();
                    in.nextLine();}
                    break;
                case 3:
                    System.out.println("Inserisci il titolo Video...");
                    title = in.nextLine();
                    System.out.println("Inserire la durata(minuti) Video di " + title + "...");
                    time = in.nextInt();
                    in.nextLine();
                    System.out.println("Inserire la Luminosità Video di " + title + "...(da 0 a 100)");
                    startB = in.nextInt();
                    in.nextLine();
                    System.out.println("Inserire il Volume Video di " + title + "...(da 0 a 100)");
                    startV = in.nextInt();
                    in.nextLine();
                    if(startV>=0 && startV<=100 && startB>=0 && startB<=100) {
                    arr[i] = new Video(title, startB, startV, time);
                    flag = false;}
                    else {
                    	System.out.println("Uno dei due valori inseriti (Volume o Luminosità) non sono validi!");
                        System.out.println("Reinserisci un valore per la Luminosità di " + title + "...(DA 0 A 100)");
                        startB = in.nextInt();
                    	System.out.println("Reinserisci un valore per il Volume di " + title + "...(DA 0 A 100)");
                    startV = in.nextInt();
                    in.nextLine();
                    }
                    break;
                default:
                    System.out.println("Il tipo di file selezionato non esiste!");
                    break;
                }
                System.out.println("Hai inserito " + (i+1) + " file multimediali!");
            }
        }

        
        

        int choice = 0;
        while (true) {

            
            System.out.println("===MENU===");
            System.out.println("Scegli un elemento multimediale da 1-5, utilizza lo 0 per uscire, utilizza il 6 per vedere nel dettaglio tutti i tuoi file!");
            for (int i = 0; i < 5; i++) {

                System.out.println((i + 1) + "." + arr[i].getTitle());
            }
           
            System.out.println("=============");

            choice = in.nextInt();
            in.nextLine();
            if (choice == 0) { 
            	System.out.println("Uscito!");
            	System.exit(1);
            }
        else {

             ((Image) arr[choice - 1]).start();
             ((Audio) arr[choice - 1]).start();
             ((Video) arr[choice - 1]).start();
            System.out.println("Vuoi modificare qualcosa del file multimediale? [Y/N]");
            String yn = in.nextLine();
            if (yn.equals("Y"))
            ((Image) arr[choice - 1]).edit(in);
            ((Audio) arr[choice - 1]).edit(in);
            ((Video) arr[choice - 1]).edit(in);
        } 
    }
	}
}




