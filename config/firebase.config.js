const Firebase = require('firebase-admin');
const serviceAccount = require('../drive-89988-firebase-adminsdk-v9me6-ccf2c0f3d1.json');

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-89988ea.appspot.com'
});

module.exports = Firebase;