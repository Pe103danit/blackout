const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
    _id: String,
    image: String,
    name: String,
    text: String,
    buttonLink: String
});

export default mongoose.model('Carousel', carouselSchema);