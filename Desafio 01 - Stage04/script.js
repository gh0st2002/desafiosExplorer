let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número: "))

const soma = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const rest = numberOne % numberTwo

const rest2 = soma % 2

alert("A soma dos números é: " + soma)
alert("A subtração dos números é: " + sub)
alert("A multiplicação dos números é: " + mult)
alert("O resto da divisão é: " + rest)

if(rest2 == 0){
    alert("A soma dos numeros é par")
}
else {
    alert("Impar")
}

if (numberOne == numberTwo) {
    alert("Os numeros inseridos são iguais")
}
else {
    alert("os numeros sao diferentes")
}