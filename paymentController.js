//import payment model
Payment = require('./paymentModel');
// mobilePayment = require("./mobilePaymentModel");

//-------------------------------------------- view all payments ----------------------------------------

exports.index = function (req, res) {
    Payment.get(function (err, payments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Payments retrieved successfully",
            data: payments
        });
    });
};



//------------------------- create payment object and assign request body details --------------------------------
exports.new = function(req, res) {
    var payment = new Payment();
    payment.paymentID = req.body.paymentID ? req.body.paymentID : payment.paymentID;
    payment.cardHolderName = req.body.cardHolderName;
    payment.cardNo = req.body.cardNo;
    payment.expDate = req.body.expDate;
    payment.cvcNo = req.body.cvcNo;
    payment.amount = req.body.amount;
    payment.paymentDate = req.body.paymentDate;

    //save payment details and check errors
    payment.save(function (err) {
        // if(err){
        //     res.json(err)
        // }
        res.json({
            message: 'Payment Successful',
            data: payment
        });
    });
    //};
};
