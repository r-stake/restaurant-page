const home = {
  header: {
    name: "Autumn lights",
  },
  main: {
    description: "Discover Autumn Lights, a haven of tranquility. With its softly lit, rustic interior and a serene ambiance that perfectly captures the essence of autumn, our restaurant offers a respite from the everyday hustle. Indulge in our thoughtfully curated menu, artfully prepared to evoke the flavors of the season, while basking in the soothing melodies that add an extra layer of relaxation to your dining experience. At Autumn Lights, let the gentle atmosphere and the delightful cuisine guide you into a moment of peaceful bliss and contentment."
  },
  footer: {
    reference: {
      text: "Photo by ",
      link: "https://www.pexels.com/photo/alcohol-architecture-bar-beer-260922/",
      anchorText: "Pixabay",
      getFullReference() {
        return `${this.text}<a href="${this.link}">${this.anchorText}</a>`
      }
    },
    getFullCopyright() {
      const currentYear = new Date().getFullYear();
      return `© ${currentYear} Autumn Lights. All rights reserved.`
    },
  },
}

function createReference(reference) {
  return document.querySelector(reference);
}

function createElement(element) {
  const newElement = document.createElement(element);
  return newElement;
}

function appendElement(parentElement, childElement) {
  parentElement.appendChild(childElement);
}

function addTextContent(element, content) {
  element.textContent = content;
}

function addInnerHTML(element, content) {
  element.innerHTML = content;
}

function renderHome() {
  // Create header
  const content = createReference("#content");
  const header = createElement("header");
  const h1 = createElement("h1");

  appendElement(content, header);
  appendElement(header, h1);
  addTextContent(h1, home.header.name);

  // Create main
  const main = createElement("main");
  const div = createElement("div");
  const paraMain = createElement("p");

  appendElement(content, main);
  appendElement(main, div);
  appendElement(div, paraMain);
  addTextContent(paraMain, home.main.description);

  // Create footer
  const footer = createElement("footer");
  const paraFootRef = createElement("p");
  const paraFootCopyright = createElement("p");

  appendElement(content, footer);
  appendElement(footer, paraFootRef);
  appendElement(footer, paraFootCopyright);
  addInnerHTML(paraFootRef, home.footer.reference.getFullReference());
  addTextContent(paraFootCopyright, home.footer.getFullCopyright());
}

export { renderHome }