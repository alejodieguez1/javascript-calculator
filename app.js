const pantalla = document.getElementById("result-container");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const pulsedBtn = boton.textContent;

    if (boton.id === "clear") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "backspace") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error!"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "equal") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error!";
      }
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = pulsedBtn;
    } else {
      pantalla.textContent += pulsedBtn;
      console.log(pantalla.textContent);
    }
  });
});
