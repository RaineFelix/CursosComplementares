//Divisivel por 3 - fizz
//Divisível por 5 - Buzz
//Divisível por 5 e 3 - fizzBuzz
//Não Divisível por 5 nem 3 - retornar o número de entrada
// Se não for número, retornar que nãoa é um número


const resultado = fizzBuzz(15)
console.log(resultado)

function fizzBuzz(entrada) {
   if (typeof entrada != 'number'){
      return 'Nan';
   }
   else if (entrada % 3 == 0 && entrada % 5 == 0) {
      return 'FizzBuzz'
   }
   else if (entrada % 3 == 0) {
      return 'Fizz'
   }
   else if (entrada % 5 == 0) {
      console.log("Buzz")
   }
   else if (entrada % 3 != 0 && entrada % 5 != 0) {
      return entrada;
   }
   
}
