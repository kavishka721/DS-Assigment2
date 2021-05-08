// Initialize express router
let express = require('express');
let mobilerouter = express.Router();

// Set default API response
mobilerouter.get('/',  (req, res) => {
    res.json({
        status: 'Mobile Paymnet API Its Working...',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import payment controller
var mobilePaymentController = require('../controllers/mobilePaymentController');

// Payment routes

mobilerouter.route('/mpayment')
                .get(mobilePaymentController.index)
                .post(mobilePaymentController.new);


// Export API routes
module.exports = mobilerouter;