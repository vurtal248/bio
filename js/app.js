import { createCategoryEl } from './ui.js';
import { generateDecorations } from './decorations.js';

const app = document.getElementById('app');

/**
 * Main application initialization
 */
const init = async () => {
  // Generate background SVG decorations
  generateDecorations();

  try {
    // Artificial small delay to let the skeleton shine for a moment, proving it works
    await new Promise((resolve) => setTimeout(resolve, 400));

    // Fetch with cache busting so changes to JSON show immediately
    const response = await fetch(`data/links.json?t=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch links');

    const data = await response.json();

    // Clear skeleton
    app.innerHTML = '';

    // Render categories
    data.categories.forEach((category, idx) => {
      app.appendChild(createCategoryEl(category, idx));
    });

  } catch (error) {
    console.error('Error loading links:', error);
    app.innerHTML = `<div class="category-title" style="color: #ef4444; text-align: center;">Failed to load data. Please try again.</div>`;
  }
};

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
