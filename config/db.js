const mongoose = require('mongoose');

const URI = 'mongodb+srv://nyadav07102005:niharika@niharika.2waja.mongodb.net/';

function connectDb() {
    mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Failed to connect to MongoDB", error));
}

module.exports = connectDb;