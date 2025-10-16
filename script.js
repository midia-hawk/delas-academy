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
    const numeroWhatsApp = '5534997152921';
    const mensagem = 'Olá! Quero garantir minha vaga no Delas Academy!';
    
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

// Função para detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
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

// Inicializar funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
});

// Adicionar CSS para animações customizadas
const animationCSS = `
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
