# Calculadora Elétrica
Este projeto em JavaScript calcula o consumo de energia elétrica (kWh) e o custo mensal aproximado de eletrodomésticos com base no tempo de uso diário e na tarifa de energia.

O programa permite inserir vários eletrodomésticos e ao final mostra um resumo com o consumo e o custo mensal de cada um.

📋 Funcionalidades

Inserir o nome do eletrodoméstico

Escolher a unidade da potência:

Watts

Quilowatts

Informar:

potência do aparelho

horas de uso por dia

valor da tarifa de energia (kWh)

Cálculo automático de:

consumo diário em kWh

custo mensal estimado

Suporte para múltiplos eletrodomésticos

Exibição final com resumo de todos os aparelhos cadastrados

⚙️ Como funciona

O programa utiliza:

prompt() para coletar dados do usuário

while para permitir inserir vários eletrodomésticos

arrays para armazenar as informações

console.log() para mostrar o resultado final

Fórmulas utilizadas

Consumo diário:

Consumo (kWh) = Potência × Horas de uso

Se a potência for informada em Watts, ela é convertida para kW:

kW = Watts / 1000

Custo mensal estimado:

Custo mensal = Consumo diário × Tarifa × 30 dias
▶️ Exemplo de uso

Entrada do usuário:

Nome: Geladeira
Unidade: Watts
Potência: 150
Horas por dia: 24
Tarifa: 0.75

Saída:

Nome: Geladeira
KWH: 3.60
Valor pago mensal: 81.00
🧠 Estrutura do Código

Principais partes do programa:

while(continuar) → loop para inserir vários eletrodomésticos

info[] → armazena os dados de cada aparelho

conversão de watts para kW

cálculo do consumo e custo mensal

for duplo para montar a saída final

💻 Tecnologias usadas

JavaScript

Execução em ambiente com suporte a prompt()
