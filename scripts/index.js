function hamburgerMenu() {
   let navContainer = document.querySelector(".nav-container");
   if (navContainer.classList.contains("responsive")) {
      navContainer.classList.remove("responsive");
   } else {
      navContainer.classList.add("responsive");
   }
}
