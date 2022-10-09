package Classes;

public abstract class Catalogue {
	public long isbn;
	protected String title;
	public int year;
	protected int pages;
	public String author;
	static long id = 1;

	protected Catalogue(String title, int year, int pages) {
		this.isbn = id;
		id++;
		this.title = title;
		this.year=year;
		this.pages=pages;
	}
	
	public long getIsbn() {
		return this.isbn;
	}
	public int getYear() {
		return this.year;
	}
}
