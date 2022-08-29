let container = document.querySelector('#container')
let arrCol = ['black', 'maroon', 'tomato', 'orange', 'green', 'violet', 'blue', 'purple', 'olive', 'brown', 'red', 'lime', 'teal', 'aqua', 'indigo', 'magenta']

fetch(apiUsers)
    .then(res => res.json())
    .then(users => {
            
        for(let user of users){
            
            let post = document.createElement('div')
            post.classList.add('post')
            let p1 = document.createElement('p')
            p1.classList.add('nameStyle')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            p3.classList.add('dateStyle')
            
            
            p1.innerHTML = user.name + ' says: '
            p2.innerHTML =  user.review 
            p3.innerHTML = user.date
            let randNumCol = Math.floor(Math.random()*(arrCol.length))
            let color = arrCol[randNumCol]
            p1.style.color = color
            
            let btnDlt = document.createElement('button');
            btnDlt.classList.add('btn','btn-danger','text-dark');
            btnDlt.innerHTML = 'Delete'
            btnDlt.addEventListener('click',() => {
                deleteUser(user.id, post)
            })

            let btnUpdate = document.createElement('a')
            btnUpdate.classList.add('btn','btn-warning');
            btnUpdate.innerHTML = 'Update'
            btnUpdate.href = 'guestbookupdate.html?id='+user.id

            post.append(p1, p2, p3, btnDlt, btnUpdate)
            container.append(post)
            
        }
        
    })

