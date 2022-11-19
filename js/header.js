function myFunction() {
  var left = document.getElementsByClassName("nav-bar-ul")[0];
  var right = document.getElementsByClassName("nav-bar-ul")[1];

  if (left.style.display === "block") {
    left.style.display = "none";
  } else {
    left.style.display = "block";
  }

  if (right.style.display === "block") {
    right.style.display = "none";
  } else {
    right.style.display = "block";
  }
}
