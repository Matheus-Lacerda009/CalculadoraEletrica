let valor = parseFloat(prompt("Insira o valor desejado para a conversão:")),
medidaAtual = parseInt(prompt("Insira a conversão atual do valor (Giga - 0; Mega - 1; Quilo - 2; Padrão - 3; Mili - 4; Micro - 5; Nano - 6):")),
conversao = parseInt(prompt("Insira qual a conversão desejada (Giga - 0; Mega - 1; Quilo - 2; Padrão - 3; Mili - 4; Micro - 5; Nano - 6):")),
unidade = prompt("Insira a unidade desejada:\n(A, I, OHM, W, V, C)"),
conversoes = [10 ** 9, 10 ** 6, 10 ** 3, 1, 10 ** -3, 10 ** -6, 10 ** -9, 'G', 'M', 'K', '', 'm', 'µ', 'n'],
resultado = (valor * conversoes[conversao]) / conversoes[medidaAtual];
console.log("O resultado é: " + resultado + " " + conversoes[conversao + 7] + unidade.toUpperCase());