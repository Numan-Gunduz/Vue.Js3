//
const app = Vue.createApp({
  data() {
    return {
      firstGoal: "Html",
      secondGoal: "Css",
      thirdGoal:"JavaScript",
      instance:"<h2>Vue Jss</h2>",

      MyWebSite: "https://www.canboz.com/",
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
