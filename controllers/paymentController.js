const handlePayment = (req, res) => {
    let paymentDetails = req.body.paymentDetails
    try {
        if (paymentDetails.status === 'COMPLETED'){

        } else {
            throw ('Payment incomplete')
        }
    } catch (e) {

    }
    console.log(req.body);
}

module.exports = handlePayment