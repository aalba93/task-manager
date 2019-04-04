const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const fromEmail = 'andres_aalba@hotmail.com';

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: fromEmail,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: fromEmail,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}