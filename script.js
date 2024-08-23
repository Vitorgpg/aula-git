var nomeprod = prompt("Digite o nome do produto:");
var qtdeprod = prompt("Dígite a quantidade vendida do produto:");
var valor = parseFloat(prompt("Dígite o valor do produto:"));
var valortotal = valor * qtdeprod 
var desconto = parseFloat(prompt("Dígite o desconto:"));

var valorDesconto = (desconto / 100) * valortotal;
var total = valortotal - valorDesconto;

console.log("O Desconto total foi de: " + valorDesconto);
console.log("O valor total deu: " + total );