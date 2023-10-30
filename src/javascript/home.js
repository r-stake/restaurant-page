import { createReference, createElement, appendElement, addTextContent, addClass, createMainSection } from './helper_functions.js';
import { createMainSection } from './helper_functions.js';

const home = {
  description: "Discover Autumn Lights, a haven of tranquility. With its softly lit, rustic interior and a serene ambiance that perfectly captures the essence of autumn, our restaurant offers a respite from the everyday hustle. Indulge in our thoughtfully curated menu, artfully prepared to evoke the flavors of the season, while basking in the soothing melodies that add an extra layer of relaxation to your dining experience. At Autumn Lights, let the gentle atmosphere and the delightful cuisine guide you into a moment of peaceful bliss and contentment."
}

export default function renderHome() {
  createMainSection("home");
  
  const divHome = createReference(".home");
  const paraMain = createElement("p");
  appendElement(divHome, paraMain);
  addTextContent(paraMain, home.description);
}