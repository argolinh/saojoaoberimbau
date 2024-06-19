// Função para carregar atrações dinamicamente
function loadAttractions() {
    // Substitua pela URL correta do seu backend
    const apiUrl = 'http://localhost:5000/api/attractions';

    fetch(apiUrl)
        .then(response => response.json())
        .then(attractions => {
            const attractionsList = document.getElementById('attractions-list');
            attractions.forEach(attraction => {
                const li = document.createElement('li');
                li.textContent = `${attraction.time} - ${attraction.name}`;
                attractionsList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao buscar atrações:', error));
}

// Função para alternar o menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Evento para carregar atrações ao carregar a página
document.addEventListener('DOMContentLoaded', loadAttractions);