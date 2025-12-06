# PM-Test

A Next.js project built with TypeScript, Tailwind CSS, and the App Router.

## Project Description

This is a test project implementing a Home Page landing page from a Figma design.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Clone the Repository

`git clone https://github.com/olegarg1/PM-test.git`

`cd PM-Test`

### Installation

# Install dependencies

`yarn install`

### Development

# Start the development server

`yarn dev`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

# Create a production build

`yarn build`

# Start the production server

`yarn start`

### Code Quality

# Run ESLint

`yarn lint`

# Format code with Prettier

`yarn format`

# Check formatting

`yarn format:check`

## Assumptions

1. Fonts:
   The Figma specifies Gilroy, which is a commercial font and not included in Google Fonts.
   After testing alternatives, Outfit was selected as the closest one to visually match the design.
   This can be replaced with the correct brand font if provided.

2. Header – Language Flag
   In the top bar, the text shows “English”, but the flag displayed in Figma is not the UK/US flag.
   Assumption: the Figma flag was a placeholder.
   I replaced it with the correct English (UK) flag to match the language label.

3. Navigation Hover Colors
   The design shows some nav items turning red on hover, while others do not specify color.
   Assumption: all nav items should follow consistent hover behaviour.
   Applied the same red hover style used in the top bar for consistency.

4. Currency Cards – Icons
   Some currency icons (flags) were not available/exportable from Figma.
   Assumption: use available icons where possible, and replace missing icons with suitable placeholders.
   Additional currency pairs (GBP/USD, USD/JPY, XAU/USD, etc.) were added to avoid repetition, matching the style of the design.

5. Horizontal Scroll for Market Cards (Corrected)
   The main Figma home page does not explicitly show a half-visible card or a scroll hint.
   Currency lists can contain many items that cannot fit in a single row on smaller screens.
   Assumption: the currency cards should be displayed in a horizontal scroll container to support an expandable list of markets.

6. I assumed the header should be sticky so the user always has access to navigation while scrolling.

## Future Improvements

In the future, I would add the remaining sections from the design, replace placeholders with the final icons and correct brand font, improve responsiveness and accessibility, and make the market data and sparklines dynamic instead of static.

Due to the limited time available, I was not able to implement all sections of the home page. With additional time, the remaining parts of the page could be completed in the same style.
