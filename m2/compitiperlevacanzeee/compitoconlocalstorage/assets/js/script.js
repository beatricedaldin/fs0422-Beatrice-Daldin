let submitBtn = document.querySelector('#submit')
let container = document.querySelector('#container')
let nameForm = document.querySelector('#name')
let reviewForm = document.querySelector('#review')
let arrCol = ['black', 'maroon', 'tomato', 'orange', 'green', 'violet', 'blue', 'purple', 'olive', 'brown', 'red', 'lime', 'teal', 'aqua', 'indigo', 'magenta']

submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let dateGuest = new Date()
    let reviewGuest = reviewForm.value + ' on ' + dateGuest.toLocaleString()
    let nameGuest = nameForm.value
    localStorage.setItem(nameGuest, reviewGuest)
    location.reload()
})


Object.keys(localStorage).forEach((key) => {
    let value = localStorage.getItem(key)
    console.log(value)
    console.log(key)
    let post = document.createElement('div')
    post.classList.add('post')
    let p1 = document.createElement('p')
    p1.classList.add('nameStyle')
    let p2 = document.createElement('p')
    p1.innerHTML = key + ' says: '
    p2.innerHTML =  value 
    post.append(p1, p2)
    container.append(post)
    let randNumCol = Math.floor(Math.random()*(arrCol.length))
    let color = arrCol[randNumCol]
    p1.style.color = color
})



