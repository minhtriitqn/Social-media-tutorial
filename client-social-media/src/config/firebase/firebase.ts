import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDmnSjInRLZFAQm4A_rEEylihnqOwrbN8Y',
  authDomain: 'social-media-e2507.firebaseapp.com',
  projectId: 'social-media-e2507',
  storageBucket: 'social-media-e2507.appspot.com',
  messagingSenderId: '847876046973',
  appId: '1:847876046973:web:cb851ddf94d65914983114',
  measurementId: 'G-1RGK4D8J8F',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const singInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = {
        name: result.user.displayName,
        image: result.user.photoURL,
        email: result.user.email,
      };
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch((error) => {
      alert(error);
    });
};
