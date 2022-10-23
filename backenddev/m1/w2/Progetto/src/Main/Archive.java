package Main;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

import Classes.Book;
import Classes.Catalogue;
import Classes.Magazine;

public class Archive {

	public static void main(String[] args) {
		ArrayList<Catalogue> catalogue = new ArrayList<Catalogue>();
		ArrayList<Book> b = new ArrayList<Book>();
		
		Scanner s = new Scanner(System.in);
		boolean x = true;
		while(x) {
			System.out.println("1.ADD A NEW BOOK");
			System.out.println("2.ADD A NEW MAGAZINE");
			System.out.println("3.EXIT");
			System.out.println("4.SEARCH BY ISBN");
			System.out.println("5.SEARCH BY AUTHOR");
			System.out.println("6.SEARCH BY YEAR");
			System.out.println("7.DELETE");
			
				
			switch(s.nextInt()) {
			case 1:
				
				System.out.println("Type the title:");
				String title = s.nextLine();
				s.nextLine();
				System.out.println("Type the book's year:");
				int year = s.nextInt();
				s.nextLine();
				System.out.println("Type the total pages of the book:");
				int pages = s.nextInt();
				s.nextLine();
				System.out.println("Type the author:");
				String author = s.nextLine();
				System.out.println("Type the genre:");
				String genre = s.nextLine().toLowerCase();
				Book book = new Book(title, year, pages, author, genre);
				b.add(book);
				catalogue.add(book);
				
				continue;
				
			case 2:
				System.out.println("Type the title:");
				String t = s.nextLine();
				s.nextLine();
				System.out.println("Type the magazine's year:");
				int y = s.nextInt();
				s.nextLine();
				System.out.println("Type the total pages of the magazine:");
				int p = s.nextInt();
				s.nextLine();
				System.out.println("Type the periodicity(WEEKLY/MONTHLY/SEMIANNUAL):");
				String per =s.nextLine().toUpperCase();
				
				Magazine mag = new Magazine(t, y, p, per);
				catalogue.add(mag);
				continue;
			
			case 4:
				System.out.println("Type the ISBN you wanna search:");
				long isbn = s.nextLong();
				System.out.println(getBMbyISBN(isbn, catalogue));
				continue;
			
			case 5:
				System.out.println("Type the author you wanna search:");
				String a = s.nextLine();
				s.nextLine();
				System.out.println(getBookByAuthor(a, b));
				continue;
				
			case 6:
				System.out.println("Type the year you wanna search:");
				int ye = s.nextInt();
				s.nextLine();
				System.out.println(getBMbyYear(ye, catalogue));
				continue;
			case 7:
				System.out.println("Type the isbn of the book or magazine you wanna delete:");
				long isbnC = s.nextLong();
				catalogue.removeIf(i -> i.isbn == isbnC);
				System.out.println("Item deleted!");
				continue;
				
			case 3:
				System.out.println("Terminated");
				x = false;
				break;
			default:
				System.out.println("You should type one of those numbers...");
			}}
			
			
	
		

}
	
	public static Catalogue getBMbyISBN(long isbn, ArrayList<Catalogue> catalogue) {
		List<Catalogue> arr = catalogue.stream().filter(i -> i.isbn == isbn).collect(Collectors.toList());
		if(arr.size() > 0) {
			return arr.get(0);
		}
		System.out.println("Elemento non trovato");
		return null;
	}
	
	public static Catalogue getBMbyYear(int year, ArrayList<Catalogue> catalogue) {
		List<Catalogue> arr = catalogue.stream().filter(i -> i.year == year).collect(Collectors.toList());
		if(arr.size() > 0) {
			return arr.get(0);
		}
		System.out.println("Elemento non trovato");
		return null;
	}
	
	public static Catalogue getBookByAuthor(String author, ArrayList<Book> b) {
		List<Book> arr = b.stream().filter(i -> i.author == author).collect(Collectors.toList());
		if(arr.size() > 0) {
			return arr.get(0);
		}
		System.out.println("Elemento non trovato");
		return null;
	}
	
}
