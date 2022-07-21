let aggiungiIc = document.querySelector('#aggiungi');
let toDoContainer = document.querySelector('#toDoContainer');
let impegni = document.querySelector('#impegni');

aggiungiIc.addEventListener('click', function(){
    let paragrafo = document.createElement('p');
    paragrafo.classList.add('paragrafo');
    paragrafo.innerHTML = impegni.value;
    toDoContainer.append(paragrafo);
    impegni.value = "";
    
    paragrafo.addEventListener('click', function(){
        toDoContainer.removeChild(paragrafo);
    })
    
})



let coseDaFare = document.querySelectorAll('.coseDaFare')

coseDaFare.forEach(cosa => { 
    cosa.addEventListener('click', function() {
        cosa.style.backgroundColor = 'red'
      });
      cosa.addEventListener('dblclick', function() {
        cosa.style.backgroundColor = 'transparent'
        
      });
    
})

