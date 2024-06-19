// Função para abrir e fechar o menu lateral
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar1');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');

    function toggleMenu() {
        sidebar.classList.toggle('open');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slider-item');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        slider.nextElementSibling.addEventListener('click', nextSlide);
        slider.previousElementSibling.addEventListener('click', prevSlide);

        showSlide(currentIndex);
        setInterval(nextSlide, 5000); // Trocar de slide a cada 5 segundos
    });
});


// Dados dos cantores por dia da semana
const cantoresDia1 = [
    { name: "Cantor 1 - Quarta", description: "Descrição do Cantor 1 para Quarta", image: "https://scontent.cdninstagram.com/v/t39.30808-6/447674565_18268907476239792_3173327097760166145_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=0ppJk-hS5r0Q7kNvgH5WYpz&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM4NTA0NzA5MzY0NTg1MDAyOA%3D%3D.2-ccb7-5&oh=00_AYDkrlkdfNlOzNmbmsI2EU-mlwn8dY4GxCcEEtzfMYeViw&oe=66792CEF&_nc_sid=10d13b" },
    { name: "Cantor 2 - Quarta", description: "Descrição do Cantor 2", image: "images/cantor2.jpg" },
    { name: "Cantor 3 - Quarta", description: "Descrição do Cantor 3 para Quarta", image: "images/cantor3.jpg" },
    { name: "Cantor 4 - Quarta", description: "Descrição do Cantor 4 para Quarta", image: "images/cantor4.jpg" },
    { name: "Cantor 5 - Quarta", description: "Descrição do Cantor 5 para Quarta", image: "images/cantor5.jpg" },
    { name: "Cantor 6 - Quarta", description: "Descrição do Cantor 6 para Quarta", image: "images/cantor6.jpg" },
    { name: "Cantor 7 - Quarta", description: "Descrição do Cantor 7 para Quarta", image: "images/cantor7.jpg" },
    { name: "Cantor 8 - Quarta", description: "Descrição do Cantor 8 para Quarta", image: "images/cantor8.jpg" },
    { name: "Cantor 9 - Quarta", description: "Descrição do Cantor 9 para Quarta", image: "images/cantor9.jpg" },
    { name: "Cantor 10 - Quarta", description: "Descrição do Cantor 10 para Quarta", image: "images/cantor10.jpg" }
];

const cantoresDia2 = [
    { name: "Cantor 1 - Quinta", description: "Descrição do Cantor 1 para Quinta", image: "https://scontent.cdninstagram.com/v/t39.30808-6/447693977_18268907491239792_8721792698591070929_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=VxChsLLKy1AQ7kNvgHVEb-f&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM4NTA0NzA5MzMzNTQ4OTA5OQ%3D%3D.2-ccb7-5&oh=00_AYCn3RLmGiVU9N5DcMFgTTmCfMV-Ut7AWEB34NyHfHnQoQ&oe=66791472&_nc_sid=10d13b" },
    { name: "Cantor 2 - Quinta", description: "Descrição do Cantor 2 para Quinta", image: "images/cantor2.jpg" },
    { name: "Cantor 3 - Quinta", description: "Descrição do Cantor 3 para Quinta", image: "images/cantor3.jpg" },
    { name: "Cantor 4 - Quinta", description: "Descrição do Cantor 4 para Quinta", image: "images/cantor4.jpg" },
    { name: "Cantor 5 - Quinta", description: "Descrição do Cantor 5 para Quinta", image: "images/cantor5.jpg" },
    { name: "Cantor 6 - Quinta", description: "Descrição do Cantor 6 para Quinta", image: "images/cantor6.jpg" },
    { name: "Cantor 7 - Quinta", description: "Descrição do Cantor 7 para Quinta", image: "images/cantor7.jpg" },
    { name: "Cantor 8 - Quinta", description: "Descrição do Cantor 8 para Quinta", image: "images/cantor8.jpg" },
    { name: "Cantor 9 - Quinta", description: "Descrição do Cantor 9 para Quinta", image: "images/cantor9.jpg" },
    { name: "Cantor 10 - Quinta", description: "Descrição do Cantor 10 para Quinta", image: "images/cantor10.jpg" }
];

