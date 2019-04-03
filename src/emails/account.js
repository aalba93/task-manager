const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'andres_aalba@hotmail.com',
    from: 'andres.alba@sendasvalue.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you'
});