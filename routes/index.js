const router = require('express').Router()
const handlePayment = require('../controllers/paymentController');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/payment', (req, res) => {
    res.render('payment', {
        paymentStatus: req.query.payment
    });
});

router.post('/handle-payment', handlePayment);

module.exports = router