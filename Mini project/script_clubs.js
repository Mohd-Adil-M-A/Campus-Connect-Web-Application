// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore,
  setDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";



var CLUB_NAMES;
var CLUB_URL;



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO3K3Oh9RXMo0biV_wMT6Xx4570pkDrpA",
    authDomain: "campus-connect-8374c.firebaseapp.com",
    projectId: "campus-connect-8374c",
    storageBucket: "campus-connect-8374c.appspot.com",
    messagingSenderId: "972500467600",
    appId: "1:972500467600:web:5d5424818a7167d0d0bd15",
    measurementId: "G-7364WZ0B2C"
  };
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// import { doc, getDoc } from "firebase/firestore";
const docRef_names = doc(db, "CLUBS","NAMES");
const docSnap_names = await getDoc(docRef_names);

// import { doc, getDoc } from "firebase/firestore";
const docRef_url = doc(db, "CLUBS","URL");
const docSnap_url = await getDoc(docRef_url);


CLUB_NAMES = docSnap_names.data();
CLUB_URL = docSnap_names.data();



function card_generate(url,Heading){

    const cardHtml = `
    <div class="grid-item">
      <div class="card">
        <h2>`+Heading+`</h2>
        <img src="`+url+`" alt="Image 1">
        <a href="./members.html" class="card-button">Learn More</a>
      </div>
    </div>
  `;

  return cardHtml;

}


var size = Object.keys(CLUB_NAMES).length;

var url;
var Heading;

for (let i = 1; i <= size ; i++) {

        url = CLUB_URL[i]
        Heading = CLUB_NAMES[i]

        document.getElementById("CLUBS").innerHTML +=
                    card_generate(url, Heading);

}