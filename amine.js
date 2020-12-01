Vue.component('students', {
  template: '<h4>Student registration</h4>'
})
var app = new Vue({
  el: '#app',
  data: {
    name: 'Amine',
    course: 'Diver',
    period: '2020-12-18',
    students:[
      {
        id: 1,
        name: 'Cedrick',
        course: 'Diver2',
        period: '2020-11-18'
      },
      {
        id: 2,
        name: 'Diop',
        course: 'Python',
        period: '2020-10-11'
      },
      {
        id: 3,
        name: 'Jules',
        course: 'Diver 3',
        period: '2020-12-19'
      }
    ]
  },
  methods: {
        addStudent: function() {
            let element = this.students[this.students.length - 1];
            let auto = element.id + 1;
            return this.students.push({ id: auto, name: this.name, course: this.course, period: this.period })
        }
    }
})
