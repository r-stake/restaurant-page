import {createReference, createElement, appendElement, addTextContent } from './helper_functions.js';

const headerElements = {
  name: "Autumn Lights",
  navigation: [
    "Home", "Menu", "Contacts",
  ]
}

export default function createHeader() {
  const content = createReference("#content");
  const header = createElement("header");
  const h1 = createElement("h1");

  appendElement(content, header);
  appendElement(header, h1);
  addTextContent(h1, headerElements.name);

  const navigation = createElement("nav");
  appendElement(header, navigation);

  const ul = createElement("ul");
  appendElement(navigation, ul);

  for (let i = 0; i < 3; i++) {
    const li = createElement("li");
    appendElement(ul, li);

    const navButton = createElement("button");
    appendElement(li, navButton);

    addTextContent(navButton, headerElements.navigation[i]);
    navButton.setAttribute('id', headerElements.navigation[i].toLowerCase());
  }
}