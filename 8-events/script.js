const nameForm = document.querySelector("#name-form");
nameForm.addEventListener("submit", function (event) {
  // prevents the page from refreshing and resetting
  event.preventDefault();
  console.log("Submitted!!!");
});
