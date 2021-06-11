<template>
  <div class="home-title" :class="{'home-title-shadow': !isTop}">
    <div class="home-title__box">
      <div class="home-title__box-logo">
        <img src="logo2.png" >
        <!-- 数影星球 -->
      </div>
      <div class="home-title__box-menu">
        <div class="home-title__box-menu__item" :class="{'home-action': $route.path !== '/'}">
          <router-link to="/">首页</router-link>
        </div>
        <a-dropdown>
          <div class="home-title__box-menu__item home-title__box-action" :class="{'home-action': $route.path !== '/contact_us'}">
              解决方案
          </div>
          <a-menu slot="overlay">
            <a-menu-item>
              <router-link to="security" class="">
                安全办公
              </router-link>
            </a-menu-item>
            <!-- <a-menu-item>
              <a href="javascript:;">云客服</a>
            </a-menu-item> -->
            <a-menu-item>
              <router-link to="commerce" class="">
                跨境电商
              </router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <div class="home-title__box-menu__item" :class="{'home-action': $route.path !== '/contact_us'}">
          <router-link to="contact_us">咨询购买</router-link>
        </div>
        <div class="home-title__box-menu__item" :class="{'home-action': $route.path !== '/about'}">
          <router-link to="about">关于我们</router-link>
        </div>
      </div>
      <div class="home-title__seach" ref="seatTipOperation">
      </div>
      <div class="home-title__call">
        <a-popover placement="bottom" v-model="visible" trigger="click">
          <template slot="content">
            <div class="home-title__call-box">
              <p><a-icon type="phone" />  (0571) 88773523</p>
              <p><a-icon type="mail" />  ds@dsphere.cn</p>
            </div>
          </template>
          <span class="">
            联系我们<a-icon type="down" :class="{'home-title__call-icon': visible}" />
          </span>
        </a-popover>
      </div>
      <!-- <a-button type="primary" class="home-title__button" @click="goConsole">
        进入空间
      </a-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isTop: true, // 是否置顶
      visible: false
    }
  },
  methods: {
    goConsole() {
      window.open('https://work.dsphere.com.cn/#/login')
    }
  },
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
  box-shadow: 0 4px 8px #ddd;
}
.home-title__box {
  margin: 0 auto;
  width: 1200px;
  height: 70px;
  display: flex;
  align-items: center;
}
.home-title__box-logo {
  width: 181px;
  font-size: 20px;
  font-weight: 500;
  img {
    width: 181px;
  }
}
.home-title__box-menu {
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.home-title__box-menu__item {
  width: 90px;
  text-align: center;
  color: #666666;
  font-weight: 500;
  font-size: 16px;
}
.home-title__box-action {
  height: 70px;
  line-height: 70px;
  cursor: pointer;
}
.home-title__box-action:hover {
  background: #0756F0;
  color: #fff;
  a {
    color: #fff !important;
  }
}
.home-title__seach {
  flex: 1;
  text-align: right;
}
.home-title__call {
  margin: 0 60px;
  cursor: pointer;
  i {
    margin-left: 5px;
    font-size: 10px;
  }
}
.home-title__call-box {
  margin: 5px;
  p {
    margin-bottom: 0;
    line-height: 30px;
    font-size: 16px;
    color: #666;
  }
  p:first-child {
    margin-bottom: 20px;
  }
}
.home-title__call-icon {
  transform: rotate(180deg);
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