// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getReactNativePersistence} from 'firebase/auth';
import * as firebaseAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {getReactNativePersistance}
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore';

// console.log('firebase', firebase);

const reactNativePersistence = firebaseAuth.getReactNativePersistence;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9Tnr3Bx_2ECqwrQO1GYVF5T3p2YysHck',
  authDomain: 'chatapp-63b2e.firebaseapp.com',
  projectId: 'chatapp-63b2e',
  storageBucket: 'chatapp-63b2e.appspot.com',
  messagingSenderId: '259953797055',
  appId: '1:259953797055:web:752928fe9fb7632075230a',
};

console.log('getReactNativePersistence', reactNativePersistence());

// Initialize Firebase
// const app = initializeApp(firebaseConfig, {
//     persistence: getReactNativePersistence()
// });
// export const auth = initializeApp(app, {
//     persistence: reactNativePersistence(AsyncStorage),
//   });

//   export const db = getFirestore(app)

//   export const userRef= collection(db,'users')
//   export const roomRef = collection(db, 'rooms')

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebaseAuth?.getAuth(app);

export {db, auth};
