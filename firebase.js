import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlGSvZ3XpcEYLZ2r2e5XiMLqLlVGQcYpk",
  authDomain: "myg-tienda.firebaseapp.com",
  projectId: "myg-tienda",
  storageBucket: "myg-tienda.firebasestorage.app",
  messagingSenderId: "72865962233",
  appId: "1:72865962233:web:ab24973b340bebed352a28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contenedor = document.getElementById("productos");

async function cargarProductos() {
  const consulta = await getDocs(collection(db, "productos"));

  contenedor.innerHTML = "";

  consulta.forEach((documento) => {
    const producto = documento.data();

    if (producto.activo !== true) return;

    contenedor.innerHTML += `
      <div class="card">
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p class="descripcion">${producto.descripcion}</p>
        <p class="descripcion">S/ ${producto.precio}</p>
        <p class="descripcion">Stock: ${producto.stock}</p>
      </div>
    `;
  });
}

cargarProductos();
