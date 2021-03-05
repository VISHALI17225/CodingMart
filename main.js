const app = new Vue({
  el: '#app',
  // our data
  data: {
    ename: '',
    erole: '',
	eleads: ''
  },
  //methods
  methods: {
    processForm: function() {
      console.log({ ename: this.ename, erole: this.erole, eleads:this.eleads});
      alert('Processing!');
    }
  }
});