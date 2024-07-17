const app = Vue.createApp({
  data() {
    return {
      skills: [],
      skill: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    addSkill() {
      this.skills.push(this.skill);
    },
    deleteSkill(indexx) {
      this.skills.splice(indexx, 1);
    },
  },
});

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
