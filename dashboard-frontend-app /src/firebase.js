import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from 'firebase/auth';

import { firebaseConfig } from './config/firebaseConfig';

initializeApp(firebaseConfig);
const auth = getAuth();
// export function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
// }

// export function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
// }

// export function logOut() {
//     return signOut(auth);
// }

// export function useAuth() {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) dispatch(saveUser(user));
//             else dispatch(removeUser());
//         });
//     }, [auth, dispatch]);
//     const currentUser = useSelector((state) => state.currentUser);
//     return currentUser;
// }
export {
    auth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
};
