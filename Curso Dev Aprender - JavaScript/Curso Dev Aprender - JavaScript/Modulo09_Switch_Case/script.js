//Switch Case

//Criar 3 permissões:usuário comum, gerente e diretor

let permissao = "diretor"
switch (permissao) {
    case 'comum':
        console.log("Usuário Comum")
        break;

    case 'gerente':
        console.log("Usuário Gerente")
        break;

    case 'diretor':
        console.log("Usuário Diretor")
        break;

    default:
        console.log("Usuário não encontrado")
        break;
}