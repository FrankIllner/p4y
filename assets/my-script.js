document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
        let select = document.querySelectorAll('.select__select');
        let priceRegular = document.querySelector('.product__info-wrapper .price__container .price-item--regular');
        let priceSale = document.querySelector('.product__info-wrapper .price__container .price-item--sale');
        let priceRange = document.querySelector('.product__info-wrapper .price__container .price-range-example');


        select.forEach(function (elem) {
            elem.addEventListener("click", function (event) {
                var item = event.target.value;
                console.log("Selected value:", item);

                if (item === "") {
                    console.log('Show price range');
                    document.querySelector('.product__info-wrapper .no-js-hidden').classList.remove('hidden');
                    priceRange.classList.remove('hidden');
                   
                    priceRegular.style.display = 'none';
                    priceSale.style.display = 'none';
                
                    console.log(priceRange);
                } else {
                    console.log('Show regular/sale prices');
                    
                    priceRange.classList.add('hidden');
                   
                    priceRegular.style.display = 'block';
                    priceSale.style.display = 'block';
                    console.log(priceRange);
                }

            });
        });
        return false;
    }
});
