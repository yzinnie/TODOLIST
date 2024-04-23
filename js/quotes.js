const quotes = [
  {
    quote:
      'One cannot think well, love well, sleep well, if one has not dined well.',
    author: "Virginia Woolf, A Room of One's Own",
  },
  {
    quote:
      'No need to hurry. No need to sparkle. No need to be anybody but oneself.',
    author: "Virginia Woolf, A Room of One's Own",
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}`;
