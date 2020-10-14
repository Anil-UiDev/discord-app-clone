import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBptBs_rY1xaxDJucKRsMB_ZPf-pmX-h2g",
  authDomain: "discord-app-clone-60fc4.firebaseapp.com",
  databaseURL: "https://discord-app-clone-60fc4.firebaseio.com",
  projectId: "discord-app-clone-60fc4",
  storageBucket: "discord-app-clone-60fc4.appspot.com",
  messagingSenderId: "585302882596",
  appId: "1:585302882596:web:ef77e38257bf9c8926dbb1",
  measurementId: "G-H572BVXDTF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;