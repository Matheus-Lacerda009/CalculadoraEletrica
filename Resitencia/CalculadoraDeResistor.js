function CalcularResistencia(){
    let tolerancia, numResistencia,
    qtdFaixas = document.getElementById("qtdFaixas").value,
    faixas = [
        parseInt(document.getElementById("Faixa1").value),
        parseInt(document.getElementById("Faixa2").value),
        parseInt(document.getElementById("Faixa3").value),
        parseInt(document.getElementById("Faixa4").value),
        parseInt(document.getElementById("Faixa5").value)],
    cores = [1, 10, 10 ** 2, 10 ** 3, 10 ** 4, 10 ** 5, 10 ** 6, 10 ** 7, 10 ** 8, 10 ** 9],
    tolerancias = {
        1 : 1,
        2 : 2,
        9 : 20,
        10 : 5,
        11 : 10
    },
    resultado = document.getElementById("resultado"),
    unidadeDeMedida = "";
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
        if(Number.isInteger(tolerancias[faixas[4]])){
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
    resultado.innerHTML = "Resistência: " + numResistencia + unidadeDeMedida + "Ω || Tolerância: +/- " + tolerancia + "%";
}
function QuatroOuCinco(){
    let valorInserido = document.getElementById("qtdFaixas").value, quintaFaixa = document.getElementById("Faixa5"), quartaFaixaIlustracao = document.getElementById("faixa4cor"), faixasDiv = document.getElementById("faixasCores");
    if(valorInserido <= 4){
        quintaFaixa.disabled = true;
        faixa4cor.style.display = "none";
        faixasDiv.style.right = "10px";
    } else {
        quintaFaixa.disabled = false;
        faixa4cor.style.display = "block";
        faixasDiv.style.right = "20px";
    }
}
function trocaCor(){
    let faixas = [
        parseInt(document.getElementById("Faixa1").value),
        parseInt(document.getElementById("Faixa2").value),
        parseInt(document.getElementById("Faixa3").value),
        parseInt(document.getElementById("Faixa4").value),
        parseInt(document.getElementById("Faixa5").value)],
    corFaixasFront = ["black", "rgb(80, 40, 0)", "red", "rgb(240, 120, 0)", "yellow", "green", "blue", "rgb(150, 0, 200)", "gray", "white", "rgb(150, 110, 0)", "silver"],
    faixa1 = document.getElementById("faixa1cor"),
    faixa2 = document.getElementById("faixa2cor"),
    faixa3 = document.getElementById("faixa3cor"),
    faixa4 = document.getElementById("faixa4cor"),
    faixa5 = document.getElementById("faixaToleranciaCor"),
    valorInserido = document.getElementById("qtdFaixas").value;
    if(valorInserido <= 4){
        faixa1.style.backgroundColor = corFaixasFront[faixas[0]];
        faixa2.style.backgroundColor = corFaixasFront[faixas[1]];
        faixa3.style.backgroundColor = corFaixasFront[faixas[2]];
        faixa5.style.backgroundColor = corFaixasFront[faixas[3]];
    } else {
        faixa1.style.backgroundColor = corFaixasFront[faixas[0]];
        faixa2.style.backgroundColor = corFaixasFront[faixas[1]];
        faixa3.style.backgroundColor = corFaixasFront[faixas[2]];
        faixa4.style.backgroundColor = corFaixasFront[faixas[3]];
        faixa5.style.backgroundColor = corFaixasFront[faixas[4]];
    }
}