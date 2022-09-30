package classes;

import java.util.Scanner;

import interfacesAbstract.Brightness;
import interfacesAbstract.ElementoMultimediale;
import interfacesAbstract.Volume;

public class Video extends ElementoMultimediale implements Brightness, Volume {
	private int brightness;
	private int volume;
	private int time;
	final protected String type;
	
	public Video(String title, int b, int v, int t){
    	super(title);
    	this.brightness = b;
    	this.volume=v;
    	this.time=t;
    	this.type = "video";
    }
	public String getType() {
		return this.type;
	}


	@Override
	public void volumeUp() {
		if(volume<100) {
		volume++;
		}else {
			System.out.println("Il volume è al massimo");
		}
		
	}

	@Override
	public void volumeDown() {
		if(volume>0) {
			volume--;}
		else {
			System.out.println("Il volume è al minimo");
		}
		
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
	        String v;
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

	        System.out.println("Aumenta o Diminuisci il Volume di " + getTitle()+ " [+/-]");
	        v = in.nextLine();
	        switch(v) {
	        case "+": 
	        	volumeUp();
	        	break;
	        case "-":
	        	volumeDown();
	        	break;
	        default:
	        	System.out.println("Il valore inserito non è valido!");
	        	break;
	        }
	        
	    }

	    public void play() {
	        String ast = ""; 
	        String escl = ""; 
	        String time = "";
	        for (int i = 0; i < brightness; i++) {
	            ast += "*";
	        }
	        for (int i = 0; i < volume; i++) {
	            escl += "!";
	        }
	        for (int i = 0; i < this.time; i++) {
	            time += getTitle();
	        }
	        System.out.println(time + " " + escl + " " + ast);
	    }
	    
	    public void start()
	    {
	        play();
	    }
	

}
