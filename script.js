const btnclick = document.getElementById("clickbtn");
const hovertext = document.getElementById("hoverdiv");
const btnimg = document.getElementById("imagebtn");
const imagestitle = document.getElementById("image-title");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const nameField = document.getElementById("name");
const feedback = document.getElementById("feedback");
const passwordField = document.getElementById("password");
const movieslist = [
    {title: "Black Clover", image1: "bc1.png", image2: "bc2.jpg"},
    {title: "Naruto", image1: "nar1.png", image2: "nar2.jpg"},
    {title: "One Piece", image1: "op1.jpg", image2: "op2.jpg"},
    {title: "Demon Slayer", image1: "ds1.jpg", image2: "ds2.png"},
    {title: "Kuroko No Basket", image1: "kur1.png", image2: "kur2.png"},
    {title: "Avengers", image1: "mar1.jpg", image2: "mar2.jpg"},
    {title: "Cars", image1: "car1.jpg", image2: "car2.jpg"}
];
let count = 0;

passwordField.addEventListener("keypress", function () {
    passwordField.style.backgroundColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
    }, ${Math.random() * 255})`;    
    passwordField.style.color = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
    }, ${Math.random() * 255})`;
    passwordField.style.transition = "background-color 0.5s, color 0.5s";
    passwordField.style.transitionTimingFunction = "ease-in-out";
});

nameField.addEventListener("input", function () {
  const nameValue = nameField.value;    
  feedback.innerText = `Thanks for entering my playground, ${nameValue}.`;
});
btnimg.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * movieslist.length);
    const randomMovie = movieslist[randomIndex];
    console.log(randomMovie);
    image1.src = `${randomMovie.image1}`;
    image2.src = `${randomMovie.image2}`;
    imagestitle.innerText = `${randomMovie.title}`;
    imagestitle.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    image1.style.display = "block";
    image2.style.display = "block";
});
btnclick.addEventListener("click", function () {
  count++;
  btnclick.innerText = `You have clicked me ${count} times`;
  btnclick.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  btnclick.style.color =
    `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});
btnclick.addEventListener("dblclick", function () {
  count = 0;
  btnclick.innerText = `You have reset me`;
});
hovertext.addEventListener("mouseover", function () {
  hovertext.innerText = "You are hovering over me!";
  hovertext.style.width = "150px";
  hovertext.style.height = "100px";
  hovertext.style.transition =
    "width 0.5s, height 0.5s, background-color 0.5s, color 0.5s";
  hovertext.style.transitionTimingFunction = "ease-in-out";
  hovertext.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  hovertext.style.color = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
});
hovertext.addEventListener("mouseout", function () {
  hovertext.innerText = "Hover over me!!!";
  hovertext.style.width = "100px";
  hovertext.style.height = "50px";
  hovertext.style.transition =
    "width 0.5s, height 0.5s, background-color 0.5s, color 0.5s";
  hovertext.style.transitionTimingFunction = "ease-in-out";
  hovertext.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  hovertext.style.color = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
});
