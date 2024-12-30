// Seleciona o ícone de menu, a lista de navegação, a sidebar e o corpo do documento
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('nav ul');
const sidebar = document.getElementById('sidebar');
const cartIcon = document.querySelector('.bx-cart');
const cartModal = document.getElementById('cartModal');
const closeBtn = document.querySelector('.close-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cartItems');
const overlay = document.getElementById('overlay');


// Adiciona um evento de clique no ícone de menu
menuIcon.addEventListener('click', (event) => {
    // Alterna a visibilidade da lista de navegação (para dispositivos móveis)
    navLinks.classList.toggle('active');
    
    // Alterna a visibilidade da sidebar (para dispositivos móveis)
    sidebar.classList.toggle('active');
    overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
    // Impede que o clique no ícone feche a sidebar imediatamente
    event.stopPropagation();
});

// Fecha a sidebar se o clique ocorrer fora dela
document.addEventListener('click', (event) => {
    // Verifica se o clique foi fora da sidebar ou do ícone de menu
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.style.display = 'none';
    }
});

// Função para abrir o modal do carrinho
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex'; // Exibe o modal
});

// Função para fechar o modal
closeBtn.addEventListener('click', () => {
    cartModal.style.display = 'none'; // Esconde o modal
});

// Fecha o modal quando clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Função para adicionar item ao carrinho
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Exemplo de item
        const product = {
            name: `Produto ${index + 1}`,
            price: `$${(Math.random() * 100).toFixed(2)}`
        };

        // Cria o item no carrinho
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price}`;
        cartItemsList.appendChild(li);
    });
});
