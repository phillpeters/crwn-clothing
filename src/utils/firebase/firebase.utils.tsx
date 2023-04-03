import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

type UserAuth = {
  uid: string;
  displayName: string | null;
  email: string | null;
};

const firebaseConfig = {
  apiKey: 'AIzaSyAxXElTe8QrkpSnnxr2MUCkKaOANAB5Ch8',
  authDomain: 'crwn-db-9640e.firebaseapp.com',
  projectId: 'crwn-db-9640e',
  storageBucket: 'crwn-db-9640e.appspot.com',
  messagingSenderId: '756027762711',
  appId: '1:756027762711:web:64e81ce3080e906a3e9452'
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: UserAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error: any) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
