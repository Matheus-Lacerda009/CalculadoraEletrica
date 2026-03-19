corFaixasFront = ["black", "rgb(80, 40, 0)", "red", "rgb(240, 120, 0)", "yellow", "green", "blue", "rgb(150, 0, 200)", "gray", "white", "rgb(150, 110, 0)", "silver"];
function Atualizar(){
    faixas = [
        parseInt(document.getElementById("Faixa1").value),
        parseInt(document.getElementById("Faixa2").value),
        parseInt(document.getElementById("Faixa3").value),
        parseInt(document.getElementById("Faixa4").value),
        parseInt(document.getElementById("Faixa5").value)],
    faixasCor = [document.getElementById("faixa1cor"),
        document.getElementById("faixa2cor"),
        document.getElementById("faixa3cor"),
        document.getElementById("faixa4cor"),
        document.getElementById("faixaToleranciaCor")],
    valorInserido = document.getElementById("qtdFaixas").value,
    faixasInput = [document.getElementById("Faixa1"),
        document.getElementById("Faixa2"),
        document.getElementById("Faixa3"),
        document.getElementById("Faixa4"),
        document.getElementById("Faixa5")],
        classeInput = document.getElementsByClassName("caixaDeEntrada");
}
function CalcularResistencia(){
    Atualizar();
    let tolerancia, numResistencia,
    qtdFaixas = document.getElementById("qtdFaixas").value,
    cores = [1, 10, 10 ** 2, 10 ** 3, 10 ** 4, 10 ** 5, 10 ** 6, 10 ** 7, 10 ** 8, 10 ** 9, 10 ** -1, 0.01],
    tolerancias = {
        1 : 1,
        2 : 2,
        9 : 20,
        10 : 5,
        11 : 10
    },
    numerosProibidos = [10, 11],
    resultado = document.getElementById("resultado"),
    unidadeDeMedida = "";
    if(qtdFaixas == 4){
        if(!numerosProibidos.includes(faixas[0]) && !numerosProibidos.includes(faixas[1])){
            numResistencia = parseInt("" + faixas[0] + "" + faixas[1]) * cores[faixas[2]];
            if(Number.isInteger(tolerancias[faixas[3]])){
                tolerancia = tolerancias[faixas[3]];
            } else {
                tolerancia = "X"
            }
        }
    } else {
        if(!numerosProibidos.includes(faixas[0]) && !numerosProibidos.includes(faixas[1]) && !numerosProibidos.includes(faixas[2])){
            numResistencia = parseInt("" + faixas[0] + "" + faixas[1] + "" + faixas[2]) * cores[faixas[3]];
            if(tolerancias[faixas[4]] != undefined){
                tolerancia = tolerancias[faixas[4]];
            } else {
                tolerancia = "X"
            }
        }
    }
    if(String(numResistencia) >= 1000000){
        numResistencia /= 1000000
        unidadeDeMedida = "M";
    } else if(String(numResistencia) >= 1000){
        numResistencia /= 1000
        unidadeDeMedida = "k";
    }
    if(numResistencia === undefined){
        console.log(numResistencia);
        numResistencia = "X";
    }
    resultado.innerHTML = "Resistência: " + numResistencia + unidadeDeMedida + "Ω || Tolerância: +/- " + tolerancia + "%";
    resultado.style.transform = "scale(1.1)";
    setTimeout(() => {
        resultado.style.transform = "scale(1)";
    }, 200);
}
function QuatroOuCinco(){
    Atualizar();
    let valorInserido = document.getElementById("qtdFaixas").value, faixasDiv = document.getElementById("faixasCores");
    if(valorInserido == 4){
        faixasInput[4].disabled = true;
        faixa4cor.style.display = "none";
        faixasDiv.style.right = "10px";
        resultado.style.transform = "scale(1.1)";
        setTimeout(() => {
            resultado.style.transform = "scale(1)";
        }, 200);
        faixasInput[4].style.transform = "scale(1.1)";
        setTimeout(() => {
            faixasInput[4].style.transform = "scale(1)";
        }, 200);
    } else {
        faixasInput[4].disabled = false;
        faixa4cor.style.display = "block";
        faixasDiv.style.right = "20px";
        resultado.style.transform = "scale(1.1)";
        setTimeout(() => {
            resultado.style.transform = "scale(1)";
        }, 200);
        faixasInput[4].style.transform = "scale(1.1)";
        setTimeout(() => {
            faixasInput[4].style.transform = "scale(1)";
        }, 200);
    }
    CalcularResistencia()
}
function trocaCor(){
    Atualizar();
    if(valorInserido == 4){
        for(let i = 0; i < 4; i++){
            if(i != 3){
                faixasCor[i].style.backgroundColor = corFaixasFront[faixas[i]];
            } else {
                faixasCor[i + 1].style.backgroundColor = corFaixasFront[faixas[i]];
            }
            faixasInput[i].style.backgroundColor = corFaixasFront[faixas[i]];
            if(corFaixasFront[faixas[i]] != "white" && corFaixasFront[faixas[i]] != "yellow" && corFaixasFront[faixas[i]] != "silver"){
                faixasInput[i].style.color = "white";
            } else {
                faixasInput[i].style.color = "black";
            }
        }
    } else {
        for(let i = 0; i < 5; i++){
            faixasCor[i].style.backgroundColor = corFaixasFront[faixas[i]];
            faixasInput[i].style.backgroundColor = corFaixasFront[faixas[i]];
            if(corFaixasFront[faixas[i]] != "white" && corFaixasFront[faixas[i]] != "yellow" && corFaixasFront[faixas[i]] != "silver"){
                faixasInput[i].style.color = "white";
            } else {
                faixasInput[i].style.color = "black";
            }
        }
    }
}