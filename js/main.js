("use strict");

// Nice Select Initialize
$(document).ready(function () {
  $("select").niceSelect();
});

// Mobile Sidenav
class SideNav {
  constructor() {
    this.sideNavEl = document.querySelector(".js-side-nav");
    this.sideNavContainerEl = document.querySelector(".js-side-nav-container");
    this.showButtonEl = document.querySelector(".js-menu-open");
    this.closeButtonEl = document.querySelector(".js-menu-close");

    this.openSideNav = this.openSideNav.bind(this);
    this.closeSideNav = this.closeSideNav.bind(this);
    this.blockClicks = this.blockClicks.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);

    this.addEventListeners();
  }
  addEventListeners() {
    this.showButtonEl.addEventListener("click", this.openSideNav);
    this.closeButtonEl.addEventListener("click", this.closeSideNav);
    this.sideNavEl.addEventListener("click", this.blockClicks);
    this.sideNavContainerEl.addEventListener("click", this.closeSideNav);
  }
  blockClicks(evt) {
    evt.stopPropagation();
  }
  onTransitionEnd(evt) {
    this.sideNavContainerEl.classList.remove("side-nav-animatable");
    this.sideNavContainerEl.removeEventListener(
      "transitionend",
      this.onTransitionEnd
    );
  }
  openSideNav() {
    this.sideNavContainerEl.classList.add("side-nav-animatable");
    this.sideNavContainerEl.classList.add("side-nav-visible");
    this.sideNavContainerEl.addEventListener(
      "transitionend",
      this.onTransitionEnd
    );
  }
  closeSideNav() {
    this.sideNavContainerEl.classList.add("side-nav-animatable");
    this.sideNavContainerEl.classList.remove("side-nav-visible");
    this.sideNavContainerEl.addEventListener(
      "transitionend",
      this.onTransitionEnd
    );
  }
}
new SideNav();

// Search Button
let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let searchBox = document.querySelector("#search-box");
  searchBox.classList.toggle("search-box-transform");
  document.querySelector(".search-icon").classList.toggle("fa-times");
});

// Swiper Slider
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2.5,
    },
  },
});

// Video Play OnClick
$(".play-icon").on("click", function () {
  $("video").css({
    "z-index": 1,
    opacity: 1,
  });
  $("video").trigger("play");
  $(".video-img").hide();
  $(this).hide();
});
$("video").on("click", function () {
  console.log("a");
});

// Mixitup Filtering
var mixer = mixitup(".courses");

$(".category button").click(function () {
  $(".category button").removeClass("is-clicked");
  $(this).addClass("is-clicked");
});

// Form Validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
