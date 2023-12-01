// selecting our elements
const effectButton = document.getElementsByClassName(
  "effect-Button"
)[0] as HTMLElement;

// our functions

const fireEffect = (e): void => {
  // creating our element dynamically
  const circleEl = document.createElement("div");
  circleEl.classList.add("circle");

  // getting information from our e target

  // getting client click x and y
  const x = e.clientX;
  const y = e.clientY;

  // getting our offset targets
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  // calculating
  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;
  console.log("this is target: ", e);
  circleEl.style.top = `${yInside}px`;
  circleEl.style.left = `${xInside}px`;

  // setting timeout function
  setTimeout(() => circleEl.remove(), 500);

  effectButton.appendChild(circleEl);
};

// our eventlisnters
effectButton.addEventListener("click", (e) => {
  // sending our target info to fire effect function
  fireEffect(e);
});
