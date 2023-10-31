import { createReference, createElement, appendElement, addTextContent, addClass, addInnerHTML } from "./helper_functions";
import { createMainSection } from "./helper_functions";

const embedMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7964.12096926262!2d22.683656287526496!3d55.4659877061418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slt!4v1698664047982!5m2!1sen!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

const contactInfo = {
  address: "17 Breezewood Lane, Rivendell, Eriador, Middle-earth",
  email: "info@autumnlights.com",
  phone: '802 211 258 6698',
  'working hours': [
    "MON - FRI, 9 AM - 6 PM",
    "SAT - SUN, 9 AM - 4 PM",
  ]
}

function createContactsSection(reference) {
  // Embed google maps
  createMapSection(reference);

  // Address
  createAddressSection(reference)

  // Working hours
  createWorkingHoursSection(reference);

  // Contact us
  createContactUsSection(reference);
}

function createMapSection(reference) {
  const map = createElement("div");
  appendElement(reference, map);
  addClass(map, "map");
  addInnerHTML(map, embedMap);
}

function createAddressSection(reference) {
  const location = createElement("div");
  appendElement(reference, location);
  addClass(location, "location");
  const locationHeader = createElement("h2");
  appendElement(location, locationHeader);
  addTextContent(locationHeader, "Address");
  const paraLocation = createElement("p");
  appendElement(location, paraLocation);
  addTextContent(paraLocation, contactInfo.address);
}

function createWorkingHoursSection(reference) {
  const workingHours = createElement("div");
  appendElement(reference, workingHours);
  addClass(workingHours, "working-hours");
  const workingHoursHeader = createElement("h2");
  appendElement(workingHours, workingHoursHeader);
  addTextContent(workingHoursHeader, "Working Hours");
  const paraHours1 = createElement("p");
  const paraHours2 = createElement("p");
  addTextContent(paraHours1, contactInfo["working hours"][0]);
  addTextContent(paraHours2, contactInfo["working hours"][1]);
  appendElement(workingHours, paraHours1);
  appendElement(workingHours, paraHours2);
}

function createContactUsSection(reference) {
  const contactUs = createElement("div");
  appendElement(reference, contactUs);
  addClass(contactUs, "contact-us");
  const contactUsHeader = createElement("h2");
  appendElement(contactUs, contactUsHeader);
  addTextContent(contactUsHeader, "Contact Us");

  // Create phone number link
  const paraPhone = createElement("p");
  appendElement(contactUs, paraPhone);
  const phoneNumber = createElement("a");
  appendElement(paraPhone, phoneNumber);
  phoneNumber.setAttribute("href", `tel:${contactInfo.phone}`);
  addTextContent(phoneNumber, `+${contactInfo.phone}`);

  // Create email address link 
  const paraEmail = createElement("p");
  appendElement(contactUs, paraEmail);
  const email = createElement("a");
  appendElement(contactUs, email);
  email.setAttribute("href", `mailto:${contactInfo.email}`);
  addTextContent(email, `${contactInfo.email}`);
}

export default function renderContacts() {
  createMainSection("contacts");
  const divContacts = createReference(".contacts");
  createContactsSection(divContacts);
}