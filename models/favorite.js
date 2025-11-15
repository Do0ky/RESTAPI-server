const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//We use Schema in the type, that's why we don't repeat "type: mongoose.Schema..."

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    campsites: [{
        type: Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
}, {
    timestamps: true
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;