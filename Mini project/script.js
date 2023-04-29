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



var OnGoing_LINKS;
var OnGoing_HEADING;
var OnGoing_URL;

var UpComming_LINKS;
var UpComming_HEADING;
var UpComming_URL;




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
const docRef_links = doc(db, "OnGoing_Events","LINKS");
const docSnap_links = await getDoc(docRef_links);

// import { doc, getDoc } from "firebase/firestore";
const docRef_headings = doc(db, "OnGoing_Events","Headings");
const docSnap_headings = await getDoc(docRef_headings);

// import { doc, getDoc } from "firebase/firestore";
const docRef_url = doc(db, "OnGoing_Events","URL");
const docSnap_url = await getDoc(docRef_url);

// import { doc, getDoc } from "firebase/firestore";
const docRef_links_upcoming = doc(db, "UpComing","LINKS");
const docSnap_links_upcoming = await getDoc(docRef_links_upcoming);

// import { doc, getDoc } from "firebase/firestore";
const docRef_headings_upcoming = doc(db, "UpComing","Headings");
const docSnap_headings_upcoming = await getDoc(docRef_headings_upcoming);

// import { doc, getDoc } from "firebase/firestore";
const docRef_url_upcoming = doc(db, "UpComing","URL");
const docSnap_url_upcoming = await getDoc(docRef_url_upcoming);




OnGoing_LINKS = docSnap_links.data();

OnGoing_HEADING = docSnap_headings.data();

OnGoing_URL = docSnap_url.data();

UpComming_LINKS = docSnap_links_upcoming.data();

UpComming_HEADING = docSnap_headings_upcoming.data();

UpComming_URL = docSnap_url_upcoming.data();


function card_generate(url,Heading,link){

    const cardHtml = `
    <div class="card">
      <img src=`+url+`  alt="Image 1">
      <h2>`+Heading+`</h2>
      <a href="`+link+`" class="card-button">Learn More</a>
    </div>
  `;

  return cardHtml;

}


var size = Object.keys(OnGoing_HEADING).length;

var url;
var Heading;
var link;

for (let i = 1; i <= size ; i++) {

        url = OnGoing_URL[i]
        Heading = OnGoing_HEADING[i]

        link = OnGoing_LINKS[i]

        document.getElementById("OnGoing_Events").innerHTML +=
                    card_generate(url, Heading, link);

}



// Up Coming Events
var size = Object.keys(OnGoing_HEADING).length;

var url;
var Heading;
var link;

for (let i = 1; i <= size ; i++) {

      url = UpComming_URL[i]
      Heading = UpComming_HEADING[i]

      link = UpComming_LINKS[i]

      document.getElementById("UpComing_Events").innerHTML +=
                  card_generate(url, Heading, link);

}

