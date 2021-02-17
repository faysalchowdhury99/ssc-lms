// Video popup
var $iframe = $("iframe"),
  $videoLink = $(".video-link"),
  playerTemplate =
    '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

$videoLink.on("click", function (e) {
  var localTemplate = "",
    videoWidth = parseInt($(this).data("width")),
    videoHeight = parseInt($(this).data("height")),
    videoAspect = (videoHeight / videoWidth) * 100,
    // elements
    $player = null,
    $video = null,
    $close = null,
    $iframe = null;

  e.preventDefault();

  localTemplate = playerTemplate.replace(
    "{{iframevideo}}",
    $(this).prop("href")
  );

  $player = $(localTemplate);

  $player.find(".video-filler").css("padding-top", videoAspect + "%");

  $close = $player.find(".video-close").on("click", function () {
    $(this).off().closest(".player").hide().remove();
  });

  $player.appendTo("body").addClass("js--show-video");
});

// Tabs Slide Arrow
// $("#next-tab").click(function () {
//   $("#tab").animate({
//     scrollLeft: "+=156px",
//   });
// });
// $("#prev-tab").click(function () {
//   $("#tab").animate({
//     scrollLeft: "-=156px",
//   });
// });

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

// Give a Review
var star1 = document.querySelector(".star-icon-1");
var star2 = document.querySelector(".star-icon-2");
var star3 = document.querySelector(".star-icon-3");
var star4 = document.querySelector(".star-icon-4");
var star5 = document.querySelector(".star-icon-5");

star1.addEventListener("click", function () {
  if (star1.classList.contains("far")) {
    star1.classList.remove("far");
    star1.classList.add("fas");
  } else if (
    star2.classList.contains("far") &&
    star3.classList.contains("far") &&
    star4.classList.contains("far") &&
    star5.classList.contains("far")
  ) {
    star1.classList.remove("fas");
    star1.classList.add("far");
  }
  if (star2.classList.contains("fas")) {
    star2.classList.remove("fas");
    star2.classList.add("far");
  }
  if (star3.classList.contains("fas")) {
    star3.classList.remove("fas");
    star3.classList.add("far");
  }
  if (star4.classList.contains("fas")) {
    star4.classList.remove("fas");
    star4.classList.add("far");
  }
  if (star5.classList.contains("fas")) {
    star5.classList.remove("fas");
    star5.classList.add("far");
  }
});

star2.addEventListener("click", function () {
  if (star2.classList.contains("far")) {
    star2.classList.remove("far");
    star2.classList.add("fas");
    star1.classList.remove("far");
    star1.classList.add("fas");
  }
  if (star3.classList.contains("fas")) {
    star3.classList.remove("fas");
    star3.classList.add("far");
  }
  if (star4.classList.contains("fas")) {
    star4.classList.remove("fas");
    star4.classList.add("far");
  }
  if (star5.classList.contains("fas")) {
    star5.classList.remove("fas");
    star5.classList.add("far");
  }
});

star3.addEventListener("click", function () {
  if (star3.classList.contains("far")) {
    star3.classList.remove("far");
    star3.classList.add("fas");
    star2.classList.remove("far");
    star2.classList.add("fas");
    star1.classList.remove("far");
    star1.classList.add("fas");
  }
  if (star4.classList.contains("fas")) {
    star4.classList.remove("fas");
    star4.classList.add("far");
  }
  if (star5.classList.contains("fas")) {
    star5.classList.remove("fas");
    star5.classList.add("far");
  }
});

star4.addEventListener("click", function () {
  if (star4.classList.contains("far")) {
    star4.classList.remove("far");
    star4.classList.add("fas");
    star3.classList.remove("far");
    star3.classList.add("fas");
    star2.classList.remove("far");
    star2.classList.add("fas");
    star1.classList.remove("far");
    star1.classList.add("fas");
  }
  if (star5.classList.contains("fas")) {
    star5.classList.remove("fas");
    star5.classList.add("far");
  }
});

star5.addEventListener("click", function () {
  if (star5.classList.contains("far")) {
    star5.classList.remove("far");
    star5.classList.add("fas");
    star4.classList.remove("far");
    star4.classList.add("fas");
    star3.classList.remove("far");
    star3.classList.add("fas");
    star2.classList.remove("far");
    star2.classList.add("fas");
    star1.classList.remove("far");
    star1.classList.add("fas");
  } else {
    star5.classList.remove("fas");
    star5.classList.add("far");
  }
});
