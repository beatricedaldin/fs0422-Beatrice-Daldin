package Models;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor

public abstract class Catalogue {
	
	public long isbn;
	protected String title;
	public int year;
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
		return isbn;
	}

	public void setIsbn(long isbn) {
		this.isbn = isbn;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}
}
