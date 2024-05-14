function closeSidebar() {
  var sidebar = document.getElementById("logo-sidebar");
  var ariaMenu = sidebar.getAttribute("aria-menu");
    if (ariaMenu === "true") {
      sidebar.setAttribute("aria-menu", "false");
      sidebar.style.width = "50px";
    } else {
      sidebar.setAttribute("aria-menu", "true");
      sidebar.removeAttribute("style");
    } 

    // if (sidebar.style.width === "50px") {
    //   onclick.applysidebar.style.transform = "translatex(256)"
    // }
  }

function openSidebarByButton() {
  var sidebar = document.getElementById("logo-sidebar");
    
    sidebar.classList.add("w-63");
}