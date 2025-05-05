// Funcionalidades para a página de produtos
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário está logado
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = '../index.html';
        return;
    }

    // Exibir nome do usuário
    const username = sessionStorage.getItem('username');
    const userNameElement = document.querySelector('.user-name');
    if (userNameElement && username) {
        userNameElement.textContent = username;
    }

    // Configurar evento de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('username');
            window.location.href = '../index.html';
        });
    }

    // Abrir modal de novo produto
    const btnAdd = document.querySelector('.btn-add');
    const productModal = document.getElementById('productModal');
    const btnClose = productModal.querySelector('.btn-close');
    const btnCancel = productModal.querySelector('.btn-cancel');
    const btnSave = productModal.querySelector('.btn-save');
    const productForm = document.getElementById('productForm');

    btnAdd.addEventListener('click', function() {
        productModal.style.display = 'flex';
    });

    btnClose.addEventListener('click', function() {
        productModal.style.display = 'none';
    });

    btnCancel.addEventListener('click', function() {
        productModal.style.display = 'none';
    });

    btnSave.addEventListener('click', function() {
        // Aqui você implementaria a lógica para salvar o produto
        // Em um sistema real, isso enviaria dados para um backend
        alert('Produto salvo com sucesso!');
        productModal.style.display = 'none';
        productForm.reset();
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    // Configurar botões de edição e exclusão
    const editButtons = document.querySelectorAll('.btn-edit');
    const deleteButtons = document.querySelectorAll('.btn-delete');

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(`Editando produto: ${productName}`);
            // Aqui você abriria o modal com os dados do produto para edição
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            if (confirm(`Tem certeza que deseja excluir o produto: ${productName}?`)) {
                // Aqui você implementaria a lógica para excluir o produto
                alert(`Produto ${productName} excluído com sucesso!`);
                // Em um sistema real, você removeria o elemento do DOM após confirmação do backend
            }
        });
    });
});
