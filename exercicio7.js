let mostraHTML = document.getElementById("mostraHTML");

let numero = 0;

function aleatorio(){
    

    numero = parseInt(Math.random() * 101)

    mostraHTML.innerHTML += `<p>Número aleatório ${numero}!</p>`

    console.log(numero)

}

function zerar() {

    cliques = 0;
    
        mostraHTML.innerHTML = null;
        console.log(cliques);
}    