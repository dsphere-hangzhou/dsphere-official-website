<template>
  <div class="home">

    <Header />

    <div class="home-banner">
      <a-carousel autoplay arrows effect="fade" dotsClass="security-box-dot" :after-change="afterChange">
        <a slot="customPaging" slot-scope="props">
          <div 
            class="home-banner__box--bot__item" 
            :class="{'home-banner__box--bot__item-action': active === props.i}"
            @click="active = props.i" 
            ></div>
        </a>
        <div class="home-banner__backbox">
          <div class="home-banner__box">
              <div class="home-banner__box-title">
                跨境电商解决方案
              </div>
              <div class="home-banner__box-p">
                更高效的店铺管理
                <div class="home-banner__box-p__span"></div>
                更安全的店铺环境
                <div class="home-banner__box-p__span"></div>
                更智能的运营体验
              </div>
              <div class="home-banner__box--buttton" @click="goCommerce">了解详情</div>
          </div>
        </div>
        <div class="home-banner__backbox1">
          <div class="home-banner__box">
              <div class="home-banner__box-title">
                云客服解决方案
              </div>
              <div class="home-banner__box-p">
                生态用工
                <div class="home-banner__box-p__span"></div>
                沉浸式管理
                <div class="home-banner__box-p__span"></div>
                资源统筹
              </div>
              <div class="home-banner__box--buttton" @click="goPay">了解详情</div>
          </div>
        </div>
        <div class="home-banner__backbox2">
          <div class="home-banner__box">
              <div class="home-banner__box-title">
                安全办公解决方案
              </div>
              <div class="home-banner__box-p">
                生态用工
                <div class="home-banner__box-p__span"></div>
                沉浸式管理
                <div class="home-banner__box-p__span"></div>
                资源统筹
              </div>
              <div class="home-banner__box--buttton" @click="goSecurity">了解详情</div>
          </div>
        </div>
      </a-carousel>
    </div>

    <div class="home-details">
      <div class="home-deitail__left">
        <div class="home-details__left-top"></div>
        <br />
        <div class="home-details__left-bottom"></div>
      </div>
      <div class="home-details__center">
        <div>通过数影星球，实现</div>
        <div class="home-details__center-dot">高效</div>
        <div class="home-details__center-dot">安全</div>
        <div class="home-details__center-dot">智能</div>
        <div>的线上工作体验</div>
      </div>
      <div class="home-deitail__right">
        <div class="home-details__right-top"></div>
        <br />
        <div class="home-details__right-bottom"></div>
      </div>
    </div>

    <div class="home-product">
      <div class="home-product__title">
        数影重磅产品
      </div>
      <div class="home-product__title-gang"></div>
      <div class="home-product__center">

        <div class="home-product__center-item" @click="goCommerce">
          <img src="product3.png" class="home-product__center-item__img"/>
          <div class="home-product__center-item__title">
            跨境电商
          </div>
          <div class="home-product__center-item__ps">
            更高效的店铺管理、更安全的店铺环境、更智能的运营体验
          </div>
          <div class="home-product__center-item__go">
            <img src="go.png"/>
          </div>
        </div>

        <div class="home-product__center-item">
          <img src="product2.png" class="home-product__center-item__img"/>
          <div class="home-product__center-item__title">
            云客服
          </div>
          <div class="home-product__center-item__ps">
            助力电商企业高效推进客服用工云化
          </div>
          <div class="home-product__center-item__go">
            <img src="go.png"/>
          </div>
        </div>

        <div class="home-product__center-item" @click="goSecurity">
          <img src="product.png" class="home-product__center-item__img"/>
          <div class="home-product__center-item__title">
            安全办公
          </div>
          <div class="home-product__center-item__ps">
            企业安全办公的一站式终极解决方案
          </div>
          <div class="home-product__center-item__go">
            <img src="go.png"/>
          </div>
        </div>

      </div>
    </div>

    <div class="cost">

      <div class="home-titleps">
        <div class="home-product__title">
          申请演示
        </div>
        <div class="home-product__title-gang"></div>
      </div>

      <div class="homecost-video">
        <img src="homesqys.png" class="homecost-video-img"/>
        <img src="play2.png" class="homecost-video__play" @click="goPay"/>
      </div>

      <div class="home-titleps">
        <div class="home-product__title">
          行业覆盖
        </div>
        <div class="home-product__title-gang"></div>
      </div>
      
      <div class="home-industry">
        <div class="home-industry--item" v-for="item in industryList" :key="item.name">
          <img class="home-industry--item-img" :src="item.icon" />
          <div class="home-industry--item-title">{{item.name}}</div>
        </div>
      </div>

    </div>

    <div class="home-bottom">
      <div class="home-product__title">
        实现高效、安全、智能的线上工作体验
      </div>
      <div class="home-product__title-gang"></div>
      <div class="home-bottom__button">
        <!-- <a-button type="primary" class="home-bottom__button-left">
          立即注册
        </a-button> -->
        <a-button class="home-bottom__button-right">
          立即下载
        </a-button>
      </div>
    </div>
    <div class="home-bottom__next">
      跨境电商解决方案
      <a-button @click="goCommerce">了解详情</a-button>
    </div>

    <Footer />

  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  data () {
    return {
      active: 0,
      industryList: [ {
        icon: 'homeds.png',
        name: '电商'
      },{
        icon: 'homehlw.png',
        name: '互联网'
      }, {
        icon: 'homeqy.png',
        name: '企业'
      }, {
        icon: 'homejr.png',
        name: '金融'
      }, {
        icon: 'homezzy.png',
        name: '制造业'
      }, {
        icon: 'homejy.png',
        name: '教育'
      }]
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    afterChange (current) {
      this.active = current
    },
    goPay () {
      this.$router.push('/contact_us')
    },
    goSecurity () {
      this.$router.push('/security')
    },
    goCommerce () {
      this.$router.push('/commerce')
    },
  }
}
</script>

