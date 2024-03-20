import { createElement } from "./createElement";

const creatTextInput = (className, id) => {
    const inputText = createElement("input", {
        className: className,
        type: 'text',
        placeholder: " ",
        id: id,
        
    })
    return inputText
}

export { creatTextInput }
