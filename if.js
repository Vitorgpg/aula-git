var nota1 = parseInt(prompt("Dígite a nota de Língua Portuguesa:"));
var nota2 = parseInt(prompt("Dígite a nota de Matemática:"));
var nota3 = parseInt(prompt("Dígite a nota de História"));
var media = (nota1 + nota2 + nota3) / 3;

media = media.toFixed(1);

if (media >= 7) {
    console.log("Sua nota é: " + media);
    console.log("Parabéns! sua nota ficou acima da média!");
} else { 
    console.log("Sua nota é: " + media);
    console.log("Estude mais!");
}

