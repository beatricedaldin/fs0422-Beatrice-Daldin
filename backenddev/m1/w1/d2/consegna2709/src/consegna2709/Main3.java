package consegna2709;

import java.util.Date;

public class Main3 {

	public static void main(String[] args) {
		

	}

}

class Articolo{
	int codArt;
	String artName;
	double price;
	int artLeft;
	
	Articolo (int codArt, String artName, double price, int artLeft){
		this.codArt = codArt;
		this.artName = artName;
		this.price = price;
		this.artLeft = artLeft;
	}
}

class Cliente{
	int codCli;
	String name;
	String lastName;
	String email;
	Date regDate;
	
	Cliente(int codCli, String name, String lastName, String email, Date regDate){
		this.codCli = codCli;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.regDate = regDate;
	}

}

class Carrello{
	int cliAss;
	String[] articoli;
	
}
