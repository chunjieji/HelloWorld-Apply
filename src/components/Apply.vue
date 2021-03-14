<template>
  <div class="background">
    <div class="model" v-if="isCheck">
      <div class="form-box check-box">
        <input v-model="phone" type="text" placeholder="请输入手机号码">
        <button @click="getInfo" class="btn check" style="margin: 4px -60px;">查询</button>
      </div>
    </div>
    <div class="opacity" v-if="isCheck"></div>
    <div class="bar"></div>
    <div class="appliation">
      <h1>2019HelloWorld报名页面</h1>
      <div class="form-box">
        <img src="../assets/姓名.png">
        <input v-model="form.name" type="text" placeholder="请输入姓名">
      </div>
      <div class="form-box">
        <img src="../assets/专业.png">
        <input v-model="form.specialty" type="text" placeholder="请输入专业">
      </div>
      <div class="form-box">
        <img src="../assets/手机.png">
        <input v-model="form.phone" type="text" placeholder="请输入手机">
      </div>
      <div class="form-box">
        <img src="../assets/QQ.png">
        <input v-model="form.QQ" type="text" placeholder="请输入QQ">
      </div>
      <div class="form-box">
        <img src="../assets/性别.png">
        <div class="sel-box">
          <select v-model="form.sex">
            <option value="">请选择性别</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
      </div>
      <div class="form-box">
        <img src="../assets/志愿表.png">
        <div class="sel-box">
          <select v-model="form.firstWish">
            <option value="">请选择第一志愿</option>
            <option value="web前端">web前端</option>
            <option value="web后端">web后端</option>
            <option value="安卓">安卓</option>
            <option value="行政-外联">行政-外联</option>
            <option value="行政-办公室">行政-办公室</option>
            <option value="行政-运营">行政-运营</option>
          </select>
        </div>
      </div>
      <div class="form-box">
        <img src="../assets/志愿表.png">
        <div class="sel-box">
          <select v-model="form.secondWish">
            <option value="">请选择第二志愿</option>
            <option value="web前端">web前端</option>
            <option value="web后端">web后端</option>
            <option value="安卓">安卓</option>
            <option value="行政-外联">行政-外联</option>
            <option value="行政-办公室">行政-办公室</option>
            <option value="行政-运营">行政-运营</option>
          </select>
        </div>
      </div>
      <div class="form-box">
        <img src="../assets/分配.png">
        <div class="sel-box">
          <select v-model="form.isAdjust">
            <option value="">是否服从分配</option>
            <option value="是">是</option>
            <option value="否">否</option>
          </select>
        </div>
      </div>
      <div class="form-box">
        <img src="../assets/爱好.png">
        <input v-model="form.hobby" type="text" placeholder="爱好/特长(选填)">
      </div>
      <div class="form-box">
        <img src="../assets/奖杯.png">
        <input v-model="form.awardExperience" type="text" placeholder="获奖经历(选填)">
      </div>
      <div class="form-box">
        <img src="../assets/加入家族.png">
        <input v-model="form.joinReason" type="text" placeholder="加入我们的理由*">
      </div>
        <button @click="submit" class="btn submit">提交</button>
        <button @click="showModel" class="btn check">查询</button>
    </div>
  </div>  
</template>

<script>
const axios = require('axios');

export default {
  name: 'Apply',
  props: {
    msg: String
  },
  data (){
    return{
      isCheck: false,
      phone: '',
      form:{
        name: '',
        specialty: '',
        sex: '',
        phone: '',
        QQ: '',
        firstWish: '',
        secondWish: '',
        isAdjust: '',
        hobby: '',
        awardExperience: '',
        joinReason: '',
      }
    }
  },
  methods: {
    showModel(){
      this.isCheck = true;
    },
    getInfo(){
      axios
        .post('http://localhost:1234/api/apply/getApplyInfo', { phone: this.phone})
        .then(function (response) {
          alert('你已经报名成功!')
        })
        .catch(function (error) {
          alert('你还没有报名!')
        });
      this.isCheck = false;
      this.phone = '';
    },
    submit () {
      const form = this.form;
      axios
        .post('http://localhost:1234/api/apply/add', form)
        .then(function (response) {
          alert('报名成功!')
        })
        .catch(function (error) {
          alert('报名失败!')
        });
    }
  },
}
</script>


<style scoped>
.background{
  width: 100%;
  height: 667px;
  background: url(../assets/background.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: center;
  position: relative;
}
.model{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  width: 260px;
  height: 80px;
  background-color: #c6cedd;
  z-index: 10;
}
.btn{
  float: right;
  width: 64px;
  height: 30px;
  border-radius:4px;
  border: 1px solid #4e78b8;
  position:absolute;
  background: none;
  transition: .6s;
  padding: 2px 0;
  font-size: 14px;
}
.submit{
  margin: 4px 0px;
  bottom:3%;
}
.check{
  float: left;
  margin: 4px -218px;
  bottom:3%;
}
.btn:hover{
  background: #4e78b8;
}
.opacity{
  position: absolute;
  height: 667px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  z-index: 9;
}
.bar {
  top:53%;
  border-radius: 12px;
  height: 540px;
  width: 85%;
  left: 50%;
  transform: translate(-50%,-55%);
  position: absolute;
  background-color: rgba(255,255,255,0.50);
  overflow: hidden;
}
.appliation{
  top:10%;
  height: 530px;
  width: 280px;
  left: 50%;
  margin-left: -140px;
  position: absolute;
  color: black;
}
.appliation h1{
  float: left;
  font-size: 14px;
  border-bottom: 3px solid #403e92;
  margin-bottom: 12px;
  padding: 12px 0;
}
.form-box{
  float: left;
  width: 100%;
  border-bottom: 1px solid #403e92;
  margin: 4px 0;
  padding: 4px 0;
}
.form-box img{
  float: left;
  text-align: center;
  widows: 18px;
  height: 18px;
}
.form-box input{
  color: black;
  font-size: 12px;
  width: 80%;
  outline: none;
  border: none;
  background: none;
  margin: 0 8px;
}
.form-box input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgb(24, 13, 24);
}
.form-box input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: rgb(24, 13, 24);
  opacity:  1;
}
.form-box input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: rgb(24, 13, 24);
  opacity:  1;
}
.form-box input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgb(24, 13, 24);
}
.form-box input::-ms-input-placeholder { /* Microsoft Edge */
  color:rgb(24, 13, 24);
}

.sel-box{
  border:none;
  background:none;
  outline:none;
  box-shadow: none;
  height:100%;
  float:right;
  width:88%;
}
.sel-box select{
  border:none;
  background:none;
  outline:none;
  box-shadow: none;
  height:100%;
  width:100%;
  padding-bottom:4px;
  background: none;
  font-size:12px;
}

</style>
