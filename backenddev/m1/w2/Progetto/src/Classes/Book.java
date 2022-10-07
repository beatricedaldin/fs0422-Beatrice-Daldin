package Classes;

public class Book extends Catalogue {
	
	public String author;
	public String genre; 

	public Book(String title, int year, int pages, String author, String genre) {
		super(title, year, pages);
		this.author= author;
		this.genre=genre;
	}
	
	public String getAuthor() {
		return this.author;
	}
	
	public String toString() {
		return "*ISBN: " + this.isbn + " Title: " + this.title + " Author: " + this.author + " Genre: " + this.genre + " Year: " + this.year + " Pages: " + this.pages +";";
 	}

}
