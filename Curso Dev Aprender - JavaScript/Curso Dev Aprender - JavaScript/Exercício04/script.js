//Velocidade Máxima de até 70
//a cada 5km acima do limite você ganha 1 ponto
//caso pontos > 12 a carteira é suspensa

verificarVelocidade(89)

function verificarVelocidade(velocidade, pontos, Max){
   Max = 70
   if (velocidade<=Max)
      console.log(`Velocidade: ${velocidade} - OK`)
   
   else{

      pontos = Math.floor((velocidade - Max)/5) 
      console.log(`Velocidade: ${velocidade} - Você perdeu ${pontos} pontos`)
   }
   if (pontos >= 12){
      console.log(`Pontos: ${pontos} - Carteira Suspensa`)
   }
}