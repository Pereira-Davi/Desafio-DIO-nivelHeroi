// Desafio - Classificador de nível de Herói"

/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/

// Usando variáveis:
let nomeHeroi = "Davi Pereira"
let xpDoHeroi = 600

const msgFinal = "Fim do up. O Herói de nome " + nomeHeroi + " está no nível: "

console.log("Olá, mundo! O nosso Herói se chama " + nomeHeroi + ".")
console.log("Seu nível atual é: " + xpDoHeroi + ".")
console.log("Mas ele acabou de tomar a poção de Ultimate UP da DIO, que multiplica seu xp até o mais alto nível!")

// Usando Laço de repetição e Operador de atribuição
while(xpDoHeroi<15000){
    console.log("O personagem está no nível: " + xpDoHeroi + " e subindo")
    xpDoHeroi *= 2
}

console.log(" ")

// Usando estruturas de decisão:
if(xpDoHeroi < 1000){
        console.log(msgFinal + "Ferro.")
}
    else if(xpDoHeroi >= 1001 && xpDoHeroi < 2000){
        console.log(msgFinal + "Bronze.")
}    
      
    else if(xpDoHeroi >= 2001 && xpDoHeroi < 5000){
        console.log(msgFinal + "Prata.")
}
    else if(xpDoHeroi >= 5001 && xpDoHeroi < 7000){
        console.log(msgFinal + "Ouro.")
}   

    else if(xpDoHeroi >= 7001 && xpDoHeroi < 8000){
        console.log(msgFinal + "Platina.")
}   

    else if(xpDoHeroi >= 8001 && xpDoHeroi < 9000){
        console.log(msgFinal + "Ascendente.")
}   

    else if(xpDoHeroi >= 9001 && xpDoHeroi < 10000){
        console.log(msgFinal + "Imortal.")
}

    else if(xpDoHeroi >= 10001){
        console.log(msgFinal + "Radiante.")
}