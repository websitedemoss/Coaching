"use strict";

/**
 * Initializes the theme toggle functionality.
 */
function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;
  
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
  
  // Handle all toggles (mobile menu has one too potentially)
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    if (btn !== toggle) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }
  });
}

/**
 * Sets the theme and updates the UI accordingly.
 * @param {string} theme - 'dark' or 'light'
 */
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('nexora-theme', theme);
  
  // Update meta theme-color
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#0B0D10' : '#FAFAF8');
  }
  
  // Update toggle icons and aria
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    const sun = btn.querySelector('.theme-toggle__sun');
    const moon = btn.querySelector('.theme-toggle__moon');
    if (sun) sun.classList.toggle('is-hidden', theme === 'light');
    if (moon) moon.classList.toggle('is-hidden', theme === 'dark');
  });
}
