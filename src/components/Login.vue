<template>
  <div>
    <div class="login-box">
      <h1>LOGIN</h1>
      <form>
        <input type="text" placeholder="Username" v-model='username'>
        <input type="password" placeholder="Password" v-model='password'>
        <button @click="login">Login</button>
      </form>
    </div>
  </div>  
</template>

<script>
  const axios = require('axios');

  export default{
    data(){
      return{
        username: '',
        password: ''
      }
    },
    methods:{
      async login () {
        let res = await axios.post('http://localhost:1234/api/login/login',{username: this.username,password: this.password}).catch((error) => { console.log(error) });
        if(res){
          localStorage.setItem("token", res.data.token);
          this.$router.push({ name: 'Manage' })
        }
        
      },
    }
  }
</script>

<style  scoped>
.login-box{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: rgb(115, 135, 155);
}
input[type = 'password'],input[type = 'text']{
  display: block;
  border: none;
  margin: 20px auto;
  height: 24px;
  padding-left: 4px;
}
button{
  width: 50px;
  height: 30px;
  background: none;
  border:2px solid rgb(92, 92, 138)
}
</style>