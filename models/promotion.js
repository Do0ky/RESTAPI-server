const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//load the Currency type into mongoose so that it's available for mongoose schemas to use
//the mongoose-currency plugin adds built-in validation and formatting for currency value
require('mongoose-currency').loadType(mongoose);
//shorthand for Currency
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    }, {
    timestamps: true
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;