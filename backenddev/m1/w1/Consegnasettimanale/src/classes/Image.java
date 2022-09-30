package classes;

import java.util.Scanner;

import interfacesAbstract.Brightness;
import interfacesAbstract.ElementoMultimediale;

public class Image extends ElementoMultimediale implements Brightness {
	private int brightness;
	
	
	public Image(String title, int b, String type){
		super(title, type);
		this.brightness = b;
		
	}
	public String getType() {
		return this.type;
	}
	public String toString() {
		return "{"+type+ " : "+ title+" luminosità: "+ brightness+"}";
	}

	@Override
	public void brighter() {
		if(brightness<100) {
		brightness++;
		}else { System.out.println("La luminosità è al massimo");}
		
	}

	@Override
	public void darker() {
		if(brightness>0) {
		brightness--;
		}else {
			System.out.println("La luminosità è al minimo");
		}
		
	}

	
	
	public void edit(Scanner in)
    {
		 	String b;
	        System.out.println("Aumenta o Diminuisci la Luminosità di " + getTitle()+ " [+/-]");
	        b = in.nextLine();
	        switch(b) {
	        case "+": 
	        	brighter();
	        	break;
	        case "-":
	        	darker();
	        	break;
	        default:
	        	System.out.println("Il valore inserito non è valido!");
	        	break;
	        }
    }

    public void show() {
        String ast = "";
        for (int i = 0; i < this.brightness; i++) {
            ast += "*";
        }
        System.out.println(getTitle() + " " + ast);
   
        
    }
    public void start()
    {
        show();
    }

}
