// 1. DATABASE (Simulação de dados)
const futsalContent = [
    {
        id: 1,
        titulo: "Drible de Sola",
        img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400",
        desc: "O controle absoluto usando a planta do pé."
    },
    {
        id: 2,
        titulo: "Rodízio Tático",
        img: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=400",
        desc: "Movimentação constante para confundir a defesa."
    }
];

// 2. RENDERIZADOR (Garante flexibilidade)
function renderCards() {
    const container = document.querySelector('#gallery-container');
    container.innerHTML = futsalContent.map(item => `
        <article class="card scroll-reveal">
            <img src="${item.img}" alt="${item.titulo}" style="width:100%; border-radius: var(--radius)">
            <h3>${item.titulo}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');
}

// 3. ACESSIBILIDADE DINÂMICA
let baseSize = 16;
document.getElementById('font-up').addEventListener('click', () => {
    baseSize += 2;
    document.documentElement.style.setProperty('--font-size', baseSize + 'px');
});

document.getElementById('contrast-toggle').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// 4. OBSERVAÇÃO DE SCROLL (Scroll Reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
});
