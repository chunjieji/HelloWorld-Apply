<template>
  <div>
    <div class="nav"><h1>2019HelloWorld新生报名列表</h1><button><a href="http://localhost:1234/api/apply/exportList">导出</a></button></div>
    <div class="table">
      <a-table :columns="columns" :dataSource="list" :scroll="{ x: 1500, y: 600 }" :defaultPageSize='50' :pagination="pagination" rowKey="_id">
        <a slot="action" slot-scope="text" href="javascript:;">action</a>
      </a-table>
    </div>
  </div>  
</template>

<script>
  import { Table } from 'ant-design-vue'
  const axios = require('axios');
  
  const columns = [
    { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: '专业', width: 100, dataIndex: 'specialty', key: 'age', fixed: 'left' },
    { title: '手机', dataIndex: 'phone', key: '1', width: 150 },
    { title: 'QQ', dataIndex: 'QQ', key: '2', width: 150 },
    { title: '性别', dataIndex: 'sex', key: '3', width: 100 },
    { title: '第一志愿', dataIndex: 'firstWish', key: '4', width: 150 },
    { title: '第二志愿', dataIndex: 'secondWish', key: '5', width: 150 },
    { title: '是否服从志愿', dataIndex: 'isAdjust', key: '6', width: 150 },
    { title: '爱好特长', dataIndex: 'hobby', key: '7', width: 150 },
    { title: '获奖经历', dataIndex: 'awardExperience', key: '8',width: 200 },
    { title: '加入我们的理由', dataIndex: 'joinReason', key: '9',width: 200 },
  ];

    const data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }

  export default{
    created() {
      this.getList();
      this.check()
    },
    data() {
      return {
        data,
        columns,
        pagination: {
          defaultPageSize: 20,
        },
        list: [],
      }
    },
    methods:{
      check(){
        let token = window.localStorage.getItem('token');
        !token?this.$router.push({ name: 'Login' }):'';
      },
      async getList () {
        let res = await axios.get('http://localhost:1234/api/apply/getList').catch((error) => { console.log(error) });
        this.list = res.data;
      },
    }
  }
</script>

<style  scoped>
button{
  width: 54px;
  height: 30px;
  outline: none;
  cursor: pointer;
  border:none;
  position: absolute;
  right: 3%;
  top:50%;
  transform: translate(0,-50%);
}
a{
  color: black;
}
h1{
  position: absolute;
  left: 50%;
  top:50%;
  color:white;
  transform: translate(-50%,-50%);
}
.nav{
  position: relative;
  width: 100%;
  height: 64px;
  background-color: rgb(73, 73, 92);
}
.table{
  width: 95%;
  margin: 34px auto;
}
</style>