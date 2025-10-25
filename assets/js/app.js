// Main Application Entry Point
import Navigation from './navigation.js';
import Utils from './utils.js';

// Application initialization
const App = {
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupModules();
            this.setupEventListeners();
        });
    },

    setupModules() {
        Navigation.init();
        Utils.setupEmailTracking();
        Utils.addBackToTopButton();
    },

    setupEventListeners() {
        // Add any global event listeners here
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    },

    handleScroll() {
        // Handle scroll events if needed
    },

    handleResize() {
        // Handle resize events if needed
    }
};

// Initialize the application
App.init();

// Make Utils available globally for inline event handlers
window.Utils = Utils;