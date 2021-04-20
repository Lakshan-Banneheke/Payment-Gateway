const initialize = require('../config/nodemailer');

const handlePayment = async (req, res) => {
    let paymentDetails = req.body.paymentDetails
    try {
        const transporter = await initialize();

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Potato" <freepotato98@gmail.com>', // sender address
            to: paymentDetails.payer.email_address, // list of receivers
            subject: "Donation Confirmation", // Subject line
            text: "Donation of " + paymentDetails.purchase_units[0].amount.currency_code + " " +  paymentDetails.purchase_units[0].amount.value + " has been made through your paypal account", // plain text body
            // html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        return res.status(200).send({ result: 'redirect', url: '/payment?payment=success' });

    } catch (e) {
        return res.status(200).send({ result: 'redirect', url: '/payment?payment=error' });
    }
}

module.exports = handlePayment