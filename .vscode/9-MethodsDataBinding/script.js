const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },

  
  computed:{
    fullNameCopmuted() {
      console.log("Name fonksiyonu Execute Edildi");
      if (this.name == "") {
        return " ";
      }
      return this.name + " " + "Gündüz";
    },

  },
  methods: {
    fullName() {
      console.log("Name fonksiyonu Execute Edildi");
      if (this.name == "") {
        return " ";
      }
      return this.name + " " + "Gündüz";
    },

    resetle() {
      this.name = "";
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      console.log("Azaltma fonksiyonu execute edildi");
      this.counter = this.counter - 1;
    },
    addfive(number) {
      this.counter = this.counter + number;
    },
    alertt() {
      alert("Sayaç Değeri:" + this.counter);
    },
    setName(event) {
      console.log("setName fonksiyonu Execute edildi");

      this.name = event.target.value;
    },
  },
});

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
