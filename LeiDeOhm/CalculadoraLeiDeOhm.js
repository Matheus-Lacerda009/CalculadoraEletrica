let valores = [], unidades = ["V", "I", "R", ""], res, unidadeSelecionada;
for(let i = 0; i < 3; i++){
    valores.push(parseFloat(prompt("Insira o valor de " + unidades[i] + ":\nOBS: Insira uma letra para o valor a descobrir")));
}
unidades = ["V", "A", "Ohm", ""];
res = valores[1] * valores[2];
unidadeSelecionada = 0;
if(Number.isNaN(res)){
    res = valores[0] / valores[2];
    unidadeSelecionada = 1;
} if(Number.isNaN(res)){
    res = valores[0] / valores[1];
    unidadeSelecionada = 2;
} if(Number.isNaN(res)){
    res = "ERRO! Mais de um valor não foi identificado!"
    unidadeSelecionada = 3
}
if(res >= 10 ** 6){
    res /= 10 ** 6;
    unidades[unidadeSelecionada] = 'M' + unidades[unidadeSelecionada];
} else if(res >= 10 ** 3){
    res /= 10 ** 3;
    unidades[unidadeSelecionada] = 'K' + unidades[unidadeSelecionada];
}
console.log("Resultado: " + res + " " + unidades[unidadeSelecionada]);