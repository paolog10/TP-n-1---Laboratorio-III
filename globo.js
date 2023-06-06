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
    
    /*
    eliminarComentario(indice) {
      this.textos = this.textos.filter((value, index) => index !== indice);
    },*/

    eliminarComentario(indice){        
      this.textos.splice(indice, 1) //1: elimina 1 fila
    }
  }
})

//app.mount('#app')







