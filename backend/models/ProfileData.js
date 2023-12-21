const mongoose = require('mongoose');

const profileDataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userinfo'
    },
    dob : Date, 
    age : String, 
    gender : String, 
    mobile : String, 
    address : String, 
    pincode : String
})

const profileDataModel = mongoose.model('profile', profileDataSchema);

module.exports = profileDataModel;