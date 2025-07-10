const multer = require("multer")

const firebaseStorage = require("multer-firebase-storage")

const firebase = require("./firebase.config")

const serviceAccount = require("../backend-drive-project-c2ec3-firebase-adminsdk-fbsvc-edcf613d4c.json")

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: "backend-drive-project-c2ec3.firebasestorage.app",
    unique: true
})

const upload = multer({
    storage: storage,
})


module.exports = upload