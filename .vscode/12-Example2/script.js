const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    result() {
      if (this.value < 25) {
        return "25'den küçük değer buldunuz";
      } else if (this.value == 25) {
        return this.value;
      } else {
        return "25'den büyük bir değer buldunuz";
      }
    },
  },
  methods: {
    addTen() {
      this.value = this.value + 10;
    },
    addFivee() {
      this.value = this.value - 5;
    },
  },
});

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
