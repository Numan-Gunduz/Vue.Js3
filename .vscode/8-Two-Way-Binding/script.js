const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    resetle() {
      this.name = "";
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
    },
    addfive(number) {
      this.counter = this.counter + number;
    },
    alertt() {
      alert("Sayaç Değeri:" + this.counter);
    },
    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
