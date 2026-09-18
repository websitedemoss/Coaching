"use strict";

/**
 * Initializes scroll reveals and counter animations.
 */
function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Scroll reveals
  const revealElements = document.querySelectorAll('.animate-on-scroll');
  
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }
  
  // Counters
  const counters = document.querySelectorAll('.counter[data-target]');
  
  if (prefersReducedMotion) {
    counters.forEach(el => {
      el.textContent = el.dataset.target + (el.dataset.suffix || '');
    });
  } else {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    counters.forEach(el => counterObserver.observe(el));
  }
}

/**
 * Animates a counter element to its target value.
 * @param {HTMLElement} el - The counter element.
 */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  if (isNaN(target)) return;
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const isDecimal = el.dataset.target.includes('.');
  const start = performance.now();
  
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const current = eased * target;
    
    el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}
