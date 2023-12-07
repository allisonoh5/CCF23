let countries;
let selectedCountry;
let phrases = ["Hello", "Thank you", "Please", "Yes", "No", "I need help", "How much?", "Where is ...?"];
let translations = {};

//data loading
function preload() {
  countries = loadJSON("https://restcountries.com/v3.1/all");
  loadJSON("https://restcountries.com/v3.1/all", function(data) {
  countries = data;
  console.log(countries);
  });
}

//
function setup() {
  createCanvas(800, 600);
  background(245, 245, 245);

  let dropdown = createSelect();
  dropdown.position(50, 50);
  dropdown.option("Select a country");

  for (let country of countries) {
    dropdown.option(country.name.common);
  }

  dropdown.changed(() => {
    selectedCountry = dropdown.value();
    getTranslations(selectedCountry);
  });
}

//fetch the translations from the data

function getTranslations(countryName) {
  let country = countries.find(c => c.name.common === countryName);
  let languageCode = Object.keys(country.languages)[0]; // Get the language
  
  for (let phrase of phrases) {
    let url = `https://api.mymemory.translated.net/get?q=${phrase}&langpair=en|${languageCode}`;
    loadJSON(url, data => {
      translations[phrase] = data.responseData.translatedText;
      drawTranslations();
    });
  }
}

//draw the translations
function drawTranslations() {
  background(245, 245, 245);
  fill(50);
  textSize(24);
  text(selectedCountry, 50, 100);

  let y = 150;
  for (let phrase in translations) {
    textSize(18);
    text(phrase + ": ", 50, y);
    text(translations[phrase], 300, y);
    y += 30;
  }
}

function draw() {} // Empty draw function bc doesn't need to be updated

