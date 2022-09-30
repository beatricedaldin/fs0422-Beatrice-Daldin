package classes;

import java.util.Scanner;

import interfacesAbstract.ElementoMultimediale;
import interfacesAbstract.Volume;

public class Audio extends ElementoMultimediale implements Volume {
	private int volume;
	private int time;
	final protected String type;
	
	public Audio(String title, int v, int t){
		super(title);
		this.volume = v;
		this.time=t;
		this.type = "audio";
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


	
	
	public void edit(Scanner in) {
		  
        String v;
        System.out.println("Aumenta o Diminuisci il Volume di " + getTitle()+" [+/-}");
        v = in.nextLine();
        switch(v) {
        case "+": 
        	volumeUp();
        break;
        case "-":
        	volumeDown();
        	break;
        default:
        	System.out.println("Il valore inserito non è valido");
        	break;
        	}
        
        
    }

    public void play() {
        String escl = "";
        String time = "";
        for (int i = 0; i < volume; i++) {
            escl += "!";
        }
        for (int j = 0; j < this.time; j++) {
            time += getTitle();
        }
        System.out.println(time + " " + escl);
    }
    public void start()
    {
        play();
    }

}
