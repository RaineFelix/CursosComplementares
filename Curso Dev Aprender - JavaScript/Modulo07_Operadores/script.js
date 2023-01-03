/* Operadores Aritméticos  ( + , - , * , / , ** ) */
let salario = 20

console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(5 ** 5)

// (++, --)

let idade = 18
console.log(idade++)
console.log(idade)



/* Operadores de Atribuição ( = , += , -= ) */

let valor = 100
valor += valor
console.log(valor);



/* Operadores de Igualdade (==, ===) */

//Igualdade estrita

console.log(1 === '1') //comparando o valor e o tipo

//Igualdade Solta

console.log(1 == '1') //apenas compara valores, não compara os tipos



/* Operador Ternário - comparação  */

// Tem um cliente, caso tenha mais que 100 pontos é um cliente Premium. Se não, tipo comum

let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo)



/* Operadores Lógicos (&& - E, || - OU, ! - não) */

let MenorIdade = true
let AutorizacaoPais = false
//O && retorna TRUE se os dois valores forem verdadeiros
let criarContaBanco = MenorIdade && AutorizacaoPais
console.log(criarContaBanco)


let MaiorIdade = true
let possuiCarteiraTrabalho = false
//O || retorna TRUE se um ou dois valores forem verdadeiros
let podeAplicar = MaiorIdade || possuiCarteiraTrabalho;
console.log(podeAplicar)

let candidatoRecusado = !podeAplicar;
console.log('Candidato foi aceito? ', candidatoRecusado)


/* Operadores de Comparação não booleanas - */

//FALSE (undefined, null, 0, false, '', NaN - Not a Number)
//TRUE (Valores diferente de falso)

let corPersonalizada = '';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão

console.log(corPerfil)