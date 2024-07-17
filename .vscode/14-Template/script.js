const app = Vue.createApp({
  data() {
    return {
      firstBox:false,
      secandBox:false,
      thirdBox:false
    };
  },
    watch:{},
    computed:{},
    methods: {
      chooseBox(number){
        if(number === '1'){
          this.firstBox=true
        }
        else if (number==='2'){
          this.secandBox=true
        }
        else if(number ==='3'){
          this.thirdBox=true;
        }
      }
    },
  },
);

app.mount("#frontend"); //Vue js in kontrol ettiği id değer aralığı*/
