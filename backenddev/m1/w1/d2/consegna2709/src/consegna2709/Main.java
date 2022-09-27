package consegna2709;

public class Main {

	public static void main(String[] args) {
		
		Rettangolo rettangolo1 = new Rettangolo(5,10);
		Rettangolo rettangolo2 = new Rettangolo (6,12);
		Rettangolo rettangolo3 = new Rettangolo (7,14);
		System.out.println(stampaRettangolo(rettangolo3.area(), rettangolo3.perimetro()));
		System.out.println(stampaDueRettangoli(rettangolo1.area(), rettangolo1.perimetro(), rettangolo2.area(), rettangolo2.perimetro()));
		

	}
	
	public static String stampaRettangolo(float area, float perimetro) {
		
		return "L'area è " + area + " e il perimetro è " + perimetro;
	}
	public static String stampaDueRettangoli(float area, float perimetro, float area2, float perimetro2) {
		System.out.println(stampaRettangolo(area, perimetro));
		System.out.println(stampaRettangolo(area2, perimetro2));
		return "La somma delle due aree è " + (area+area2) + " e la somma dei due perimetri è " + (perimetro+perimetro2);
	}
	
}


class Rettangolo {
	
	float base;
	float altezza;
	
	Rettangolo(float base, float altezza){
		this.base = base;
		this.altezza = altezza;
	}
	
	float area() {
		return this.base*this.altezza;
	}
	float perimetro() {
		return (this.base+this.altezza)*2;
	}
	
	
}

