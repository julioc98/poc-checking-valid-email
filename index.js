var emailCheck = require('email-check');

emailCheck('test@test.com')
    .then(function (res) {
        // Returns "true" if the email address exists, "false" if it doesn't.
        console.log('ok')
    })
    .catch(function (err) {
        if (err.message === 'refuse') {
            // The MX server is refusing requests from your IP address.
            console.log('not ok')

        } else {
            // Decide what to do with other errors. 
        }
    });
