// Initialize express router
let express = require('express');
let router = express.Router();

// Set default API response
router.get('/',  (req, res) => {
    res.json({
        status: 'API Its Working...',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import payment controller
var paymentController = require('../controllers/paymentController');
// var mobilePaymentController = require('./mobilePaymentController');

// Contact routes
router.route('/payments')
        .get(paymentController.index)
        .post(paymentController.new);

// router.route('./mobile')
//     .get(mobilePaymentController.index)
//     .post(mobilePaymentController.new);


// Export API routes
module.exports = router;