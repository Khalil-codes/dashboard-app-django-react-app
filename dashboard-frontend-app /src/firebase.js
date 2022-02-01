import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth';

import { firebaseConfig } from './config/firebaseConfig';

initializeApp(firebaseConfig);
const auth = getAuth();
export { auth, createUserWithEmailAndPassword, sendPasswordResetEmail };
