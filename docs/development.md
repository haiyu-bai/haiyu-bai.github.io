# Development Guide

## Getting Started

This guide explains how to work with the modular structure of the academic website.

## Development Workflow

### 1. Working with Components

Each HTML section is stored as a separate component in the `components/` directory:

- `header.html` - Site navigation
- `about.html` - Personal introduction
- `research.html` - Research interests
- `publications.html` - Academic publications
- `contact.html` - Contact information
- `footer.html` - Site footer

To modify a section:
1. Edit the corresponding component file
2. Test changes locally
3. Update the main `index.html` if needed

### 2. Styling with Modular CSS

CSS is organized by component:

- `base.css` - Typography, resets, utilities
- `header.css` - Header and navigation
- `sections.css` - Main content sections
- `footer.css` - Footer and print styles

To add new styles:
1. Identify the appropriate CSS file
2. Add styles following the existing patterns
3. Use consistent class naming
4. Test responsive behavior

### 3. JavaScript Development

JavaScript is modular and uses ES6 modules:

- `app.js` - Main application controller
- `navigation.js` - Navigation functionality
- `utils.js` - Utility functions

To add new functionality:
1. Create a new module or extend existing ones
2. Export functions as needed
3. Import and initialize in `app.js`
4. Test across different browsers

## File Naming Conventions

- CSS files: lowercase with hyphens (`section-name.css`)
- JS files: lowercase with hyphens (`module-name.js`)
- HTML components: lowercase with hyphens (`component-name.html`)
- Documentation: lowercase with hyphens (`guide-name.md`)

## Best Practices

### CSS
- Use semantic class names
- Follow mobile-first responsive design
- Maintain consistent spacing units
- Comment complex styles

### JavaScript
- Use modern ES6+ features
- Keep functions small and focused
- Add error handling where appropriate
- Document complex logic

### HTML
- Use semantic HTML5 elements
- Ensure accessibility compliance
- Optimize for SEO
- Validate markup

## Testing

Before deploying changes:

1. **Local Testing**: Open `index.html` in a browser
2. **Responsive Testing**: Check mobile and tablet views
3. **Cross-browser Testing**: Test in Chrome, Firefox, Safari
4. **Performance**: Check loading times and optimization
5. **Accessibility**: Validate with screen readers

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Pre-deployment Checklist
- [ ] All file paths are correct
- [ ] CSS and JS are properly linked
- [ ] Images have alt text
- [ ] Links are working
- [ ] Mobile responsive design is functional
- [ ] Print styles work correctly

## Common Tasks

### Adding a New Section
1. Create component in `components/new-section.html`
2. Add styles in `assets/css/sections.css`
3. Include component in `index.html`
4. Add navigation link in header
5. Test functionality

### Updating Content
1. Locate the appropriate component file
2. Edit the HTML content
3. Update any related styles if needed
4. Test changes locally
5. Push to GitHub

### Performance Optimization
1. Minimize CSS and JavaScript files
2. Optimize images for web
3. Use efficient selectors
4. Reduce HTTP requests
5. Enable browser caching

## Troubleshooting

### Common Issues
- **Styles not loading**: Check file paths in `index.html`
- **JavaScript errors**: Check browser console for errors
- **Mobile layout issues**: Test responsive breakpoints
- **GitHub Pages not updating**: Check repository settings

### Debug Tools
- Browser Developer Tools
- W3C HTML Validator
- CSS Validation Service
- Lighthouse Performance Audit