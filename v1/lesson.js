function showLesson() {
  const revisionBox = document.getElementById('revision-box');

  const lessons = [
    `// Variable Declaration and let vs const\nlet count = 0;       // Mutable variable\nconst name = "Max";  // Immutable constant`,

    `// Function Definition and Arrow Function\nfunction add(a, b) {\n  return a + b;\n}\n\nconst multiply = (a, b) => a * b;`,

    `// Conditional Statement\nlet score = 85;\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else {\n  console.log("C");\n}`,

    `// Looping (for and forEach)\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n[1, 2, 3].forEach(num => console.log(num * 2));`,

    `// Object and Accessing Properties\nconst user = {\n  name: "Alice",\n  age: 30\n};\n\nconsole.log(user.name); // dot notation\nconsole.log(user["age"]); // bracket notation`
  ];

  const randomLesson = lessons[Math.floor(Math.random() * lessons.length)];
  revisionBox.textContent = randomLesson;
  revisionBox.style.whiteSpace = "pre-wrap"; // Preserve indentation and line breaks
  revisionBox.style.fontFamily = "monospace"; // Use monospace font for code
}

function clearLesson() {
  const revisionBox = document.getElementById('revision-box');
  revisionBox.textContent = "";
}

