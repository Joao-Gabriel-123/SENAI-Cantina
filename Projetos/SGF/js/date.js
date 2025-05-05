// Sistema de data simulado
document.addEventListener('DOMContentLoaded', function() {
    const dateDisplay = document.getElementById('currentDate');
    
    // Função para formatar a data no formato brasileiro (DD/MM/AAAA)
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        
        return `Data: ${day}/${month}/${year}`;
    }
    
    // Atualizar a data exibida
    function updateDate() {
        if (dateDisplay) {
            const currentDate = new Date();
            dateDisplay.textContent = formatDate(currentDate);
        }
    }
    
    // Atualizar a data imediatamente
    updateDate();
    
    // Atualizar a data a cada minuto (para manter atualizado em sessões longas)
    setInterval(updateDate, 60000);
});
