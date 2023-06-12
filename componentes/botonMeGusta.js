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

  data() {
    return{
      desabilitar: false,
      contador: 200,
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


