<template>
  <div class="pos">
    <button class="btn" @click="$router.push({ name: 'Apply' })">报名页面</button>
    <button class="btn" @click="$router.push({ name: 'Login' })">后台管理</button>
  </div>
</template>

<style>
body{
  background-color: lightblue;
}
.pos{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}
.btn{
  box-shadow: none;
  outline: none;
  border: none;
  padding: 4px 4px;
  font-size: 18px;
  width: 100px;
  height: 60px;
  background-color: #467180;
  margin: 0px 18px;
  cursor: pointer;
}
</style>