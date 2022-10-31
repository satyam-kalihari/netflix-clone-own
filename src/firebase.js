import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXSUDoUzeH1lEs3lBOgJC4D_83_yseFHo",
    authDomain: "netflix-clone-own.firebaseapp.com",
    projectId: "netflix-clone-own",
    storageBucket: "netflix-clone-own.appspot.com",
    messagingSenderId: "384374195758",
    appId: "1:384374195758:web:76d14075c938ade19c41bf",
    measurementId: "G-G7LFDXDSP1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{auth};
export default db;