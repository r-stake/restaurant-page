import renderHeader from "./header";
import renderFooter from "./footer";
import renderHome from "./home";
import renderMenu from "./menu";
import renderContacts from "./contacts";

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

export function addClass(element, newClass) {
  element.classList.add(newClass)
}

export function createMainSection(name) {
  const footer = createReference("footer");
  const main = createElement("main");
  content.insertBefore(main, footer);

  const div = createElement("div");
  appendElement(main, div);
  addClass(div, name);
}

function updateNavigation(active) {
  const activeNav = createReference(".selected");
  activeNav.classList.remove("selected");
  const activePage = createReference(`#${active}`);
  addClass(activePage, "selected");
}

function createEventListeners() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener('click', clickHandler);
  });
}

function clickHandler() {
  const mainSection = createReference("main");
  mainSection.remove();
  const newSectionId = event.target.id;
  updateNavigation(newSectionId);

  if (newSectionId === "home") {
    renderHome();
  } else if (newSectionId === "menu") {
    renderMenu();
  } else if (newSectionId === "contacts") {
    renderContacts();
  }
}

export function renderPage() {
  renderHeader();
  renderHome();
  const initialNav = document.querySelector("#home");
  initialNav.classList.add("selected");
  renderFooter();

  createEventListeners();
}

