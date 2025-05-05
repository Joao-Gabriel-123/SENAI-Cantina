// Sistema de autenticação para o login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    // Credenciais corretas
    const correctUsername = 'Vaninha';
    const correctPassword = 'Saoriladyqueen';
    
    // Adicionar evento de submit ao formulário
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Verificar credenciais
            if (username === correctUsername && password === correctPassword) {
                // Login bem-sucedido
                errorMessage.textContent = '';
                errorMessage.style.color = 'green';
                errorMessage.textContent = 'Login bem-sucedido! Redirecionando...';
                
                // Definir status de login no sessionStorage
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('username', username);
                
                // Redirecionar para o dashboard após 1 segundo
                setTimeout(function() {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                // Login falhou
                errorMessage.style.color = 'var(--danger)';
                errorMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
                
                // Limpar o campo de senha
                document.getElementById('password').value = '';
            }
        });
    }
    
    // Verificar se o usuário já está logado
    function checkLoginStatus() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const currentPage = window.location.pathname.split('/').pop();
        
        if (isLoggedIn === 'true') {
            // Se estiver na página de login mas já estiver logado, redirecionar para o dashboard
            if (currentPage === 'index.html' || currentPage === '') {
                window.location.href = 'dashboard.html';
            }
        } else {
            // Se não estiver logado e tentar acessar qualquer página que não seja o login, redirecionar para o login
            if (currentPage !== 'index.html' && currentPage !== '') {
                window.location.href = 'index.html';
            }
        }
    }
    
    // Verificar status de login ao carregar a página
    checkLoginStatus();
    
    // Adicionar evento de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Limpar o status de login
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('username');
            
            // Redirecionar para a página de login
            window.location.href = 'index.html';
        });
    }
    
    // Função para simular login bem-sucedido (para desenvolvimento)
    function simulateSuccessfulLogin() {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', correctUsername);
    }
    
    // Comentar esta linha em produção
    // simulateSuccessfulLogin();
});
