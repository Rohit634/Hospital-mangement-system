

// import app from "./app.js";
// import cloudinary from "cloudinary";


// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });
// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000; // Port jahan server chalaya jayega

// MongoDB connection
const uri = process.env.MONGODB_URI; // MONGODB_URI environment variable se MongoDB connection string ko access karna
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Server ko port pr listen karna
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Routes aur middlewares yahan define karein
// For example:
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Agar ap additional routes aur middlewares add karna chahte hain, unhe yahan define karein
