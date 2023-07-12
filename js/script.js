import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
import {auth} from './firebase.js';
import './signupForm.js';
import './logout.js';
import './signinForm.js';

import {loginCheck} from './loginCheck.js';

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginCheck(user)
        try {
            console.log("sesión iniciada");
        } catch (error) {
            console.log(error);
        }
    } else {
        loginCheck(user)
    }
})

