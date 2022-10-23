package Models;

import javax.persistence.Entity;

@Entity

public class Magazine extends Catalogue{
	public Periodicity periodicity;

	public Magazine(String title, int year, int pages, Periodicity p) {
		super(title, year, pages);
		this.periodicity=p;
		
	}
	public String toString() {
		return "#ISBN: " + this.isbn + " Title: " + this.title + " Year: " + this.year + " Pages: " + this.pages + " Periodicity: " + this.periodicity + ";";
 	}
}
