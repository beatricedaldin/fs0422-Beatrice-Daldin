package consegna2709;

import java.util.Arrays;

public class Main2 {

	public static void main(String[] args) {
		Sim sim1 = new Sim ( 3408935689L, new long[] {1234567890L, 9876543210L, 4567891230L, 3217894560L, 4569872310L});
		System.out.println(infoSim(sim1.num, sim1.credit, sim1.calls));
	}
	
	public static String infoSim(long num, int credit, long[] calls) {
		
		return "Il numero di telefono è " + num + ", " + "il credito residuo è di " + credit + " euro e le ultime cinque chiamate sono " + (Arrays.toString(calls)); 
	}

}





class Sim{
	
	long num;
	int credit;
	long[] calls;
	
	Sim( long num, long[] calls) {
		this.num = num;
		this.credit = 0;
		this.calls = calls;
	}
	
	
	
}
