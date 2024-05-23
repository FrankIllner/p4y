document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
        let select = document.querySelectorAll('.select__select');
        let priceRegular = document.querySelector('.product__info-wrapper .price__container .price-item--regular');
        let priceSale = document.querySelector('.product__info-wrapper .price__container .price-item--sale');
        let priceRange = document.querySelector('.product__info-wrapper .price__container .price-range-example');

        if (select) {
            select.value = "";
            select.forEach(function (elem) {
                elem.addEventListener("change", function (event) {
                    var item = event.target.value;
                    console.log("Selected value:", item);

                    if (item === "") {
                        console.log('1');
                        document.querySelector('.product__info-wrapper .no-js-hidden').classList.remove('hidden');
                        priceRange.classList.remove('hidden');
                    
                        priceRegular.style.display = 'none';
                        priceSale.style.display = 'none';
                    
                        console.log(priceRange);
                    } else {
                        console.log('2');
                        
                        priceRange.classList.add('hidden');
                    
                        priceRegular.style.display = 'block';
                        priceSale.style.display = 'block';
                        console.log(priceRange);
                    }

                });
            });
        }

    }
});
