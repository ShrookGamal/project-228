const menuIcon = document.getElementById('menuIcon');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-bar ul li a');
const header = document.querySelector('header');
if (menuIcon) {
    menuIcon.addEventListener('click', () => navLinks.classList.add('active'));
}
if (closeMenu) {
    closeMenu.addEventListener('click', () => navLinks.classList.remove('active'));
}
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(240, 244, 252, 0.98)'; 
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.padding = '15px 0';
        header.style.boxShadow = 'none';
    }
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    const aboutImg = document.querySelector('.about-image-container');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutImg && aboutImg.getBoundingClientRect().top < windowHeight - revealPoint) {
        aboutImg.style.opacity = '1';
        aboutImg.style.transform = 'translateX(0)';
        aboutContent.style.opacity = '1';
        aboutContent.style.transform = 'translateX(0)';
    }
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        if (card.getBoundingClientRect().top < windowHeight - 100) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach((card, index) => {
        if (card.getBoundingClientRect().top < windowHeight - 100) {
            setTimeout(() => {
                card.classList.add('show');
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
    const leftCard = document.querySelector('.reveal-left');
    const rightCard = document.querySelector('.reveal-right');
    if (leftCard && leftCard.getBoundingClientRect().top < windowHeight - 100) {
        leftCard.style.opacity = "1";
        leftCard.style.transform = "translateX(0)";
        rightCard.style.opacity = "1";
        rightCard.style.transform = "translateX(0)";
    }
};
const setInitialStyles = () => {
    const aboutImg = document.querySelector('.about-image-container');
    const aboutContent = document.querySelector('.about-content');
    if(aboutImg) aboutImg.style.cssText = "opacity:0; transform:translateX(50px); transition:1s ease;";
    if(aboutContent) aboutContent.style.cssText = "opacity:0; transform:translateX(-50px); transition:1s ease;";
    document.querySelectorAll('.service-card, .why-card').forEach(el => {
        el.style.cssText = "opacity:0; transform:translateY(40px); transition:all 0.6s ease-out;";
    });
    const leftCard = document.querySelector('.reveal-left');
    const rightCard = document.querySelector('.reveal-right');
    if(leftCard) leftCard.style.cssText = "opacity:0; transform:translateX(50px); transition:1s;";
    if(rightCard) rightCard.style.cssText = "opacity:0; transform:translateX(-50px); transition:1s;";
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    setInitialStyles();
    revealOnScroll();
});
const filterButtons = document.querySelectorAll('.control');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.control.active').classList.remove('active');
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            item.style.animation = "none"; 
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => item.style.animation = "fadeIn 0.5s ease forwards", 10);
            } else {
                item.style.display = 'none';
            }
        });
    });
});
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const whatsappNumber = "966537445483";
        const text = `السلام عليكم، أريد طلب خدمة من شركة أسيل للمقاولات:%0A%0A` +
                     `*الاسم:* ${name}%0A` +
                     `*الجوال:* ${phone}%0A` +
                     `*الخدمة:* ${service}%0A` +
                     `*التفاصيل:* ${message}`;

        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    });
}