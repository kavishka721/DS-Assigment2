var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
    paymentID: {
        type: String,
        required: true
    },
    cardHolderName: {
        type: String,
        required: true
    },
    cardNo: {
        type: String,
        required: true
    },
    expDate: {
        type: String,
        required: true
    },
    cvcNo: {
        type: Number,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    }
});

var Payments = module.exports = mongoose.model('payment', paymentSchema);
module.exports.get = function (callback, limit) {
    Payments.find(callback).limit(limit);
}