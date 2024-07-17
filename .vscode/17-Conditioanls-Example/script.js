const app = Vue.createApp({
  data() {
    return {
      enteredTask: " ",
      tasks: [],
      isVisible: true,
    };
  },
  watch: {},
  computed: {},
  methods: {
    ToDo() {
      this.tasks.push(this.enteredTask);
    },
    toggleTasks() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
