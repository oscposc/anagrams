function hintPrompt(definitions, countdownTime, indexPosition) {

  const hintSound = new Audio("./resources/audio/hint.mp3");
  const hintButton = document.querySelector(".hint-button");
  const hint = document.querySelector(".hint");
  const hintDefinition = definitions[indexPosition]

  const hintHandler = () =>  {
    hint.innerHTML = `<span><i>${definitions[indexPosition]}</i></span>`;
    hintButton.classList.add("used");
    hintSound.play();
  }

  console.log(indexPosition, definitions[indexPosition], countdownTime)
  hintButton.removeEventListener("click", hintHandler)

  hint.innerHTML = "";
  hintButton.classList.add("disabled");
  hintButton.classList.remove("used");


  if (countdownTime <= 30) {
    hintButton.disabled = false;
    hintButton.classList.remove("disabled");
    hintButton.addEventListener("click", () => {
      console.log(indexPosition)
      console.log(hintDefinition)
      hint.innerHTML = `<span><i>${hintDefinition}</i></span>`;
      hintButton.classList.add("used");
      hintSound.play();
    });
  } else {
    setInterval(() => {
      hintButton.disabled = false;
      hintButton.classList.remove("disabled");

      hintButton.addEventListener("click", hintHandler)
    }, 31000);
  }
}

export { hintPrompt }