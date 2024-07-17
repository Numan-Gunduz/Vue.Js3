//
const app = Vue.createApp({
  data() {
    return {
  counter:0,
  

    };
  },
  methods: {
    ourGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.4) {
        return this.secondGoal;
      } else {
        return this.firstGoal;
      }
    },
  },
});

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
