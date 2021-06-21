const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    user_name: {
        type: String,
        required: true,
    },
    sponser_id: {
        type: String,
        required: true,
    },
    sponser_name: {
        type: String,
        required: true,
    },
    mobile_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    father_name: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    pincode: {
        type: String,
    },
    state: {
        type: String,
    },
    date_of_birth: {
        type: String,
    },
    joining_date: {
        type: Date,
    },
    referal_link: {
        type: String,
    },
    distributor_status: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});


module.exports = mongoose.model("User",userschema);