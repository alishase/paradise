// Импортируем модуль для выполнения HTTP-запросов
const fetch = require("node-fetch");

// Функция для перевода текста с использованием Google Translate API
async function translateText(text, targetLanguage) {
    const apiKey = "ВАШ_API_КЛЮЧ";
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const data = {
        q: text,
        target: targetLanguage,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const jsonResponse = await response.json();
        // Вывод переведённого текста
        console.log(jsonResponse.data.translations[0].translatedText);
    } catch (error) {
        console.error("Ошибка при переводе текста:", error);
    }
}

// Пример использования функции для перевода текста с английского на русский
translateText("Hello, world!", "ru");

let body = document.querySelector("body");
let container = document.createElement("div");
let text = document.createElement("h3");
let authorT = document.createElement("h2");
let info = 0;
let btn = document.createElement("button");
btn.innerHTML = "Get a quote";

// async function translate(text) {
//     let res = await axios.post(
//         `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
//         { q: text, target: "ru" }
//     );
//     let translation = res.data.data.translations[0].translatedText;
//     return translation;
// }

container.classList.add("cont");
container.appendChild(text);
container.appendChild(authorT);
body.appendChild(container);
body.appendChild(btn);

const getQuote = () => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        .then((response) => response.json())
        // .then((data) => console.log(data[0]))
        .then((data) => (info = data[0]))
        .then((info) => {
            text.innerHTML = `"${info.quote}"`;
            authorT.innerHTML = `${info.author}`;
        });
};
// authorT.innerHTML = info.author;
getQuote();
btn.addEventListener("click", getQuote);
