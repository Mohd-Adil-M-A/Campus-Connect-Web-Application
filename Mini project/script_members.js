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



var MEMBER_NAMES;
var MEMBER_URL;
var MEMBER_POST;



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
const docRef_names = doc(db, "MEMBERS","AIMSA");
const docSnap_names = await getDoc(docRef_names);



MEMBER_NAMES = docSnap_names.data();



console.log(MEMBER_NAMES)

function card_generate(name,post){

    const cardHtml = `

    <div class="grid-item">
      <div class="card">

      <img src="" alt="Image 1">
        <h3>`+post+`:`+name+`</h3>
       
        
      </div>
    </div>
  `;

  return cardHtml;

}


var size = Object.keys(MEMBER_NAMES).length;


console.log(Object.keys(MEMBER_NAMES)[1])

var post;
var name;



for (let i = 1; i <= size ; i++) {

        post = Object.keys(MEMBER_NAMES)[i]
        name = Object.values(MEMBER_NAMES)[i]

        

        document.getElementById("Members").innerHTML +=
                    card_generate(name, post);

}