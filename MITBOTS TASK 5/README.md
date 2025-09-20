🍴 My Restaurant - React SPA

A responsive single-page restaurant website built with React. This project demonstrates component-based architecture, CSS styling, and responsive design suitable for internship or portfolio showcase.

🔹 Features

Fully responsive SPA (Single Page Application)
Hero section with blurred background image and glassmorphism welcome card
Navigation bar with smooth scrolling to sections
Menu section displaying dishes as responsive cards
About section with description of the restaurant
Contact section with address, phone, and email
Footer with copyright
Clean component-based structure with separate CSS files
Compatible with modern browsers (Chrome, Firefox, Edge) and Safari using -webkit-backdrop-filter

🔹 Technologies Used

React (Functional Components)
CSS3 (Flexbox, Grid, Media Queries)
JavaScript ES6
ESLint for clean code
Optional: Glassmorphism effect using backdrop-filter

🔹 Folder Structure
restaurant-app/
├── src/
│   ├── assets/             # Images, banner
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Menu.jsx
│   │   ├── Menu.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.js
│   └── index.css
├── package.json
└── README.md

🔹 Screenshots

Hero section with glass welcome card and blurred banner image.
Responsive menu cards showing dishes.

🔹 How to Run

Clone the repository:
git clone https://github.com/yourusername/restaurant-app.git
Navigate to the project folder:
cd restaurant-app

Install dependencies:

npm install
Start the development server:
npm start
Open http://localhost:3000 in your browser

🔹 Future Enhancements

Add dynamic menu items using JSON or API
Add order form with validation
Add animations and hover effects for menu cards
Integrate React Router for multi-page SPA if needed
