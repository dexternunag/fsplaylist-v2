const firebase = require("firebase/app");
// Required for side-effects
// require("firebase/firestore");
require('firebase/auth');
require('firebase/database');

firebase.initializeApp({
    serviceAccount: './fs-playlist.json',
    databaseURL: 'https://fs-playlist.firebaseio.com'
});

// Initialize firebase firestore database
const database = firebase.database().ref('floors')
// firebaseDb.settings({ timestampsInSnapshots: true });
// const playlistCollection = firebaseDb.ref('fs-playlist')
// const thirdFloor = firebaseDb.collection('floor/third');

export default database