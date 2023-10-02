// const player = {
//     name: 'nico',
//     sayHello: (otherPersonsName) => {
//         console.log('hello!' + otherPersonsName);
//     }
// };

// player.sayHello('lynn');

// function title(argument) {
//     console.log(argument);
// };
// title('value');

// const player = {
//     name: 'MeMe',
//     age: (myAge) => {
//         console.log(`My Age: ${myAge}`);
//     }
// };

// // player.age(10);

// const calculator = {
//     add: (a, b) => {
//         return a + b;
//     },
//     minus: (a, b) => {
//         return a - b;
//     },
//     div: (a, b) => {
//         return a / b;
//     },
//     multi: (a, b) => {
//         return a * b;
//     },
//     power: (a, b) => {
//         return a ** b;
//     }
// }

// const addResult = calculator.add(5, 9);
// const minusResult = calculator.minus(addResult, 10);
// const multiResult = calculator.multi(minusResult, 2);
// const divResult = calculator.div(addResult, minusResult);
// console.log(addResult);
// console.log(minusResult);
// console.log(multiResult);
// console.log(divResult);

// const age = 96;
// function calculatorKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const KrAge = calculatorKrAge(age);

// console.log(KrAge);

// const age = parseInt(prompt('how old are you'));

// if (age > 18) {
//     console.log('맥주파티 참여 가능');
// } else {
//     console.log('안돼 돌아가 ');
// }

// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);

// function handleTitleClick() {
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handelWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const link = document.querySelector('a');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(PaintUsername) {
  greeting.innerText = `Hello! ${PaintUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
