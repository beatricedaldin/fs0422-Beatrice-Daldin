const apiUsers = 'http://localhost:3000/users'

let submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let nameForm = document.querySelector('#name')
    let reviewForm = document.querySelector('#review')
    let date = new Date()
    let dateGuest = date.toLocaleString()
    let reviewGuest = reviewForm.value
    let nameGuest = nameForm.value

    let user = {
        name: nameGuest,
        review: reviewGuest,
        date: dateGuest
    }
    let options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            "content-type":"application/json"
        }
    }
    fetch(apiUsers,options)
    .then(res => res.json())
    .then(res => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New Review',
            text:`A new review just popped up in our Guestbook`,
            showConfirmButton: true,
            confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!'
        }).then((result) => {
            if (result.isConfirmed) {
              location.reload()
              
            }
        })

    })

    
})