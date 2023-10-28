import { createElement, appendElement, addTextContent, addInnerHTML} from './helper_functions.js';

const footerElements = {
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
  }
}

export default function createFooter() {
  const footer = createElement("footer");
  const paraFootRef = createElement("p");
  const paraFootCopyright = createElement("p");

  appendElement(content, footer);
  appendElement(footer, paraFootRef);
  appendElement(footer, paraFootCopyright);
  addInnerHTML(paraFootRef, footerElements.reference.getFullReference());
  addTextContent(paraFootCopyright, footerElements.getFullCopyright());
}