const mongoose = require('mongoose');

async function run(params) {
    mongoose.connect('mongodb+srv://pe103danit:EqUKzSF98U2mGsK8@cluster0.nqdctup.mongodb.net/carousel/?retryWrites=true&w=majority')
};

module.exports = run;