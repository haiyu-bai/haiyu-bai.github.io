# Project Structure

This document outlines the modular structure of the academic website project.

## Directory Structure

```
haiyu-bai.github.io/
├── assets/                 # Static assets
│   ├── css/               # Stylesheets
│   │   ├── base.css       # Base styles and typography
│   │   ├── header.css     # Header component styles
│   │   ├── sections.css   # Main content section styles
│   │   ├── footer.css     # Footer component styles
│   │   └── main.css       # Legacy combined styles
│   ├── js/                # JavaScript modules
│   │   ├── app.js         # Main application entry point
│   │   ├── navigation.js  # Navigation functionality
│   │   ├── utils.js       # Utility functions
│   │   └── main.js        # Legacy combined script
│   └── images/            # Images and media files
├── components/            # HTML components
│   ├── header.html        # Header component
│   ├── about.html         # About section
│   ├── research.html      # Research section
│   ├── publications.html  # Publications section
│   ├── contact.html       # Contact section
│   └── footer.html        # Footer component
├── pages/                 # Additional pages
│   └── _config.yml        # Jekyll configuration backup
├── docs/                  # Documentation
│   └── structure.md       # This file
├── index.html             # Main page
├── _config.yml            # Jekyll configuration
└── README.md              # Project documentation
```

## File Organization

### CSS Architecture
- **base.css**: Reset styles, typography, utility classes
- **header.css**: Header and navigation styles
- **sections.css**: Main content area styles
- **footer.css**: Footer styles and print media queries

### JavaScript Modules
- **app.js**: Application initialization and module coordination
- **navigation.js**: Smooth scrolling and mobile navigation
- **utils.js**: Utility functions (print, back-to-top, email tracking)

### HTML Components
Each major section is separated into its own component file for better maintainability.

## Benefits of This Structure

1. **Modularity**: Each component can be developed and maintained independently
2. **Scalability**: Easy to add new sections or modify existing ones
3. **Performance**: CSS and JS can be optimized and loaded as needed
4. **Maintainability**: Clear separation of concerns
5. **Reusability**: Components can be reused across different pages
6. **Development**: Easier to work on specific parts without affecting others

## Usage

The main `index.html` file imports all necessary CSS and JS modules. For development:

1. Modify individual CSS files for styling changes
2. Update component HTML files for content changes
3. Extend JavaScript modules for new functionality
4. Use the components directory for developing new sections

## GitHub Pages Compatibility

The structure is optimized for GitHub Pages deployment while maintaining a modern, modular architecture.