oggi=new Date();
var xmas=new Date(oggi.getFullYear(), 11, 25);
if (oggi.getMonth()==11 && oggi.getDate()>25) 
{
xmas.setFullYear(xmas.getFullYear()+1); 
}  
var ungiorno=1000*60*60*24;
document.querySelector('.timer').innerHTML=(Math.ceil((xmas.getTime()-oggi.getTime())/(ungiorno))+
" giorni a Natale!");