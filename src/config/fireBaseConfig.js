import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDFx15XsoUTq6-i80HWqloU48xkvtIbrHw",
    authDomain: "react-redux-project-90324.firebaseapp.com",
    projectId: "react-redux-project-90324",
    storageBucket: "react-redux-project-90324.appspot.com",
    messagingSenderId: "693776989702",
    appId: "1:693776989702:web:f7f7151fa9f39a89b14d87",
    measurementId: "G-B6PKP1T624"
  };

  firebase.initializeApp(config);
  firebase.firstore().settings({timestampsInSnapshots: true});

  export default firebase;