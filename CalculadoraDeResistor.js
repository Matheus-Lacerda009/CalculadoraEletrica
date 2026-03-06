/*Inputs - Se são 4 ou 5 faixas;
Primeira faixa, segunda faixa, terceira faixa, quarta faixa e (dependendo) quinta faixa*/
let qtdFaixas = parseint(prompt("Insira a quantidade de faixas:")), faixas = [], i;
for(i = 0; i < qtdFaixas; i++){
    faixas.push(parseInt(prompt("Insira a cor da faixa:\n1 - Preto\n2 - Marrom\n3 - Vermelho\n4 - Laranja\n5 - Amarelo\n6 - Verde\n7 - Azul\n8 - Violeta\n9 - Cinza\n10 - Branco\n11 - Ouro\n12 - Prata\n13 - Branco:")));
    if(faixas[i] > 13 || faixas[i] < 1){
        alert("ERRO! Valor fora do esperado");
        i--;
        faixas.pop();
    }
}