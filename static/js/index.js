setTimeout(function () {
  $(".yrtinfo").css("opacity", "1").css("transform", "scale(1)");
}, 3000);
setTimeout(function () {
  $(".stsinfo").css("opacity", "1");
}, 4000);
setTimeout(function () {
  $(".ybuinfo, .aybulogo").css("opacity", "1");
}, 4500);

window.onscroll = function () {
  aboutScroll(), projectScroll(), rankingScroll(), picturesScroll();
};

var about = document.getElementById("about");
var aboutSticky = about.offsetTop;

var project = document.getElementById("project");
var projectSticky = project.offsetTop;

var ranking = document.getElementById("ranking");
var rankingSticky = ranking.offsetTop;

var pictures = document.getElementById("pictures");
var picturesSticky = pictures.offsetTop;

function aboutScroll() {
  if (window.pageYOffset + 700 > aboutSticky) {
    $(".aboutHead-c").css("left", "50%");
    $(".ac1, .ac2, .ac3, .ac4, .ac5")
      .css("opacity", "1")
      .css("margin-top", "0");
    $(".helpus").css("transform", "scale(1)");
  } else {
    $(".aboutHead-c").css("left", "40%");
    $(".ac1, .ac2, .ac3, .ac4, .ac5")
      .css("opacity", "0")
      .css("margin-top", "100px");
    $(".helpus").css("transform", "scale(0)");
  }
}

function projectScroll() {
  if (window.pageYOffset + 700 > projectSticky) {
    $(".projectHead-c").css("left", "50%");
    $(".pc1, .pc2, .pc3, .pc4, .pc5")
      .css("opacity", "1")
      .css("margin-top", "0");
  } else {
    $(".projectHead-c").css("left", "40%");
    $(".pc1, .pc2, .pc3, .pc4, .pc5")
      .css("opacity", "0")
      .css("margin-top", "100px");
  }
}

function rankingScroll() {
  if (window.pageYOffset + 700 > rankingSticky) {
    $(".rankingHead-c").css("left", "50%");
    $(".rc1, .rc2, .rc3, .rc4, .rc5")
      .css("opacity", "1")
      .css("margin-top", "0");
  } else {
    $(".rankingHead-c").css("left", "40%");
    $(".rc1, .rc2, .rc3, .rc4, .rc5")
      .css("opacity", "0")
      .css("margin-top", "100px");
  }
}

function picturesScroll() {
  if (window.pageYOffset + 700 > picturesSticky) {
    $(".picHead-c").css("left", "50%");
    $(".picc1, .picc2, .picc3, .picc4, .picc5")
      .css("opacity", "1")
      .css("margin-top", "0");
  } else {
    $(".picHead-c").css("left", "40%");
    $(".picc1, .picc2, .picc3, .picc4, .picc5")
      .css("opacity", "0")
      .css("margin-top", "100px");
  }
}

address = 0;

$(".circle-address").click(function () {
  if (address % 2 == 0) {
    $(".loc").css("display", "block");
    address = address + 1;
  } else {
    $(".loc").css("display", "none");
    address = address + 1;
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}
