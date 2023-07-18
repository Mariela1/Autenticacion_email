        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
        // import { } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
         import { getFirestore,
        addDoc,
        getDocs,
        collection,
        onSnapshot,
        } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"


        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyD9_mTe1t_C34mAEqdG3zXsxbX4jSHDkyk",
          authDomain: "unidad4-7e24c.firebaseapp.com",
          projectId: "unidad4-7e24c",
          storageBucket: "unidad4-7e24c.appspot.com",
          messagingSenderId: "1059673990918",
          appId: "1:1059673990918:web:8096dde83de017d2c7a087",
          measurementId: "G-4W89RT0ZLH"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        export const auth = getAuth(app);
        
        // Conexion a la base de datos
        export const db = getFirestore();

        export const saveTask = (title, description) => 
          //console.log(title, description);
        addDoc(collection(db, "tareas"), {title, description})
       
        // Listar datos
        //export const getTasks = () => console.log('tasks-list');
        export const getTasks = () => getDocs(collection(db, "tareas"))

       
       // generando la nueva funcion
        export const onGetTasks =  (callback) => onSnapshot(collection(db, "tareas"), callback);

      // export {
       //   onSnapshot,
       //   collection
        //}


      

        
        