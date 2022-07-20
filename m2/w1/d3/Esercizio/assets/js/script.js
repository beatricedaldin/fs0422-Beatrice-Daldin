let cubo = document.querySelector('.cubo');
let radios = document.getElementsByClassName('.gira');
let frecciaD = document.querySelector('#destra');
let frecciaS = document.querySelector('#sinistra');
let i = 0;



function cambiaLatoD{
    if(i == 0){
      
        cubo.classList.add('.rdestra')
        i++
    }
    if(i == 1){
        cubo.classList.remove('.rdestra')
        cubo.classList.add('.rdietro')
        i++
        }
    if (i == 2){
        cubo.classList.remove('.rdietro')
        cubo.classList.add('.rsinistra')
        i++    
    }
    if(i == 3){
        cubo.classList.remove('.rsinistra')
        cubo.classList.add('.rfronte')
        i = 0
    }
}
  

// set initial side

frecciaD.addEventListener('click', cambiaLatoD);
frecciaS.addEventListener( 'click', cambiaLatoS);