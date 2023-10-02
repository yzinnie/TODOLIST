

const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// clock.innerText = new Date().toLocaleString("en-US");
}


getClock(); //바로실행
setInterval(getClock, 1000);


// setTimeout(sayHello, 5000);