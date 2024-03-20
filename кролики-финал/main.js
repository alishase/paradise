const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
const btn = document.getElementById("submitb")
const select = document.getElementById("sel")
const cost = document.getElementById("cost")
let ncost = ''
const main = document.getElementById("mainer")
const htmla = document.getElementById("html")
const cssa = document.getElementById("css")
const jsa = document.getElementById("js")
const order = document.getElementById("order")
const plan = document.getElementById("plana")
const html = document.getElementById("htmlb")
const css = document.getElementById("cssb")
const js = document.getElementById("jsb")
const openb = document.getElementById("menbtn")
const mainp = document.getElementById("mainer1")
const htmlp = document.getElementById("html1")
const cssp = document.getElementById("css1")
const jsp = document.getElementById("js1")
const planp = document.getElementById("plan1")
const orderp = document.getElementById("order1")

main.onclick = (event) => {
    if (window.innerWidth >= 760) {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
}

mainp.onclick = (event) => {
    if (window.innerWidth >= 760) {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
}

html.onclick = (event) => {
    if (window.innerWidth > 600) {
        window.scroll({
            top: 1100,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 2500,
            behavior: 'smooth'
        });
    }
}

htmla.onclick = (event) => {
    if (screen.width > 600) {
        window.scroll({
            top: 1100,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 2500,
            behavior: 'smooth'
        });
    }
}

htmlp.onclick = (event) => {
    if (window.innerWidth > 600) {
        window.scroll({
            top: 1100,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 2500,
            behavior: 'smooth'
        });
    }
}

css.onclick = (event) => {
    if (window.innerWidth > 600) {
        window.scroll({
            top: 1550,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 3000,
            behavior: 'smooth'
        });
    }
}

cssa.onclick = (event) => {
    if (window.innerWidth > 600) {
        window.scroll({
            top: 1550,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 3000,
            behavior: 'smooth'
        });
    }
}

cssp.onclick = (event) => {
    if (window.innerWidth > 600) {
        window.scroll({
            top: 1550,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 3000,
            behavior: 'smooth'
        });
    }
}

js.onclick = (event) => {
    if (window.innerWidth > 600) {
        window.scroll({
            top: 2050,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 3600,
            behavior: 'smooth'
        });
    }
}

jsa.onclick = (event) => {
    if (window.innerWidth > 600) {
        window.scroll({
            top: 2050,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 3600,
            behavior: 'smooth'
        });
    }
}

jsp.onclick = (event) => {
    if (window.innerWidth > 600) {
        window.scroll({
            top: 2050,
            behavior: 'smooth'
        });
    } else if (screen.width < 600) {
        window.scroll({
            top: 3600,
            behavior: 'smooth'
        });
    }
}

plan.onclick = (event) => {
    window.scroll({
        top: 2750,
        behavior: 'smooth'
    });
}

planp.onclick = (event) => {
    window.scroll({
        top: 4420,
        behavior: 'smooth'
    });
}

order.onclick = (event) => {
    window.scroll({
        top: 3500,
        behavior: 'smooth'
    });
}

order1.onclick = (event) => {
    window.scroll({
        top: 5240,
        behavior: 'smooth'
    });
}



function myFunction() {  
    document.getElementById("myDropdown").classList.toggle("show");
    console.log('done')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

select.addEventListener('click', myFunc)


function myFunc() {
    if (select.selectedIndex == "0") {
        ncost = '1,900руб/год'
    } else if (select.selectedIndex == "1") {
        ncost = "176руб/месяц<br>2,112руб/год"
    }
    cost.innerHTML = ncost;
};