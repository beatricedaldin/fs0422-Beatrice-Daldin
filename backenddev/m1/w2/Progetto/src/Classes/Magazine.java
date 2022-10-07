package Classes;

public class Magazine extends Catalogue{
	
	public String periodicity;

	public Magazine(String title, int year, int pages, String p) {
		super(title, year, pages);
		this.periodicity=p;
		
	}
	public String toString() {
		return "#ISBN: " + this.isbn + " Title: " + this.title + " Year: " + this.year + " Pages: " + this.pages + " Periodicity: " + this.periodicity + ";";
 	}

}
