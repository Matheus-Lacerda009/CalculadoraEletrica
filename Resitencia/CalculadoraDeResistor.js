function CalcularResistencia(){
    let tolerancia, numResistencia,
    qtdFaixas = document.getElementById("qtdFaixas").value,
    faixas = [
        parseInt(document.getElementById("Faixa1").value),
        parseInt(document.getElementById("Faixa2").value),
        parseInt(document.getElementById("Faixa3").value),
        parseInt(document.getElementById("Faixa4").value),
        parseInt(document.getElementById("Faixa5").value)],
    cores = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000],
    tolerancias = {
        1 : 1,
        2 : 2,
        9 : 20,
        10 : 5,
        11 : 10
    },
    resultado = document.getElementById("resultado"),
    unidadeDeMedida = "";
    console.log(faixas);
    if(qtdFaixas != 4 && qtdFaixas != 5){
        console.log("Quantidade de faixas inválida!");
        return 0;
    }
    if(qtdFaixas == 4){
        numResistencia = Number("" + faixas[0] + "" + faixas[1]) * cores[faixas[2]];
        if(Number.isInteger(tolerancias[faixas[3]])){
            tolerancia = tolerancias[faixas[3]];
        } else {
            tolerancia = "X"
        }
    } else {
        numResistencia = parseInt("" + faixas[0] + "" + faixas[1] + "" + faixas[2]) * cores[faixas[3]];
        if(parseInt.isInteger(tolerancias[faixas[4]])){
            tolerancia = tolerancias[faixas[4]];
        } else {
            tolerancia = "X"
        }
    }
    if(String(numResistencia).length >= 7){
        numResistencia /= 1000000
        unidadeDeMedida = "M";
    } else if(String(numResistencia).length >= 4){
        numResistencia /= 1000
        unidadeDeMedida = "k";
    }
    resultado.style.width = '380px';
    resultado.innerHTML = "Resistência: " + numResistencia + unidadeDeMedida + "Ω || Tolerância: +/- " + tolerancia + "%";
}
function QuatroOuCinco(){
    let valorInserido = document.getElementById("qtdFaixas").value, quintaFaixa = document.getElementById("Faixa5");
    if(valorInserido <= 4){
        quintaFaixa.disabled = true;
    } else {
        quintaFaixa.disabled = false;
    }
}