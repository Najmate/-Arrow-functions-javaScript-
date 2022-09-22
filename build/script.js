"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var imc = function (peso, altura) {
    return peso / (Math.pow(altura, 2));
};
console.log('Qual é o seu peso: ');
var peso = Number(prompt("-> "));
console.log("Qual \u00E9 a sua altura: ");
var altura = Number(prompt("-> "));
var imResult = imc(peso, altura);
console.log("Seu IMC \u00E9 ".concat(imResult));
