package interfacesAbstract;

public abstract class ElementoMultimediale {
	protected String title;
	
	public ElementoMultimediale(String t){
		this.title = t;
	}
	

	public String getTitle() {
        return title;
    }

    public void setTitle(String t) {
        this.title = t;
    }

}
