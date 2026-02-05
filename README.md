# Product Store 🛒
<p align="center">
  <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" />
</p>
<p align="center">
  <strong>A modern, full-stack e-commerce product management application built with the MERN stack</strong>
</p>
<p align="center">
  Product Store allows users to create, read, update, and delete products with a beautiful, responsive UI.
</p>

## Purpose

Product Store was developed as a hands-on learning project to understand how modern web development works through practical implementation. By building this full-featured product management application, I gained real-world experience with:

- Full-stack development workflows
- RESTful API design and implementation
- Database modeling and CRUD operations
- Frontend-backend integration
- State management in React
- Modern UI/UX design practices

This project served as a practical bridge between theoretical knowledge and real-world application development, helping me solidify my understanding of the complete web development lifecycle as a self-studying student.

## ScreeShots
- Mobile view
<img width="300"  alt="image" src="https://github.com/user-attachments/assets/69d6496e-ae4a-4e04-9d61-a651ab24f638" />
<img width="300"  alt="image" src="https://github.com/user-attachments/assets/fc57a7e7-5018-4394-a31f-b25f1d21c839" />
<img width="300"  alt="image" src="https://github.com/user-attachments/assets/4e261c25-b1db-4740-86e8-5e8a276781f9" />
<img width="700"  alt="image" src="https://github.com/user-attachments/assets/c19464f2-1284-42e6-820b-756c0a796670" />





## Tech Stack
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,vite,nodejs,express,mongodb,javascript" />
  </a>
</p>

### Frontend
- **React 19** - UI library for building component-based interfaces
- **React Router 7** - Client-side routing and navigation
- **Vite 7** - Next-generation frontend build tool
- **Chakra UI 2** - Accessible component library
- **Zustand 5** - Lightweight state management
- **React Icons** - Popular icon library
- **Framer Motion** - Animation library
- **Emotion** - CSS-in-JS styling

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 4** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose 8** - MongoDB object modeling tool

### Additional Tools
- **Dotenv** - Environment variable management

## Features

✅ **Create Products** - Add new products with name, price, and image URL  
✅ **View Products** - Display all products in a responsive grid layout  
✅ **Update Products** - Edit existing products with modal dialog  
✅ **Delete Products** - Remove products with confirmation  
✅ **Dark/Light Mode** - Toggle between color schemes  
✅ **Responsive Design** - Works seamlessly on desktop and mobile  
✅ **Modern UI** - Clean interface with smooth transitions and animations  
✅ **Toast Notifications** - User-friendly feedback messages

## What I Learned
<p align="center">
  <img src="https://skillicons.dev/icons?i=git,github,vscode" />
</p>

Building Product Store helped me develop and polish several key abilities:

### Technical Skills
- **Full-stack architecture** - Understanding how frontend and backend communicate through REST APIs
- **Database design** - Creating schemas and managing data relationships with MongoDB and Mongoose
- **State management** - Handling component state and global state with Zustand
- **API development** - Building RESTful endpoints with proper HTTP methods and status codes
- **Error handling** - Implementing try-catch blocks and providing meaningful user feedback
- **Component architecture** - Building reusable React components with Chakra UI

### Development Practices
- **Modern React patterns** - Using hooks, context, and functional components
- **Async operations** - Working with promises, async/await, and handling asynchronous data flows
- **Environment configuration** - Managing different settings for development and production
- **Code organization** - Structuring projects with clear separation of concerns
- **Version control** - Managing code changes and project evolution with Git

### Problem-Solving
- **Debugging** - Identifying and fixing issues across the full stack
- **Responsive design** - Creating interfaces that work on all device sizes
- **User experience** - Building intuitive interfaces with proper loading and success states
- **Production deployment** - Understanding the process of taking an application from local to production

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/product-store.git
   cd product-store
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

4. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

5. **Start the development servers**

   From the root directory:
   ```bash
   npm run dev
   ```

   Or run them separately:
   
   Backend only:
   ```bash
   npm run server
   ```
   
   Frontend only (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

   The backend API will be running on:
   ```
   http://localhost:5000
   ```

### Building for Production

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   cd ..
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

   The production build serves the frontend from the backend server.

## Project Structure

```
product-store/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── ProductCard.jsx
    │   ├── pages/
    │   │   ├── CreatePage.jsx
    │   │   └── HomePage.jsx
    │   ├── store/
    │   │   └── product.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## Contributing

This is a learning project, but suggestions and improvements are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built as a self-study project to learn the MERN stack
- Inspired by modern e-commerce applications
- UI components powered by Chakra UI

---

**Note**: Remember to never commit your `.env` file to version control. Always keep your MongoDB connection strings and API keys secure.
