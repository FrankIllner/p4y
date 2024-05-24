document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
        let select = document.querySelectorAll('.select__select');
        let productWapper = document.querySelector('.product__info-wrapper');
        let showPriceContainer = document.querySelector('.is-price-range .show-price-range');

        console.log(showPriceContainer);
        productWapper.classList.add("is-price-range");
        showPriceContainer.classList.remove("hidden");
        select.forEach(function (elem) {
            elem.addEventListener("change", function (event) {
                var item = event.target.value;
                showPriceContainer.classList.remove("hidden");
                console.log(item);                
                if (item === "") {
                    console.log('1');
                    productWapper.classList.add("is-price-range");
                } else {
                    console.log('2');
                    productWapper.classList.remove("is-price-range");
                }
            });
        });
    }
});
