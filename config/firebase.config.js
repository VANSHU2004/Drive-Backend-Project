const Firebase = require("firebase-admin");
const serviceAccount = require("../backend-drive-project-c2ec3-firebase-adminsdk-fbsvc-edcf613d4c.json")

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket:  "backend-drive-project-c2ec3.firebasestorage.app"
})

module.exports = Firebase;
