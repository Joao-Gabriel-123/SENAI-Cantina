// Funcionalidades para a página de máquinas de cobrança
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

    // Abrir modal de nova máquina
    const btnAdd = document.querySelector('.btn-add');
    const machineModal = document.getElementById('machineModal');
    const btnClose = machineModal.querySelector('.btn-close');
    const btnCancel = machineModal.querySelector('.btn-cancel');
    const btnSave = machineModal.querySelector('.btn-save');
    const machineForm = document.getElementById('machineForm');

    btnAdd.addEventListener('click', function() {
        machineModal.style.display = 'flex';
    });

    btnClose.addEventListener('click', function() {
        machineModal.style.display = 'none';
    });

    btnCancel.addEventListener('click', function() {
        machineModal.style.display = 'none';
    });

    btnSave.addEventListener('click', function() {
        // Aqui você implementaria a lógica para salvar a máquina
        // Em um sistema real, isso enviaria dados para um backend
        alert('Máquina salva com sucesso!');
        machineModal.style.display = 'none';
        machineForm.reset();
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === machineModal) {
            machineModal.style.display = 'none';
        }
    });

    // Configurar botões de detalhes e manutenção
    const detailsButtons = document.querySelectorAll('.btn-details');
    const maintenanceButtons = document.querySelectorAll('.btn-maintenance:not([disabled])');

    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const machineCard = this.closest('.machine-card');
            const machineId = machineCard.querySelector('h3').textContent;
            alert(`Visualizando detalhes da máquina: ${machineId}`);
            // Aqui você abriria um modal com os detalhes completos da máquina
        });
    });

    maintenanceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const machineCard = this.closest('.machine-card');
            const machineId = machineCard.querySelector('h3').textContent;
            if (confirm(`Deseja registrar manutenção para a máquina: ${machineId}?`)) {
                // Aqui você implementaria a lógica para registrar manutenção
                alert(`Manutenção registrada para ${machineId}. A máquina estará indisponível até a conclusão.`);
                // Em um sistema real, você atualizaria o status da máquina
                const statusElement = machineCard.querySelector('.status');
                statusElement.textContent = 'Em Manutenção';
                statusElement.className = 'status maintenance';
                this.disabled = true;
                this.textContent = 'Em Manutenção';
            }
        });
    });

    // Configurar busca de máquinas
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            alert(`Buscando por: ${searchTerm}`);
            // Aqui você implementaria a lógica para filtrar as máquinas
        }
    });
    
    // Permitir busca ao pressionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Configurar botão de filtro
    const btnFilter = document.querySelector('.btn-filter');
    
    btnFilter.addEventListener('click', function() {
        const filterOptions = ['Todas', 'Ativas', 'Em Manutenção', 'Inativas'];
        const selectedFilter = prompt(`Selecione um filtro:\n${filterOptions.join('\n')}`);
        
        if (selectedFilter && filterOptions.includes(selectedFilter)) {
            alert(`Filtrando por: ${selectedFilter}`);
            // Aqui você implementaria a lógica para filtrar as máquinas
        }
    });
});
