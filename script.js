const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};
// Toggle the menu when menu icon is clicked
menuIcon.onclick = (e) => {
  e.stopPropagation(); // Prevent event from bubbling up to document
  navLinks.classList.toggle("active");
};

// Close menu when clicking outside of navLinks or menuIcon
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
