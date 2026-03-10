function CalcularResistencia(){
    let tolerancia, numResistencia,
    qtdFaixas = document.getElementById("qtdFaixas").value,
    faixas = [
        parseInt(document.getElementById("Faixa1").value),
        parseInt(document.getElementById("Faixa2").value),
        parseInt(document.getElementById("Faixa3").value),
        parseInt(document.getElementById("Faixa4").value),
        parseInt(document.getElementById("Faixa5").value)],
    cores = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000],
    tolerancias = {
        1 : 1,
        2 : 2,
        9 : 20,
        10 : 5,
        11 : 10
    },
    resultado = document.getElementById("Resultado")
    console.log(faixas);
    if(qtdFaixas != 4 && qtdFaixas != 5){
        console.log("Quantidade de faixas inválida!");
        return 0;
    }
    if(qtdFaixas == 4){
        numResistencia = parseInt("" + faixas[0] + "" + faixas[1]) * cores[faixas[2]];
        tolerancia = tolerancias[faixas[3]];
    } else {
        numResistencia = parseInt("" + faixas[0] + "" + faixas[1] + "" + faixas[2]) * cores[faixas[3]];
        tolerancia = tolerancias[faixas[4]];
    }
    resultado.innerHTML = "Resistência: " + numResistencia + "Ω || Tolerância: +/- " + tolerancia + "%";
}