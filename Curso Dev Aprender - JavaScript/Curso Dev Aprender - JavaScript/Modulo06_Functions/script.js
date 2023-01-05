//Tipos de referência - Functions

let corSite = "Azul"
function trocaCor(cor, tonalidade) {
    corSite = cor + " " + tonalidade;
}

console.log(corSite)
trocaCor("verde", "claro")
console.log(corSite)

//Tipo de função 1 - reaizar uma tarefa, não devolve nada
function dizerNome(){
    console.log('Raine')
};

dizerNome();

//Tipo de função 2 - Faz um cálculo e retorna algo
function multiplicarPorDois(valor){

    return valor*2;
}

let resultado = multiplicarPorDois(20);

console.log(resultado)