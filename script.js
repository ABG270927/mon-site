let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById("cart");
    const totalElement = document.getElementById("total");

    cartElement.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} FCFA`;
        cartElement.appendChild(li);
    });

    totalElement.textContent = total;
}
