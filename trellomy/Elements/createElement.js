
const createElement = (tagName, attributes) => {
    const element = document.createElement(tagName);
    
    for (const attrKey in attributes) {
        if (!attributes[attrKey]) {
            continue
        }
        element[attrKey] = attributes[attrKey]
    }
    return element
}

export { createElement }