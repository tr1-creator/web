function scrollLeft(containerId) {
    const container = document.getElementById(containerId);
    container.scrollBy({
      left: -600, 
        behavior: 'smooth'
    });
}

function scrollRight(containerId) {
    const container = document.getElementById(containerId);
    container.scrollBy({
        left: 300, 
        behavior: 'smooth'
    });
}

// Array de ejemplo de productos
const products = [
    { codigo: '01', nombre: 'Producto 1' },
    { codigo: '02', nombre: 'Producto 2' },
    { codigo: '03', nombre: 'Producto 3' },
    { codigo: '04', nombre: 'Producto 4' }
];

// Función para mostrar los productos
function showProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card', 'mb-3');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const productName = document.createElement('h5');
        productName.classList.add('card-title');
        productName.textContent = product.nombre;

        const productCode = document.createElement('p');
        productCode.classList.add('card-text');
        productCode.textContent = `Código: ${product.codigo}`;

        cardBody.appendChild(productName);
        cardBody.appendChild(productCode);
        productCard.appendChild(cardBody);

        productList.appendChild(productCard);
    });
}

// Mostrar todos los productos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    showProducts(products);
});

// Manejar la búsqueda cuando se envía el formulario
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchInput === '') {
        showProducts(products); // Mostrar todos los productos si el campo de búsqueda está vacío
    } else {
        const filteredProducts = products.filter(product => product.codigo.toLowerCase() === searchInput);
        if (filteredProducts.length > 0) {
            // Redireccionar a una página en blanco al encontrar el producto por código
            window.open('about:blank', '_blank');
        } else {
            alert('Producto no encontrado'); // Mostrar un mensaje si no se encuentra el producto
        }
    }
});
