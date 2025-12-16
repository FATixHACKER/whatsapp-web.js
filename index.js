const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('🤖 WhatsApp Bot Ready!');
});

client.on('message', msg => {
  msg.reply('Walikum Assalam jani 😊\nYe auto reply bot hai 🤖');
});

client.initialize();
