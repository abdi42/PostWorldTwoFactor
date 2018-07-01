const accountSid = 'AC8c6ee3f4ee8d031e5097101d75db520e';
const authToken = '7a327a7cf5bd5ef43df7c55c26c91976';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: '\n \n Your PostWorld verification code is: \n ' + twoFactorCode(),
     from: '+15592065094',
     to: '+14027399291'
   })
  .then(message => console.log(message.sid))
  .done();


function twoFactorCode(){
  var val = Math.floor(1000 + Math.random() * 9000);

  return val
}
