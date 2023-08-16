import mongoose from 'mongoose';

async function run () {
    await mongoose.connect(
        'mongodb+srv://pe103danit:EqUKzSF98U2mGsK8@cluster0.nqdctup.mongodb.net/blackout?retryWrites=true&w=majority'
        );
        
    console.log('Connected to MongoBD');
};

export default run;