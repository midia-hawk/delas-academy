// Inicialização dos ícones Lucide
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar ícones Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Adicionar animações aos elementos quando entram na viewport
    observeElements();
    
    // Adicionar efeito de scroll no header
    handleHeaderScroll();
});

// Função para scroll suave para seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para abrir WhatsApp com mensagens personalizadas
function abrirWhatsApp(tipo) {
    const numeroWhatsApp = '5534999999999';
    let mensagem = '';
    
    switch(tipo) {
        case 'desconto':
            mensagem = 'Olá! Quero garantir minha vaga com desconto antecipado na Virada Delas!';
            break;
        case 'virada':
            mensagem = 'Olá! Quero viver minha virada agora!';
            break;
        case 'contato':
            mensagem = 'Olá! Gostaria de saber mais sobre a Virada de Chave.';
            break;
        default:
            mensagem = 'Olá! Tenho interesse na Virada de Chave.';
    }
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Função para observar elementos e adicionar animações
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar cards e seções
    const elementsToObserve = document.querySelectorAll('.card, .section-title, .section-description, .hero-text, .hero-image');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

// Função para efeito de scroll no header
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    let scrolled = false;
    
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        
        if (isScrolled !== scrolled) {
            scrolled = isScrolled;
            
            if (scrolled) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.borderBottom = '1px solid rgba(226, 232, 240, 0.5)';
                header.style.position = 'fixed';
                header.style.top = '0';
                header.style.left = '0';
                header.style.right = '0';
                header.style.zIndex = '1000';
                header.style.transition = 'all 0.3s ease';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.borderBottom = 'none';
                header.style.position = 'relative';
            }
        }
    });
}

// Função para adicionar efeitos de hover nos cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
});

// Função para adicionar efeitos de parallax suave
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-decoration-1, .hero-decoration-2');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Função para contador de vagas (simulação)
function iniciarContadorVagas() {
    const vagasRestantes = 8; // Número fixo para demonstração
    const elementosVagas = document.querySelectorAll('.badge-large');
    
    elementosVagas.forEach(elemento => {
        if (elemento.textContent.includes('Mulheres')) {
            elemento.textContent = `${vagasRestantes} Mulheres`;
        }
    });
}

// Função para adicionar efeito de digitação no título principal (desabilitada)
function efeitoDigitacao() {
    // Função desabilitada para evitar problemas com a exibição do título
    // O título será exibido normalmente sem animação de digitação
    return;
}

// Função para validar formulários (se houver)
function validarFormulario(form) {
    const campos = form.querySelectorAll('input[required], textarea[required]');
    let valido = true;
    
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            campo.style.borderColor = 'var(--destructive)';
            valido = false;
        } else {
            campo.style.borderColor = 'var(--border)';
        }
    });
    
    return valido;
}

// Função para adicionar efeito de loading nos botões
function adicionarEfeitoLoading() {
    const botoes = document.querySelectorAll('.btn-primary, .btn-outline');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', function(e) {
            // Não adicionar loading para links do WhatsApp
            if (this.getAttribute('onclick') && this.getAttribute('onclick').includes('abrirWhatsApp')) {
                return;
            }
            
            const textoOriginal = this.innerHTML;
            this.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Carregando...';
            this.disabled = true;
            
            // Restaurar após 2 segundos (simulação)
            setTimeout(() => {
                this.innerHTML = textoOriginal;
                this.disabled = false;
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 2000);
        });
    });
}

// Função para adicionar efeitos de entrada escalonados
function animacoesEscalonadas() {
    const elementos = document.querySelectorAll('.problema-card, .ementa-card, .depoimentos-cards .card');
    
    elementos.forEach((elemento, index) => {
        elemento.style.animationDelay = `${index * 0.2}s`;
    });
}

// Função para detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Função para otimizar animações em dispositivos móveis
function otimizarParaMobile() {
    if (isMobile()) {
        // Reduzir animações em dispositivos móveis
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Função para lazy loading de imagens
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Função para adicionar efeitos de partículas (opcional)
function adicionarParticulas() {
    // Implementação simples de partículas flutuantes
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary);
            border-radius: 50%;
            opacity: 0.3;
            animation: flutuar ${5 + Math.random() * 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        hero.appendChild(particula);
    }
    
    // Adicionar CSS da animação
    if (!document.querySelector('#particulas-css')) {
        const style = document.createElement('style');
        style.id = 'particulas-css';
        style.textContent = `
            @keyframes flutuar {
                0% { transform: translateY(0px) rotate(0deg); }
                100% { transform: translateY(-100vh) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Inicializar todas as funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    iniciarContadorVagas();
    animacoesEscalonadas();
    otimizarParaMobile();
    lazyLoadImages();
    
    // Adicionar partículas apenas em telas maiores
    if (!isMobile()) {
        adicionarParticulas();
    }
    
    // Efeito de digitação removido para evitar problemas na exibição do título
    // setTimeout(efeitoDigitacao, 500);
});

// Função para melhorar a performance
function otimizarPerformance() {
    // Debounce para eventos de scroll
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 16); // ~60fps
    };
}

// Inicializar otimizações de performance
otimizarPerformance();

// Função para adicionar suporte a gestos em dispositivos móveis
function adicionarSuporteGestos() {
    if (!isMobile()) return;
    
    let startY = 0;
    let startX = 0;
    
    document.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', function(e) {
        const endY = e.changedTouches[0].clientY;
        const endX = e.changedTouches[0].clientX;
        const diffY = startY - endY;
        const diffX = startX - endX;
        
        // Detectar swipe para cima (scroll para próxima seção)
        if (Math.abs(diffY) > Math.abs(diffX) && diffY > 50) {
            const secoes = ['programa', 'investimento'];
            const secaoAtual = window.location.hash.replace('#', '');
            const indiceAtual = secoes.indexOf(secaoAtual);
            
            if (indiceAtual < secoes.length - 1) {
                scrollToSection(secoes[indiceAtual + 1]);
            }
        }
    });
}

// Inicializar suporte a gestos
adicionarSuporteGestos();

// Função para analytics simples (opcional)
function trackEvent(evento, dados = {}) {
    // Implementação básica de tracking
    console.log('Evento:', evento, dados);
    
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    if (typeof gtag !== 'undefined') {
        gtag('event', evento, dados);
    }
}

// Adicionar tracking aos botões importantes
document.addEventListener('DOMContentLoaded', function() {
    const botoesImportantes = document.querySelectorAll('[onclick*="abrirWhatsApp"]');
    
    botoesImportantes.forEach(botao => {
        botao.addEventListener('click', function() {
            const tipo = this.getAttribute('onclick').match(/abrirWhatsApp\('(.+?)'\)/);
            if (tipo) {
                trackEvent('whatsapp_click', { tipo: tipo[1] });
            }
        });
    });
});

// Adicionar CSS para animações customizadas
const animationCSS = `
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;

// Adicionar CSS de animações ao documento
if (!document.querySelector('#animation-css')) {
    const style = document.createElement('style');
    style.id = 'animation-css';
    style.textContent = animationCSS;
    document.head.appendChild(style);
}
