package models1;

import javax.persistence.Entity;

@Entity

public class Dog extends Animal{

	private String owner;
	public Dog() {
		
	}
	public Dog( String name, int age, String owner) {
		super(name, age);
		owner=owner;
		
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
}
