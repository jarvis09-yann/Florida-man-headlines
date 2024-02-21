const headline = document.querySelector(".headline");
let headlineText = [];

function fetchHeadlines() {
  fetch("headlines.json")
    .then((response) => response.json())
    .then((data) => {
      headlineText = data;
      showRandomHeadline(); // Call showRandomHeadline() here
    })
    .catch((error) => console.error("Error fetching headlines:", error));
}

function showRandomHeadline() {
  const randomIndex = Math.floor(Math.random() * headlineText.length);
  const randomHeadline = headlineText[randomIndex];
  headline.textContent = randomHeadline;
}

fetchHeadlines();
