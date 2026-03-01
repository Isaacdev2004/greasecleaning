# GreaseClean Dubai - Grease Trap Compliance Subscriptions

A modern landing page for GreaseClean Dubai, offering subscription-based grease trap cleaning and compliance services for businesses in Dubai.

## Overview

GreaseClean Dubai helps restaurants, hotels, and food businesses stay compliant with Dubai Municipality grease trap regulations through flexible subscription plans. This landing page showcases pricing tiers, a plan recommendation quiz, FAQs, and subscription guidance.

## Features

- **Pricing Plans** - Monthly and annual options with Basic and VIP tiers
- **Plan Recommendation Quiz** - Interactive questionnaire to help visitors find the right plan
- **Comparison Table** - Side-by-side plan comparison for easy decision-making
- **How to Subscribe** - Step-by-step subscription guide
- **Special Offers** - Highlighted promotions and deals
- **FAQ Section** - Answers to common compliance and service questions
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop
- **Smooth Scrolling Navigation** - Single-page layout with anchor-based navigation

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for accessible, composable UI components
- **Lucide React** for icons
- **React Router** for routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd trap-ease-dubai-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui base components
│   ├── Header.tsx       # Fixed navigation header
│   ├── HeroSection.tsx  # Hero banner with CTAs
│   ├── PricingSection.tsx
│   ├── PricingCard.tsx
│   ├── ComparisonTable.tsx
│   ├── RecommendationQuiz.tsx
│   ├── HowToSubscribe.tsx
│   ├── SpecialOffers.tsx
│   ├── FAQSection.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── App.tsx
└── main.tsx
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
