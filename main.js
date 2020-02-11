new Vue({
  el: '#app',

  data() {
    return {
      courses: [],
      title: '',
      time: '',
    }
  },

  computed: {
    totalTime() {
      let total = 0
      if (this.courses.length === 0) {
        return 0
      }
      this.courses.map(item => {
        total += parseInt(item.time)
      })
      return total
    },
  },

  methods: {
    addCourse() {
      if (this.time.length === 0 || this.title.length === 0) {
        alert('debe completar los campos')
      } else {
        this.courses.push({ title: this.title, time: this.time })
        console.log(this.courses)
        this.time = 0
        this.title = ''
      }
    },
  },
})

// La aplicación debe cumplir los siguientes lineamientos:

// Un propiedad courses que sea un array y permita almacenar la lista de cursos.

// Tener una propiedad title y otra time que se usean para agregar un nuevo curso a la lista, estas propiedades deben estar enlazados a los inputs usando v-model.

// Un boton con un metodo addCourse (enlazado con v-on) que permita agregar un nuevo courso usando los valores de title y time.

// Una propiedad computada totalTime que recorra toda la lista de cursos y retorne la suma del tiempo invertido en educacion.

// Mostrar la lista de cursos tomados, con el titulo de los mismos y las horas de cada uno usando v-for.

// Mostrar el total de horas con totalTime, en caso que no existan cursos se debe mostrar un mensaje indicandolo.
