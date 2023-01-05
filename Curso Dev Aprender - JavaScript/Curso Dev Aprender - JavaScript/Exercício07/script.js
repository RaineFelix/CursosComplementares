//criar uma função somar que retorna a soma dos multiplos de 3 e 5

// multiplos de 3 - 3, 6, 9
// multiplos de 5 - 5, 10

//resultado = somar os multiplos 

somar(10)
function somar(numero, Mult3, Mult5) {
   Mult3 = 0
   Mult5 = 0

   for (let i = 0; i <= numero; i++) {
      if (i % 3 == 0) {

         Mult3 += i

      } else if (i % 5 == 0) {

         Mult5 += i

      }
   }
   console.log(`A soma dos múltiplos de 3 de 1 a 10 é ${Mult3}`)
   console.log(`A soma dos múltiplos de 5 de 1 a 10 é ${Mult5}`)
   console.log(`A soma total dos múltiplos de 3 e 5 é`, Mult3 + Mult5)
}



