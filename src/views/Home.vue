<template>
  <div class="container">
    <Header></Header>
    <div class="home">
      <div class="avatar" ref="avatar">
        <img
          src="../assets/bg.jpg"
         
          alt
          style=" width:100%;height:100%;border-radius:50%"
          @mouseover="hover()"
        />
      </div>
      <div class="boxs">
        <router-link to="/" class="box">首 页</router-link>
        <router-link to="/doc" class="box">归 档</router-link>
        <router-link to class="box">留 言</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
  components: {
    Header,
  },
  methods: {
    hover() {
      // this.$refs.avatar
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .home {
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    .avatar {
      width: 120px;
      height: 120px;
      text-align: center;
      border-radius: 50%;
      // box-shadow: 33px 33px 67px #c5c9cc, -33px -33px 67px #ffffff;
      cursor: pointer;
      &:hover {
        //旋转
        -webkit-animation: animal 3s infinite linear;
        -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
        transform-origin: center center;
      }
    }
    .boxs {
      display: flex;
      flex-direction: row;
      align-items: center;
      .box {
        margin: 40px 4px;
        font-weight: 600;
        cursor: pointer;
        color: #000;
      }
    }
  }
}
//自定义
@-webkit-keyframes animal {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
</style>