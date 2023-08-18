const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
    _id: String,
    image: String,
    name: String,
    text: String,
    buttonLink: String
});

const Carousel =  mongoose.model('Carousel', carouselSchema);
module.exports = Carousel;