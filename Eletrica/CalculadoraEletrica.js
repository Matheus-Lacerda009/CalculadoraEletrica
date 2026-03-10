let continuar = true, info = [], resposta = "", i = 0;
while(continuar){
    info.push([]);
    let nome = prompt("Insira o nome do eletrodoméstico:"), wattsOuKwatts = parseInt(prompt("Será usado quilowatts (1) ou watts (0) como unidade de medida da entrada?")), KwattsH = parseFloat(prompt("Insira a potência utilizada pelo eletrodoméstico:")), horas = parseFloat(prompt("Insira a quantidade de horas que esse eletrodoméstico fica ligado por dia:")), valorTaxa = parseFloat(prompt("Insira o valor da taxa local (Kw / H):"));
    info[i].push("Nome: " + nome + " ");
    KwattsH *= horas;
    if(wattsOuKwatts == 0){
        KwattsH /= 1000;
    } else if(wattsOuKwatts != 1){
        console.log("ERRO!");
        info = [];
    }
    info[i].push("KWH: " + KwattsH.toFixed(2) + " ");
    info[i].push("Valor pago mensal: " + ((KwattsH * valorTaxa)* 30).toFixed(2) + "\n\n");
    continuar = parseInt(prompt("Insira 1 para continuar e 0 para parar o programa"));
}
for(let linha = 0; linha < info.length; linha++){
    for(let coluna = 0; coluna < info[0].length; coluna++){
        resposta += info[linha][coluna] + " ";
    }
    resposta += "\n"
    i++;
}
console.log(resposta);