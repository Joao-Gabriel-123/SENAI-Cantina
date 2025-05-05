// Funcionalidades para a página de ganhos e lucros
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

    // Configurar seletor de período
    const periodTabs = document.querySelectorAll('.period-tab');
    const monthPicker = document.getElementById('monthPicker');
    const btnApply = document.querySelector('.btn-apply');
    
    periodTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover classe active de todas as tabs
            periodTabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe active à tab clicada
            this.classList.add('active');
            
            // Aqui você implementaria a lógica para atualizar os dados com base no período selecionado
            const period = this.textContent.trim().toLowerCase();
            console.log(`Período selecionado: ${period}`);
            // Em um sistema real, você atualizaria os gráficos e tabelas
        });
    });
    
    btnApply.addEventListener('click', function() {
        const selectedMonth = monthPicker.value;
        console.log(`Mês selecionado: ${selectedMonth}`);
        // Aqui você implementaria a lógica para atualizar os dados com base no mês selecionado
        alert(`Dados atualizados para o período: ${selectedMonth}`);
    });

    // Configurar botões de download e tela cheia para gráficos
    const downloadButtons = document.querySelectorAll('.btn-download');
    const fullscreenButtons = document.querySelectorAll('.btn-fullscreen');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const chartCard = this.closest('.chart-card');
            const chartTitle = chartCard.querySelector('h3').textContent;
            alert(`Baixando gráfico: ${chartTitle}`);
            // Aqui você implementaria a lógica para baixar o gráfico como imagem
        });
    });
    
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', function() {
            const chartCard = this.closest('.chart-card');
            const chartTitle = chartCard.querySelector('h3').textContent;
            alert(`Expandindo gráfico: ${chartTitle}`);
            // Aqui você implementaria a lógica para exibir o gráfico em tela cheia
        });
    });

    // Configurar botões de exportação
    const exportButtons = document.querySelectorAll('.btn-export');
    
    exportButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tableCard = this.closest('.data-table-card');
            const tableTitle = tableCard.querySelector('h3').textContent;
            alert(`Exportando tabela: ${tableTitle}`);
            // Aqui você implementaria a lógica para exportar os dados da tabela
        });
    });

    // Configurar botões de relatório
    const btnGenerateReport = document.querySelector('.btn-generate-report');
    const btnScheduleReport = document.querySelector('.btn-schedule-report');
    const reportModal = document.getElementById('reportModal');
    const btnCloseReport = reportModal.querySelector('.btn-close');
    const btnCancelReport = reportModal.querySelector('.btn-cancel');
    const btnGenerate = reportModal.querySelector('.btn-generate');
    const reportForm = document.getElementById('reportForm');
    
    btnGenerateReport.addEventListener('click', function() {
        reportModal.style.display = 'flex';
    });
    
    btnScheduleReport.addEventListener('click', function() {
        alert('Funcionalidade de agendamento de relatórios será implementada em breve.');
    });
    
    btnCloseReport.addEventListener('click', function() {
        reportModal.style.display = 'none';
    });
    
    btnCancelReport.addEventListener('click', function() {
        reportModal.style.display = 'none';
    });
    
    btnGenerate.addEventListener('click', function() {
        // Aqui você implementaria a lógica para gerar o relatório
        const reportType = document.getElementById('reportType').value;
        const reportPeriod = document.getElementById('reportPeriod').value;
        const reportFormat = document.getElementById('reportFormat').value;
        
        alert(`Gerando relatório ${reportType} para o período ${reportPeriod} no formato ${reportFormat}`);
        reportModal.style.display = 'none';
        reportForm.reset();
    });
    
    // Fechar modal ao clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === reportModal) {
            reportModal.style.display = 'none';
        }
    });

    // Simulação de inicialização de gráficos
    function initCharts() {
        console.log('Gráficos de lucros inicializados');
        // Aqui você inicializaria bibliotecas de gráficos como Chart.js
    }
    
    // Inicializar gráficos
    initCharts();
});
