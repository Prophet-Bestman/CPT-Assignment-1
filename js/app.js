// targetting the h1 tag in index.html using the DOM and storing it in a variable
const myHeading = document.querySelector("h1");

/*selecting the button in index.html */
let myButton = document.querySelector("button");

myHeading.textContent = "Hello World!";

// Adding an Image Changer
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  mySrc === "../images/firefox-icon.png"
    ? myImage.setAttribute("src", "../images/firefox2.png")
    : myImage.setAttribute("src", "../images/firefox-icon.png");
};

//Adding a personalized welcome message
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Nice to meet you, ${myName}`;
  }
}

// this function listens to the event and calls the setUserName function
myButton.onclick = () => {
  setUserName();
};
