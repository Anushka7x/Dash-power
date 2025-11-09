# Project Analysis: JSON Dash Power

## 📌 Overview
This is a React-based web application built with TypeScript, Vite, and shadcn/ui components. The application serves as a dashboard system with user authentication, role-based access control, and Power BI report integration. The project simulates a backend using JSON data and localStorage for persistence.

---

## 🏗️ Architecture

### ✅ Frontend Stack
- React 18 with TypeScript  
- Vite as the development/build tool  
- React Router DOM for routing  
- TanStack React Query (minimal use)  
- shadcn/ui and Radix UI for components  
- Tailwind CSS for styling  
- Power BI Client for embedding reports  

### 📂 Project Structure (Explained Verbally)
- **Components**: Reusable UI + sidebar + layout + protected route  
- **Contexts**: Authentication using AuthContext  
- **Data**: `users.json` as a mock backend  
- **Pages**: Login, Home, Users, Reports  
- **Other**: Hooks, utility functions, App.tsx for layout + routing setup  

---

## ⚙️ Hook-Based JSON Backend System

### 🔐 AuthContext Functionality
This project uses AuthContext to simulate a backend system. It:
- Loads initial users from `users.json`  
- Authenticates login using email and password  
- Saves the logged-in user in localStorage for persistence  
- Provides CRUD operations for user accounts (add, update, delete)  
- Maintains in-memory state and syncs it with localStorage  

---

## 🧠 Web Application Working (Step-by-Step)

### 🔑 Authentication Flow
1. User enters email and password on login page  
2. AuthContext validates credentials from `users.json` or localStorage  
3. On success, user data is stored in localStorage  
4. Routes are protected using a ProtectedRoute component  

### 🛂 Role-Based Access
- **Admin**: Can access Home, Reports, and Users management  
- **Viewer**: Can only access Home and Reports  
- Sidebar changes dynamically based on role  

### 📄 Main Pages
- **Home** → Dashboard cards displaying basic stats  
- **Users (Admin Only)** → User list + add + edit + delete  
- **Reports** → Power BI sample report embedded using `powerbi-client`  
- **Login** → Basic login with toast notifications  

---

## 🗂️ State Management
- AuthContext for global authentication and users  
- localStorage for persistence  
- React Router for navigation  
- React Query is present but not heavily used  

---

## 🎨 Styling
- Tailwind CSS for utility-based styling  
- Fully responsive design  
- Light and dark theme via shadcn/ui  

---

## 🛠️ Development and Build Commands (No code, only actions)
- Run development: `npm run dev`  
- Build for production: `npm run build`  
- Linting via ESLint  

---

## ⚠️ Security Limitations
- Passwords are stored in plain text (demo only)  
- No real backend or database exists  
- Authentication is fully client-side and not secure  
- localStorage can be tampered with or attacked via XSS  

---

## 🚀 Future Enhancements
- Replace JSON/localStorage with real backend API  
- Implement password hashing  
- Use JWT for secure authentication  
- Add real Power BI authentication instead of static token  
- Add form validation and user profile management  

---

## ▶️ How to Run the Project (Simple Steps)
1. Download or clone the repository from GitHub  
2. Open the folder and install dependencies using `npm install`  
3. Run the project locally using `npm run dev`  

---

## 🔑 Test Login Credentials

**Admin:**  
- Email: `admin@example.com`  
- Password: `admin123`  

**Viewer:**  
- Email: `viewer@example.com`  
- Password: `viewer123`  

---

## 📤 Submission Information
- **GitHub Repository Link:** (you will paste your link here)  
- **Live Demo (optional):** (if deployed)  

---

## 🧭 Approach and Thought Process (As Required in Assignment)
Due to the 48-hour deadline, I focused on completing the frontend first with full functionality and simulated backend behavior using JSON and localStorage. My priorities were:
- Implementing complete login/logout flow  
- Restricting access based on role (admin/viewer)  
- Creating a User Management dashboard for admins  
- Embedding a Power BI report using sample values  
- Making the UI visually clean, responsive, and modular  

I structured the project like a real MERN application, so backend integration with Express, MongoDB, and JWT can be added later without major changes.

---

## 🤖 AI Tool Usage (Assignment Requirement)
I used AI tools only to:
- Help structure documentation and explanations  
- Fix minor syntax mistakes  
- Suggest UI/UX improvements in wording  

All core implementation, logic, structure, and code were written by me manually.

Thankyou, 
Anushka Dubey
