
// Função para mostrar alerta ao clicar no menu
function showMsg(secao) {
    console.log("Navegando para: " + secao);
    // Exemplo de interação simples solicitada
    // alert("Você está indo para a seção: " + secao); 
}

// Efeito de revelação simples ao rolar a página
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Mensagem de boas-vindas no console
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site de Futsal carregado com sucesso!");
});
