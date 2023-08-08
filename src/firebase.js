import firebase from"firebase/compat/app";
import  "firebase/compat/database";

const firebaseConfig = {

    apiKey: "AIzaSyCJUuCpPiYyzHfcyy6MmAKZhbXzd9VbdrQ",
  
    authDomain: "react-contact-dfe5e.firebaseapp.com",
  
    projectId: "react-contact-dfe5e",
  
    storageBucket: "react-contact-dfe5e.appspot.com",
  
    messagingSenderId: "142407081415",
  
    appId: "1:142407081415:web:8e8bc5b14d6dfb4669cde2"
  
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default firebase.database().ref()


  