// ROOT ELEMENT
var app = new Vue({
  el: '#app',
  data: {
    appTitle: 'Vue Calculator',
    a: '',
    b: '',
    tot: 0,
    mark:'',
    display: '0',
    operator: null,
    quit:0,
    Number:[1,2,3,4,5,6,7,8,9,0]
  },
  
  methods: {
    setNumber(num){
      if(this.quit==1 && num=='.'){
        num='';
      };
      if(num=='.' && this.quit==0){
        this.mark != '' ? this.mark : this.mark='0';
        this.quit = 1;
      };
      if(this.operator === null){
        this.a =this.mark + num;
        this.display = this.a;
        this.mark = this.a;
      }else{
        this.b =this.mark + num;
        this.display = this.b;
        this.mark = this.b;
      };
    },
    calculate(alg){
        this.quit = 0; 
        this.mark = '';
      if(this.b ==''){
        this.operator = alg;
        return false;
      }else{
        this.algs(this.operator)
        this.display = this.tot;
        this.a = this.tot; 
        this.b = '';
        this.operator = alg;  
      }
    },
    algs(alg){
      switch(alg){
        case '+':
          this.tot = Number(this.a) + Number(this.b);
          break;
        case '-':
          this.tot = Number(this.a) - Number(this.b);
          break;
        case '*':
          this.tot = Number(this.a) * Number(this.b);
          break;
        case '/':
          this.tot = Number(this.a) / Number(this.b);
          break;
      }
    },
    clear(){
      this.a = '';
      this.b = '';
      this.mark = '';
      this.quit = 0;
      this.tot = 0;
      this.display = 0;
      this.operator = null;
    },
    backTab(){
      var back = this.mark;
          back=back.substr(0,back.length-1);
          this.display = back;
          this.mark = back;
          console.log(this.mark)
    }
  }
});