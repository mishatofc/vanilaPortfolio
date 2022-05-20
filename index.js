
document.oncontextmenu = function (e) {
  e.preventDefault()
  return false;
}
// disable somme additional key
document.onkeydown = function (e) {
  // disable f12
  if (event.keyCode == 123) {
      return false;
  }
 
  // disable ctrl+shift+C
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
  }
  // disable ctrl+shift+j
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
  }
  // disable ctrl+shift+U
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
  }
}


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