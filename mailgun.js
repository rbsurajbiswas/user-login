const api_key = '4f16d2d9ef96812366aa4ad27e19e5a9-1f1bd6a9-3935f2c0';
const domain = 'sandboxd144c43e809f4d23b4a4241aa702934c.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

async function sendEmail(payload) {
    let data = {
        from: 'SB <SBtest@gmail.com>',
        to: `${payload.email}`,
        subject: 'Welcome',
        text: `Welcome ${payload.name}`
      };

    await mailgun.messages().send(data)
    console.log('Message send.')
    return true
}

module.exports = {sendEmail}