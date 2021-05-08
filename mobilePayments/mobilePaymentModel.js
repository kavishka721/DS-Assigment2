var mongoose = require('mongoose');

var mobilePaymentSchema = mongoose.Schema({
    mobileServiceProvider: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    pinNo: {
        type: Number,
        require: true
    },
    chargedAmount: {
        type: Number,
        required: true
    }
});

var mobilePayments = module.exports = mongoose.model('mobilePayment',mobilePaymentSchema);
module.exports.get = function (callback, limit) {
    mobilePayments.find(callback).limit(limit);
}