<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="黑马程序员·Vue项目">
      <!-- 返回 -->
      <span v-show="back" @click="goback" slot="left">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间组件 -->
    <transition>
      <router-view/>
    </transition>

    <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.$router)
    console.log(this.$route)
    this.back = this.$route.path === "/home" ? false : true;
  },
  data() {
    return {
      back: false
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to);
      if (to.path === "/home") {
        this.back = false;
      } else {
        this.back = true;
      }
    }

    // "$route.path": function(newVal) {
    //   if (newVal === "/home") {
    //     this.back = false;
    //   } else {
    //     this.back = true;
    //   }
    // }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  background-color: #fff;
}
</style>
