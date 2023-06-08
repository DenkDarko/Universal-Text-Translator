document.addEventListener("DOMContentLoaded", () => {
  const translateBtn = document.getElementById("translateBtn");
  translateBtn.addEventListener("click", translateText);
});

async function translateText() {
  const textInput = document.getElementById("textInput");
  const sourceLangSelect = document.getElementById("sourceLang");
  const targetLangSelect = document.getElementById("targetLang");
  const translatedText = document.getElementById("translatedText");

  const text = textInput.value;
  const sourceLang = sourceLangSelect.value;
  const targetLang = targetLangSelect.value;

  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "9f702b70ffmsh2c70bfbb66adc91p1c9a35jsn126a5fb7bad4",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: text,
      target: targetLang,
      source: sourceLang,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;
    document.getElementById("translatedText").textContent = translatedText;
  } catch (error) {
    console.error(error);
  }
}
