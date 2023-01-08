new Swiper('.image-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    }
});

/*const cartWrapper = document.querySelector('.header__name-class');
const btnCart = document.querySelector('.cart-icon');

btnCart.addEventListener('click', OpenList);

function OpenList() {
    cartWrapper.style.right = "0";
}


*/


/* Choice a color*/
const imgDifferentColor = {
    gray: ['./image/speckers/gray1.webp', './image/speckers/gray2.webp','./image/speckers/gray3.webp'],
    navy: ['./image/speckers/navy1.webp', './image/speckers/navy2.webp','./image/speckers/navy3.webp'],
    green: ['./image/speckers/green1.webp', './image/speckers/green2.webp','./image/speckers/green3.webp'],
    chestnut: ['./image/speckers/chestnut1.webp', './image/speckers/chestnut2.webp','./image/speckers/chestnut3.webp'],
    black: ['./image/speckers/black1.webp', './image/speckers/black2.webp','./image/speckers/black3.webp']
}

const colorGreen = document.querySelector('.radio-green-label');
const colorChestnut = document.querySelector('.radio-chestnut-label');
const colorNavy = document.querySelector('.radio-navy-label');
const colorBlack = document.querySelector('.radio-black-anthracite-label');
const colorGray = document.querySelector('.radio-gray-label');

colorGreen.addEventListener('click', ChangeImageSrc);
colorChestnut.addEventListener('click', ChangeImageColorChestnut);
colorNavy.addEventListener('click', ChangeImageColorNavy);
colorBlack.addEventListener('click', ChangeImageColorblack);
colorGray.addEventListener('click', ChangeImageColorGray);

const Image = document.querySelectorAll('.swiper-slide > img');



function ChangeImageSrc() {
    for (let i = 0; i < Image.length; i++) {
        Image[i].src = imgDifferentColor.green[i];
    }
}

function ChangeImageColorChestnut() {
    for (let i = 0; i < Image.length; i++) {
        Image[i].src = imgDifferentColor.chestnut[i];
    }
}
function ChangeImageColorNavy() {
    for (let i = 0; i < Image.length; i++) {
        Image[i].src = imgDifferentColor.navy[i];
    }
}

function ChangeImageColorblack() {
    for (let i = 0; i < Image.length; i++) {
        Image[i].src = imgDifferentColor.black[i];
    }
}

function ChangeImageColorGray() {
    for (let i = 0; i < Image.length; i++) {
        Image[i].src = imgDifferentColor.gray[i];
    }
}




/* add to cart*/

