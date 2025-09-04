let num1;
let num2;
let num3;
let resultado;
let passouounao;

num1 = Number(window.prompt("primeiro trimestre"));
num2 = Number(window.prompt("segundo trimestre"));
num3 = Number(window.prompt("terceiro trimestre"));


resultado = (num1 + num2 + num3) / 3;


alert("a media dos trimestres" + resultado)


if(resultado >= 60)  {
    alert("O numero "+ resultado + "passou")

} else {
    total = 60 - resultado
    alert("Você reprovou! Falatou essa quantidade de pontos para passar: " + total)
}