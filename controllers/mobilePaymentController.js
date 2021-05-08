//import mobilePayment model
MobilePayment = require("../Models/mobilePaymentModel");

//-------------mobile payments-----------
exports.new = async function(req, res) {
    var mobilePayment = new MobilePayment();
    mobilePayment.mobileServiceProvider = req.body.mobileServiceProvider ? req.body.mobileServiceProvider : mobilePayment.mobileServiceProvider;
    mobilePayment.phoneNo = req.body.phoneNo;
    mobilePayment.pinNo = req.body.pinNo;
    mobilePayment.chargedAmount = req.body.chargedAmount;

    await mobilePayment.save( (err) => {
        // if(err){
        //     res.json(err)
        // }
        res.json({
            message: "payment added to mobile bill successfully!!",
            data: mobilePayment
        });
    });
}

exports.index = (req, res) => {
    MobilePayment.get(function (err, mobilePayments) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            message: "Mobile Payment Bill retrieved successfully",
            message: "Payments retrieved successfully",
            data: mobilePayments
        });
    });
};