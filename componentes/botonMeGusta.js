app.component('boton-megusta', {
  template: 
  /*html*/
  `
  <div class="der-izq">
    <button class= "botonMegusta" type="submit"  
    @click = "sumarLike()" 
    :disabled = "desabilitar" 
    :class = "{botonDesabilitado: desabilitar}"><b>Me Gusta</b></button>
    <p><b>{{contador}}</label></b> Likes</p>
  </div>
  `,
  props: {

  },

  data() {
    return{
      desabilitar: false,
      contador: 200,
      /*botonDesabilitado:{
        backgroundColor: "red",
        color: "rgb(122, 119, 119)",
        cursor: "not-allowed"
      }*/
    }
  },

  methods: {
    sumarLike(){
      this.contador += 1;
      this.desabilitar = true; 
      return;         
    },
  }

})


/*
.botonDesabilitado {
  background-color:  gainsboro;
  color:rgb(122, 119, 119);
  cursor: not-allowed;
}
*/

