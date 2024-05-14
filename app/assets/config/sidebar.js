 function closeSidebar() {
    var sidebar = document.getElementById("logo-sidebar");
    var ariaMenu = sidebar.getAttribute("aria-menu");

    if (ariaMenu === "true") {
      sidebar.setAttribute("aria-menu", "false");
      sidebar.style.width = "65px";
    } else {
      sidebar.setAttribute("aria-menu", "true");
      sidebar.removeAttribute("style");
    }

    //   if (ariaMenu === "false") {
      
    // } else{
      
    // }
  }