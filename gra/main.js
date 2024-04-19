let input = document.querySelector("#number")
let btn = document.querySelector("#submit")

let solve = document.querySelector("#solve")
let submit = document.querySelector("#subm")
let text = document.querySelector("h3")
let number1 = input.value;
const isNumeric = (num) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num);

btn.addEventListener('click', () => {
    if(isNumeric(input.value)== true ){
        input.disabled = true
        btn.disabled = true;
        console.log(input.value)
    }else{
        alert('Wprowadzona nie liczba')
    }
})



submit.addEventListener('click', () => {
    let solving = parseInt(solve.value)
    let odpowiedz = parseInt(input.value)
    console.log(`${solving}  ${odpowiedz}`)
    if(solving == odpowiedz){
        text.innerHTML = `Ty wygrał, liczba była ${odpowiedz}`
        input.disabled = false
        input.type = "text"
        document.querySelector("#restart").style.display = "block"
    }else if(solving < odpowiedz){
        text.innerHTML = "Wprowadzona liczba jest mniejszą niż zagadkowy numer"
    }else if(solving > odpowiedz){
        text.innerHTML = "Wprowadzona liczba jest większą niż zagadkowy numer"
    }
})


