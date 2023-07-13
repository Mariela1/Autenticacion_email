import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import {auth} from './firebase.js';
import {loginCheck} from './loginCheck.js';
import { saveTask } from "./firebase.js";
import './signupForm.js';
import './logout.js';
import './signinForm.js';
import './googleLogin.js';


const taskForm = document.querySelector('#task-form');


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('enviado')

    const title = taskForm["task-title"];
    const description = taskForm["task-description"];
    //console.log(title.value, description.value) 
     saveTask(title.value, description.value);
     taskForm.reset();

});


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

