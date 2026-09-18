"use strict";

/**
 * Initializes safe image loading with skeletons and fallbacks.
 */
function initSafeImages() {
  document.querySelectorAll('.safe-image').forEach(container => {
    const img = container.querySelector('.safe-image__img');
    const skeleton = container.querySelector('.safe-image__skeleton');
    const fallback = container.querySelector('.safe-image__fallback');
    
    if (!img) {
      showFallback(skeleton, null, fallback);
      return;
    }
    
    if (!img.getAttribute('src') || img.getAttribute('src') === '') {
      showFallback(skeleton, img, fallback);
      return;
    }
    
    if (img.complete) {
      if (img.naturalHeight > 0) {
        showImage(skeleton, img);
      } else {
        showFallback(skeleton, img, fallback);
      }
      return;
    }
    
    img.addEventListener('load', () => showImage(skeleton, img));
    img.addEventListener('error', () => showFallback(skeleton, img, fallback));
  });
}

/**
 * Shows the loaded image and hides the skeleton.
 * @param {HTMLElement} skeleton - The skeleton placeholder.
 * @param {HTMLElement} img - The image element.
 */
function showImage(skeleton, img) {
  if (skeleton) skeleton.classList.add('is-hidden');
  if (img) img.classList.add('is-loaded');
}

/**
 * Shows the fallback and hides the image and skeleton.
 * @param {HTMLElement} skeleton - The skeleton placeholder.
 * @param {HTMLElement} img - The image element.
 * @param {HTMLElement} fallback - The fallback element.
 */
function showFallback(skeleton, img, fallback) {
  if (skeleton) skeleton.classList.add('is-hidden');
  if (img) img.classList.add('is-hidden');
  if (fallback) fallback.classList.remove('is-hidden');
}
