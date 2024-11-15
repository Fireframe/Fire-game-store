async function loadProductDetails() {
    try {
        // Obter o identificador do produto da URL
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');

        // Carregar o JSON com os produtos
        const response = await fetch('produtos.json');
        const products = await response.json();

        // Encontrar o produto correspondente pelo ID
        const product = products.find(p => p.id === productId);
        if (!product) {
            document.body.innerHTML = "<h1>Produto não encontrado</h1>";
            return;
        }

        // Preencher os dados no HTML
        document.getElementById('product-name-header').textContent = product.nome;
        document.getElementById('product-name').textContent = product.nome;
        document.getElementById('product-code').textContent = product.id;
        document.getElementById('product-stock').textContent = "Disponível em estoque";
        document.getElementById('product-old-price').textContent = `R$ ${product.precoOriginal.toFixed(2)}`;
        document.getElementById('product-new-price').textContent = `R$ ${product.precoDesconto.toFixed(2)}`;
        document.getElementById('product-discount').textContent = `Economize ${product.desconto}%`;
        document.getElementById('product-installment').textContent = `R$ ${(product.precoDesconto / 12).toFixed(2)}`;
        document.getElementById('product-image').src = product.imagem;
        document.getElementById('product-description').textContent = product.descricao;

    } catch (error) {
        console.error("Erro ao carregar os detalhes do produto:", error);
    }
}

// Chamar a função ao carregar a página
window.onload = loadProductDetails;
