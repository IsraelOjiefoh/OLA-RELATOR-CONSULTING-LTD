"use strict";

/**
 * Element toggle function
 */
const elemToggleFunc = (elem) => elem.classList.toggle("active");

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

// Combine all elements that can toggle the navbar
const navToggleElems = [overlay, navCloseBtn, navOpenBtn, ...navbarLinks];

navToggleElems.forEach((elem) => {
  if (!elem) return; // skip if element doesn't exist
  elem.addEventListener("click", () => {
    if (navbar) elemToggleFunc(navbar);
    if (overlay) elemToggleFunc(overlay);

    // Optional: toggle open/close button visibility
    if (navOpenBtn && navCloseBtn) {
      const isActive = navbar.classList.contains("active");
      navOpenBtn.style.display = isActive ? "none" : "block";
      navCloseBtn.style.display = isActive ? "block" : "none";
    }
  });
});

/**
 * Header active state on scroll
 */
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  if (!header) return;
  window.scrollY >= 400
    ? header.classList.add("active")
    : header.classList.remove("active");
});
