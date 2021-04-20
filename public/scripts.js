paypal.Buttons({
    createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: document.getElementById('amount').value
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            $.ajax({
                type: "POST",
                url: '/handle-payment',
                data: {
                    paymentDetails: details
                },
                success: function (response) {
                    // if (response.result === 'redirect') {
                        //redirecting
                        window.location.replace(window.location.origin + response.url);
                    // }
                },
                error: function (res) {
                }
            });
        });
    },
    onCancel: function (data) {
        window.location.replace(window.location.origin + '/payment/?payment=error1');
    }
}).render('#paypal-button');
