document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
      let select = document.querySelectorAll('.select__select');
      let priceRegular = document.querySelector('.price .price__container .price-item--regular');
      let priceSale = document.querySelector('.price .price__container .price-item--sale');
      let priceRange = document.getElementById('price-range');
  

      if (select) {
        // Set "Bitte auswählen" as the default selected option
        select.value = "";
  
        // Show price range initially since "Bitte auswählen" is selected by default
        //priceRange.style.display = 'block';
        priceRegular.style.display = 'none';
        priceSale.style.display = 'none';
  
        select.addEventListener('change', function() {
            console.log('change');
          if (select.value === "") {
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
  
      }


    }
  });


  

