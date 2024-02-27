const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};


//Declaring a variable
//1 Numbers
const age = 20;

//2 String
const name = "John";

//3 Booleans
let iAmAlive = true;
let test = 6 < 3;

//4 Arrays
const hobbies = ["Sports", "Cooking", "Reading"];
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40

//5 Objects
let dog = { name: "Spot", breed: "Dalmatian" };
dog.name; // should return 'Spot'


