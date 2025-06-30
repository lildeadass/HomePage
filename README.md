# Pieter Clone - Keyboard Visualizer

A modern, interactive keyboard visualizer inspired by [pieter.com](https://pieter.com). This web application shows real-time keyboard input visualization with a beautiful, responsive design.

## Features

- **Real-time Key Visualization**: See which keys you press highlighted on a virtual keyboard
- **Modern UI Design**: Clean, gradient-based design with smooth animations
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Click/touch keys for visual feedback
- **Key Counter**: Track how many keys you've pressed
- **Modal System**: Help, Ideas, and Bugs sections with useful information
- **Easter Eggs**: Hidden features for fun interactions

## How to Use

1. **Open the Website**: Simply open `index.html` in any modern web browser
2. **Start Typing**: Press any key on your keyboard to see it highlighted
3. **Watch the Counter**: See how many keys you've pressed in the status bar
4. **Explore Features**: Click the Help, Ideas, or Bugs buttons for more information
5. **Try Easter Eggs**: 
   - Press `Ctrl + ↑` for a color change
   - Press `Ctrl + Shift + R` for rainbow mode

## File Structure

```
pieter-clone/
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
- Glassmorphism effects with backdrop-filter
- Custom key animations

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

## Development

To modify or extend this project:

1. **Add New Keys**: Update the HTML structure in `index.html`
2. **Modify Styles**: Edit `styles.css` for visual changes
3. **Add Features**: Extend the `KeyboardVisualizer` class in `script.js`

## Customization

### Adding New Keyboard Layouts
1. Create new HTML structure for the layout
2. Add corresponding CSS styles
3. Update JavaScript key mapping

### Changing Colors
Modify the CSS variables and gradient definitions in `styles.css`:

```css
body {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Adding Sound Effects
Extend the JavaScript to include audio feedback:

```javascript
// Add to the highlightKey method
const audio = new Audio('key-press.mp3');
audio.play();
```

## License

This project is open source and available under the MIT License.

## Credits

Inspired by [pieter.com](https://pieter.com) by @levelsio and @bai0.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve this project.

---

**Note**: This is a clone/educational project. The original pieter.com is the work of @levelsio and @bai0. 