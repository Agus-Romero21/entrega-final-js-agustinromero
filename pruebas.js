let contenedor = document.createElement("div");
let contenedorDos = document.createElement("div");
let contenedorTres = document.createElement("div");
let contenedorCuatro = document.createElement("div");

contenedor.innerHTML=`<textarea class="textarea">`;
contenedorDos.innerHTML=`<textarea class="textarea">`;
contenedorTres.innerHTML=`<textarea class="textarea">`;
contenedorCuatro.innerHTML=`<textarea class="textarea">`;

document.getElementById("cantidad").appendChild(contenedor);
document.getElementById("descripcion").appendChild(contenedorDos);
document.getElementById("pUnit").appendChild(contenedorTres);
document.getElementById("importe").appendChild(contenedorCuatro);

