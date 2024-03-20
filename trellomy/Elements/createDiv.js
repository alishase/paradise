import { createElement } from "./createElement";

const createDiv = (className, textContent, id) => {
    const div = createElement("div", {
        className: className,
        textContent: textContent,
        id: id
    })
    return div
}

export { createDiv }