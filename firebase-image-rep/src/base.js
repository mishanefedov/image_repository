import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
    "projectId": "drf-upl-dwl",
    "appId": "1:942640048679:web:5ed8ba74e0e24576bbbc02",
    "storageBucket": "drf-upl-dwl.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDJZbr0tAbcCCGkf3EfvTlyEoaX01U28KU",
    "authDomain": "drf-upl-dwl.firebaseapp.com",
    "messagingSenderId": "942640048679"
  });