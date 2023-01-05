//Criar uma função que leia as propiedades de um objeto 
//exibir somente todas as propiedades q forem string

const filme = { 
   titulo: 'Harry Potter',
   ano: 2016,
   diretor: 'Mike Newell',
   personagem: 'Hermione'
}

lerPropiedades(filme);

function lerPropiedades(objeto){
   for (prop in objeto) {
      if (typeof objeto[prop] == 'string') {
         console.log(prop, objeto[prop]);
      } 
   }
}