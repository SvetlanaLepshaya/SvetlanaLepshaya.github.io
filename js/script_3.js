const productArr = document.querySelectorAll(".product");
const btnAddArr = document.querySelectorAll(".btn__add-to-cart");
const btnOpenCart = document.querySelector(".cart-header");

function createCart() {
  const cart = document.createElement("div");
  const field = document.createElement("div");
  const closeBtn = document.createElement("button");
  


  
  cart.classList.add("cart");
  field.classList.add("cart-field");
  closeBtn.classList.add("close");

  
  closeBtn.innerHTML = `<span class="material-symbols-outlined">
    close
    </span>`;

  document.body.appendChild(cart);

  cart.appendChild(field);
  cart.appendChild(closeBtn);
  
}
createCart();

const field = document.querySelector(".cart-field");
const cart = document.querySelector(".cart");
const close = document.querySelector(".close");

btnOpenCart.addEventListener("click", openCart);
close.addEventListener("click", closeCart);

function openCart() {
  cart.style.display = "block";
}

function closeCart() {
  cart.style.display = "none";
}

const cartQuantity = btnOpenCart.querySelector(".cart-quantity"); 
let sumPrice = 0;

btnAddArr.forEach(function (item, i) {
  item.addEventListener("click", function () {
    let item = productArr[i].cloneNode(true);
    let btnAdd = productArr[i].querySelector('.btn__add-to-cart');
    let btn = item.querySelector(".btn__add-to-cart");
    let img = item.querySelector("img");
    let imgWrap = item.querySelector(".product-image-wrapper");
    let text = item.querySelector(".product-subtitle");
    let title = item.querySelector(".product-title");
    let price = item.querySelector(".product-price");

    price.style.width = "30%";
    price.style.textAlign = "right";
    title.style.width = "30%";
    imgWrap.style.width = "30%";

    title.classList.remove("product-title");

    img.style.width = "80%";
    btn.remove();
    text.remove();
    field.appendChild(item);

    item.classList.remove("product-styles");
    item.classList.add("product-in-cart");
    cartQuantity.innerHTML = Number(cartQuantity.innerHTML) + 1;
    
    btnAdd.setAttribute('disabled', 'true');
    
   
  });

});
/*
function createTotal() {
        
    const totalPrice = document.createElement("div");
    totalPrice.classList.add('total-price-box');
    totalPrice.innerHTML = `Total: `;
    field.append(totalPrice);
    
}
createTotal();

*/



/*btnAddArr.addEventListener("click", addCartQuantity);
function addCartQuantity() {
  
    cartQuantity.innerHTML = Number(cartQuantity.innerHTML) + 1;
}
*/