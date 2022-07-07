
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

