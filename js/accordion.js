"use strict";

/**
 * Initializes FAQ accordion functionality.
 */
function initAccordion() {
  const items = document.querySelectorAll('.faq-item');
  
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      
      // Close all others
      items.forEach(other => {
        if (other !== item && other.classList.contains('is-open')) {
          closeItem(other);
        }
      });
      
      // Toggle this
      isOpen ? closeItem(item) : openItem(item);
    });
  });
}

/**
 * Opens an accordion item.
 * @param {HTMLElement} item - The .faq-item to open.
 */
function openItem(item) {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  if (!question || !answer) return;
  item.classList.add('is-open');
  question.setAttribute('aria-expanded', 'true');
  answer.style.maxHeight = answer.scrollHeight + 'px';
}

/**
 * Closes an accordion item.
 * @param {HTMLElement} item - The .faq-item to close.
 */
function closeItem(item) {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  if (!question || !answer) return;
  item.classList.remove('is-open');
  question.setAttribute('aria-expanded', 'false');
  answer.style.maxHeight = '0';
}
