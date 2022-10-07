package Classes;

public abstract class Catalogue {
	protected long isbn;
	protected String title;
	protected int year;
	protected int pages;
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
