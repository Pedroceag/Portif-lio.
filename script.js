let num1;
let num2;
let resultado;
let parouimpar

num1 = Number(window.prompt("Digite aqui o primeiro numero"));
num2 = Number(window.prompt("Digite o segundo numero"));

resultado = num1 + num2;


parouimpar = resultado % 2;

if(parouimpar == 0) {
    alert("O número " + resultado + "e par"); 
} else {
    alert("O número " + resultado + "e impar")

}


if(resultado > 10)  {
    alert("o número " + resultado + " é maior do que 10");
} else  {
    alert ("o número " + resultado + " é menor ou igual a que 10");
}
