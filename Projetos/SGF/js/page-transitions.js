// Adiciona transições de página
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe para animação de entrada na página
    document.body.classList.add('page-transition');
    
    // Configura transições suaves para links de navegação
    const links = document.querySelectorAll('a[href]:not([target="_blank"])');
    
    links.forEach(link => {
        // Ignora links de ações como logout
        if (link.id === 'logoutBtn') return;
        
        link.addEventListener('click', function(e) {
            // Verifica se é um link interno
            const href = this.getAttribute('href');
            if (href.startsWith('#') || href.includes('javascript:')) return;
            
            e.preventDefault();
            const destination = this.getAttribute('href');
            
            // Animação de saída
            document.body.classList.add('page-exit');
            
            // Redireciona após a animação
            setTimeout(function() {
                window.location.href = destination;
            }, 400);
        });
    });
});
