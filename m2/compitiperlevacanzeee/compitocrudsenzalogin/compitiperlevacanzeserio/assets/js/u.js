const apiUsers = 'http://localhost:3000/users'
let params = new URLSearchParams(location.search)
let userId = params.get('id')
let btnUpdate = document.querySelector('#update')
let btnGoBack = document.querySelector('#goback')

fetch(apiUsers+'/'+userId)
.then(res => res.json())
.then(user => {
    let nameForm = document.querySelector('#name')
    let reviewForm = document.querySelector('#review')
    let dateForm = document.querySelector('#date')
    nameForm.value = user.name
    reviewForm.value = user.review
    dateForm.value = user.date
})



btnUpdate.addEventListener('click',function(e){
    e.preventDefault();

    let nameForm = document.querySelector('#name')
    let reviewForm = document.querySelector('#review')
    let dateForm = document.querySelector('#date')

    let user = {
        name: nameForm.value,
        review: reviewForm.value,
        date: dateForm.value
    }

    let options = {
        method: 'PUT',
        body: JSON.stringify(user),
        headers:{
            "content-type":"application/json"
        }
    }
    
    fetch(apiUsers+'/'+userId,options)
    .then(res => res.json())
    .then(res => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Review Updated',
            text:`${res.name} review has been updated`,
            showConfirmButton: false,
            timer: 3000
        }).then(() =>{
            location.href = 'guestbook.html'
        })
    })
})

btnGoBack.addEventListener('click', function(){
    location.href = 'guestbook.html'
})