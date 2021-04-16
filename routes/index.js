const router = require('express').Router()
const handlePayment = require('../controllers/paymentController');

router.get('/', (req, res) => {
    res.render('index', {
        paymentStatus: req.query.payment
    });
});

router.post('/handle-payment', handlePayment);

module.exports = router