function buttonSidebar() {
  var sidebar = document.getElementById("logo-sidebar");
  var ariaMenu = sidebar.getAttribute("aria-menu");
    if (ariaMenu === "true") {
      sidebar.setAttribute("aria-menu", "false");
      sidebar.style.width = "50px";
    } else {
      sidebar.setAttribute("aria-menu", "true");
      sidebar.removeAttribute("style");
    }
  }

function openSidebarByButton() {
  var sidebar = document.getElementById("logo-sidebar");
    
    sidebar.classList.add("w-63");
}

function openSidebarByListIcon() {
  var sidebar = document.getElementById("logo-sidebar");
  var ariaMenu = sidebar.getAttribute("aria-menu");
  if (ariaMenu === "false") {
    sidebar.setAttribute("aria-menu", "true");
    sidebar.removeAttribute("style")
  } else{
    sidebar.removeAttribute("style");
    sidebar.classList.remove("w-63")
    sidebar.style.width = "254px";
  }
  
}