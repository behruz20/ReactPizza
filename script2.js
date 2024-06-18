document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    const totalItemsElement = document.getElementById('totalItems');
    const totalPriceElement = document.getElementById('totalPrice');

    function renderCart() {
        cartContainer.innerHTML = '';
        if (cartItems.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <h1>Корзина пуста <span>😕</span></h1>
                    <p>Вероятнее всего, вы не заказывали ещё пиццу.<br>
                    Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
                    <img src="assets/img/nnn.png" alt="" class="empty-cart-img">
                </div>
            `;
            updateSummary();
            return;
        }

        cartItems.forEach((pizza, index) => {
            const pizzaElement = document.createElement('div');
            pizzaElement.classList.add('pizza');
            pizzaElement.dataset.index = index;
            pizzaElement.innerHTML = `
                <img src="${pizza.img}" alt="${pizza.name}">
                <h3>${pizza.name}</h3>
                <div class='div'>
                    <button class="decrease" data-index="${index}">-</button>
                    <span class="quantity">${pizza.number}</span>
                    <button class="increase" data-index="${index}">+</button>
                </div>
                <p>${pizza.price * pizza.number} ₽</p>
                <button class="remove" data-index="${index}">x</button>
            `;
            cartContainer.appendChild(pizzaElement);
        });

        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                cartItems[index].number++;
                updateCart();
            });
        });

        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                if (cartItems[index].number > 1) {
                    cartItems[index].number--;
                } else {
                    cartItems.splice(index, 1);
                }
                updateCart();
            });
        });

        document.querySelectorAll('.remove').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                cartItems.splice(index, 1);
                updateCart();
            });
        });

        updateSummary();
    }

    function updateSummary() {
        const totalItems = cartItems.reduce((sum, item) => sum + item.number, 0);
        const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.number), 0);
        
        totalItemsElement.textContent = `${totalItems} шт.`;
        totalPriceElement.textContent = `${totalPrice} ₽`;
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCart();
    }

    renderCart();
});

function goBack() {
    window.history.back();
}

document.querySelector('.mers').addEventListener('click', () => {
    window.location.href = 'index.html';
});
document.querySelector('.mers1').addEventListener('click', () => {
    window.location.href = 'index3.html';
});