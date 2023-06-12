
//Dark mode button
let themeButton = document.getElementById("theme-button");

//Toggle to dark mode function
const toggleDarkMode = () => {

  document.body.classList.toggle("dark-mode");
  
}

//Event listener
themeButton.addEventListener("click", toggleDarkMode);


const form = document.getElementById("sign-petition");
const signNowButton = document.getElementById("sign-now-button");

let count = 3

const addSignature = () => {
  
  let name = document.getElementById("name").value;
  let hometown = document.getElementById("homeTown").value;
  let email = document.getElementById("email").value;

  
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = "🖊️" + name + " from " + hometown + " supports this.";
  
  document.getElementById("signatures").appendChild(newParagraph);

}


const validateForm = () => {

  let containsErrors = false;
  
  var petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
     } else {
     petitionInputs[i].classList.remove('error');
     }
  
  }

  
  if (containsErrors == false) {
    addSignature();
    
    for (let i = 0; i < petitionInputs.length; i++){
      petitionInputs[i].value = "";
    containsErrors = false;
    }
  }
}

signNowButton.addEventListener('click', validateForm);


// -- lab 8 

const URL = "https://openlibrary.org/works/OL20698266W/Electronic_Waste";
const OLID = "OL20698266W";


const getBooks= () => {
  const proxyURL = "https://cp-proxy3.herokuapp.com/";
  const olQueryURL = "https://openlibrary.org/works/";
  const bookId = "OL20698266W";
  const bulletTrainURL = proxyURL + olQueryURL + bookId + ".json";

  
  let recommended = document.createElement("a");
  recommended.setAttribute("href", "https://openlibrary.org/works/OL20698266W/Electronic_Waste");
  document.getElementById("recommendation").appendChild(recommended);

  
  fetch(bulletTrainURL)
  .then((response) => response.json())
  .then((data) => {
    recommended.innerHTML = data.title;

});

  


  
}
  

getBooks();

const apiKey = "HaicxesghCn0CWf1mSxBkSg4slxn67eeqqvsK3mIBV1WL7ws";
const keywords = "electronic waste";
const url = "https://api.currentsapi.services/v1/search?apiKey=" + apiKey + "&keywords=" + keywords;

const getsAndDisplayNews = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const news = data.news;
  
  for (let i = 0; i < 5; i++) {
  const title = document.createElement('h3');
  title.textContent = news[i].title;

  const description = document.createElement('p');
  description.textContent = news[i].description;

  const article = document.createElement('article');
  article.appendChild(title);
  article.appendChild(description);

  const newsDiv = document.getElementById('news');
  newsDiv.append(article);
  
  }
}

getsAndDisplayNews();