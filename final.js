const toggleIcon = document.querySelector('.toggle_icon');
const navbar = document.querySelector('.navbar');
toggleIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
function addToCart() {
    const quantity = document.querySelector('.quantity_input').value;
    const color = document.querySelector('.color_select').value;
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('color', color);
    window.location.href = 'cart.html';
}
function buyNow() {
    const quantity = document.querySelector('.quantity_input').value;
    const color = document.querySelector('.color_select').value;
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('color', color);
    window.location.href = 'checkout.html';
}
window.onload = function updateCart() {
    const quantity = localStorage.getItem('quantity') || 1;
    const color = localStorage.getItem('color') || '6mm Rhodochrosite';
    document.getElementById('quantity_selection').value = quantity;
    document.getElementById('color_selection').textContent = `Metal color: ${color}`;
    const pricePerItem = 8.38;
    const subtotal = pricePerItem * quantity;
    const tax = subtotal * 0.1;
    const total = subtotal + tax + 4;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summary_subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('summary_tax').textContent = `Tax: $${tax.toFixed(2)}`;
    document.getElementById('summary_total').textContent = `AUD $${total.toFixed(2)}`;
    localStorage.setItem('total', total.toFixed(2));
}
function updateCheckout() {
    const quantity = localStorage.getItem('quantity')
    const pricePerItem = 8.38;
    const subtotal = pricePerItem * quantity;
    const tax = subtotal * 0.1;
    const total = subtotal + tax + 4;
    document.getElementById('checkout_subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkout_tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkout_total').textContent = `AUD $${total.toFixed(2)}`;
}
function validateForm() {
    const form = document.getElementById('checkout_form');
    let valid = true;
    [...form.elements].forEach(element => {
        if (element.type !== 'submit' && element.value === '') {
            valid = false;
        }
    });
    if (!valid) {
        alert('Please fill in all the fields.');
        return;
    }
    const shipping = document.querySelector('input[name="shipping"]:checked').value;
    if (shipping === 'express') {
        document.getElementById('checkout_delivery').textContent = '$11.00';
        const total = parseFloat(localStorage.getItem('total')) + 7;
        document.getElementById('checkout_total').textContent = `AUD $${total.toFixed(2)}`;
    }
    window.location.href = 'thankyou.html';
}
function updateCartValues() {
    const quantity = document.getElementById('quantity_selection').value;
    const pricePerItem = 8.38;
    const subtotal = pricePerItem * quantity;
    const tax = subtotal * 0.1;
    const total = subtotal + tax + 4;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summary_subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('summary_tax').textContent = `Tax: $${tax.toFixed(2)}`;
    document.getElementById('summary_total').textContent = `AUD $${total.toFixed(2)}`;
    localStorage.setItem('total', total.toFixed(2));
    localStorage.setItem('quantity', quantity);
}
