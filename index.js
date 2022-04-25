


const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

getQuote();

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- ${data.author}`;
    });
}



var preloader = document.getElementById("preloader");
window.addEventListener("load", function(){

preloader.style.display = "none";

} )




new WOW().init();