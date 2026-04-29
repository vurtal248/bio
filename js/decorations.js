// js/decorations.js

/**
 * Mathematical / Geometric SVGs (Swiss Tech vibe)
 */
export const mathSVGs = [
  // Wireframe Hypercube (Tesseract projection)
  `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linejoin="round" class="deco-math-svg">
    <rect x="20" y="20" width="60" height="60" />
    <rect x="35" y="35" width="30" height="30" />
    <line x1="20" y1="20" x2="35" y2="35" />
    <line x1="80" y1="20" x2="65" y2="35" />
    <line x1="20" y1="80" x2="35" y2="65" />
    <line x1="80" y1="80" x2="65" y2="65" />
    <line x1="50" y1="5" x2="50" y2="20" stroke-dasharray="2 3"/>
    <line x1="50" y1="80" x2="50" y2="95" stroke-dasharray="2 3"/>
    <line x1="5" y1="50" x2="20" y2="50" stroke-dasharray="2 3"/>
    <line x1="80" y1="50" x2="95" y2="50" stroke-dasharray="2 3"/>
  </svg>`,

  // Parametric Torus Wireframe
  `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.5" class="deco-math-svg">
    <circle cx="50" cy="50" r="40" />
    <ellipse cx="50" cy="50" rx="40" ry="20" />
    <ellipse cx="50" cy="50" rx="20" ry="40" />
    <ellipse cx="50" cy="50" rx="40" ry="10" transform="rotate(45 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="10" transform="rotate(-45 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="10" transform="rotate(22.5 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="10" transform="rotate(-22.5 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="10" transform="rotate(67.5 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="10" transform="rotate(-67.5 50 50)" />
  </svg>`,

  // Sacred Geometry / Star Polygon Mesh
  `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.5" class="deco-math-svg">
    <circle cx="50" cy="50" r="45" stroke-dasharray="2 4" />
    <circle cx="50" cy="50" r="30" />
    <polygon points="50,20 76,65 24,65" />
    <polygon points="50,80 24,35 76,35" />
    <polygon points="50,35 63,42 63,58 50,65 37,58 37,42" stroke-width="1"/>
    <circle cx="50" cy="50" r="2" fill="currentColor" />
  </svg>`,

  // Polar Grid / Radar Array
  `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.5" class="deco-math-svg">
    <circle cx="50" cy="50" r="40" />
    <circle cx="50" cy="50" r="25" />
    <circle cx="50" cy="50" r="10" />
    <line x1="50" y1="10" x2="50" y2="90" />
    <line x1="10" y1="50" x2="90" y2="50" />
    <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" />
    <line x1="21.7" y1="78.3" x2="78.3" y2="21.7" />
    <path d="M50 6 L50 14 M94 50 L86 50 M50 94 L50 86 M6 50 L14 50" stroke-width="1.5" />
  </svg>`
];

/**
 * Generate background decorations
 */
export const generateDecorations = () => {
  const container = document.createElement('div');
  container.className = 'decorations-container';
  document.body.appendChild(container);

  const numElements = 7 + Math.floor(Math.random() * 5); // 7 to 11 elements

  for (let i = 0; i < numElements; i++) {
    const el = document.createElement('div');
    const svgCode = mathSVGs[Math.floor(Math.random() * mathSVGs.length)];
    const isLeft = Math.random() > 0.5;

    el.className = `deco-element deco-side-${isLeft ? 'left' : 'right'}`;

    // Random vertical position (5% to 85%)
    const top = 5 + Math.random() * 80;
    el.style.top = `${top}%`;

    // Random horizontal position near the edges (1% to 12%)
    const edgeDist = 1 + Math.random() * 11;
    if (isLeft) {
      el.style.left = `${edgeDist}%`;
    } else {
      el.style.right = `${edgeDist}%`;
    }

    // Random animation delay for the slide-in entry
    const delay = Math.random() * 1200;
    el.style.animationDelay = `${delay}ms`;

    // Random scale and initial rotation
    const scale = 0.8 + Math.random() * 1.2;
    const initialRot = Math.random() * 360;
    el.style.setProperty('--deco-scale', scale);
    el.style.setProperty('--deco-rot', `${initialRot}deg`);

    // Inner wrapper for perpetual hardware-accelerated float
    const floatWrap = document.createElement('div');
    floatWrap.className = `deco-float`;
    floatWrap.style.setProperty('--float-delay', `-${Math.random() * 10}s`);

    // Inject the elegant SVG
    floatWrap.innerHTML = svgCode;

    el.appendChild(floatWrap);
    container.appendChild(el);
  }
};
