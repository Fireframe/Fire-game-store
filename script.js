document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");

    // Função para carregar os produtos do JSON
    function loadProducts() {
        fetch("produtos.json")
            .then(response => response.json())
            .then(products => {
                products.forEach(produto => {
                    // Cria o card do produto
                    const productCard = document.createElement("div");
                    productCard.classList.add("product-card");
                    productCard.setAttribute("data-category", produto.categoria);

                    // Gera o link para a página de detalhes do produto
                    const productLink = document.createElement("a");
                    productLink.href = `detalhes.html?id=${produto.id}`;

                    // Imagem do produto
                    const productImage = document.createElement("img");
                    productImage.src = produto.imagem;
                    productImage.alt = produto.nome;
                    productLink.appendChild(productImage);

                    // Nome do produto
                    const productName = document.createElement("h2");
                    productName.textContent = produto.nome;
                    productLink.appendChild(productName);

                    // Desconto do produto
                    const discount = document.createElement("span");
                    discount.classList.add("discount");
                    discount.textContent = `-${produto.desconto}%`;
                    productLink.appendChild(discount);

                    // Preço original
                    const oldPrice = document.createElement("p");
                    oldPrice.classList.add("old-price");
                    oldPrice.textContent = `De R$ ${produto.precoOriginal.toFixed(2)}`;
                    productLink.appendChild(oldPrice);

                    // Preço com desconto
                    const newPrice = document.createElement("p");
                    newPrice.classList.add("new-price");
                    newPrice.textContent = `Por R$ ${produto.precoDesconto.toFixed(2)}`;
                    productLink.appendChild(newPrice);

                    // Categoria
                    const category = document.createElement("span");
                    category.classList.add("category");
                    category.textContent = `Categoria: ${produto.categoria}`;
                    productLink.appendChild(category);

                    // Adiciona o link ao card do produto
                    productCard.appendChild(productLink);

                    // Adiciona o card à lista de produtos
                    productList.appendChild(productCard);
                });
            })
            .catch(error => {
                console.error("Erro ao carregar os produtos:", error);
            });
    }

    loadProducts();
});
// Função para carregar o usuário logado do localStorage
function getLoggedInUser() {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
}

document.addEventListener('DOMContentLoaded', function() {
    const user = getLoggedInUser();

    if (user) {
        document.querySelector('.login-btn').style.display = 'none';
        document.querySelector('.signup-btn').style.display = 'none';
        document.getElementById('logout').style.display = 'inline';
        document.getElementById('userGreeting').textContent = `Bem-vindo, ${user.username}!`;
        document.getElementById('userGreeting').style.display = 'inline';
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    });
});
