let num1 = Number(prompt("Digite o primeiro valor: "))
let num2 = Number(prompt("Digite o segundo valor: "))

let soma = num1 + num2
let subtracao = num1 - num2
let multiplica = num1 * num2
let divisao = num1 / num2
let resto = num1 % num2

let num1Par = num1 % 2
let num2Par = num2 % 2

let parOuImpar = () => {
    if(num1Par == 0 && num2Par == 0){
        alert("Os dois valores sao pares")
    }else if(num1Par == 0 && num2Par == 1){
        alert("Somente o primeiro valor e par") 
    }else if(num1Par == 1 && num2Par ==0){
        alert("Somente o segundo valor e par")
    }else{
        alert("Os dois valores sao impares") 
    }
}

let igualOuDiferente = () => {
    if(num1 === num2){
        alert("Os dois valores sao iguais")
    } else{
        alert("Os valores sao diferentes")
    }
}

alert(soma)
alert(subtracao)
alert(multiplica)
alert(divisao)
alert(resto)
parOuImpar()
igualOuDiferente()