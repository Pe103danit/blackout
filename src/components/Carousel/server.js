const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://pe103danit:EqUKzSF98U2mGsK8@cluster0.nqdctup.mongodb.net/blackout?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const CarouselItemSchema = new mongoose.Schema({
    _id: String,
    image: String,
    name: String,
    text: String,
    buttonLink: String
});

const CarouselItem = mongoose.model('CarouselItem', CarouselItemSchema);

// Set up routes
app.get('/api/carouselItems', async (req, res) => {
  try {
    const carouselItems = await CarouselItem.find();
    res.json(carouselItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
