const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
    },
    alertt() {
      alert("Sayaç Değeri:" + this.counter);
    },
  },
});

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
