# React + TypeScript + Vite + shadcn UI + React Router

This project is a modern web application starter built with React, TypeScript, Vite, shadcn UI, and React Router.
## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn UI (based on Radix UI)
- **Icons:** Lucide React
- **Routing:** React Router
- **State Management:** Redux (with Redux Toolkit)
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Linting:** ESLint
- **Package Manager:** npm

## Key Features

- Highly customizable UI components from shadcn UI
- Dark mode support
- Type-safe development with TypeScript
- Fast development and build times with Vite
- Flexible styling with Tailwind CSS
- Customizable theming using CSS variables
- Client-side routing with React Router
- Global state management with Redux
- Form handling and validation with React Hook Form and Zod

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Project Structure

- `src/` - Application source code
  - `components/` - UI components
    - `ui/` - shadcn UI components
    - `Login.tsx` - Login component
    - `Home.tsx` - Home component
  - `lib/` - Utility functions
  - `App.tsx` - Main application component with routing
  - `main.tsx` - Application entry point
- `public/` - Static assets
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Recent Changes

- Added React Router for client-side routing
- Implemented a basic authentication flow with Login and Home pages
- Updated Login component to use React Hook Form and Zod for form handling and validation
- Added redirection after successful login

## Customization

This project uses shadcn UI, which allows for easy customization of components. You can modify the components in `src/components/ui/` to suit your needs.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn UI Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [React Router Documentation](https://reactrouter.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

## License

This project is open source and available under the [MIT License](LICENSE).
