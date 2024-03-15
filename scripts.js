const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Simplicity is the ultimate sophistication.",
  "In the middle of difficulty lies opportunity.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

const quoteElement = document.getElementById('quote');
const textElement = document.getElementById('text');
const inputElement = document.getElementById('input');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('timer');
const accuracyElement = document.getElementById('accuracy');
const statsElement = document.getElementById('stats');

let currentQuoteIndex;
let startTime;
let timerInterval;

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function startTest() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[currentQuoteIndex];
  textElement.textContent = quote;
  inputElement.value = '';
  inputElement.focus();
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function resetTest() {
  clearInterval(timerInterval);
  inputElement.value = '';
  inputElement.focus();
  resultElement.textContent = '';
  timerElement.textContent = 'Time: 0s';
  accuracyElement.textContent = 'Accuracy: 100%';
}

function updateTimer() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  timerElement.textContent = `Time: ${elapsedTime}s`;
}

function checkTyping() {
  const typedText = inputElement.value.trim();
  const originalText = quotes[currentQuoteIndex];
  const accuracy = calculateAccuracy(originalText, typedText);
  accuracyElement.textContent = `Accuracy: ${accuracy}%`;

  if (typedText === originalText) {
    clearInterval(timerInterval);
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    resultElement.textContent = `Congratulations! You typed the text correctly in ${elapsedTime} seconds.`;
  } else {
    resultElement.textContent = 'Keep typing...';
  }
}

function calculateAccuracy(originalText, typedText) {
  const minLength = Math.min(originalText.length, typedText.length);
  let correctCount = 0;
  for (let i = 0; i < minLength; i++) {
    if (originalText[i] === typedText[i]) {
      correctCount++;
    }
  }
  return ((correctCount / originalText.length) * 100).toFixed(2);
}

startButton.addEventListener('click', startTest);
resetButton.addEventListener('click', resetTest);
inputElement.addEventListener('input', checkTyping);
