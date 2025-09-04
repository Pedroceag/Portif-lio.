let mostraHTML = document.getElementById("mostraHTML")
let numero = 0
let num_adiv = 0

numero = parseInt(Math.random() *101);

function tenta() {
    let frase

    num_adiv = Number(window.prompt("Digite um numero de 1 a 100"));

  
    
    frase = mostraHTML.innerHTML += `<p>Voce escolheu ${num_adiv}.</p>`

    console.log(numero);


    if(num_adiv > numero) {
        mostraHTML.innerHTML = `<p>Voce escolheu ${num_adiv}. Meu número é Menor</p>`
        
    } else {
        mostraHTML.innerHTML = `<p>Voce escolheu ${num_adiv}. Meu número é Maior</p>`
    }

    if(num_adiv == numero) {
        mostraHTML.innerHTML = `<p>Parabens voce ganhou!</p>`
    }
}