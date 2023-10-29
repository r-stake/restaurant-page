import { createReference, createElement, appendElement, addTextContent, addClass } from './helper_functions.js';
import createHeader from './header.js';
import createFooter from './footer.js';

const home = {
  description: "Discover Autumn Lights, a haven of tranquility. With its softly lit, rustic interior and a serene ambiance that perfectly captures the essence of autumn, our restaurant offers a respite from the everyday hustle. Indulge in our thoughtfully curated menu, artfully prepared to evoke the flavors of the season, while basking in the soothing melodies that add an extra layer of relaxation to your dining experience. At Autumn Lights, let the gentle atmosphere and the delightful cuisine guide you into a moment of peaceful bliss and contentment."
}

export default function renderHome() {
  // Create header
  createHeader();
  const homeNav = createReference("#home");
  addClass(homeNav, "selected");

  // Create home
  const main = createElement("main");
  const divHome = createElement("div");

  appendElement(content, main);
  appendElement(main, divHome);
  addClass(divHome, "home");

  const paraMain = createElement("p");
  appendElement(div, paraMain);
  addTextContent(paraMain, home.description);

  // Create footer
  createFooter();
}