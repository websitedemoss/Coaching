"use strict";

/**
 * Central site configuration for quick agency re-branding & customization
 */
const siteConfig = {
  brand: 'Nexora Academy',
  tagline: 'Prepare Smarter. Perform Better.',
  location: 'Ahmedabad, Gujarat',
  phone: '+91 00000 00000',
  whatsapp: '910000000000',
  email: 'hello@nexora-demo.com',
  primaryCTA: 'Book Free Counselling',
  programs: [
    { name: 'JEE Excellence', category: 'Engineering', cta: 'Explore Program' },
    { name: 'NEET Pro', category: 'Medical', cta: 'Explore Program' },
    { name: 'Foundation', category: 'Classes 8–10', cta: 'Explore Program' }
  ],
  faculty: [
    { name: 'Dr. Arjun Mehta', subject: 'Physics', exp: '12+ years', focus: 'JEE Advanced • Mechanics • Electrodynamics' },
    { name: 'Dr. Riya Shah', subject: 'Chemistry', exp: '10+ years', focus: 'NEET Chemistry • Organic • Reaction Mechanisms' },
    { name: 'Prof. Kunal Patel', subject: 'Mathematics', exp: '14+ years', focus: 'JEE Main & Adv • Calculus • Coordinate Geometry' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules safely
  const modules = [
    { name: 'Theme', init: typeof initTheme === 'function' ? initTheme : null },
    { name: 'Navigation', init: typeof initNav === 'function' ? initNav : null },
    { name: 'Animations', init: typeof initAnimations === 'function' ? initAnimations : null },
    { name: 'Form', init: typeof initForm === 'function' ? initForm : null },
    { name: 'Accordion', init: typeof initAccordion === 'function' ? initAccordion : null },
    { name: 'SafeImage', init: typeof initSafeImages === 'function' ? initSafeImages : null }
  ];
  
  modules.forEach(({ name, init }) => {
    if (init) {
      try { 
        init(); 
      } catch (err) { 
        console.warn(`[Nexora] ${name} init failed:`, err); 
      }
    }
  });
  
  // WhatsApp link setup
  document.querySelectorAll('.whatsapp-fab, .whatsapp-link').forEach(el => {
    el.setAttribute('href', `https://wa.me/${siteConfig.whatsapp}`);
  });
  
  // Mobile sticky CTA: hide when enquiry form is visible
  initMobileCTA();
});

/**
 * Initializes visibility toggling for the mobile sticky CTA.
 */
function initMobileCTA() {
  const mobileCTA = document.querySelector('.mobile-sticky-cta');
  const enquirySection = document.getElementById('enquiry');
  if (!mobileCTA || !enquirySection) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      mobileCTA.classList.toggle('is-hidden', entry.isIntersecting);
    });
  }, { threshold: 0.1 });
  
  observer.observe(enquirySection);
}
