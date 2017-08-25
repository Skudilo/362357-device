  var openLink = document.querySelector(".contacts-btn");
  var popup = document.querySelector(".modal-content");
  var closeLink = document.querySelector(".modal-content-close");


  openLink.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
  });
  
  closeLink.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show")
  });
  
  window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
          }
        }
      });
 
  var mapOpen = document.querySelector(".map-open");
  var mapPopup = document.querySelector(".modal-content-map");
  var mapClose =  mapPopup.querySelector(".modal-content-close");
  
  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show")
  });
  
  mapClose.addEventListener("click", function(event){
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show")
  });