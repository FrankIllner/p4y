document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
      let select = document.querySelectorAll('.select__select');
      let priceRegular = document.querySelector('.price .price__container .price-item--regular');
      let priceSale = document.querySelector('.price .price__container .price-item--sale');
      let priceRange = document.getElementById('price-range');
      select.forEach(function (elem) {
        elem.addEventListener("click", function (event) {
            var item = event.target.value;
          console.log(item);

          if (item === "") {
            console.log('1');
       
          priceRange.classList.remove('hide');
          priceRegular.style.display = 'none';
          priceSale.style.display = 'none';
        } else {
            console.log('2');
            priceRange.classList.add('hide');
          priceRegular.style.display = 'block';
          priceSale.style.display = 'block';
        }
      
        });
      });

    
    }
  });


  

