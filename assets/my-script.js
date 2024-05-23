document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
      var select = document.querySelectorAll('.select__select');
      select.forEach(function (elem) {
        elem.addEventListener("click", function (event) {
  
          console.log("Variante wurde gewechselt");
        });
      });
    }
  });


  

