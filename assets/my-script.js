document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
      var inputsAndButtons = document.querySelectorAll('input, button, select');
      inputsAndButtons.forEach(function (elem) {
        elem.addEventListener("click", function (event) {
  
          console.log("Variante wurde gewechselt");
        });
      });
    }
  });