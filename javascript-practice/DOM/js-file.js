const container = document.querySelector("#container");

const redP = document.createElement("p");

redP.style.color = "red";
redP.textContent = "Hey I'm red";

container.appendChild(redP);

const blueH3 = document.createElement("h3");

blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!";

container.appendChild(blueH3);

const div1 = document.createElement("div");

div1.classList = "container2";
div1.style.border = "solid black 2px";
div1.style.backgroundColor = "pink";

container.appendChild(div1);

const container2 = document.querySelector(".container2");

const container2H1 = document.createElement("h1");

container2H1.textContent = "I'm in a div";

container2.appendChild(container2H1);

const container2P = document.createElement("p");

container2P.textContent = "ME TOO!";

container2.appendChild(container2P);

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World");

//best method
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});
