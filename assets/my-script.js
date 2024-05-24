document.addEventListener("DOMContentLoaded", function (e) {
    if (window.location.href.indexOf("products") > -1) {
        let select = document.querySelectorAll('.select__select');
        let productWapper = document.querySelector('.product__info-wrapper');
        let productButton = document.querySelector('.product-form .product-form__submit');
        productWapper.classList.add("is-price-range");
        productButton.setAttribute('disabled', 'disabled');
        select.forEach(function (elem) {
            elem.addEventListener("change", function (event) {
                var item = event.target.value;
                if (item === "") {
                    productWapper.classList.add("is-price-range");
                  
                } else {
                    productWapper.classList.remove("is-price-range");
                }
            });
        });
    }
});