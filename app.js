const express = require('express');
const app = express();
const mongoose = require('mongoose');
const listings = require('./models/listing.js');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const url = "mongodb://127.0.0.1:27017/wonderlust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));  
app.use(methodOverride('_method')); // for PUT and DELETE requests
app.use(express.static(path.join(__dirname, '/public'))); // for serving static files
app.engine('ejs', ejsMate);

app.get('/', (req, res) => {
  res.send('Hello Wonderlust!');
});

//home route
app.get('/listings', async (req, res) => { 
  const allListings = await listings.find({});
  res.render('listings/index.ejs', {allListings} );
});

//new route
app.get('/listings/new',(req, res) => {
  res.render('listings/new.ejs');
});

//show route
app.get('/listings/:id',async (req, res) => {
  let {id} = req.params;
  const listing = await listings.findById(id);
  res.render('listings/show.ejs', {listing} );
});

//create route
app.post('/listings', async (req, res) => {
  const newlisting = new listings(req.body.listing);
  await newlisting.save();
  res.redirect('/listings');
});

//edit route
app.get('/listings/:id/edit', async (req, res) => {
  const {id} = req.params;
  const listing = await listings.findById(id);
  res.render('listings/edit.ejs', {listing});
});

//update route
app.put('/listings/:id', async (req, res) => {
  const { id } = req.params;
  await listings.findByIdAndUpdate(id, {...req.body.listing});
  res.redirect(`/listings/${id}`);
});

//delete route
app.delete('/listings/:id', async (req, res) => {
  const { id } = req.params;
  let deletedListing = await listings.findByIdAndDelete(id);
  console.log(`Deleted listing: ${deletedListing}`);
  res.redirect('/listings' );
});

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

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});