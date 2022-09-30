package interfacesAbstract;

public abstract class ElementoMultimediale {
	protected String title;
	protected String type;
	
	public ElementoMultimediale(String t, String type){
		this.title = t;
		this.type= type;
	}
	

	public String getTitle() {
        return title;
    }

    public void setTitle(String t) {
        this.title = t;
    }
    public String getType() {
        return type;
    }

}
