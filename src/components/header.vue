<template>
  <div class="home-title" :class="{'home-title-shadow': !isTop}">
    <div class="home-title__box">
      <div class="home-title__box-logo">
        <img src="logo.png" >
        数影星球
      </div>
      <div class="home-title__box-menu">
        <div class="home-title__box-menu__item" :class="{'home-action': $route.path=== '/'}">
          <router-link to="/">产品</router-link>
        </div>
        <div class="home-title__box-menu__item" :class="{'home-action': $route.path=== '/pay'}">
          <router-link to="pay">咨询购买</router-link>
        </div>
        <div class="home-title__box-menu__item" :class="{'home-action': $route.path=== '/about'}">
          <router-link to="about">关于我们</router-link>
        </div>
      </div>
      <div class="home-title__seach">
        <a-input class="home-title__search" v-if="showSearch" />
        <a-icon type="search" @click="showSearch = true" />
      </div>
      <div class="home-title__call">
        <a-popover placement="bottom">
          <template slot="content">
            <p><a-icon type="phone" />  电话电话电话</p>
            <p><a-icon type="mail" />  邮箱邮箱邮箱</p>
          </template>
          <span class="">
            联系我们<a-icon type="down" />
          </span>
        </a-popover>
      </div>
      <a-button type="primary" class="home-title__button">
        登录控制台
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSearch: false,
      isTop: true, // 是否置顶
    }
  },
  methods: {
    getScroll () {
      let scrollTop = document.body.scrollTop // 滚动条偏移量
      if (scrollTop > 0 && this.isTop) {
        this.isTop = false
      } else if (scrollTop === 0) {
        this.isTop = true
      }
    }
  },
  mounted() {
    console.log(this.$route.path)
    window.addEventListener('scroll', this.getScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScroll);
  }
}
</script>

<style lang="less">
.home-title {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 70px;
  width: 100%;
  background: #fff;
  z-index: 10;
}
.home-title-shadow {
  box-shadow: 0 1px 5px #ddd;
}
.home-title__box {
  margin: 0 auto;
  width: 1200px;
  height: 70px;
  display: flex;
  align-items: center;
}
.home-title__box-logo {
  width: 140px;
  font-size: 20px;
  font-weight: 500;
  img {
    width: 40px;
  }
}
.home-title__box-menu {
  display: flex;
  font-size: 16px;
}
.home-title__box-menu__item {
  width: 90px;
  text-align: center;
  color: #666666;
}
.home-title__seach {
  flex: 1;
  text-align: right;
}
.home-title__call {
  margin: 0 60px;
  cursor: pointer;
  &:hover i {
    transform: rotate(180deg);
  }
  i {
    margin-left: 5px;
    font-size: 10px;
  }
}
.home-title__seach .ant-input {
  width: 200px;
  margin-right: 20px;
}
.home-action {
  a {
    color: #666;
    &:hover {
      color: #666;
    }
  }
}
</style>