<style lang="less">
.home {
  background: #F7F8FA;
}
.home-banner {
  position: relative;
  width: 100%;
  color: #fff;
}
.home-banner__background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
}
.home-banner__backbox {
  position: relative;
  padding: 0 0 10vw;
  background: url('/homebanner.png') no-repeat top left;
  background-size: 100% 100%;
}
.home-banner__backbox1 {
  position: relative;
  padding: 0 0 10vw;
  background: url('/homebanner2.png') no-repeat top left;
  background-size: 100% 100%;
}
.home-banner__backbox2 {
  position: relative;
  padding: 0 0 10vw;
  background: url('/homebanner3.png') no-repeat top left;
  background-size: 100% 100%;
}
.home-banner__box {
  margin: 0 auto;
  width: 1200px;
  color: #fff;
  p {
    margin: 28px 0 31px;
    font-size: 26px;
    span {
      color: #4A85F9;
    }
  }
}
.home-banner__box-title {
  margin-top: 8vw;
  font-size: 98px;
  font-weight: bold;
  line-height: 130px;
}
.home-banner__box-p {
  margin: 8px 0 47px;
  display: flex;
  font-size: 29px;
  line-height: 40px;
}
.home-banner__box-p__span {
  margin: 0 10px;
  border-right: 1px solid #fff;
  transform: scale(0.7);
}
.home-banner__box--buttton {
  width: 180px;
  height: 60px;
  background: #fff;
  border-radius: 16px;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  color: #0756F0;
  cursor: pointer;
}
.home-banner__box--bot {
  margin: 4vw 0 0;
}
.home-banner__box--bot__item {
  position: relative;
  left: -560px;
  top: -40px;
  margin-right: 5px;
  display: inline-block;
  border: 1px solid #fff;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  cursor: pointer;
}
.home-banner__box--bot__item-action {
  background: #fff;
}

