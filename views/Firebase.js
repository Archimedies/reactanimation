import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0vDY5PCALFREoMoEbHldOKfYIF2lVB8Q",
    authDomain: "reactnativefirebase-59add.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-59add.firebaseio.com",
    projectId: "reactnativefirebase-59add",
    storageBucket: "reactnativefirebase-59add.appspot.com",
    messagingSenderId: "892410547304",
    appId: "1:892410547304:web:1122186aacbedd9d533fdd"
};

firebase.initializeApp(firebaseConfig);

export default firebase;