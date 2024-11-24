# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Dynamic Grid Editor

A React-based web application that allows users to interact with a dynamic 10x10 grid. Users can toggle cells between empty (0) and filled (1) while adhering to specific rules and constraints.

## Features

- **Interactive Grid**: Toggle cells and dynamically update neighbors.
- **Validation**: Ensures no row/column has more than 3 filled cells and no 2x2 block is filled.
- **Toolbar**:
  - Reset the grid to the initial empty state.
  - Fill the grid randomly while respecting constraints.
- **Legend**: Visual guide for cell states.

## Live Demo

Access the live demo [here](https://dynamic-grid-editor-alpha.vercel.app/).

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dynamic-grid-editor.git
   ```

2. Navigate to the project directory:
``` bash
cd dynamic-grid
```

3. Install dependencies:
``` bash
npm install
```

4. Start the development server:
``` bash
npm run dev
```

# Project Structure
src/
├── components/
│   ├── Cell.jsx
│   ├── Grid.jsx
│   ├── Legend.jsx
│   ├── Toolbar.jsx
├── styles/
│   ├── globals.css
│   ├── Grid.css
│   ├── Legend.css
│   ├── Toolbar.css
├── utils/
│   ├── randomFill.js
│   ├── gridLogic.js
├── App.jsx


* components/: Contains React components for the grid, toolbar, and legend.
* styles/: CSS files for styling the components.
* utils/: Utility functions for grid validation and random filling.

