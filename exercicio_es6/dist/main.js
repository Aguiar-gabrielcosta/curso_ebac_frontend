"use strict";

var listaNotas = [{
  nome: 'isabela',
  nota: 8.0
}, {
  nome: 'gabriel',
  nota: 7.5
}, {
  nome: 'igor',
  nota: 6.0
}, {
  nome: 'felipe',
  nota: 5.5
}, {
  nome: 'maria',
  nota: 10.0
}];
var separaAprovados = function separaAprovados(listaNotas) {
  var listaAprovados = [];
  listaNotas.forEach(function (aluno) {
    if (aluno.nota >= 6.0) {
      listaAprovados.push(aluno);
    }
  });
  return listaAprovados;
};
console.log(separaAprovados(listaNotas));