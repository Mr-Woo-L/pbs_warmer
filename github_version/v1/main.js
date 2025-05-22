document.addEventListener('DOMContentLoaded', () => {
  const mathTerminal = document.getElementById('math-terminal');

  let enterCount = 0;
  let currentQuestion = null;
  let waitingForAnswer = false;

  mathTerminal.textContent = "Click here and press enter";

  function generateQuestion() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    currentQuestion = { a, b, answer: a + b };
    mathTerminal.textContent = `     ${a} + ${b}\n     `;
    waitingForAnswer = true;
  }

  mathTerminal.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
      if (mathTerminal.textContent.startsWith("Click here")) {
        enterCount++;
        mathTerminal.textContent = "";
        generateQuestion();
        return;
      }

      if (waitingForAnswer) {
        const lines = mathTerminal.textContent.trim().split("\n");
        const userAnswer = lines[lines.length - 1].trim();

        if (parseInt(userAnswer) === currentQuestion.answer) {
          waitingForAnswer = false;
          enterCount++;

          if (enterCount === 4) {
            showLesson();
          }

          if (enterCount === 5) {
            enterCount = 0;
            clearLesson();
          }

          generateQuestion();
        } else {
          mathTerminal.textContent += "\n     False\n";
        }
      }
    } else if (waitingForAnswer && e.key.length === 1) {
      const lines = mathTerminal.textContent.split("\n");
      lines[lines.length - 1] += e.key;
      mathTerminal.textContent = lines.join("\n");
    } else if (waitingForAnswer && e.key === "Backspace") {
      const lines = mathTerminal.textContent.split("\n");
      let lastLine = lines.pop();
      lastLine = lastLine.slice(0, -1);
      lines.push(lastLine);
      mathTerminal.textContent = lines.join("\n");
    }
  });

  mathTerminal.focus();
});

