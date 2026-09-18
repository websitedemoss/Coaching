"use strict";

/**
 * Initializes form validation and submission handling.
 */
function initForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  
  const fields = {
    name: { el: document.getElementById('form-name'), validate: v => v.trim().length >= 2, error: 'Please enter your name (at least 2 characters)' },
    phone: { el: document.getElementById('form-phone'), validate: v => /^[+]?[0-9]{10,13}$/.test(v.replace(/\s/g, '')), error: 'Please enter a valid phone number' },
    class: { el: document.getElementById('form-class'), validate: v => v !== '', error: 'Please select your class' },
    exam: { el: document.getElementById('form-exam'), validate: v => v !== '', error: 'Please select your exam' }
  };
  
  // Blur validation
  Object.values(fields).forEach(field => {
    if (!field.el) return;
    field.el.addEventListener('blur', () => validateField(field));
    field.el.addEventListener('input', () => {
      if (field.el.closest('.form-group')?.classList.contains('has-error')) {
        validateField(field);
      }
    });
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    Object.values(fields).forEach(field => {
      if (!validateField(field)) isValid = false;
    });
    
    if (isValid) {
      form.classList.add('is-hidden');
      const success = document.querySelector('.form-success');
      if (success) success.classList.remove('is-hidden');
    }
  });
}

/**
 * Validates a single form field.
 * @param {Object} field - The field configuration object.
 * @returns {boolean} - Whether the field is valid.
 */
function validateField(field) {
  if (!field.el) return true;
  const group = field.el.closest('.form-group');
  const errorEl = group?.querySelector('.form-error');
  const isValid = field.validate(field.el.value);
  
  group?.classList.toggle('has-error', !isValid);
  field.el.setAttribute('aria-invalid', !isValid);
  if (errorEl) {
    errorEl.textContent = isValid ? '' : field.error;
  }
  
  return isValid;
}
