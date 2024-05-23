document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
        let select = document.querySelectorAll('.select__select');
        let productWapper = document.querySelector('.product__info-wrapper');

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
