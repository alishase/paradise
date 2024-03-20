let body = document.querySelector('body')
let addTask = document.getElementById('addtask')
let delTask = document.getElementById('deltask')
let cards_todo = document.getElementById('cards_todo')
let cards_progress = document.getElementById('cards_progress')
let cards_done = document.getElementById('cards_done')
let counttodo = document.getElementById('counttodo')
let countprogress = document.getElementById('countprogress')
let countdone = document.getElementById('countdone')

function counters() {

    counttodo.innerHTML = cards_todo.childElementCount
    countprogress.innerHTML = cards_progress.childElementCount
    countdone.innerHTML = cards_done.childElementCount
}

counters()

function modalWindowToDo() {
    //СОЗДАЮ МОДАЛЬНОЕ ОКНО
    let modal = document.createElement("div");
    let modal_content = document.createElement("div")
    let modal_title = document.createElement("input")
    let modal_placeholder = document.createElement("textarea")
    let modal_btns = document.createElement("div")
    let modal_select = document.createElement("select")
    let modal_close = document.createElement("button")
    let modal_confirm = document.createElement("button")

    modal_close.innerHTML = "CANCEL"
    modal_confirm.innerHTML = "CONFIRM"
    modal.setAttribute('class', 'modal')
    modal_content.setAttribute('class', 'modal-content')
    modal_title.setAttribute('class', 'inputTitle')
    modal_title.setAttribute('placeholder', 'Title')
    modal_placeholder.setAttribute('class', 'description')
    modal_placeholder.setAttribute('placeholder', 'Description')
    modal_btns.setAttribute('class', 'modalBtns')
    modal_select.setAttribute('class', 'select')
    modal_close.setAttribute('class', 'close modalBtn')
    modal_confirm.setAttribute('class', 'confirm modalBtn')

    for (var i = 1; i <= 15; i++) {
        var option = document.createElement("option");
        option.value = `name${i}`;
        option.text = `name${i}`;
        modal_select.appendChild(option);
    }






    modal.appendChild(modal_content)
    modal_content.appendChild(modal_title)
    modal_content.appendChild(modal_placeholder)
    modal_content.appendChild(modal_btns)
    modal_btns.appendChild(modal_select)
    modal_btns.appendChild(modal_close)
    modal_btns.appendChild(modal_confirm)

    // ДОБАВЛЮ ОБРАБОТЧКИ СОБЫТИЙ ПРИ НАЖАТИИ НА СОЗДАТЬ КАРТОЧКА
    modal_confirm.addEventListener('click', function() {
        //СОЗДАЮ КАРТОЧКУ И ДАЮ СТИЛИ

        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let card_line1 = document.createElement('div')
        card_line1.setAttribute('class', 'line')

        let card_line2 = document.createElement('div')
        card_line2.setAttribute('class', 'line')

        let card_line3 = document.createElement('div')
        card_line3.setAttribute('class', 'line')

        let card_title = document.createElement('h4')
        card_title.setAttribute('class', 'cardText')
        card_title.innerHTML = `${modal_title.value}`

        let card_btns = document.createElement('div')
        card_btns.setAttribute('class', 'cardBtns')

        let card_edit = document.createElement('button')
        card_edit.innerHTML = 'EDIT'

        var card_delete = document.createElement("button")
        card_delete.innerHTML = "DELETE"



        var card_next = document.createElement("button")
        card_next.innerHTML = ">"


        let card_description = document.createElement('h4')
        card_description.setAttribute('class', 'cardText')
        card_description.innerHTML = `${modal_placeholder.value}`

        let card_name = document.createElement('h4')
        card_name.setAttribute('class', 'cardText')
        card_name.innerHTML = `${modal_select.options[modal_select.selectedIndex].text}`

        let card_time = document.createElement('h4')
        card_time.setAttribute('class', 'cardText')
        const date = new Date();
        //ДАТА СОЗДАНИЯ
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        card_time.innerHTML = `${day}-${month}-${year}`;

        card.append(card_line1)
        card.append(card_line2)
        card.append(card_line3)

        card_line1.append(card_title)
        card_line1.append(card_btns)
        card_btns.append(card_edit)
        card_btns.append(card_delete)

        card_line2.append(card_description)
        card_line2.append(card_next)

        card_line3.append(card_name)
        card_line3.append(card_time)
        modal.remove()

        //ОБРАБОТЧИКИ СОБЫТИЙ ПЕРЕМЕЩЕНИЯ

        card_next.addEventListener('click', function moveCard() {

            // ПОЛУЧАЕМ ИНФОРМАЦИЮ В КАКОМ СТОЛБЦЕ НАХОДИТСЯ КАРТОЧКА ПРИ НАЖАТИИ НА КНОПКУ ПЕРЕМЕЩЕНИЯ И ПЕРЕМЕЩАЕМ В СЛЕДУЮЩУЮ

            if (this.parentElement.parentElement.parentElement == cards_todo) {

                // ПРОВЕРЯЕМ ЕСТЬ ЛИ 6 ЭЛЕМЕНТОВ В СТОЛБЦЕ IN PROGRESS

                if (cards_progress.childElementCount === 6) {


                    let checkProgress = document.createElement("div");
                    let checkProgress_content = document.createElement("div")
                    let checkProgress_title = document.createElement('h2')
                    let checkProgress_text = document.createElement('h4')
                    let checkProgress_btns = document.createElement("div")
                    let checkProgress_close = document.createElement("button")


                    checkProgress_title.innerHTML = 'WARNING'
                    checkProgress_text.innerHTML = 'Сначала выполните текущие задания'
                    checkProgress_close.innerHTML = "CANCEL"
                    checkProgress.setAttribute('class', 'modal')
                    checkProgress_content.setAttribute('class', 'modal-content warning checker')
                    checkProgress_btns.setAttribute('class', 'modalBtns warningBtns')
                    checkProgress_close.setAttribute('class', 'close modalBtn')
                    checkProgress_btns.appendChild(checkProgress_close)
                    checkProgress_close.addEventListener('click', function() {
                        checkProgress.remove()
                    })

                    body.append(checkProgress)
                    checkProgress.appendChild(checkProgress_content)

                    checkProgress_content.appendChild(checkProgress_title)
                    checkProgress_content.appendChild(checkProgress_text)
                    checkProgress_content.appendChild(checkProgress_btns)
                } else {
                    this.parentElement.parentElement.remove()
                    cards_progress.append(this.parentElement.parentElement)
                    counters()
                }

            } else if (this.parentElement.parentElement.parentElement == cards_progress) {
                this.parentElement.parentElement.remove()
                cards_done.append(this.parentElement.parentElement)
                card_next.remove()
                counters()
            }


        })

        // ОБРАБОТЧИК СОБЫТИЙ ИЗМЕНЕНИЯ КАРТОЧКИ

        card_edit.addEventListener('click', function editCard() {
                // СОЗДАЁМ МОДАЛКУ
                let edit = document.createElement("div");
                let edit_content = document.createElement("div")
                let edit_title = document.createElement("input")
                let edit_placeholder = document.createElement("textarea")
                let edit_btns = document.createElement("div")
                let edit_select = document.createElement("select")
                let edit_close = document.createElement("button")
                let edit_confirm = document.createElement("button")

                edit_close.innerHTML = "CANCEL"
                edit_confirm.innerHTML = "CONFIRM"
                edit.setAttribute('class', 'modal')
                edit_content.setAttribute('class', 'modal-content')
                edit_title.setAttribute('class', 'inputTitle')
                edit_title.setAttribute('placeholder', 'Title')
                edit_placeholder.setAttribute('class', 'description')
                edit_placeholder.setAttribute('placeholder', 'Description')
                edit_btns.setAttribute('class', 'modalBtns')
                edit_select.setAttribute('class', 'select')
                edit_close.setAttribute('class', 'close modalBtn')
                edit_confirm.setAttribute('class', 'confirm modalBtn')

                for (var i = 1; i <= 15; i++) {
                    var option = document.createElement("option");
                    option.value = `name${i}`;
                    option.text = `name${i}`;
                    edit_select.appendChild(option);
                }

                // ВПИСЫВВАЕМ В ПОЛЯ МОДАЛКИ ИНФОРМАЦИЮ ИЗ КАРТОЧКИ

                edit_title.value = `${this.parentElement.parentElement.querySelector('h4').innerHTML}`
                edit_placeholder.value = `${this.parentElement.parentElement.parentElement.querySelector('.card .line:nth-child(2) h4').innerHTML}`
                let edit_number = parseInt(this.parentElement.parentElement.parentElement.querySelector('.card .line:nth-child(3) h4').innerHTML.replace(/\D/g, ''))
                console.log(edit_number)
                edit_select.getElementsByTagName('option')[edit_number - 1].selected = 'selected';



                edit.appendChild(edit_content)
                edit_content.appendChild(edit_title)
                edit_content.appendChild(edit_placeholder)
                edit_content.appendChild(edit_btns)
                edit_btns.appendChild(edit_select)
                edit_btns.appendChild(edit_close)
                edit_btns.appendChild(edit_confirm)
                body.append(edit)

                // ВЫВОДИМ НОВУЮ ИНФОРМАЦИЮ ИЗ МОДАЛКИ

                edit_confirm.addEventListener('click', function editConfirm() {

                    card_title.innerHTML = `${edit_title.value}`
                    card_description.innerHTML = `${edit_placeholder.value}`
                    card_name.innerHTML = `${edit_select.options[edit_select.selectedIndex].text}`
                    edit.remove()
                })
                edit_close.addEventListener('click', function() {
                    edit.remove()
                })
            })
            // ОБРАБОТЧИК УДАЛЕНИЯ КАРТОЧКИ

        card_delete.addEventListener('click', function delCard() {
            this.parentElement.parentElement.parentElement.remove()
            counters()
        })

        cards_todo.append(card)
        counters()
    })

    // ОБРАБОТЧИК ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА ПРИ НАЖАТИИ НА CANCEL

    modal_close.addEventListener('click', function() {
        modal.remove()
    })

    body.append(modal)
}

