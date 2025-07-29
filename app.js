const express = require('express');
const app = express();
const mongoose = require('mongoose');
const listings = require('./models/listing.js');
const path = require('path');

const url = "mongodb://127.0.0.1:27017/wonderlust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

app.get('/listings', async (req, res) => { 
  const allListing= await listings.find({});
      console.log(allListing);
      res.render('/listings/index.ejs', {allListing} );
});

// app.get('/testlisting', async (req, res) => {
//     let sampleListing = new listings({
//         title: "Sample Listing",
//         description: "This is a sample listing for testing purposes.",
//         price: 100,
//         location: "Sample Location",
//         country: "Sample Country"
//     });
//     await sampleListing.save();
//     console.log("Sample listing saved to database.");
//     res.send("Sample listing created and saved.");
//   });

async function connect() {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connect().then(() => {
    console.log('Database connection established');}).catch(err => {
    console.error('Database connection failed:', err);
    });