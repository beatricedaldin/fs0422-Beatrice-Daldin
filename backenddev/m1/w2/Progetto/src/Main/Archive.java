package Main;

import java.util.ArrayList;
import java.util.Scanner;

import Classes.Book;
import Classes.Catalogue;
import Classes.Magazine;
import Classes.Periodicity;

public class Archive {

	public static void main(String[] args) {
		ArrayList<Catalogue> catalogue = new ArrayList<Catalogue>();
		ArrayList<Book> b = new ArrayList<Book>();
		
		Scanner s = new Scanner(System.in);
		boolean x = true;
		while(x) {
			System.out.println("1.ADD A NEW BOOK");
			System.out.println("2.ADD A NEW MAGAZINE");
			System.out.println("3.DISPLAY ALL OF THEM");
			System.out.println("4.SEARCH");
			System.out.println("5.DELETE");
			try{ 
				
			switch(s.nextInt()) {
			case 1:
				
				System.out.println("Type the title:");
				String title = s.nextLine();
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
				catalogue.add(book);
				
			case 2:
				System.out.println("Type the title:");
				String t = s.nextLine();
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
			
			case 3:
				
				
				
			}
			catch(NumberFormatException nfe) {
				System.out.println("You should type a number...");
			}
			
	
		
		}

}
	
}
