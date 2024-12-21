let cart = []; // Carrito inicial vacío

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach(product => {
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
      ${product.name} - $${product.price} x ${product.quantity}
    `;
    cartItems.appendChild(item);
  });

  updateCartTotal(); // Asegurar que se actualiza el total
}

// Función para actualizar el total acumulado
function updateCartTotal() {
  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const cartTotalElement = document.getElementById('cart-total');
  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
  const existingProduct = cart.find(product => product.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name: productName, price: parseFloat(productPrice), quantity: 1 });
  }

  updateCartDisplay();
}

// Función para eliminar una unidad de un producto
function removeFromCart(productName) {
  const productIndex = cart.findIndex(product => product.name === productName);

  if (productIndex !== -1) {
    const product = cart[productIndex];
    product.quantity -= 1;

    if (product.quantity === 0) {
      cart.splice(productIndex, 1);
    }
  }

  updateCartDisplay();
}

// Función para vaciar el carrito
function emptyCart() {
  cart = [];
  updateCartDisplay();
}

// Función para simular el pago del carrito
function payCart() {
  if (cart.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de pagar.');
    return;
  }

  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  alert(`Pago realizado con éxito. Total a pagar: $${total.toFixed(2)}`);
  emptyCart();
}

// Asignar eventos a los botones
document.querySelectorAll('.product').forEach(productElement => {
  const name = productElement.dataset.name;
  const price = productElement.dataset.price;

  productElement.querySelector('.add').addEventListener('click', () => addToCart(name, price));
  productElement.querySelector('.remove').addEventListener('click', () => removeFromCart(name));
  productElement.querySelector('.delete').addEventListener('click', () => {
    cart = cart.filter(product => product.name !== name);
    updateCartDisplay();
  });
});

