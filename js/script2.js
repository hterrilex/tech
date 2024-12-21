// Productos predefinidos
const products = [
    { name: 'Producto 1', price: 10, imageUrl: 'https://via.placeholder.com/50', quantity: 0 },
    { name: 'Producto 2', price: 20, imageUrl: 'https://via.placeholder.com/50', quantity: 0 }
  ];
  
  // Obtener el carrito desde localStorage o iniciar uno vacío
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Función para actualizar el carrito en el DOM
  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpiar el carrito actual
  
    // Si el carrito está vacío
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
      return;
    }
  
    // Mostrar los productos en el carrito
    cart.forEach((product, index) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('cart-item');
      
      // Contenido del producto
      productDiv.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" width="50" height="50">
        <p>${product.name} - $${product.price}</p>
        <button onclick="removeProduct(${index})">🗑️</button>
        <button onclick="increaseQuantity(${index})">+</button>
        <span>Cantidad: ${product.quantity}</span>
        <button onclick="decreaseQuantity(${index})">-</button>
      `;
      cartItemsContainer.appendChild(productDiv);
    });
  }
  
  // Función para agregar un producto al carrito
  function addProductToCart(product) {
    const existingProduct = cart.find(item => item.name === product.name);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCart();
  }
  
  // Función para aumentar la cantidad de un producto
  function increaseQuantity(index) {
    cart[index].quantity += 1;
    saveCart();
    updateCart();
  }
  
  // Función para reducir la cantidad de un producto
  function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    saveCart();
    updateCart();
  }
  
  // Función para eliminar un producto del carrito
  function removeProduct(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
  }
  
  // Función para eliminar un producto desde la lista de productos
  function removeProductFromProducts(product) {
    cart = cart.filter(item => item.name !== product.name);
    saveCart();
    updateCart();
  }
  
  // Función para guardar el carrito en localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Función para vaciar el carrito
  function emptyCart() {
    cart = [];
    saveCart();
    updateCart();
  }
  
  // Inicializar el carrito al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    updateCart();
  });
  