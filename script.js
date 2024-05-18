const body = document.querySelector("body");
const themeButton = document.querySelector(".theme");
const quote = document.querySelector(".quote");
const generate = document.querySelector(".generate");
let theme = "light";
function themeChanger() {
  if (theme == "light") {
    body.setAttribute("class", "dark");
    theme = "dark";
  } else {
    body.setAttribute("class", "light");
    theme = "light";
  }
}

themeButton.addEventListener("click", themeChanger);
async function generateQuote() {
  const url =
    "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b61773c2aamsh98d1d8e32353dd5p1cd67fjsn231e0d11b778",
      "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    quote.textContent = JSON.parse(result)[0].text;
  } catch (error) {
    console.error(error);
  }
}
setInterval(generateQuote, 10000);

generate.addEventListener("click", generateQuote);
