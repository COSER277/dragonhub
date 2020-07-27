<template>
  <div class="header">
    <router-link to="/" class="logo">GragonHub</router-link>
    <div class="title" style="font-size:12px">
      <span>{{title?('-'+title):""}}{{date?'-'+date:""}}</span>
    </div>
    <div class="username" style>
      <p>Coser博客空间</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    date: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  background: rgb(31, 161, 212);
  text-align: center;
  line-height: 50px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: #eee 8px 2px 2px 2px;
  z-index: 999;

  .logo {
    width: 12%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-weight: 800;
    cursor: pointer;
    color: #fff;
  }
  .title {
    width: 20%;
    text-align: left;
  }
  .username {
    flex: 1;
    min-width: 50%;
    height: 100%;
    text-align: center;
    position: relative;
    p {
      position: absolute;
      left: 190px;
    }
  }
}
</style>