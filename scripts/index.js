function hamburgerMenu() {
   let hamburger = document.getElementById("nav-bar");
   if (hamburger.className === "nav-container") {
      hamburger.className += " responsive";
   } else {
      hamburger.className = "nav-container";
   }
}
