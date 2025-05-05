// Funcionalidades para a página de gestão de valores
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

    // Abrir modal de nova transação
    const btnAdd = document.querySelector('.btn-add');
    const transactionModal = document.getElementById('transactionModal');
    const btnClose = transactionModal.querySelector('.btn-close');
    const btnCancel = transactionModal.querySelector('.btn-cancel');
    const btnSave = transactionModal.querySelector('.btn-save');
    const transactionForm = document.getElementById('transactionForm');

    btnAdd.addEventListener('click', function() {
        transactionModal.style.display = 'flex';
    });

    btnClose.addEventListener('click', function() {
        transactionModal.style.display = 'none';
    });

    btnCancel.addEventListener('click', function() {
        transactionModal.style.display = 'none';
    });

    btnSave.addEventListener('click', function() {
        // Aqui você implementaria a lógica para salvar a transação
        // Em um sistema real, isso enviaria dados para um backend
        alert('Transação salva com sucesso!');
        transactionModal.style.display = 'none';
        transactionForm.reset();
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === transactionModal) {
            transactionModal.style.display = 'none';
        }
    });

    // Configurar filtros de transações
    const filterTabs = document.querySelectorAll('.filter-tabs .tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover classe active de todas as tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe active à tab clicada
            this.classList.add('active');
            
            // Aqui você implementaria a lógica para filtrar as transações
            const filter = this.textContent.trim().toLowerCase();
            console.log(`Filtrando por: ${filter}`);
            // Em um sistema real, você filtraria os dados exibidos na tabela
        });
    });

    // Configurar seletor de período
    const dateRange = document.getElementById('dateRange');
    
    dateRange.addEventListener('change', function() {
        const selectedPeriod = this.value;
        console.log(`Período selecionado: ${selectedPeriod}`);
        // Aqui você implementaria a lógica para atualizar os dados com base no período selecionado
    });

    // Configurar botões de ação nas transações
    const viewButtons = document.querySelectorAll('.btn-view');
    const editButtons = document.querySelectorAll('.btn-edit');
    const deleteButtons = document.querySelectorAll('.btn-delete');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const transactionId = row.cells[0].textContent;
            alert(`Visualizando detalhes da transação: ${transactionId}`);
            // Aqui você abriria um modal com os detalhes completos da transação
        });
    });

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const transactionId = row.cells[0].textContent;
            alert(`Editando transação: ${transactionId}`);
            // Aqui você abriria o modal com os dados da transação para edição
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const transactionId = row.cells[0].textContent;
            if (confirm(`Tem certeza que deseja excluir a transação: ${transactionId}?`)) {
                // Aqui você implementaria a lógica para excluir a transação
                alert(`Transação ${transactionId} excluída com sucesso!`);
                // Em um sistema real, você removeria a linha da tabela após confirmação do backend
            }
        });
    });

    // Configurar botão de exportação
    const btnExport = document.querySelector('.btn-export');
    
    btnExport.addEventListener('click', function() {
        alert('Exportando dados...');
        // Aqui você implementaria a lógica para exportar os dados
        // Em um sistema real, isso geraria um arquivo CSV ou Excel
    });
});
