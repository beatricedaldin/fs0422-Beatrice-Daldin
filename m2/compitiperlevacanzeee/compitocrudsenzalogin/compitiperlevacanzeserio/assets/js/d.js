function deleteUser(id,el){
    const apiUsers = 'http://localhost:3000/users'
    let options = {
        method: 'DELETE',
        headers:{
            "content-type":"application/json"
        }
    }

    fetch(apiUsers+'/'+id,options)
    .then(res => res.json())
    .then(res => {
      
        el.remove()
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Review deleted',
            text:`The review has been deleted`,
            showConfirmButton: false,
            timer: 3000
        })
    })
}