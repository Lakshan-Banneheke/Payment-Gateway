"use strict";
const nodemailer = require("nodemailer");

const initialize = async function() {
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'freepotato98@gmail.com',
            pass: 'Fuckoff#123',
        },
    });
    return transporter

}

module.exports = initialize