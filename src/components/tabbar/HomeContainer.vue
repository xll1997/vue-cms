<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in bannerPic" :key="i">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- icon部分 -->
    <ul class="mui-row iconLi">
      <li class="mui-col-xs-4 mui-col-sm-4">
        <router-link to class="iconHref">
          <img src="../../images/menu1.png" alt>
          <div>新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-col-xs-4 mui-col-sm-4">
        <router-link to class="iconHref">
          <img src="../../images/menu2.png" alt>
          <div>图片分享</div>
        </router-link>
      </li>
      <li class="mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/goodslist" class="iconHref">
          <img src="../../images/menu3.png" alt>
          <div>商品购买</div>
        </router-link>
      </li>
      <li class="mui-col-xs-4 mui-col-sm-4">
        <router-link to class="iconHref">
          <img src="../../images/menu4.png" alt>
          <div>留言反馈</div>
        </router-link>
      </li>
      <li class="mui-col-xs-4 mui-col-sm-4">
        <router-link to class="iconHref">
          <img src="../../images/menu5.png" alt>
          <div>视频专区</div>
        </router-link>
      </li>
      <li class="mui-col-xs-4 mui-col-sm-4">
        <router-link to class="iconHref">
          <img src="../../images/menu6.png" alt>
          <div>联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerPic: []
    };
  },
  created() {
    this.banner();
  },
  methods: {
    // 轮播图
    async banner() {
      const { data: dt } = await this.$http.get("/api/getlunbo");
      // console.log(dt);
      if (dt.status !== 0) {
        return Toast("暂无数据");
      }
      this.bannerPic = dt.message;
      // console.log(this.banner)
    }
  }
};
</script>


<style lang="less" scoped>
.mint-swipe {
  width: 100%;
  height: 200px;
  background-color: #00f;
  img {
    width: 100%;
    height: 200px;
  }
}
.iconHref {
  display: block;
  padding: 10px 0;
  img {
    width: 60px;
    height: 60px;
  }
  div {
    font-size: 13px;
    color: #333;
  }
}
.iconLi {
  margin: 0;
  padding: 0;
  text-align: center;
  li {
    padding: 11px 15px;
  }
}
</style>