const cantoresDia3 = [
    { name: "Cantor 1 - Sexta", description: "Descrição do Cantor 1 para Sexta", image: "https://scontent.cdninstagram.com/v/t39.30808-6/426468584_18268907494239792_4952454032479093627_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=LsSYgTo-lkoQ7kNvgFCZ2gL&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM4NTA0NzA5MzU0NTI1ODAzNA%3D%3D.2-ccb7-5&oh=00_AYAFPiQL0hyvYXyp_4rzkH5YmoJo6vDWHrcpPWbDRLFIjQ&oe=66793893&_nc_sid=10d13b" },
    { name: "Cantor 2 - Sexta", description: "Descrição do Cantor 2 para Sexta", image: "images/cantor2.jpg" },
    { name: "Cantor 3 - Sexta", description: "Descrição do Cantor 3 para Sexta", image: "images/cantor3.jpg" },
    { name: "Cantor 4 - Sexta", description: "Descrição do Cantor 4 para Sexta", image: "images/cantor4.jpg" },
    { name: "Cantor 5 - Sexta", description: "Descrição do Cantor 5 para Sexta", image: "images/cantor5.jpg" },
    { name: "Cantor 6 - Sexta", description: "Descrição do Cantor 6 para Sexta", image: "images/cantor6.jpg" },
    { name: "Cantor 7 - Sexta", description: "Descrição do Cantor 7 para Sexta", image: "images/cantor7.jpg" },
    { name: "Cantor 8 - Sexta", description: "Descrição do Cantor 8 para Sexta", image: "images/cantor8.jpg" },
    { name: "Cantor 9 - Sexta", description: "Descrição do Cantor 9 para Sexta", image: "images/cantor9.jpg" },
    { name: "Cantor 10 - Sexta", description: "Descrição do Cantor 10 para Sexta", image: "images/cantor10.jpg" }
];

const cantoresDia4 = [
    { name: "Cantor 1 - Sábado", description: "Descrição do Cantor 1 para Sábado", image: "https://scontent.cdninstagram.com/v/t39.30808-6/445002884_18268907503239792_6713044365128247946_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=cF4vFZ7iJC8Q7kNvgG2_sqf&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM4NTA0NzA5NDI3NDg0ODkzMg%3D%3D.2-ccb7-5&oh=00_AYA59n1zkt4fvx1C1Hz8ywFTgCAvDstTlA3azzMk2x4xxA&oe=66792197&_nc_sid=10d13b" },
    { name: "Cantor 2 - Sábado", description: "Descrição do Cantor 2 para Sábado", image: "images/cantor2.jpg" },
    { name: "Cantor 3 - Sábado", description: "Descrição do Cantor 3 para Sábado", image: "images/cantor3.jpg" },
    { name: "Cantor 4 - Sábado", description: "Descrição do Cantor 4 para Sábado", image: "images/cantor4.jpg" },
    { name: "Cantor 5 - Sábado", description: "Descrição do Cantor 5 para Sábado", image: "images/cantor5.jpg" },
    { name: "Cantor 6 - Sábado", description: "Descrição do Cantor 6 para Sábado", image: "images/cantor6.jpg" },
    { name: "Cantor 7 - Sábado", description: "Descrição do Cantor 7 para Sábado", image: "images/cantor7.jpg" },
    { name: "Cantor 8 - Sábado", description: "Descrição do Cantor 8 para Sábado", image: "images/cantor8.jpg" },
    { name: "Cantor 9 - Sábado", description: "Descrição do Cantor 9 para Sábado", image: "images/cantor9.jpg" },
    { name: "Cantor 10 - Sábado", description: "Descrição do Cantor 10 para Sábado", image: "images/cantor10.jpg" }
];

const cantoresDia5 = [
    { name: "Cantor 1 - Domingo", description: "Descrição do Cantor 1 para Domingo", image: "https://scontent.cdninstagram.com/v/t39.30808-6/445029464_18268907512239792_7132146543531011401_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=c8yXrkab7n4Q7kNvgHD2Apj&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM4NTA0NzA5NDM4NDAwODY1Mg%3D%3D.2-ccb7-5&oh=00_AYAKjBobV9vVBNYTmwUfFcM66UXv3Yv7emRyJS6CdNEXig&oe=66791606&_nc_sid=10d13b" },
    { name: "Cantor 2 - Domingo", description: "Descrição do Cantor 2 para Domingo", image: "images/cantor2.jpg" },
    { name: "Cantor 3 - Domingo", description: "Descrição do Cantor 3 para Domingo", image: "images/cantor3.jpg" },
    { name: "Cantor 4 - Domingo", description: "Descrição do Cantor 4 para Domingo", image: "images/cantor4.jpg" },
    { name: "Cantor 5 - Domingo", description: "Descrição do Cantor 5 para Domingo", image: "images/cantor5.jpg" },
    { name: "Cantor 6 - Domingo", description: "Descrição do Cantor 6 para Domingo", image: "images/cantor6.jpg" },
    { name: "Cantor 7 - Domingo", description: "Descrição do Cantor 7 para Domingo", image: "images/cantor7.jpg" },
    { name: "Cantor 8 - Domingo", description: "Descrição do Cantor 8 para Domingo", image: "images/cantor8.jpg" },
    { name: "Cantor 9 - Domingo", description: "Descrição do Cantor 9 para Domingo", image: "images/cantor9.jpg" },
    { name: "Cantor 10 - Domingo", description: "Descrição do Cantor 10 para Domingo", image: "images/cantor10.jpg" }
];

