//change text on a page response top user action
function readmore() {
  document.getElementById(
    "paraghaph"
  ).innerHTML = `Imagine if all 50 US states, plus territories like Guam and Puerto Rico, had their own governing bodies deciding how their soccer leagues – consisting of numerous levels – should operate. That is European football.<br><br>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
  document.getElementById(
    "btn-read"
  ).innerHTML = ` <a  onclick="window.location.reload()" class="rm-link">Show less &raquo;</a>`;
}

//change element style on user action
let title = document.getElementById("hdr-hdng");
title.addEventListener("click", function () {
  title.style.fontStyle = "italic";
});

//change images using mouseover and mouseout
let logo = document.getElementById("logo");
logo.addEventListener("mouseover", function () {
  logo.src = "img/european_leagues_logo_cropped.png";
});
logo.addEventListener("mouseout", function () {
  logo.src = "img/logo.png";
});

//create animation

var text = "Welcome To European League";
var i = 0;
function typing() {
  if (i < text.length) {
    title.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();

//present slideshow
var y = 0;
var images = ["img/abt-bg.png", "img/slide2.png", "img/slide3.png"];

function slideshow() {
  document.getElementById("our-structure").src = images[y];
  if (y < images.length - 1) {
    y++;
  } else {
    y = 0;
  }
  setTimeout("slideshow()", 2000);
}

// Run function when page loads
window.onload = slideshow;
