export function setItem(data, selector) {
    window.localStorage.setItem(selector, JSON.stringify(data));
}

export function getItem(selector) {
    return JSON.parse(window.localStorage.getItem(selector));
}

export function useAttribute(element, attribute, value, remove = false) {
    if (remove) return element.removeAttribute(attribute);
    element.setAttribute(attribute, value);
}

export function getEl(element, isParent = false, parent) {
    if (isParent) {
        return parent.querySelector(element);
    }
    return document.querySelector(element);
}