const cantoresDia6 = [
    { name: "Cantor 1 - Segunda", description: "Descrição do Cantor 1 para Segunda", image: "https://scontent.cdninstagram.com/v/t39.30808-6/448001360_18268907521239792_5822320929634122160_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=gnkEZK5C33sQ7kNvgFWcwpR&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM4NTA0NzA5MzIzNDc1MTU2Ng%3D%3D.2-ccb7-5&oh=00_AYAIPpDwxrK-p02SAM2qWRIg3xh4A6267JWM_bPnAjClRw&oe=6679133C&_nc_sid=10d13b" },
    { name: "Cantor 2 - Segunda", description: "Descrição do Cantor 2 para Segunda", image: "images/cantor2.jpg" },
    { name: "Cantor 3 - Segunda", description: "Descrição do Cantor 3 para Segunda", image: "images/cantor3.jpg" },
    { name: "Cantor 4 - Segunda", description: "Descrição do Cantor 4 para Segunda", image: "images/cantor4.jpg" },
    { name: "Cantor 5 - Segunda", description: "Descrição do Cantor 5 para Segunda", image: "images/cantor5.jpg" },
    { name: "Cantor 6 - Segunda", description: "Descrição do Cantor 6 para Segunda", image: "images/cantor6.jpg" },
    { name: "Cantor 7 - Segunda", description: "Descrição do Cantor 7 para Segunda", image: "images/cantor7.jpg" },
    { name: "Cantor 8 - Segunda", description: "Descrição do Cantor 8 para Segunda", image: "images/cantor8.jpg" },
    { name: "Cantor 9 - Segunda", description: "Descrição do Cantor 9 para Segunda", image: "images/cantor9.jpg" },
    { name: "Cantor 10 - Segunda", description: "Descrição do Cantor 10 para Segunda", image: "images/cantor10.jpg" }
];

// Função para carregar os cantores do dia específico
function loadCantores(day) {
    const slider = document.getElementById(`slider${day}`);
    slider.innerHTML = ''; // Limpar slider atual
    
    let cantores;
    switch (day) {
        case 1:
            cantores = cantoresDia1;
            break;
        case 2:
            cantores = cantoresDia2;
            break;
        case 3:
            cantores = cantoresDia3;
            break;
        case 4:
            cantores = cantoresDia4;
            break;
        case 5:
            cantores = cantoresDia5;
            break;
        case 6:
            cantores = cantoresDia6;
            break;
        default:
            cantores = [];
    }

    cantores.forEach((cantor, index) => {
        const div = document.createElement('div');
        div.className = 'slider-item';
        if (index === 0) div.classList.add('active');
        div.innerHTML = `
            <img src="${cantor.image}" alt="${cantor.name}">
            <h3>${cantor.name}</h3>
            <p>${cantor.description}</p>`;
        slider.appendChild(div);
    });
}

// Função para mostrar o cantor anterior no slider específico
function showPrevious(sliderId) {
    const items = document.querySelectorAll(`#${sliderId} .slider-item`);
    let currentSlide = Array.from(items).findIndex(item => item.classList.contains('active'));
    items[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    items[currentSlide].classList.add('active');
}

// Função para mostrar o próximo cantor no slider específico
function showNext(sliderId) {
    const items = document.querySelectorAll(`#${sliderId} .slider-item`);
    let currentSlide = Array.from(items).findIndex(item => item.classList.contains('active'));
    items[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % items.length;
    items[currentSlide].classList.add('active');
}

// Eventos para carregar cantores ao carregar a página para cada dia da semana
document.addEventListener('DOMContentLoaded', () => {
    loadCantores(1); // Carrega os cantores para Quarta-feira ao carregar a página inicialmente
    loadCantores(2); // Carrega os cantores para Quinta-feira ao carregar a página inicialmente
    loadCantores(3); // Carrega os cantores para Sexta-feira ao carregar a página inicialmente
    loadCantores(4); // Carrega os cantores para Sábado ao carregar a página inicialmente
    loadCantores(5); // Carrega os cantores para Domingo ao carregar a página inicialmente
    loadCantores(6); // Carrega os cantores para Segunda-feira ao carregar a página inicialmente
});
