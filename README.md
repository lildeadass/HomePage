# Landing Page Site

A modern, interactive landing page to host social media links, as well as other media and a blog.

## Features

- Social Links
-SoundCloud Player
-Blog

## File Structure

```
HomePage/
├── index.html          # Main HTML file with keyboard layout
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technical Details

### HTML Structure
- Semantic HTML5 with proper accessibility
- Responsive keyboard layout with all standard keys
- Modal system for additional information

### CSS Features
- Modern gradient backgrounds
- Smooth animations and transitions
- Responsive design with mobile-first approach

### JavaScript Functionality
- Event-driven architecture
- Real-time keyboard event handling
- Touch and mouse interaction support
- Modal management system
- Key normalization for cross-browser compatibility

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Changing Colors
Modify the CSS variables and gradient definitions in `styles.css`:

```css
body {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```