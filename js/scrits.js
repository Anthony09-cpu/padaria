let img = document.createElement('img');
img.classList.add('img-produto');
img.setAttribute('src', 'img/pao-frances.jpg');
img.setAttribute('alt', 'Pão Francês');

let divNomeProduto = document.createElement('div');
divNomeProduto.classList.add('nome-produto');
divNomeProduto.innerText = "Pão Francês";

let divDescricao = document.createElement('div');
divDescricao.classList.add('descricao');
divDescricao.innerText = "Tradicional pão feito com farinha refinada, água, sal e fermento.";

let divPreco = document.createElement('div');
divPreco.classList.add('preco');
divPreco.innerText = "12,99 Kg";

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

let divRow = document.createElement('div');
divRow.classList.add('row');
divRow.appendChild(divCol);

let divProdutos = document.getElementById('produtos');
divProdutos.appendChild(divRow);