# Gadget Aid

Gadget Aid is a service-sharing web application focused on **Electronic Item Repairing Services**. It provides a seamless platform for users to add, manage, and book electronic repair services, while allowing service providers to update the status of ongoing services. This app emphasizes usability, responsiveness, and real-time service management.

---

## Live Site
https://gadget-aid.web.app/

---

## Features

- **User Authentication**  
  - Email/password-based login and registration  
  - Google social login integration  
  - JWT-based authentication for secure private routes  

- **Service Management**  
  - Add, update, and delete services by service providers  
  - Display all available services for browsing  
  - Private dashboard for managing your own services  

- **Booking System**  
  - Book specific electronic repair services  
  - Track and update the status of booked services (Pending, Working, Completed)  
  - View booked services and services booked by others  

- **Responsive Design**  
  - Fully responsive layout for mobile, tablet, and desktop devices  

- **Dynamic Routing and Navigation**  
  - Conditional navbar menus based on login status  
  - Dashboard dropdown menu for authenticated users  
  - 404 error page with navigation back to the homepage  

- **User Experience Enhancements**  
  - Search functionality to find services by name  
  - Theme toggle for light and dark modes  
  - Animated homepage sections for better engagement (using Framer Motion or AOS)  

- **Security and Performance**  
  - Environment variables used to protect Firebase and MongoDB credentials  
  - Proper deployment with no CORS or 404 errors on reload  

---

## Technologies Used

- Frontend: React, React Router, Tailwind CSS, DaisyUI, Framer Motion/AOS  
- Backend: Node.js, Express.js, MongoDB
- Authentication: Firebase Authentication (Email/Password & Google Sign-In)  
- Deployment: Firebase, Vercel

---

## Folder Structure
GADGET-AID-CLIENT/
│
├── node_modules/              # Project dependencies
├── public/                    # Static assets (if applicable)
├── src/                       # Main source code
│   ├── assets/                # Static files like images and SVGs
│   ├── components/            # Reusable UI components
│   │   ├── AboutUs.jsx
│   │   ├── Banner.jsx
│   │   ├── Button.jsx
│   │   ├── FeaturedSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Navbar.jsx
│   │   ├── PopularServices.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── Services.jsx
│   │   └── ThemeChanger.jsx
│   ├── context/               # React context for global state
│   ├── firebase/              # Firebase config
│   │   └── firebase.config.js
│   ├── hooks/                 # Custom React hooks
│   ├── layout/                # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/                 # Route-based components/pages
│   │   ├── AddService.jsx
│   │   ├── BookedServices.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── ManageService.jsx
│   │   ├── Registration.jsx
│   │   └── ServiceToDo.jsx
│   ├── provider/              # Auth provider and wrappers
│   │   └── AuthProvider.jsx
│   ├── router/                # Route configuration and guards
│   │   ├── PrivateRoutes.jsx
│   │   └── router.jsx
│   ├── App.jsx                # Root component
│   ├── index.css              # Global styles
│   ├── main.jsx               # Application entry point
│
├── .env                       # Environment variables
├── .gitignore                 # Git ignored files
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry file
├── package.json               # Project metadata and scripts
├── package-lock.json          # Exact dependency versions
├── README.md                  # Project documentation
├── tailwind.config.js         # Tailwind CSS configuration
└── vite.config.js             # Vite configuration

