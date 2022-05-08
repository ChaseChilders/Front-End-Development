// TOP

const container = document.querySelector("#container");

const header = document.createElement("header");
container.appendChild(header);
header.style.color = "white";
header.style.backgroundColor = "blue";
header.style.padding = "5px 30px";
header.style.fontFamily = "sans-serif";

const logoText = document.createElement("h1");
logoText.innerText = "HighOnCoding";

header.appendChild(logoText);

const nav = document.createElement("h3");
nav.innerText = "Home";

header.appendChild(nav);

const nav2 = document.createElement("h3");
nav2.innerText = "Categories";

header.appendChild(nav2);

// MIDDLE TOP

const middle = document.createElement("middle");
container.appendChild(middle);

const middleTextHeading = document.createElement("h2");
middleTextHeading.innerText = "Curse of the Current Reviews";

middle.appendChild(middleTextHeading);

const middleTextBody = document.createElement("p");
middleTextBody.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id dui turpis. Donec congue, mi id tristique pharetra, orci lorem pulvinar elit, vitae tristique lorem mi nec leo. Vestibulum at tempus tortor. Ut porta massa eget lacus sodales, at condimentum lorem sagittis. Integer ante nulla, congue at nisl sed, finibus tempor elit. Donec id congue augue. Mauris ipsum metus, tempor nec ante id, maximus viverra lorem.";

middle.appendChild(middleTextBody);

middleTextHeading.style.backgroundColor = "gray";

middleTextHeading.style.fontFamily = "sans-serif";
middleTextBody.style.fontFamily = "sans-serif";

middleTextBody.style.backgroundColor = "gray";

middle.style.backgroundColor = "gray";

// MIDDLE BOTTOM

const bottomHeadingOne = document.createElement("h2");
container.appendChild(bottomHeadingOne);
bottomHeadingOne.innerText = "Hello WatchKit";
bottomHeadingOne.style.fontFamily = "sans-serif";

const bottomTextOne = document.createElement("p");
container.appendChild(bottomTextOne);
bottomTextOne.style.fontFamily = "sans-serif";
bottomTextOne.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id dui turpis. Donec congue, mi id tristique pharetra, orci lorem pulvinar elit, vitae tristique lorem mi nec leo. Vestibulum at tempus tortor. Ut porta massa eget lacus sodales, at condimentum lorem sagittis. Integer ante nulla, congue at nisl sed, finibus tempor elit. Donec id congue augue. Mauris ipsum metus, tempor nec ante id, maximus viverra lorem.";

const bottomHeadingTwo = document.createElement("h2");
container.appendChild(bottomHeadingTwo);
bottomHeadingTwo.style.fontFamily = "sans-serif";
bottomHeadingTwo.innerText = "Introduction to Swift";

const bottomTextTwo = document.createElement("p");
bottomTextTwo.style.fontFamily = "sans-serif";
container.appendChild(bottomTextTwo);
bottomTextTwo.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id dui turpis. Donec congue, mi id tristique pharetra, orci lorem pulvinar elit, vitae tristique lorem mi nec leo. Vestibulum at tempus tortor. Ut porta massa eget lacus sodales, at condimentum lorem sagittis. Integer ante nulla, congue at nisl sed, finibus tempor elit. Donec id congue augue. Mauris ipsum metus, tempor nec ante id, maximus viverra lorem.";
