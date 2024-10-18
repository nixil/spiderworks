# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- React Router DOM for navigation
- Home component
- Routing logic in App component
- Login functionality with redirection to Home page
- Redux for state management
- Redux store with authentication slice
- Login and logout actions in Redux
- Internationalization (i18n) support using react-i18next
- Translation files for English and Spanish
- LanguageSwitcher component for changing the application language

### Changed
- Updated Login component to handle form submission and navigation
- Modified App component to include routing
- Updated App component to use Redux for authentication state
- Modified Login component to dispatch login action
- Updated Home component to display logged-in user and add logout functionality
- Integrated translations in Login and Home components
- Updated App component to include LanguageSwitcher

### Removed
- Static rendering of Login component in App

## [0.1.0] - 2023-05-10

### Added
- Initial project setup with React, TypeScript, and Vite
- Basic Login component
- UI components from shadcn/ui
