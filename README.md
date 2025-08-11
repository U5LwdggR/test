# React Frontend Project

## 1. Technical Overview and Architectural Choices

This project is a frontend developed with React.js, following a modular architecture to ensure code clarity, maintainability, and scalability.

**Folder Structure :**

- **`assets/`** : static resources (images, icons, various files)
- **`components/`** : reusable components (buttons, forms, cards, etc.)
- **`contexts/`** : React context management (authentication, themes, etc.)
- **`layout/`** : global structural components (sidebar, header, footer)
- **`model/`** : data models and object structures
- **`pages/`** : main application pages
- **`styles/`** : global or specific style files (CSS, SCSS, etc.)
- **`App.jsx`** : root component containing the routing configuration and global structure
- **`main.jsx`** : application entry point
- **`index.css`** & **`App.css`** :  global styles

**Technical Choices :**

- **React.js** for development speed and flexibility.
- **Architecture modulaire** to clearly separate responsibilities.
- **Context API**  for global state management.

---

## 2. Prerequisites

Before running the project, make sure you have:

- **Node.js** (version 18 ou plus)
- **npm** ou **yarn** as a package manager
- A code editor like VS Code
- A modern browser (Chrome, Edge, Firefox)
---

## 3. Installation and Local Execution

    ### a. Clone the repository

    git clone https://github.com/U5LwdggR/test
    cd mon-projet

    ## c. Install dependencies
    npm install ou yarn install( depending on the package manager you use)

    ## d.Run the project
    npm run dev

    ## e. The application will be available at:
    http://localhost:5173

## 4. AI Tools Used

Cursor’s Chat – for generating and correcting React code

GitHub Copilot – for automatic suggestions and code completion

perplexity for search

## 5.  Key Prompts Used

        - "Create a React component for a dashboard with responsive sidebar and header"
        
        - "Optimize performance and reusability of a dynamic filter component"
        
        - " Design and develop a responsive, modern user interface for a financial dashboard displaying a user's asset portfolio.
        
        Technical Specifications:
        Framework: Use [React/Vue.js/Angular] with [Tailwind CSS/Material UI/Bootstrap]
        
        Responsive Design: Mobile, tablet, and desktop-friendly
        
        Data Visualization: Integrate [Chart.js/D3.js/Highcharts] for dynamic charts
        
        Fake Data Generation: Use [Faker.js/Mockaroo] to create realistic mock data
        
        UI Components:
        Header:
        
        App logo + name
        
        User menu (profile picture, name, notification bell)
        
        Portfolio Summary:
        
        "Total Assets" card (dynamic amount)
        
        30-day change (+/- % indicator with color coding)
        
        Mini line chart (monthly trend)
        
        Detailed Asset Breakdown:
        
        Sortable/filterable table with columns:
        
        Asset (Stocks, Crypto, Real Estate, etc.)
        
        Current Value
        
        Allocation (%)
        
        Performance (colored badge)
        
        Interactive pie chart (asset distribution)
        
        Recent Activity Section:
        
        Last 5 transactions (date, amount, status)
        
        "Add Funds" CTA button
        
        Mock Data Requirements:
        10+ diverse assets (e.g., S&P 500 ETF, Bitcoin, NYC Real Estate)
        
        Balances ranging from $1,000 to $250,000
        
        Randomized performance (-12% to +30%)
        
        Multi-currency support (USD, EUR, BTC)
        
        Design Constraints:
        Color Scheme: Professional (blues/dark mode optional)
        
        Icons: SVG-based, matching asset types
        
        Micro-interactions: Smooth hover/loading animations
        
        Export Options: PDF/CSV mock buttons"

## 6. Expected Backend Structures and Payloads

For this frontend, the backend must provide structured data in JSON format.

Example — User Authentication
{
"id": 1,
"nom": "Dupont",
"email": "dupont@example.com",
"token": "eyJhbGciOiJIUzI1NiIsInR..."
}
