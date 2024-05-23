document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf("products") > -1) {
      var inputsAndButtons = document.querySelectorAll('input, button');
      inputsAndButtons.forEach(function (elem) {
        elem.addEventListener("click", function (event) {
          var item = event.target.value;
          var clickedButtonUrl = this.baseURI;
          console.log("Variante wurde gewechselt");
        });
      });
    }
  });