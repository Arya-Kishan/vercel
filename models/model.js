const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    id: Number,
    name: String,
    age: Number,
    gender: String,
    role: String
});

exports.user = mongoose.model('user', blogSchema);