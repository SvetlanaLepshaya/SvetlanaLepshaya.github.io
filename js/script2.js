/*function addToCart(btnAdd, productId) {
    const cart = document.querySelector(".cart-header-icon");
    const product = document.querySelector(`[productId = "${productId}"]`);
    const productImage = product.querySelector(".item-product__img");

}

function updateCart(btnAdd, productId, productAdd = true) {
    const cart = document.querySelector(".cart-header");
    const cartIcon = cart.querySelector(".cart-header-icon");
    const cartQuantity = cart.querySelector("span");
    const product = document.querySelector(`[data-cart-pid = "${productId}"]`);
    const productImage = product.querySelector(".item-product__img");
    const cartList = document.querySelector('.cartList');

    if (productAdd) {
        if (cartQuantity) {
            cartQuantity.innerHTML = ++cartQuantity.innerHTML;

        } else {
            cart.insertAdjacentHTML('beforeend', '<span>1</span>');
        }
    }
}*/

const btnAddToCart = document.querySelectorAll('.btn__add-to-cart');
const cart = document.querySelector(".cart-header");
const cartQuantity = cart.querySelector('.cart-quantity');


btnAddToCart.addEventListener('click', addCartQuantity);
function addCartQuantity() {
    if (cartQuantity) {
        cartQuantity.innerHTML = Number(cartQuantity.innerHTML) + 1;
        
    } else {
        
        cart.insertAdjacentHTML('beforeend', '<span class = "cart-quantity">1</span>');
    }
}

    /*function addCartQuantity() {
        if (cartQuantity) {
            cartQuantity.innerHTML = Number(cartQuantity.innerHTML) + 1;
        } else {
            cart.insertAdjacentHTML('beforeend', '<span class = "cart-quantity">1</span>');
        }
            
        }*/
