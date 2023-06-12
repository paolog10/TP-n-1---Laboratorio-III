app.component('seguir-usuario', {
  template: 
  /*html*/
  `
  <div id="n3">
    <button class = "botonColor" type="submit" @click = "Seguir(opcion)" :style = color> {{opcion}} </button>
  </div>
  `,

  data() {
    return{
      opcion: "Seguir",
      color: {backgroundColor: "rgb(3, 81, 250"},
    }
  },
  
  methods: {
    Seguir(opcion){
      if(opcion == "Seguir"){
        this.opcion = "Dejar de seguir",
        this.color = {backgroundColor: "rgb(195, 0, 255)"}
      }
      else{
        this.opcion = "Seguir",
        this.color = {backgroundColor: "rgb(3, 81, 250)"}
      }

    },
  }
})