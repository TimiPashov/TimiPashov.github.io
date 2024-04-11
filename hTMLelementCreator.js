function createElement(tagName, textContent, attributes, children = []) {

    const element = document.createElement(tagName);

    const PARAMS = {
        class: (value) => element.classList.add(...value),
        id: (value) => (element.id = value),
        onclick: (value) => element.addEventListener('click', value),
        disabled: (value) => element.disabled = value,
        src: (value) => element.setAttribute('src', value),
        innerHtml: (value) => element.innerHTML = value,
        type: (value) => element.setAttribute('type', value),
        name: (value) => element.setAttribute('name', value),
        value: (value) => element.setAttribute('value', value),
        checked: (value) => element.checked = value,
        readonly: (value) => element.readOnly = value,
        classAtr: (value) => element.setAttribute('class', value),
        display: (value) => element.style.display = value
    };

    if (textContent) {
        element.textContent = textContent;
    }

    if (attributes) {
        Object.entries(attributes).forEach(([param, value]) => PARAMS[param](value));
    }

    if (children.length == 0) {
        return element;
    }

    children.forEach((c) => element.appendChild(c));

    return element;
}

const divContainer = createElement('div', null, { class: 'container', onclick: onRepair }, 
        [
            createElement('h2', `Product type for repair: ${productType}`),
            createElement('h3', `Client information: ${clientName}, ${clientPhone}`),
            createElement('h4', `Description of the problem: ${description}`),
            createElement('button', 'Start repair', { class: 'start-btn' }),
            createElement('button', 'Finish repair', { class: 'finish-btn', disabled: true }),
        ]
);