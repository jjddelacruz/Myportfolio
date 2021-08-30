/* jshint browser: true */
/* jshint esversion: 6 */

//Make sure DOM is ready
document.addEventListener("DOMContentLoaded",function(){
// DATA
// 1. dataset of quotes and their authors
  const quotesPool = [
                [`It's more satisfying to hear a single "thank you" than a lot of "sorry"s.`, `Emilya <br> (Re:Zero)`,`https://www.less-real.com/imagevault/uploaded/imagessolidthumbnails/part7/Emilia-33082.jpg`],
                [`Not knowing what the real problem is before trying it is what makes the problem hard.`, `Viktor Licht <br> (Fire Force)`,`https://www.less-real.com/imagevault/uploaded/imagessolidthumbnails/part7/Viktor-Licht-33083.jpg`],
                [`If you really want to change someone, you have to start with yourself.`, `Hanabi Yasuraoka <br> (Kuzu no Honkai)`,`https://www.less-real.com/imagevault/uploaded/imagessolidthumbnails/part7/Rei-Hououmaru-33080.jpg`]
                ];


// VARIABLES
  let oldQuoteIndex;

//Generate a random number based on argument's length
  function generateRandomNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }

//1. Get random number from generateRandomNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new quote from array
//4. Display the quote
  function generateNewQuote(){
    let index = generateRandomNumber(quotesPool);
//While loop so no same quote is generated in a row
    while (index === oldQuoteIndex) {
      index = generateRandomNumber(quotesPool);
    }
    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    let image = document.getElementById("image");

//Show new quote and author on page
    quote.innerHTML = newQuote[0];
    author.innerHTML = newQuote[1];
    image.src = newQuote[2];

//Update Tweet href attribute with new quote and author
    let tweet = document.getElementById("tweet-quote");
    tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + newQuote[0] + '" -' + newQuote[1];
//update index checker
    oldQuoteIndex = index;
  }

//Show new quote and change color scheme on 'Random Quote' button click
  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){   generateNewQuote();   });
  }

  onQuoteButtonClick();
  
// Get the first quote and color scheme on window load
  window.onload = function () {  generateNewQuote();  };
  
  
});