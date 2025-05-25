# ⚙️ Gadget Aid

**Gadget Aid** is a modern, responsive **service-sharing web application** dedicated to **Electronic Item Repairing Services**. Whether you're a customer looking to get your gadgets fixed or a service provider managing repairs, Gadget Aid delivers a seamless experience with booking, service tracking, and real-time status updates.

🌐 **Live Site**: [https://gadget-aid.web.app](https://gadget-aid.web.app)

---

## 🚀 Key Features

### 🔐 User Authentication
- Email/password registration & login  
- 🔗 Google Sign-In integration  
- 🔐 JWT-secured private routes

### 🛠️ Service Management
- Add, update & delete services  
- Browse all available repair services  
- Dashboard for managing user-specific services  

### 📅 Booking System
- Book electronic repair services  
- Update service status: `Pending → Working → Completed`  
- View booked services and service history

### 📱 Responsive Design
- Optimized layout for **mobile**, **tablet**, and **desktop**

### 🔄 Dynamic Navigation
- Conditional navbar based on login state  
- Dashboard dropdown for authenticated users  
- Custom `404` page with navigation link to homepage

### ✨ User Experience Enhancements
- 🔍 Search functionality  
- 🌗 Light/Dark mode toggle  
- ⚡ Animated sections using **Framer Motion** or **AOS**

### 🔒 Security & Deployment
- .env variables to protect sensitive credentials  
- Deployed without CORS or routing issues

---

## 🛠️ Tech Stack

**Frontend**  
- ⚛️ React  
- 🧭 React Router  
- 🎨 Tailwind CSS, DaisyUI  
- 🎞️ Framer Motion / AOS (Animation)

**Backend**  
- 🟩 Node.js, Express.js  
- 🍃 MongoDB  
- 🔐 JWT Authentication

**Authentication**  
- 🔥 Firebase (Email/Password, Google Sign-In)

**Deployment**  
- 🔗 Firebase Hosting (client)  
- ☁️ [Add backend deployment platform here]

---

## 📁 Folder Structure
```
GADGET-AID-CLIENT/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images & SVGs
│   ├── components/          # Reusable UI components
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
│   ├── context/             # React Context
│   ├── firebase/            # Firebase config
│   ├── hooks/               # Custom hooks
│   ├── layout/              # Layout wrappers
│   ├── pages/               # Route-level pages
│   ├── provider/            # Auth Provider
│   ├── router/              # Route config and guards
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .env                     # Environment secrets
├── tailwind.config.js       # Tailwind settings
├── vite.config.js           # Vite settings
├── package.json             # Project metadata
└── README.md                # Project overview
```



---

## 🙌 Acknowledgments

Special thanks to:
- 💡 Inspiration from **Sheba.xyz**
- 🧑‍💻 The team behind the **Complete Web Development Course by Jhankar Mahbub**

---

## 📫 Contact

For questions, suggestions, or collaboration, feel free to connect with me:

📧 Email: `your-email@example.com`  
🔗 LinkedIn: [your-linkedin-profile](#)  
🌐 Portfolio: [your-portfolio-link](#)

---

> Built with ❤️ by Zabir Arkam Akhond
