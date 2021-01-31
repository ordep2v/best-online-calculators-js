# Aplicação contendo três tipos de calculadoras em Javascript

## Criação de três calculadoras utilizando:
- ReactJS

## O que foi desenvolvido?

- Calculadora de números romanos com botões e display
- Calculadora "mista" com inputs, select e display.
- Calculadora de equação de segundo grau, mostrando "DELTA,X1,X2"

# Regras de cada calculadora

## PC Button Calculator
- Aceita somente números romanos;
- Só aceita resultados inteiros e positivos;
- Ao concatenar valores no mesmo campo, os mesmos são somados automaticamente e colocados em ordem. Ex: (N1 = X) + (N2 = XXXX) = L;

## PC Mixed Input Calculator
- Aceita números romanos e arábicos;
- Independente do tipo de algarismo, a resposta sempre virá dos dois tipos.
- Não aceita valores negativos como resposta;
- Se um input contiver número arábico, o outro deverá ser arábico também, senão a operação será inválida.
- Se um input contiver número romano, o outro deverá ser romano também, senão a operação será inválida.
- Se no mesmo input houverem números romanos e numeros arábicos, a operação levará em conta somente os números romanos.
- Caso o resultado de uma operação entre números arábicos não resulte em inteiros, a resposta em números romanos será arredondada.

## PC Bhaskara Magic Board
- Aceita somente valores em algarismos arábicos.
- Ao informar os valores de (a),(b) e (c) certifique-se que DELTA terá um resultado positivo.
- Caso DELTA for negativo, será retornado um erro, pois não há raízes com DELTA negativo.


## Imagens do projeto:
![PC Calculadora Button](https://i.ibb.co/JQsbW7y/pcromanbuttoncalcgit.png)
![PC Mixed Input Calc](https://i.ibb.co/NYVBG7z/pcinputmixedcalgit.png)
![PC Bhaskara Magic Board](https://i.ibb.co/zGfwmV7/pcbhaskaramagicgit.png)

## Esta aplicação foi desenvolvida como resposta ao desafio da VilaApps.