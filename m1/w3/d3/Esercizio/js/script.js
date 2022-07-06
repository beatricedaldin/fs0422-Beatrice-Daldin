
/*let currentYear = 
prompt('In che anno siamo?')
let birthYear =
prompt('In che anno sei nato?')

        

    let yourAge = (currentYear, birthYear) => currentYear - birthYear;
    console.log(yourAge (currentYear, birthYear)) 
    */



    function yourAge(){
        let currentYear = document.querySelector('#birth').value
        let birthYear = document.querySelector('#year').value
        console.log(currentYear)
        console.log(birthYear)

        function drunk(){
            let res = document.querySelector ('#result')
            let age = currentYear - birthYear
            if(age >= 18){
                res.innerHTML = 'Non bere quando devi guidare!'
            }
            else{
                res.innerHTML = 'Non bere affatto!'
            }


        }

       
    }
    

