/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let ulElement = document.querySelector('#navbar__list');
// Array of content for the li elements
let sectionContent = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

// Loop through the array and create li elements
for (let i = 0; i < sectionContent.length; i++) {
  // Create a new li element
  let liElement = document.createElement('li');
  // Set the content of the li element
  liElement.textContent = sectionContent[i];
  // Add the li elements to the ul element
  ulElement.appendChild(liElement);

  liElement.addEventListener('click', scrollToSection);
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// Scroll to anchor ID using scrollTO event
// Function to scroll to the corresponding section when a li element is clicked
function scrollToSection(event) {
    // Get the data-nav attribute value of the clicked li element
    let navItem = event.target.textContent;
    // Remove spaces and convert to lowercase to match the section ID
    let sectionId = navItem.replace(/\s+/g, '').toLowerCase();
    // Scroll to the section with the corresponding ID
    let section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function scrollToSection(event) {
  event.preventDefault();
  const targetSectionId = event.target.textContent.replace(/\s+/g, "").toLowerCase();
  const targetSection = document.getElementById(targetSectionId);
  targetSection.scrollIntoView({ behavior: "smooth" });
}
// Set sections as active
window.addEventListener("scroll", setActiveSection);

// Get all the navigation items
const navItems = document.querySelectorAll('.navbar__menu li');
// Add click event listener to each navigation item
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove "active" class from all navigation items
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
    });
    // Add "active" class to the clicked navigation item
    item.classList.add('active');
  });
}); 