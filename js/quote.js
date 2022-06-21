const quotes = [
  {
  quote: "A dream deferred is a dream denied.",
  author: "- Langston Hugues -",
  },
  {
  quote: "Fake it till you make it.",
  author: "- William James -",
  },
  {
  quote: "Avoiding danger is no safer in the long run than outright exposure.",
  author: "- Helen Keller -" ,
  },
  {
  quote: "The fearful are caught as often as the bold.",
  author: "- Helen Keller -" ,
  }
];

const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');
// select random quotes.
const todayQuote = quotes[parseInt(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

quote.style.setProperty('font-size', '24px');
quote.style.setProperty('text-align', 'center');
