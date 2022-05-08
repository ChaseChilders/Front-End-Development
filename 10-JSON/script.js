const randomDogButton = document.querySelector(".random-dog-button");
const dogSelect = document.querySelector("#dogBreed");

fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((breeds) => {
    for (let breed of breeds.message) {
      const newOption = document.createElement("option");
      newOption.innerText = breed;
      dogSelect.appendChild(newOption);
    }
  });

randomDogButton.addEventListener("click", function () {
  randomDogButton.innerText = "Fetching Dog";
  fetch(`https://dog.ceo/api/breed/${dogSelect.value}/images/random`)
    .then((res) => res.json())
    .then((data) => {
      const dogContainer = document.querySelector(".doggo");
      const newPicture = document.createElement("img");
      dogContainer.innerHTML = "";
      dogContainer.appendChild(newPicture);
      newPicture.src = data.message;
    });
  randomDogButton.innerHTML = "Generate Doggo";
});

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     const dogPicture = data.message;
//     const newPicture = document.createElement("img");
//     newPicture.src = "${dogPicture}";
//   });
