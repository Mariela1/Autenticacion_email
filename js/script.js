import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import {auth} from './firebase.js';
import {loginCheck} from './loginCheck.js';
import { 
    onGetTasks,
    saveTask,
  
  } from "./firebase.js";
import './signupForm.js';
import './logout.js';
import './signinForm.js';
import './googleLogin.js';


const taskForm = document.querySelector('#task-form');
const taskContainer = document.getElementById("task-container");


window.addEventListener('DOMContentLoaded', async (e) => {
   
    //const querySnapshot = await getTasks();
    //querySnapshot.forEach((doc) => {
        // console.log(doc.data());
    //});

   onGetTasks((querySnapshot) => {
    taskContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
         const task = doc.data();
        

    taskContainer.innerHTML += `
    
        <div>
            <h3 class="h5">${task.title}</h3>
                <p>${task.description}</p>
        <div> 
                <button class="btn btn-primary btn-delete"> Delete</button>
        </div>
    </div>;
    `
})
});

//const task = doc.data();

//taskForm.addEventListener('submit', (e) => {
   // e.preventDefault();

    // console.log('enviado')

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

