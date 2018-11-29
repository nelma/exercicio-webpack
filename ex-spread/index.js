const produto = {
  nome: 'Teste',
  valor: 1.00
}

function clone(objeto) {
  return { ...objeto }
}

const nomeProduto = clone(produto);
nomeProduto.nome = 'Caneta'

console.log(nomeProduto)