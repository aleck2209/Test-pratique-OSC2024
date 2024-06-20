// Tableau contenant des restaurants fictifs
const restaurants = [
    {
        name: "La Fourchette",
        cuisine: "Française",
        image: "assets/image1.jpg"
    },
    {
        name: "Ichiraku",
        cuisine: "Japonaise",
        image: "assets/image2.jpg"
    },
    {
        name: "Chez Dialo",
        cuisine: "Sénégalaise",
        image: "assets/image3.jpg"
    },
    {
        name: "El floco",
        cuisine: "Espagnole",
        image: "assets/image4.jpg"
    },
    {
        name: "The Burger",
        cuisine: "Américaine",
        image: "assets/image5.jpg"
    }
];

// Fonction pour ajouter dynamiquement les cartes de restaurant à la grille
function populateRestaurantGrid() {
    const grid = document.getElementById('restaurant-grid');

    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <div class="card h-100">
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <div class="card-body">
                    <h2>${restaurant.name}</h2>
                    <p>${restaurant.cuisine}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Appeler la fonction pour remplir la grille au chargement de la page
document.addEventListener('DOMContentLoaded', populateRestaurantGrid);
