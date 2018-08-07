import * as firebase from "firebase";


const config = {
    apiKey: "AIzaSyAa6Sf-V1938UWYwtDW6iLOubUxJ9Y4FJ8",
    authDomain: "donorapp-dc0b7.firebaseapp.com",
    databaseURL: "https://donorapp-dc0b7.firebaseio.com",
    projectId: "donorapp-dc0b7",
    storageBucket: "donorapp-dc0b7.appspot.com",
    messagingSenderId: "386131022415"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();