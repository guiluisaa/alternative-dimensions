# Alternative Dimensions

A modern Next.js application built with TypeScript, GraphQL, and styled-components, featuring a modular architecture and comprehensive testing setup.

## 🚀 Setup & Run Instructions

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd alternative-dimensions

# Install dependencies
yarn install

# Set up executable permissions for scripts (done automatically via postinstall)
chmod +x ./scripts/**/*.sh
```

### Development

```bash
# Start development server (runs on port 4000)
yarn start:local

# Generate GraphQL types
yarn graphql:generate

# Run tests
yarn test:unit

# Run tests in watch mode
yarn test:unit:watch

# Run all tests with coverage
yarn test:unit:coverage

# Lint and format code
yarn lint
yarn prettier
```

### Production

```bash
# Build the application
yarn build

# Start production server
yarn start

# Preview production build locally
yarn start:preview
```

The application will be available at:

- Development: [http://localhost:4000](http://localhost:4000)
- Production: [http://localhost:3000](http://localhost:3000)

## 🏗️ Component Structure Overview

The project follows a well-organized, modular architecture:

```
src/
├── app/              # Next.js App Router structure
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   └── dashboard/      # Dashboard pages
├── components/       # Feature-specific components
│   ├── Header/         # Application header
│   ├── HeaderNav/      # Navigation component
│   ├── BrandLogo/      # Brand logo component
│   └── Providers/      # Context providers
├── ui/               # Reusable UI components library
│   ├── Alert/          # Alert component
│   ├── Button/         # Button component
│   ├── Input/          # Input component
│   ├── Icon/           # Icon component
│   ├── Spinner/        # Loading spinner
│   └── Table*/         # Table-related components
├── lib/              # Utility functions and configurations
├── types/            # TypeScript type definitions
├── generated/        # Auto-generated GraphQL types
└── __tests__/        # Test files
```

### Architecture Principles

1. **Separation of Concerns**: UI components are separated from business logic components
2. **Atomic Design**: UI components follow atomic design principles (atoms, molecules, organisms)
3. **Type Safety**: Full TypeScript coverage with auto-generated GraphQL types
4. **Testing**: Comprehensive test coverage with Jest and React Testing Library
5. **Modern Styling**: styled-components utility-first styling

### Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: styled-components
- **Data Fetching**: Apollo Client with GraphQL
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier
- **Build Tools**: Custom shell scripts via Scripty

## 📝 Trade-offs & Extra Mile Notes

### Key Trade-offs Made

**✅ What's Working Well:**

- **styled-components**: Provides component-scoped styling and dynamic theming capabilities
- **Custom Script Management**: Scripty organizes build/dev scripts clearly but adds learning curve
- **GraphQL Code Generation**: Auto-generated types ensure type safety but adds build complexity
- **Modular Architecture**: Clean separation of UI vs. feature components aids maintainability

**⚖️ Trade-offs Considered:**

- **Styling Approach**: Chose styled-components over Tailwind for component encapsulation, trading utility-first speed for stronger component boundaries
- **Testing Setup**: Comprehensive Jest config provides reliability but increases initial setup time
- **Build Tooling**: Custom shell scripts offer flexibility but may be unfamiliar to some developers
- **Dependencies**: Heavy dev tooling improves code quality but increases bundle and setup complexity

### Unfinished "Extra Mile" Features

**🚧 Areas for Enhancement:**

1. **Error Boundaries**: No global error handling or fallback UI components implemented
2. **Performance Monitoring**: Missing analytics, error tracking (Sentry), or performance metrics
3. **Accessibility**: No ARIA labels, focus management, or accessibility testing setup
4. **Internationalization**: No i18n support for multi-language functionality
5. **Documentation**: Component documentation (Storybook) not implemented
6. **E2E Testing**: Only unit tests present, missing Cypress/Playwright integration

**🎯 Quick Wins Available:**

- Add React Error Boundaries for graceful failure handling
- Implement basic SEO meta tags and Open Graph tags
- Add loading states and skeleton components for better UX
- Set up environment-specific configurations
