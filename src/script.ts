// selecting our elements
const effectButton = document.getElementsByClassName(
  "effect-Button"
)[0] as HTMLElement;

// our functions

const fireEffect = (): void => {
  console.log("start of project");
};

// our eventlisnters
effectButton.addEventListener("click", fireEffect);
