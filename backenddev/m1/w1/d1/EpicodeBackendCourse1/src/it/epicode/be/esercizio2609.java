package it.epicode.be;

public class esercizio2609 {
	public static void main (String[] args)
	{	
		
		System.out.println(concatStringhe("x", "y", "z"));
		System.out.println(perimetroRettangolo(5.6f, 7.3f));
		System.out.println(pariDispari(5));
		System.out.println(pariDispari(2));
		System.out.println(areaTriangolo(5,10));
		System.out.println(areaTriangoloErone(5, 7,8));
		
	}
	
	public static String concatStringhe(String word1, String word2, String word3) {
		
		return (word1+word2+word3) +" "+  (word3+word2+word1);
	}
	
	public static float perimetroRettangolo(float latoCorto, float latoLungo) {
		return (latoCorto+latoLungo)*2;
	}
	public static String pariDispari(int x) {
		if (x%2 == 0) {return "il numero è pari";} else {return "il numero è dispari";}
	}
	public static float areaTriangolo(float base, float altezza) {
		return (base*altezza)/2;
	}
	public static float areaTriangoloErone(float lato1, float lato2, float lato3) {
		float semiPer = (lato1+lato2+lato3)/2;
		return (float) Math.sqrt(semiPer*(semiPer-lato1)*(semiPer-lato2)*(semiPer-lato3));
	}
}
