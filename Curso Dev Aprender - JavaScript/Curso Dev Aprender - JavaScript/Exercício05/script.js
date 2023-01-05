//receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou ímpar

exibirTipo(10);

function exibirTipo(numero){
 for(let i = 0; i < numero ; i++){

   if (i % 2 == 0){

      console.log(i + " Par")

   } 
   else {
      
      console.log(i + " Impar")

   }

 }
   
}