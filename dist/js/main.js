$("body")
  .hide()
  .fadeIn(3000);

// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

// Set Inital State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    navOpen();
  } else {
    navClose();
  }
}
// Shows navigation guide then vanishes guide
function navigation() {
  setTimeout(() => {
    $("h2.navigation-guide")
      .removeClass("navigation-guide")
      .addClass("navigation-guide2");
  });
  setTimeout(() => {
    $("h2.navigation-guide2")
      .removeClass("navigation-guide2")
      .addClass("navigation-guide");
  }, 7000);
}
navigation();
$("a.nav-link").on("click", function(e) {
  e.preventDefault();
  var url = this.href;

  $(".nav-item.current").removeClass("current");
  $(this)
    .parent()
    .addClass("current");

  $("#container").remove();
  $("#content")
    .load(url + " #container")
    .hide()
    .fadeIn("slow");

  setTimeout(() => {
    navClose();
  }, 1000);
});

// Opens the navigation
function navOpen() {
  menuBtn.classList.add("close");
  menu.classList.add("show");
  menuNav.classList.add("show");
  menuBranding.classList.add("show");
  navItems.forEach(item => item.classList.add("show"));
  // Set Menu State
  showMenu = true;
}
//Closes the navigation
function navClose() {
  menuBtn.classList.remove("close");
  menu.classList.remove("show");
  menuNav.classList.remove("show");
  menuBranding.classList.remove("show");
  navItems.forEach(item => item.classList.remove("show"));
  // Set Menu State
  showMenu = false;
}

$(document).on("click", "a.nav-link-work", function() {
  setTimeout(() => {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
  }, 1000);
});
