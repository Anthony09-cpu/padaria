let listaProdutos = [
    produto = {
        imgProduto: 'img/pao-frances.jpg',
        nomeProduto: 'Pão Francês',
        descproduto: 'Tradicional pão feito com farinha refinada, água, sal e fermento.',
        precoProduto: 'R$ 12,99 Kg'
    },
    produto = {
        imgProduto: 'img/pao-queijo.jpg',
        nomeProduto: 'Pão de Queijo',
        descproduto: 'Quentinho, saindo do forno',
        precoProduto: 'R$ 22,99 Kg'
    },
    produto = {
        imgProduto: 'img/pao-doce.jpg',
        nomeProduto: 'Pão Doce',
        descproduto: 'Pãozinho doce, bem doce mesmo',
        precoProduto: 'R$ 9,99 Kg'
    },
    produto = {
        imgProduto: 'img/pao-integral.jpg',
        nomeProduto: 'Pão Integral',
        descproduto: 'Pão feito com farinha integral, que mantém todos os nutrientes.',
        precoProduto: 'R$ 12,99 Kg'
    }
];

let divRow = document.createElement('div');

if (listaProdutos.length > 0) {
    for (let i = 0; i < listaProdutos.length; i++) {
        let img = document.createElement('img');
        img.classList.add('img-produto');
        img.setAttribute('src', listaProdutos[i].imgProduto);
        img.setAttribute('alt', listaProdutos[i].nomeProduto);

        let divNomeProduto = document.createElement('div');
        divNomeProduto.classList.add('nome-produto');
        divNomeProduto.innerText = listaProdutos[i].nomeProduto;

        let divDescricao = document.createElement('div');
        divDescricao.classList.add('descricao');
        divDescricao.innerText = listaProdutos[i].descproduto;

        let divPreco = document.createElement('div');
        divPreco.classList.add('preco');
        divPreco.innerText = listaProdutos[i].precoProduto;

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerText = "Comprar";

        let divCol = document.createElement('div');
        divCol.classList.add('col-3', 'produto');
        divCol.appendChild(img);
        divCol.appendChild(divNomeProduto);
        divCol.appendChild(divDescricao);
        divCol.appendChild(divPreco);
        divCol.appendChild(button);

        divRow.classList.add('row');
        divRow.appendChild(divCol);
    }
} else {
    divRow.innerText = "Nenhum elemento na lista";
}

let divProdutos = document.getElementById('produtos');
divProdutos.appendChild(divRow);