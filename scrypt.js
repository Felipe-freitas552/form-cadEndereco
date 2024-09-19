'use strict'; //ativa o modo restrito//
//codigo para consumo de API da Viacep
//Viacep.com.br


//Limpar consulta do form ja realizada

const limparFormulario = () => {
    document.getElementById('Rua').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
}


//Verifica se o cep é valido

const eNumero = (numero) =>  /^[0-9]+$/.test(numero);
//verifica o tamanho do  CEP
const cepValido = (cep) => cep.lenght == 8 && eNumero (cep);