const keys = require('../config/key');
const client = require('twilio')(keys.accountSid, keys.authToken);


client.messages
    .create({
        body: "TEST TEXT",
        from: '+12019891209',
        to: '+12015462273'
    })
    .then(message => console.log(message.sid))
    .done();