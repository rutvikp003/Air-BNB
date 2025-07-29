const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fimage-default%2F&psig=AOvVaw2xsqe13YBX4CiZu8h0p2Nd&ust=1753682182282000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMC3na6t3I4DFQAAAAAdAAAAABAE",
        set:(v) =>
            v === "" 
            ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fimage-default%2F&psig=AOvVaw2xsqe13YBX4CiZu8h0p2Nd&ust=1753682182282000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMC3na6t3I4DFQAAAAAdAAAAABAE" 
            : v, 
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;