const quotes = [
  {
    quote:
      'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn',
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
