let body = document.querySelector('body')
let container = document.querySelector('.container')
class Gallery {
    createPedestal(name, png, link) {
        let div = document.createElement('div')
        div.setAttribute('class', 'gallery-element')
        container.appendChild(div)

        let image = document.createElement('a')
        image.setAttribute('href', `${link}`)
        let preview = document.createElement('img')
        preview.setAttribute('class', 'preview')
        preview.setAttribute('src', `${png}`)
        div.appendChild(image)
        image.appendChild(preview)

        let text = document.createElement('a')
        text.innerHTML = `${name}`
        text.setAttribute('class', 'text-elem')
        text.setAttribute('href', `${link}`)
        div.appendChild(text)

        let pedestal = document.createElement('img')
        pedestal.setAttribute('class', 'pedestal')
        pedestal.setAttribute('src', `pedestal.png`)
        div.appendChild(pedestal)
    }
}
let gallery = new Gallery()

gallery.createPedestal(
    "Attendance Calculator",
    "calculator.png",
    "Frekwencja/index.html"
);
gallery.createPedestal("Tetris", "tetris.png", "tetrisjs/tetris.html")
gallery.createPedestal("Online Organiser", "trello.png", "trellomy/index.html")
gallery.createPedestal("Hungry People", "hungry.png", "hungry people/index.html")
gallery.createPedestal("Web-technology landing", "iteen.png", "кролики-финал/mainblock.html")
gallery.createPedestal("Pelmen Site", "pelmen.png", "pelmen/pelmen.html")
gallery.createPedestal("McGill Grocery", "grocery.png", "grocery1/index.html")
gallery.createPedestal("Mendeleev's Table", "mendeleev.png", "mendeleev/index.html")
gallery.createPedestal("Buba Juzz blog", "bbjz.png", "site1/index.html")
gallery.createPedestal("Breaking Bad quotes", "BB/break.jpg", "BB/index.html")
gallery.createPedestal("Gra więcej lub mniej", "", "gra/index.html")
gallery.createPedestal("TODO app", "", "todoapp/todoapp/index.html")
