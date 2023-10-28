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
}