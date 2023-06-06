const app = Vue.createApp({
  data() {
    return {
      nombre: "Jane",
      apellido: "Cone",
      email: "jane_doe@email.com",
      fechaNacimiento: "01/05/1996",
      telefono: "918-936-9585",
      ciudad: "Tokyo, Japón",
      trabajo: "Lawn N",
      seleccion: 0,

      comentario: "",
      usuario: "",
      textos: [],
      aviso: '',
      ver: ''
    }
  },
  computed:{
    mostrarNombreApellido(){
      return `${this.nombre} ${this.apellido}`
    } 
  },

  methods:{
    agregarComentario(){
      if (this.usuario.trim() === '' || this.comentario.trim() === '') {
        if(this.comentario.trim() === '' && this.usuario.trim() === ''){
          this.aviso = "¡¡Ingrese usuario y comentario!!";
          return
        }
        if(this.comentario.trim() === ''){
          this.aviso = "¡¡Ingrese un comentario!!";
        }
        if(this.usuario.trim() === ''){
          this.aviso = "¡¡Ingrese un usuario!!";
        }

      }else{
        this.aviso = "";

        this.textos.push({
          comentario: this.comentario,
          usuario: this.usuario
        })
      
        //restart variables
        //this.usuario = ''
        this.comentario = ''
      }
    },
    
    eliminarComentario(indice, ver){

      this.textos[indice] = ""

      if(ver == ""){
        this.ver = {display: "none"}
        return
      }
      else{
        this.ver = ""
      }
    },
    /*eliminarComentario(indice) {
      this.textos = this.textos.filter((value, index) => index !== indice);
    },*/
  }
})

//app.mount('#app')

/*
window.onload = iniciar;

function iniciar () {
  document.getElementById("btnSeguir").addEventListener("click", DejarSeguir)
  document.getElementById("btnMeGusta").addEventListener("click", Likes)
  document.getElementById("btnComentar").addEventListener("click", AgregarComentario)
  document.getElementById("btnEliminar").addEventListener("click", eliminarComentario)
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
    document.getElementById("btnMeGusta").innerHTML = '<b>' + "No me gusta" + '<b>'
    let num = document.getElementById("likes").innerText;
    let conteo = Number(num) + 1;
    document.getElementById("likes").innerHTML = conteo;
  }
  else{
    document.getElementById("btnMeGusta").innerHTML = '<b>' + "Me Gusta" + '<b>'
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

      if(comentario.trim() === '' && usuario.trim() === ''){
        document.getElementById('aviso').innerHTML = "";
        document.getElementById('aviso').innerHTML = "¡¡Ingrese usuario y comentario!!";
        return
      }
      if(comentario.trim() === ''){
        document.getElementById('aviso').innerHTML = "";
        document.getElementById('aviso').innerHTML = "¡¡Ingrese un comentario!!";
              
      }
      if(usuario.trim() === ''){
        document.getElementById('aviso').innerHTML = "";
        document.getElementById('aviso').innerHTML = "¡¡Ingrese un usuario!!";
           
      }
      return;
    }

    document.getElementById('aviso').innerHTML = "";

    const text = document.createElement('p');
    text.innerHTML = '<b>' + usuario + '</b>' + " " + comentario;

    document.getElementById('listado').appendChild(text);
    document.getElementById("txtComentario").value= "";

    
    let lista1 = document.createElement('p');

    lista1.appendChild(newButton)
    document.getElementById('btnEliminar').appendChild(lista1);

    newButton.innerHTML = "Eliminar";
    newButton.style.color = "red";
    newButton.style.backgroundColor = rgb(209, 208, 216);
    newButton.style.border = "none";
    newButton.style.borderRadius = "0.3vw";
    newButton.style.fontWeight=  "bold"
    newButton.style.width = "6vw"
    newButton.style.height = "2vw"
       
}
let newButton = document.createElement("button");

function eliminarComentario() {
  listado.innerHTML = "";
  newButton.remove();

}
*/





