import { createElement } from "./createElement";

const createButton = (className, value, id, onClickCallBack = null) => {
    const inputButton = createElement("input", {
        className: className,
        type: 'button',
        value: value,
        id: id,
        //onClickCallBack: onClickCallBack 
    })

    if (onClickCallBack) {
        inputButton.addEventListener("click", onClickCallBack)
    }
    return inputButton
}

export { createButton }
