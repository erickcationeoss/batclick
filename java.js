document.addEventListener('DOMContentLoaded', () => {
    // Efeito de partículas minimalista
    const particles = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(255, 51, 102, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Animação flutuante
        particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particles.appendChild(particle);
    }
    
    // Adiciona keyframes dinamicamente
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(${Math.random() * 50 - 25}px) translateX(${Math.random() * 50 - 25}px); }
        }
    `;
    document.head.appendChild(style);
    
    // Efeito de interação com o botão
    const exploreBtn = document.getElementById('exploreBtn');
    
    exploreBtn.addEventListener('mouseenter', () => {
        document.querySelector('.container').style.transform = 'rotateY(10deg) rotateX(10deg) scale(1.05)';
    });
    
    exploreBtn.addEventListener('mouseleave', () => {
        document.querySelector('.container').style.transform = 'rotateY(5deg) rotateX(5deg)';
    });
    
    exploreBtn.addEventListener('click', () => {
        // Efeito de transição
        document.body.style.backgroundColor = '#ff3366';
        document.querySelector('.container').style.opacity = '0';
        document.querySelector('.container').style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            alert('A jornada começa com um simples passo.');
            document.body.style.backgroundColor = '';
            document.querySelector('.container').style.opacity = '';
            document.querySelector('.container').style.transform = '';
        }, 500);
    });
    
    // Efeito de parallax sutil
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 20;
        const y = (window.innerHeight / 2 - e.pageY) / 20;
        document.querySelector('.container').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});