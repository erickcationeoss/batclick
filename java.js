document.addEventListener('DOMContentLoaded', () => {
    // Efeito de partículas (morcegos)
    const particles = document.getElementById('particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '20px';
        particle.style.height = '20px';
        particle.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23ffb300\'><path d=\'M12,2L1,12h3v9h6v-6h4v6h6v-9h3L12,2z\'/></svg>")';
        particle.style.backgroundSize = 'contain';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.filter = 'drop-shadow(0 0 5px #ffb300)';
        particle.style.opacity = '0.6';
        
        // Animação de voo de morcego
        const duration = Math.random() * 10 + 5;
        particle.style.animation = `batFly ${duration}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particles.appendChild(particle);
    }
    
    // Adiciona keyframes dinamicamente
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes batFly {
            0% { 
                transform: translate(0, 0) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { 
                transform: translate(${Math.random() * 500 - 250}px, ${Math.random() * 500 - 250}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Contador de cliques
    const counter = document.getElementById('counter');
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const batSound = document.getElementById('batSound');
    let count = 0;
    
    // Carrega contador do localStorage
    if (localStorage.getItem('batmanClicks')) {
        count = parseInt(localStorage.getItem('batmanClicks'));
        counter.textContent = count;
    }
    
    clickBtn.addEventListener('click', () => {
        count++;
        counter.textContent = count;
        localStorage.setItem('batmanClicks', count);
        
        // Efeito visual
        counter.style.animation = 'none';
        void counter.offsetWidth;
        counter.style.animation = 'pulse 0.3s';
        
        // Efeito sonoro (batarang)
        batSound.currentTime = 0;
        batSound.play();
        
        // Efeito de morcego ao clicar
        createBatEffect();
    });
    
    resetBtn.addEventListener('click', () => {
        // Efeito visual dramático
        counter.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        counter.style.transform = 'scale(0.1) rotate(180deg)';
        counter.style.opacity = '0';
        counter.style.color = '#d10000';
        
        setTimeout(() => {
            count = 0;
            counter.textContent = count;
            localStorage.setItem('batmanClicks', count);
            
            counter.style.transform = 'scale(1) rotate(0deg)';
            counter.style.opacity = '1';
            counter.style.color = 'var(--bat-yellow)';
            
            // Efeito de explosão de morcegos
            createBatExplosion();
        }, 500);
    });
    
    // Efeito de parallax
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 20;
        const y = (window.innerHeight / 2 - e.pageY) / 20;
        document.querySelector('.container').style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
    });
    
    // Função para criar efeito de morcego ao clicar
    function createBatEffect() {
        const bat = document.createElement('div');
        bat.style.position = 'absolute';
        bat.style.width = '30px';
        bat.style.height = '30px';
        bat.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23ffb300\'><path d=\'M12,2L1,12h3v9h6v-6h4v6h6v-9h3L12,2z\'/></svg>")';
        bat.style.backgroundSize = 'contain';
        bat.style.top = `${clickBtn.offsetTop + clickBtn.offsetHeight/2}px`;
        bat.style.left = `${clickBtn.offsetLeft + clickBtn.offsetWidth/2}px`;
        bat.style.filter = 'drop-shadow(0 0 5px #ffb300)';
        bat.style.zIndex = '100';
        bat.style.pointerEvents = 'none';
        
        document.body.appendChild(bat);
        
        // Animação de voo
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        bat.style.transition = `all 0.7s cubic-bezier(0.1, 0.8, 0.2, 1)`;
        bat.style.transform = `translate(${x}px, ${y}px) scale(0) rotate(360deg)`;
        bat.style.opacity = '0';
        
        // Remove após animação
        setTimeout(() => {
            document.body.removeChild(bat);
        }, 700);
    }
    
    // Função para criar explosão de morcegos ao resetar
    function createBatExplosion() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const bat = document.createElement('div');
                bat.style.position = 'absolute';
                bat.style.width = '25px';
                bat.style.height = '25px';
                bat.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23d10000\'><path d=\'M12,2L1,12h3v9h6v-6h4v6h6v-9h3L12,2z\'/></svg>")';
                bat.style.backgroundSize = 'contain';
                bat.style.top = `${counter.offsetTop + counter.offsetHeight/2}px`;
                bat.style.left = `${counter.offsetLeft + counter.offsetWidth/2}px`;
                bat.style.filter = 'drop-shadow(0 0 5px #d10000)';
                bat.style.zIndex = '100';
                bat.style.pointerEvents = 'none';
                
                document.body.appendChild(bat);
                
                const angle = Math.random() * Math.PI * 2;
                const distance = 30 + Math.random() * 150;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                bat.style.transition = `all 0.9s cubic-bezier(0.1, 0.8, 0.2, 1)`;
                bat.style.transform = `translate(${x}px, ${y}px) scale(0) rotate(360deg)`;
                bat.style.opacity = '0';
                
                setTimeout(() => {
                    document.body.removeChild(bat);
                }, 900);
            }, i * 50);
        }
    }
});