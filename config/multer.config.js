const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const Firebase = require('./firebase.config');
const serviceAccount = require('../drive-89988-firebase-adminsdk-v9me6-ccf2c0f3d1.json');

const storage = firebaseStorage({
     credentials: Firebase.credential.cert(serviceAccount),
     bucketName:'drive-89988ea.appspot.com',
});

const upload = multer({
    storage: storage,
});

module.exports = upload;