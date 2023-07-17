// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBUnr0zWVR4BdazMBa6CsIg6bx2blUFbQw',
	authDomain: 'portfolio-fj-cf90a.firebaseapp.com',
	projectId: 'portfolio-fj-cf90a',
	storageBucket: 'portfolio-fj-cf90a.appspot.com',
	messagingSenderId: '95422094481',
	appId: '1:95422094481:web:439cdc04fe78e826957330',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);