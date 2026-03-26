let emSerie = parseInt(prompt("Insira 1 para associação em série e 0 para associação em paralelo")), voltagem = parseFloat(prompt("Insira a tensão gerada:")), resistores = [], resistencia = 0, quantidadeResistores = parseInt(prompt("Insira a quantidade de resistores:"));
if(emSerie){
    for(let i = 0; i < quantidadeResistores; i++){
        resistores[i] = parseInt(prompt("Insira a resistência do " + (i + 1) + " resistor:"));
        resistencia += resistores[i];
    }
    let corrente = voltagem / resistencia;
    console.log("Corrente: " + corrente + "\nResistência total do circuito: " + resistencia);
    for(let i = 0; i < quantidadeResistores; i++){
        console.log("Voltagem no resistor de " + resistores[i] + " Ohms: " + (resistores[i] * corrente) + " V");
    }
} else {
    for(let i = 0; i < quantidadeResistores; i++){
        resistores[i] = parseInt(prompt("Insira a resistência do " + (i + 1) + " resistor:"));
        resistencia += resistores[i] ** -1;
    }
    resistencia **= -1;
    let corrente = voltagem / resistencia;
    console.log("Corrente gerada: " + corrente.toFixed(3) + "\nResistência total do circuito: " + resistencia.toFixed(3));
    for(let i = 0; i < quantidadeResistores; i++){
        console.log("Corrente no resistor de " + resistores[i] + " Ohms: " + (voltagem / resistores[i]) + " A");
    }
}