delTask.addEventListener('click', function() {

    // СОЗДАЁМ МОДАЛКУ ПРЕДУПРЕЖДЕНИЯ

    let warning = document.createElement("div");
    let warning_content = document.createElement("div")
    let warning_title = document.createElement('h2')
    let warning_text = document.createElement('h4')
    let warning_btns = document.createElement("div")
    let warning_close = document.createElement("button")
    let warning_confirm = document.createElement("button")


    warning_title.innerHTML = 'WARNING'
    warning_text.innerHTML = 'Вы точно хотите удалить все выполненные задания?'
    warning_close.innerHTML = "CANCEL"
    warning_confirm.innerHTML = "CONFIRM"
    warning.setAttribute('class', 'modal')
    warning_content.setAttribute('class', 'modal-content warning')
    warning_btns.setAttribute('class', 'modalBtns warningBtns')
    warning_close.setAttribute('class', 'close modalBtn')
    warning_confirm.setAttribute('class', 'confirm modalBtn')
    warning_btns.appendChild(warning_close)
    warning_btns.appendChild(warning_confirm)
    warning_close.addEventListener('click', function() {
        warning.remove()
    })
    warning_confirm.addEventListener('click', function() {
        warning.remove()
        while (cards_done.firstChild) {
            cards_done.removeChild(cards_done.lastChild);
        }
        counters()
    })

    body.append(warning)
    warning.appendChild(warning_content)

    warning_content.appendChild(warning_title)
    warning_content.appendChild(warning_text)
    warning_content.appendChild(warning_btns)
})