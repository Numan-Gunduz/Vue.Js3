const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
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
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    login(event) {
      // event.preventDefault(); Bu method bizim formda sayfa yenilenmesini önleyen bir metottur(prevent:Engellemek)

      alert("Merhabalar " + this.name + " Başarıyla Giriş Yapıldı");
    },
  },
});

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
