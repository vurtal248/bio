// js/ui.js

const ICON_MAP = {
  'github': 'ph-github-logo',
  'instagram': 'ph-instagram-logo',
  'tiktok': 'ph-tiktok-logo',
  'globe': 'ph-globe',
  'medium': 'ph-medium-logo',
  'twitter': 'ph-twitter-logo',
  'linkedin': 'ph-linkedin-logo',
  'youtube': 'ph-youtube-logo'
};

/**
 * Get the Phosphor icon class for a given platform name.
 * @param {string} iconName - The name of the platform
 * @returns {string} The corresponding Phosphor icon class
 */
export const getIconClass = (iconName) => {
  if (!iconName) return 'ph-link';
  return ICON_MAP[iconName.toLowerCase()] || 'ph-link';
};

/**
 * Generates the DOM structure for a single link
 * @param {Object} link - Link data object
 * @returns {HTMLAnchorElement} The link DOM element
 */
export const createLinkEl = (link) => {
  const a = document.createElement('a');
  a.href = link.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.className = 'link-pill';

  a.innerHTML = `
    <div class="link-content">
      <div class="link-icon">
        <i class="ph ${getIconClass(link.icon)} ph-lg"></i>
      </div>
      <div class="link-title">${link.title}</div>
    </div>
    <div class="link-actions">
      <i class="ph ph-caret-right arrow-icon"></i>
    </div>
  `;

  return a;
};

/**
 * Generates the DOM structure for a category block
 * @param {Object} category - Category data object
 * @param {number} index - Index for stagger animation
 * @returns {HTMLElement} The category section DOM element
 */
export const createCategoryEl = (category, index) => {
  const section = document.createElement('section');
  section.className = 'category';
  // Stagger the entrance animation using inline style delay
  section.style.transitionDelay = `${index * 150}ms`;

  const header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = `
    <span class="category-title">${category.title}</span>
  `;
  section.appendChild(header);

  category.links.forEach((link) => {
    section.appendChild(createLinkEl(link));
  });

  return section;
};
