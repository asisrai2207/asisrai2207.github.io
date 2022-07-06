// var scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000,
//     //   speedAsDuration: true
//   });

// const navBar = document.getElementsByClassName("navbar")[0];

// console.log(document.getElementsByClassName("navbar"));

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);

//   if (window.scrollY > 100) {
//     navBar.classList.add("navbarInverted");
//     navBar.classList.remove("bg-light");
//   } else if (window.scrollY <= 99) {
//     navBar.classList.add("bg-light");
//     navBar.classList.remove("navbarInverted");
//   }
// });

$('input[placeholder="Your Name Here"]').on("keyup", function (e) {
  var input = e.target.value;
  console.log("Input:", input);
  if (input.length > 20) {
    $(this).css("border", "solid 3px red");
  } else {
    $(this).css("border", "solid 3px grey");

  }
});

$('input[placeholder="Your Phone Here"]').on("blur", function (e) {
  var input = e.target.value;
  console.log("Input:", input);
  if (input.length < 6 || input.length > 16 || isNaN(input)) {
    $(this).css("border", "solid 3px red");
    $(this)
  } else {
    $(this).css("border", "solid 3px grey");
  }
});

