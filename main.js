const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (
      text.includes("Cómo estás") ||
      text.includes("cómo estás")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Trato de mejorar";
      texts.appendChild(p);
    }
    if (
      text.includes("Quién eres") ||
      text.includes("quién eres")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "John 117, me conocen como Jefe Maestro";
      texts.appendChild(p);
    }
    if (text.includes("muéstrame un opening de los buenos")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Buscando...";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/watch?v=ef42hn1iSvQ");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
