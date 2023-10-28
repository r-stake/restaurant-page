export function createReference(reference) {
  return document.querySelector(reference);
}

export function createElement(element) {
  const newElement = document.createElement(element);
  return newElement;
}

export function appendElement(parentElement, childElement) {
  parentElement.appendChild(childElement);
}

export function addTextContent(element, content) {
  element.textContent = content;
}

export function addInnerHTML(element, content) {
  element.innerHTML = content;
}