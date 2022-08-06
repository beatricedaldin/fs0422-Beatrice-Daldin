const apiUrl = 'users.json';

fetch(apiUrl)
.then(res => res.json())
.then(res => {

    let table = document.createElement('table');
    table.classList.add('table')
    let tHead = document.createElement('thead');
    let tBody = document.createElement('tbody');
    let container = document.querySelector('#container');
    container.append(table);
    table.append(tHead, tBody);
    let userKeys = Object.keys(res[0])

    for( let key of userKeys){
        let th = document.createElement('th');
        th.classList.add('tableCaption')
        th.innerHTML = key;
        tHead.append(th);
    }

    for(let user of res){
    
        let row = document.createElement('tr')
        row.classList.add('row')
        tBody.append(row)
        
        for(let prop in user){
           
            let td = document.createElement('td');
            td.innerHTML = user[prop];
            row.append(td);

            if(prop == "profileURL"){
                
                td.innerHTML = '';
                let iconGend = document.createElement('img');
                iconGend.classList.add('icon')
                iconGend.src = user[prop];
                td.append(iconGend);
            }
           
        }
 
    }
   
})
    
    
    
    
        
   

