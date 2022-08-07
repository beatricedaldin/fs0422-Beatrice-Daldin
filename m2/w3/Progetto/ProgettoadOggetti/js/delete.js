let goBackBtn = document.querySelector('#goBack')
goBackBtn.addEventListener('click', function(){
    location.href = 'index.html'
})

let deleteBtn = document.querySelector('#delete')
let parametri = new URLSearchParams(location.search);
let id = parametri.get('id')
console.log(id)

deleteBtn.addEventListener('click', function(id,utente){
    const apiUtenti = 'http://localhost:3000/utenti';
    
    console.log(utente)
    let options = {
        method: 'DELETE',
        headers:{
            "content-type":"application/json"
        }
    }
    
    fetch(apiUtenti+'/'+id,options)
    .then(res => res.json())
    .then(res => {
        utente.remove()
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Utente Eliminato',
            text:`L'utente è stato eliminato`,
            showConfirmButton: false,
            timer: 5000
        })
    })
})



