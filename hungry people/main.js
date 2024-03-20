let soupem = document.getElementById("soupem")
let pizzam = document.getElementById("pizzam")
let pastam = document.getElementById("pastam")
let desertm = document.getElementById("desert")
let winem = document.getElementById("winem")
let beerm = document.getElementById("beerm")
let drinksm = document.getElementById("drinksm")

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};
// let soupe = document.getElementById("soupe")
// let pizza = document.getElementById("pizza")
// let pasta = document.getElementById("pasta")
// let desert = document.getElementById("desert")
// let wine = document.getElementById("wine")
// let beer = document.getElementById("beer")
// let drinks = document.getElementById("drinks")

// let array = ["soupem", "pizzam", "pastam", "winem", "beerm", "drinksm"]
let arraybtn = ['soupe', 'pizza', 'pasta', 'desert', 'wine', 'beer', 'drinks']

function menu(btn) {
    for (let ele in arraybtn) {
        if (document.getElementById(arraybtn[ele]).classList.contains("selected") == true) {
            console.log(arraybtn[ele])
            document.getElementById(arraybtn[ele]).classList.remove("selected");
            console.log(arraybtn[ele] + "m")
            document.getElementById(arraybtn[ele] + "m").classList.remove("selectedmenu");
        }
    }
    console.log(btn.innerHTML)
    btn.classList.add("selected")
    document.getElementById(btn.innerHTML.toLowerCase() + "m").classList.add("selectedmenu")
}

let homebtn = document.getElementById("hom")
let aboutbtn = document.getElementById("abou")
let teambtn = document.getElementById("tea")
let bookingbtn = document.getElementById("bookin")
let galeriebtn = document.getElementById("galeri")
let contactbtn = document.getElementById("contac")
let eventsbtn = document.getElementById("event")
let menubtn = document.getElementById("men")
let bookingmbtn = document.getElementById("bookbtn")
let explorebtn = document.getElementById("explorebtn")
let nextbtn = document.getElementById("arrow-down")

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    window.scroll({
            top: 0,
            behavior: "smooth"
        }) // For Chrome, Firefox, IE and Opera
}



homebtn.onclick = (event) => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

nextbtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("about").offsetTop - 140,
        behavior: 'smooth'
    })
}

aboutbtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("about").offsetTop - 140,
        behavior: 'smooth'
    })
}

teambtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("team").offsetTop - 140,
        behavior: 'smooth'
    })
}

bookingbtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("booking").offsetTop - 140,
        behavior: 'smooth'
    })
}

bookingmbtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("booking").offsetTop - 140,
        behavior: 'smooth'
    })
}


galeriebtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("gallery").offsetTop - 140,
        behavior: 'smooth'
    })
}

contactbtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("contact").offsetTop - 140,
        behavior: 'smooth'
    })
}

eventsbtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("events").offsetTop - 140,
        behavior: 'smooth'
    })
}

menubtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("menu").offsetTop - 90,
        behavior: 'smooth'
    })
}

explorebtn.onclick = (event) => {
    window.scroll({
        top: document.getElementById("menu").offsetTop - 30,
        behavior: 'smooth'
    })
}