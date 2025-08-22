# 🏡 Airbnb Clone (CRUD Version)

A basic **Airbnb Clone** built with **Node.js, Express, EJS, and MongoDB (Mongoose)**.  
This project implements a simple CRUD system for property listings, allowing users to **create, edit, delete, and view all listings**.  

---

## 🚀 Features

- 🏠 **Create Listings** – Add new property listings  
- ✏️ **Edit Listings** – Update details of an existing listing  
- ❌ **Delete Listings** – Remove property listings  
- 📋 **View All Listings** – See all available properties in one place  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS (Embedded JavaScript Templates), CSS  
- **Database:** MongoDB with Mongoose  

---

## 📂 Project Structure
AIR-BNB/
|- init
    |- data.js
    |- index.js
|- models
    |- listings.js
|- node_modules
|- public
    |- css
        |- stlye.css
|- views.js
    |- includes
        |- footer.ejs
        |- navbar.ejs
    |- layouts
        boilerplate.ejs
    |- listings
        |- edit.ejs
        |- index.ejs
        |- new.ejs
        |- show.ejs
|- app.js
|- package.json
|- README.md

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rutvikp003/Air-BNB.git
   cd Air-BNB

2. Install dependencies

   npm install


3. Setup environment variables
   Create a .env file in the root directory and add:

   MONGO_URI=your_mongodb_connection_string


4. Run the app
   npm start


5. Visit http://localhost:8080