const config = require('config');
const mongoose = require('mongoose');

mongoose.connect(config.get('mongo.host'), {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log("Connected to MongoDB...")})
    .catch((err) => console.error('Could not connect to MongoDB', err)
    );

const PlaceModel = mongoose.model('Place',
    new mongoose.Schema({
        name: String,
        description: String,
        location: {
            country: String,
            city: String
        },
        image: String,
    }, {timestamps: true})
);

module.exports = PlaceModel;
