let factorial = 10;
let resultado = 1; 
while (factorial > 1) {
    if(factorial < 0){
        break;
    }
    if (factorial > 1){

        resultado = factorial* resultado;
        factorial--;
    }

  
    
}
console.log(resultado);