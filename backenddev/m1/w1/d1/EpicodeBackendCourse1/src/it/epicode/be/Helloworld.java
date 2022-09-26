package it.epicode.be;

import java.util.Arrays;

public class Helloworld {

public static void main (String[] args)
		{
		// Stampa a console  la frase
		System.out.println("This is my first Epicode Java Project!");
		System.out.println(moltiplica(10,5));
		System.out.println(concat("il numero è ", 7));
		
		System.out.println(Arrays.toString(inserisci("leone")));
		}

public static int moltiplica(int x, int y) {
	 
	
	return x*y;
}
public static String concat(String stringa, int num) {
	
	return stringa + num;
	
	
}

public static String[] inserisci( String i) {
	
	String arr[] = new String[5];
	arr[0] = "cane";
    arr[1] = "gatto";
    arr[2] = "topo";
    arr[3] = "elefante";
    arr[4] = "zebra";
   
	
    String[] out = {arr[0], arr[1], arr[2], i, arr[3], arr[4]};
    return out; 
}



}



