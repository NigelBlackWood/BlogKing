<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typing Test</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .container {
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    textarea {
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      margin-top: 10px;
      cursor: pointer;
    }

    #result {
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Typing Test</h1>
    <p>Type the following text:</p>
    <p id="quote"></p>
    <textarea id="input" rows="4" placeholder="Start typing here..." disabled></textarea>
    <div id="stats">
      <span id="timer">Time: 0s</span>
      <span id="accuracy">Accuracy: 100%</span>
    </div>
    <button id="start" onclick="startTest()">Start</button>
    <button id="reset" onclick="resetTest()">Reset</button>
    <div id="result"></div>
  </div>
  <script>
    const quotes = [
      "The quick brown fox jumps over the lazy dog.",
      "Simplicity is the ultimate sophistication.",
      "In the middle of difficulty lies opportunity.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts."
    ];

    const quoteElement = document.getElementById('quote');
    const inputElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    const timerElement = document.getElementById('timer');
    const accuracyElement = document.getElementById('accuracy');

    let currentQuoteIndex;
    let startTime;
    let timerInterval;

    function startTest() {
      currentQuoteIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[currentQuoteIndex];
      quoteElement.textContent = quote;
      inputElement.disabled = false;
      inputElement.value = '';
      inputElement.focus();
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);
    }

    function resetTest() {
      clearInterval(timerInterval);
      inputElement.disabled = true;
      inputElement.value = '';
      quoteElement.textContent = '';
      resultElement.textContent = '';
      timerElement.textContent = 'Time: 0s';
      accuracyElement.textContent = 'Accuracy: 100%';
    }

    function updateTimer() {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      timerElement.textContent = `Time: ${elapsedTime}s`;
    }

    </script>
</body>
</html>
