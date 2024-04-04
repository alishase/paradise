
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
