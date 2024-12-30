//Efeito de rolagem suave
const header = document.getElementById("header");

// Adiciona um ouvinte de evento para o scroll
window.addEventListener("scroll", () => {
    // Adiciona a classe 'scrolled' se a rolagem for maior que 50px
    if (window.scrollY > 50) {
        header.classList.add("scrolled", "transparent");
    } else {
        header.classList.remove("scrolled", "transparent");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.querySelector('#cartModal');
    const closeModalBtn = document.querySelector('.close-btn');

    // Alternar a classe 'active' para mostrar/ocultar o menu
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Mostrar/ocultar o modal do carrinho
    cartIcon.addEventListener('click', () => {
        cartModal.classList.toggle('active');
    });

    // Fechar o modal quando clicar no "X"
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }
});
