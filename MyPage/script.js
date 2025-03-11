// Variables globales
let cart = [];
let totalPrice = 0;

// Función para añadir productos al carrito
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    totalPrice += price;
    updateCart();
}

// Función para actualizar el contenido del carrito
function updateCart() {
    // Actualizar el número de productos en el carrito
    document.getElementById("cart-count").textContent = cart.length;

    // Actualizar los productos en el carrito
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    // Actualizar el total
    document.getElementById("total-price").textContent = `Total: $${totalPrice}`;
}

// Función para mostrar el carrito
function toggleCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
}

// Función para proceder al checkout
function proceedToCheckout() {
    const checkoutModal = document.getElementById("checkout-modal");
    checkoutModal.style.display = "flex";
}

// Función para cerrar el formulario de pago
function closeCheckout() {
    const checkoutModal = document.getElementById("checkout-modal");
    checkoutModal.style.display = "none";
}

// Validación del formulario de pago
document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Pago realizado con éxito!");
    cart = [];
    totalPrice = 0;
    updateCart();
    closeCheckout();
});
