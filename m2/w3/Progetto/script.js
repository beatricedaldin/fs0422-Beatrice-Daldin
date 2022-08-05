const apiUrl = 'users.json';

fetch(apiUrl)
.then(res => res.json())
.then(res => {

    let table = document.createElement('table');
    let tHead = document.createElement('thead');
    let tBody = document.createElement('tbody');
    document.body.append(table);
    table.append(tHead, tBody);

    

    


    for(let user of res){
        let userKeys = Object.keys(user)
        let lenghtUser = Object.keys(user).length;
        let userVal = Object.values(user);
        let row = document.createElement('tr')
        tBody.append(row)


        for(i=0; i<lenghtUser; i++){
           
            let td = document.createElement('td')
            td.innerHTML = userVal[i]
            row.append(td)
        }

       
    }
    
    
})
    
    
    
    
        
   

