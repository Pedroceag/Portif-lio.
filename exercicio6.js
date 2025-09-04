let cliques = 0;
let mostraHTML = document.getElementById("mostraHTML");

    function contador(){

cliques++;

    mostraHTML.innerHTML = `<p> Numero de cliques: ${cliques}</p>`;
    console.log(cliques);

}

    function zerar() {

cliques = 0;

    mostraHTML.innerHTML = `<p> Numero de cliques: ${cliques}</p>`
    console.log(cliques);

}
