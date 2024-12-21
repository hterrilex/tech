// Inicializar carrito desde sessionStorage o crear uno vacío
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Actualizar la vista del carrito
function updateCartView() {
    const cartItems = document.getElementById('cart-items'); // Lista de productos
    const totalPrice = document.getElementById('total-price'); // Total del precio

    // Limpiar contenido actual
    cartItems.innerHTML = '';
    let total = 0;

    // Recorrer productos en el carrito
    cart.forEach((item, index) => {
        total += item.price * item.quantity; // Calcular el total
        cartItems.innerHTML += `
            <li>
                ${item.name} - $${item.price} x ${item.quantity}
                <button onclick="removeFromCart(${index})">Eliminar</button>
            </li>
        `;
    });

    // Actualizar el total
    totalPrice.textContent = total;
}

// Agregar producto al carrito
function addToCart(name, price) {
    // Buscar si el producto ya existe en el carrito
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // Si existe, incrementar la cantidad
        existingItem.quantity++;
    } else {
        // Si no existe, agregar un nuevo producto
        cart.push({ name, price, quantity: 1 });
    }

    // Guardar carrito en sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar la vista del carrito
    updateCartView();
}

// Eliminar producto del carrito
function removeFromCart(index) {
    // Eliminar producto según el índice
    cart.splice(index, 1);

    // Guardar carrito actualizado en sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar la vista del carrito
    updateCartView();
}

// Vaciar carrito
function clearCart() {
    // Vaciar la lista de productos
    cart = [];

    // Guardar el carrito vacío en sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar la vista del carrito
    updateCartView();
}

// Simular el proceso de pago
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. No puedes realizar el pago.');
    } else {
        alert('¡Gracias por tu compra! El proceso de pago ha comenzado.');
        // Aquí puedes redirigir a una página de pago si es necesario
        // window.location.href = '/pagina-de-pago';
    }
}

// Cargar la vista inicial del carrito al cargar la página
updateCartView();
