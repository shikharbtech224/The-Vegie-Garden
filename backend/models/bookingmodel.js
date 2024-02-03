const { Schema, model } = require('../connection');

const mySchema = new Schema({
    username : String,
    restaurantName : String,
    restaurantAddress : String,
    tableNo: String,
    date: Date,
    duration: String
});

module.exports = model('bookings', mySchema);