// IF...ELSE

//Se a hora estiver entre as 6:00 até 12:00, exiba "Bom dia"
//Se a hora estiver entre 12:00 até 18:00, exiba "Boa tarde"
//Se não, exiba "Boa Noite"

const hora = new Date().toLocaleTimeString()
console.log("Hora atual:", hora);

if (hora > 6 && hora < 12) {
    console.log("Bom dia")
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde")
}
else {

    console.log("Boa noite")

}