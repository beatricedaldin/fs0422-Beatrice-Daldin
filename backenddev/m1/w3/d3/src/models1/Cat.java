package models1;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Cat extends Animal{
	
	@Column(name="jump_height")
	private int jumpHeight;
	public Cat() {
		
	}
	public Cat (String name, int age, int jumpHeight) {
		super(name, age);
		jumpHeight=jumpHeight;
	}
}
