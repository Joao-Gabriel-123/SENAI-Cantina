// Funcionalidades para a página de dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário está logado
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = 'index.html';
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
            window.location.href = 'index.html';
        });
    }

    // Simulação de dados para os gráficos (em um sistema real, esses dados viriam de uma API)
    function initCharts() {
        // Aqui você poderia inicializar bibliotecas de gráficos como Chart.js
        console.log('Gráficos inicializados');
    }

    // Inicializar gráficos
    initCharts();
});
