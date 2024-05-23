document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
        let select = document.querySelectorAll('.select__select');
        let priceRegular = document.querySelector('.product__info-wrapper .price__container .price-item--regular');
        let priceSale = document.querySelector('.product__info-wrapper .price__container .price-item--sale');
        let priceRange = document.querySelector('.product__info-wrapper .price__container .price-range');

        if (!priceRange) {
            console.error("Price range element not found!");
            return;
        }

        select.forEach(function (elem) {
            elem.addEventListener("click", function (event) {
                var item = event.target.value;
                console.log("Selected value:", item);

                if (item === "") {
                    console.log('Show price range');
                    document.querySelector('.product__info-wrapper .price__container .price-range').classList.remove('hide');
                    priceRange.style.display = 'block';
                    priceRegular.style.display = 'none';
                    priceSale.style.display = 'none';
                } else {
                    console.log('Show regular/sale prices');
                    console.log(priceRange);
                    document.querySelector('.product__info-wrapper .price__container .price-range').classList.add('hide');
                    priceRange.style.display = 'none';
                    priceRegular.style.display = 'block';
                    priceSale.style.display = 'block';
                }

            });
        });

    }
});
