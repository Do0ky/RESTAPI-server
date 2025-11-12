const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// update to use the passport-local-mongoose plugin
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId: String,
    admin: {
        type: Boolean,
        default: false
    }
});

// here we plugin the plug-in
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);