.home-titleps {
  margin-bottom: 50px;
  text-align: center;
}
.home-titleps__top {
  font-size: 40px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
}
.home-titleps__gang {
  margin-bottom: 10px;
  display: inline-block;
  width: 30px;
  height: 4px;
  background: #4A85F9;
}
.home-titleps__center {
  margin: 0 auto;
  width: 800px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #666666;
}
.home-details {
  position: relative;
  margin: -80px 4%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;
  border-radius: 16px;
  height: 180px;
  z-index: 1;
  box-shadow: 0px 8px 14px 0px rgba(49, 114, 242, 0.1);
  font-size: 32px;
  color: #012F8A;
  line-height: 102px;
  .home-deitail__left {
    margin-left: 4%;
    line-height: 20px;
  }
  .home-details__left-top {
    display: inline-block;
    width: 48px;
    height: 8px;
    background: linear-gradient(205deg, #118FF9 0%, #0756F0 100%);
    border-radius: 3px;
    opacity: 0.8;
  }
  .home-details__left-bottom {
    display: inline-block;
    width: 32px;
    height: 8px;
    background: linear-gradient(205deg, #118FF9 0%, #0756F0 100%);
    border-radius: 3px;
    opacity: 0.8;
  }
  .home-deitail__right {
    margin-right: 4%;
    text-align: right;
    line-height: 20px;
  }
  .home-details__right-top {
    display: inline-block;
    width: 48px;
    height: 8px;
    background: linear-gradient(205deg, #118FF9 0%, #0756F0 100%);
    border-radius: 3px;
    opacity: 0.8;
  }
  .home-details__right-bottom {
    display: inline-block;
    width: 32px;
    height: 8px;
    background: linear-gradient(205deg, #118FF9 0%, #0756F0 100%);
    border-radius: 3px;
    opacity: 0.8;
  }
  .home-details__center {
    display: flex;
    height: 102px;
  }
  .home-details__center-dot {
    margin: 0 16px;
    width: 102px;
    height: 102px;
    background: #0756F0;
    border-radius: 102px;
    font-size: 30px;
    color: #fff;
    line-height: 102px;
    text-align: center;
  }
}
.home-product__title-gang {
  margin: 24px auto 81px;
  width: 200px;
  height: 12px;
  background: linear-gradient(270deg, rgba(17, 143, 249, 0.5) 0%, #0756F0 100%);
  border-radius: 5px;
  opacity: 0.8
}
.home-product__title {
    padding-top: 28px;
    text-align: center;
    font-size: 60px;
  }

.home-product {
  margin-top: 130px;
  padding-bottom: 60px;
  background: #fff;
  .home-product__center {
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }
  .home-product__center-item {
    height: 520px;
    width: 372px;
    background: url('/productbackground.png') no-repeat top left;
    background-size: 100% 100%;
    cursor: pointer;
    .home-product__center-item__img {
      margin: 40px 25px 40px 65px;
      width: 280px;
    }
    .home-product__center-item__title {
      margin-left: 69px;
      font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
      font-weight: normal;
      font-size: 36px;
      color: #fff;
    }
    .home-product__center-item__ps {
      margin-left: 69px;
      width: 256px;
      font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
      font-size: 18px;
      color: #fff;
    }
    .home-product__center-item__go {
      margin: 25px 25px 0 69px;
      background: #fff;
      padding: 11px 8px;
      width: 40px;
      border-radius: 4px;
      font-size: 0;
      text-align: center;
      img {
        width: 24px;
        height: 17px;
      }
    }
    &:hover .home-product__center-item__go {
      width: auto;
    }
  }
}

.cost {
  padding: 100px 0;
}
.cost-box {
  margin: 0 auto 100px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
.cost-box__item {
  width: 263px;
  text-align: center;
  img {
    width: 82px;
  }
}
.cost-box__item-title {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
}
.cost-box__item-center {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #666666
}
.homecost-video {
  width: 100%;
  margin: -60px auto 100px;
  padding: 90px 0;
  position: relative;
  background: url('/homebanner1.png') no-repeat top left;
  background-size: auto 100%;
  text-align: center;
  .homecost-video-img {
    width: 70%;
  }
}
.homecost-video__play {
  position: absolute;
  top: 30vw;
  right: 25%;
  width: 120px;
  cursor: pointer;
}
.home-industry {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  img {
    width: 360px;
  }
}
.home-industry--item-title {
  margin: -10px 0 56px;
  font-size: 18px;
  font-family: PingFang SC;
  color: #0756F0;
  font-weight: 500;
}
.ant-carousel .slick-dots-bottom {
  bottom: 6vw !important;
}
.ant-carousel .security-box-dot li button {
  background: #666 !important;
  border: 1px solid #fff;
}
.ant-carousel .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 30px !important;
  color: rgba(0,0,0,0.3) !important;
}
.ant-carousel .slick-prev {
  color: rgba(255,255,255,0.3) !important;
}
.ant-carousel .custom-slick-arrow:before {
  display: none;
}
.ant-carousel .custom-slick-arrow:hover {
  opacity: 0.5;
}
.ant-carousel .slick-prev, .ant-carousel .slick-next {
  font-size: 30px;
}
.home-bottom {
  width: 100%;
  margin: 0 auto;
  padding: 53px 0 80px;
  background: #fff url('/homebottom.png') no-repeat bottom left;
  background-size: 100%;

  .home-bottom__button {
    margin: 0 auto;
    width: 540px;
    display: flex;
    justify-content: center;
    button {
      width: 240px;
      height: 84px;
      border-radius: 40px;
      font-size: 30px;
      font-weight: 500;
    }
    .home-bottom__button-left {
      background: #0756F0;
    }
    .home-bottom__button-right {
      color: #0756F0;
      border: 4px solid #0756F0;
    }
  }
}
.home-bottom__next {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 53px 0;
  background: url('/homebanner.png') no-repeat top left;
  background-size: 100%;
  text-align: center;
  color: #fff;
  font-size: 60px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  button {
    position: absolute;
    top: 63px;
    right: 50%;
    transform: translate(500px, 0);
    width: 198px;
    height: 66px;
    background: #FFFFFF;
    border-radius: 14px;
    color: #0756F0;
    font-size: 30px;
  }
}
</style>