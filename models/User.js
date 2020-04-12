const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    // name: String // freely we can add atttribute
});

mongoose.model('users', userSchema)