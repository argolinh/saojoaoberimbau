const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto:your-email@example.com',
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
);

exports.sendNotification = (subscription, payload) => {
    webpush.sendNotification(subscription, payload)
        .then(response => console.log('Notificação enviada: ', response))
        .catch(err => console.error('Erro ao enviar notificação: ', err));
};