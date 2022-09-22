import PromptSync = require('prompt-sync')
const prompt = PromptSync()



const imc = (peso: number, altura: number) => { return peso / (Math.pow(altura, 2));
}

console.log('Qual é o seu peso: ')
const peso = Number(prompt(`-> `));

console.log(`Qual é a sua altura: `)
const altura = Number(prompt(`-> `));

const imResult = imc(peso, altura)
console.log(`Seu IMC é ${imResult}`)


