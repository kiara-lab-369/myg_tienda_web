// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "myg-tienda.firebaseapp.com",
  projectId: "myg-tienda",
  storageBucket: "myg-tienda.firebasestorage.app",
  messagingSenderId: "72865962233",
  appId: "1:72865962233:web:ab24973b340bebed352a28"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

console.log("Firebase conectado 🚀");
