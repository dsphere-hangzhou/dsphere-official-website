<template>
  <div class="home-title" :class="{'home-title-shadow': !isTop}">
    <div class="home-title__box">
      <div class="home-title__box-logo" @click="$router.push('/')">
        <img src="logo2.png" >
        <!-- 数影星球 -->
      </div>
      <div class="home-title__box-menu">
        <router-link to="/">
          <div class="home-title__box-menu__item home-title__box-action" :class="{'home-action': $route.path !== '/'}">
            首页
          </div>
        </router-link>
        <a-dropdown>
          <div class="home-title__box-menu__item home-title__box-action" 
            :class="{'home-action': $route.path !== '/commerce' && $route.path !== '/security' }">
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
        <router-link to="contact_us">
          <div class="home-title__box-menu__item home-title__box-action" :class="{'home-action': $route.path !== '/contact_us'}">
            咨询购买
          </div>
        </router-link>
        <router-link to="about">
          <div class="home-title__box-menu__item home-title__box-action" :class="{'home-action': $route.path !== '/about'}">
            关于我们
          </div>
        </router-link>
      </div>
      <div class="home-title__seach" ref="seatTipOperation">
        <!-- <a-button @click="dowm">
          产品下载
        </a-button> -->
      </div>
      <!-- <div class="home-title__call">
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
      </div> -->
      <div class="home-title__button" @click="goConsole">
        企业登录
      </div>
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
    },
    dowm () {
      window.open('https://dsphere-agent.oss-cn-hangzhou.aliyuncs.com/CBEC/DSphereSetup.exe')
    }
  },
}
</script>

<style lang="less">
.home-title {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  background: #fff;
  z-index: 10;
  a { color: #0756F0; }
}
.home-title-shadow {
  box-shadow: 0 4px 8px #ddd;
}
.home-title__box {
  margin: 0 auto;
  width: 1200px;
  height: 60px;
  display: flex;
  align-items: center;
}
.home-title__box-logo {
  width: 200px;
  font-size: 20px;
  font-weight: 500;
  img {
    width: 178px;
  }
}
.home-title__box-menu {
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.home-title__box-menu__item {
  position: relative;
  padding: 0 12px;
  text-align: center;
  color: #0756F0;
  font-weight: 500;
  font-size: 16px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 20px;
    height: 4px;
    background: linear-gradient(270deg, #118FF9 0%, #0756F0 100%);
    border-radius: 2px;
  }
}
.home-title__box-action {
  height: 60px;
  line-height: 60px;
  cursor: pointer;
}
.home-title__box-action:hover {
  background: #0756F0;
  color: #fff;
  a {
    color: #fff !important;
  }
  &::after {
    content: '';
    background: #0756F0;
  }
}
.home-title__seach {
  flex: 1;
  text-align: right;
  button {
    width: 108px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 2px solid #0756F0;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0756F0;
  }
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
  color: #666;
  a {
    color: #666;
    &:hover {
      color: #666;
    }
  }
  &::after {
    content: '';
    background: #fff;
  }
}
.home-title__button {
  width: 100px;
  margin-left: 20px;
  border-left: 1px solid #E8E8E8;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #011847;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
}
</style>