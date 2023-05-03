
window.onload = iniciar;

function iniciar () {
  document.getElementById("btnSeguir").addEventListener("click", DejarSeguir)
  document.getElementById("btnMeGusta").addEventListener("click", Likes)
  document.getElementById("btnComentar").addEventListener("click", AgregarComentario)
  
}
function DejarSeguir() {

  let indicacion = document.getElementById("btnSeguir").innerText;
  
  if(indicacion == "Seguir"){
    document.getElementById("btnSeguir").innerHTML = "Dejar de Seguir"
    document.getElementById("btnSeguir").style.backgroundColor = "rgb(195, 0, 255)";
  }
  else{
    document.getElementById("btnSeguir").innerHTML = "Seguir"
    document.getElementById("btnSeguir").style.backgroundColor = "rgb(3, 81, 250)";
  }
}

function Likes () {
  let likes = document.getElementById("btnMeGusta").innerText;

  if(likes == "Me Gusta"){
    document.getElementById("btnMeGusta").innerHTML = "No me gusta"
    let num = document.getElementById("likes").innerText;
    let conteo = Number(num) + 1;
    document.getElementById("likes").innerHTML = conteo;
  }
  else{
    document.getElementById("btnMeGusta").innerHTML = "Me Gusta"
    let num = document.getElementById("likes").innerText;
    let conteo = Number(num) - 1;
    document.getElementById("likes").innerHTML = conteo;
  }
}


function AgregarComentario(evento) {
    evento.preventDefault();
   
    let comentario = document.getElementById("txtComentario").value;
    let usuario = document.getElementById('txtUsuario').value;
    

    if (comentario === ""|| usuario === "") {

      document.getElementById("aviso").style.color = "red";

      if(comentario === '' && usuario === ''){
        document.getElementById('aviso').innerHTML = "";
        document.getElementById('aviso').innerHTML = "¡¡Ingrese usuario y comentario!!";
        return
      }
      if(comentario === ''){
        document.getElementById('aviso').innerHTML = "";
        document.getElementById('aviso').innerHTML = "¡¡Ingrese un comentario!!";
              
      }
      if(usuario === ''){
        document.getElementById('aviso').innerHTML = "";
        document.getElementById('aviso').innerHTML = "¡¡Ingrese un usuario!!";
           
      }
      return;
    }

    document.getElementById('aviso').innerHTML = "";
    let text = document.createTextNode (usuario + " " + comentario);

    let lista = document.createElement('p');
    lista.appendChild(text);

    document.getElementById('listado').appendChild(lista);
    document.getElementById("txtComentario").value= "";

    
    let lista1 = document.createElement('p');

    lista1.appendChild(newButton)
    document.getElementById('eliminar').appendChild(lista1);

    newButton.innerHTML = "Eliminar";
    newButton.style.color = "red";
    newButton.style.backgroundColor = rgb(209, 208, 216);
       
}
let newButton = document.createElement("button");

function eliminarComentario() {
  document.querySelector("listado");
  listado.innerHTML = "";
  newButton.remove();

}






