import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import {auth} from './firebase.js';
import {loginCheck} from './loginCheck.js';
import { 
        saveTask,
        getTasks,
        onGetTasks,
  } from "./firebase.js";
import './signupForm.js';
import './logout.js';
import './signinForm.js';
import './googleLogin.js';


const taskForm = document.getElementById("task-form");
// Llamamos al contenedor de tareas
const taskContainer = document.getElementById("task-container");


window.addEventListener("DOMContentLoaded", async () => {
  //getTasks();
   // const querySnapshot = await getTasks();
    onGetTasks((querySnapshot) => {
    
    // Inicializamos nuestro html vacio     
     let html = "";
     //console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
 
     // console.log(doc)
    //console.log(doc.data());
     //console.log(taskContainer);
         const task = doc.data()
    
    // Para ver los idS de cada tarea de los botones
         console.log(doc.id)

             html += `
                  <div>
                       <h3>${task.title}</h3>
                        <p>${task.description}</p>
                        <button class='btn btn-delete btn-warning' data-id="${doc.id}">Borrar</button>
                 </div>
                 `;
        });
     taskContainer.innerHTML = html;
     const btnsDelete = document.querySelectorAll('.btn-delete')
    //Probamos los botones
    //console.log(btnsDelete)

    btnsDelete.forEach(btn => {
    btn.addEventListener('click', async () => {
    console.log('borrando')
    //console.log(e)
     console.log(doc.id)

    });

});
});
});



taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

   // console.log('enviado')

    const title = taskForm['task-title']
    const description = taskForm['task-description']
    // console.log(title.value, description.value) 
     saveTask(title.value, description.value);
     taskForm.reset();

    //})  


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

});

