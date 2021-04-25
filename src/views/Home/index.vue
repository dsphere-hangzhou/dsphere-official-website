<template>
  <div>

    <Header />

    <div class="home-banner">
      <img src="banner.png"/>
      <div class="home-banner__box">
        <div class="home-banner__box-title">
          企业安全办公的一站式终极解决方案
        </div>
        <p>通过数影空间，实现<span>安全、高效、智能</span>的工作体验。</p>
        <div class="home-banner__box--buttton" @click="goPay">立即体验</div>
      </div>
    </div>


    <div class="home-introduce">
      <div class="home-introduce-top">
        <img src="diandian.png"/>
      </div>
      <div class="home-introduce-carousel">
        <div class="home-introduce-carousel__item">
            <div class="home-introduce-carousel__item-left">
              <div class="home-introduce-carousel__item-left__title">
                数影空间介绍
              </div>
              <div class="home-introduce-carousel__item-left__ps">
                数影空间是一个安全、高效、智能的数字化工作空间，以“工作空间即服务”的全新理念重新定义在线办公。不论您身在何处、使用何种设备，都可以轻松接入数影空间，办公应用和文档数据即点即用，实现高效流畅的线上工作体验。面向未来的下一代办公形态就在眼前，抢先一步，<router-link to="contact_us">即刻体验 ></router-link>
              </div>
            </div>
            <div class="home-introduce-carousel__item-right">
              <img src="kjjs.png"/>
            </div>
          </div>
      </div>
    </div>

    <div class="security">

      <div class="home-titleps">
        <div class="home-titleps__top">
          安全护航
        </div>
        <div class="home-titleps__gang"></div>
        <div class="home-titleps__center">
          在远离您网络和设备的云端安全空间开展业务，通过多个维度的安全策略，从根本上解决组织的信息安全问题
        </div>
        <div class="home-titleps__goNext">
          <router-link to="contact_us">了解更多 ></router-link>
        </div>
      </div>

      <div class="security-box">
        <img src="bigdot.png" class="security-box--left" />
        <img src="diandian.png" class="security-box--right" />
        <a-carousel autoplay arrows dotsClass="security-box-dot">
          <div
            slot="prevArrow"
            class="custom-slick-arrow"
            style="left: 10px;zIndex: 1"
          >
            <a-icon type="left-circle" />
          </div>
          <div slot="nextArrow" class="custom-slick-arrow" style="right: 20px">
            <a-icon type="right-circle" />
          </div>
          <div class="home-introduce-carousel__item">
            <div class="home-introduce-carousel__item-right">
              <img src="data.png" />
            </div>
            <div class="home-introduce-carousel__item-left">
              <div class="home-introduce-carousel__item-left__title">
                数据安全
              </div>
              <div class="home-introduce-carousel__item-left__ps">
                组织的文档数据被妥善保护在云端的安全空间内，用户查看和编辑的都是文档数据的数字投影，整个生命周期在线上闭环，数据不落地。
              </div>
            </div>
          </div>
          <div class="home-introduce-carousel__item">
            <div class="home-introduce-carousel__item-right">
              <img src="app.png" />
            </div>
            <div class="home-introduce-carousel__item-left">
              <div class="home-introduce-carousel__item-left__title">
                应用安全
              </div>
              <div class="home-introduce-carousel__item-left__ps">
                组织的应用和业务系统运行在云端的安全空间内，用户通过可信鉴权、接入数影后即可直接使用。全链路无需向用户下发地址和账号，脱离数影即不可访问。
              </div>
            </div>
          </div>
          <div class="home-introduce-carousel__item">
            <div class="home-introduce-carousel__item-right">
              <img src="environment.png" />
            </div>
            <div class="home-introduce-carousel__item-left">
              <div class="home-introduce-carousel__item-left__title">
                环境安全
              </div>
              <div class="home-introduce-carousel__item-left__ps">
                用云端安全空间内完全隔离的浏览器访问互联网，使安全威胁远离组织的网络和设备。同时，针对恶意代码和文件下载进行安全扫描，确保下载到内部的文件是安全的，保护组织环境免受恶意软件的侵扰。
              </div>
            </div>
          </div>
        </a-carousel>
      </div>

    </div>

    <div class="operate">

      <div class="home-titleps">
        <div class="home-titleps__top">
          高效运营
        </div>
        <div class="home-titleps__gang"></div>
        <div class="home-titleps__center">
          解除传统办公场地的限制，灵活高效，随处运营
        </div>
        <div class="home-titleps__goNext">
          <router-link to="contact_us">了解更多 ></router-link>
        </div>
      </div>

      <div class="operate-box">

        <a-carousel autoplay arrows dotsClass="security-box-dot">
          <div
            slot="prevArrow"
            class="custom-slick-arrow"
            style="left: 10px;zIndex: 1"
          >
            <a-icon type="left-circle" />
          </div>
          <div slot="nextArrow" class="custom-slick-arrow" style="right: 20px">
            <a-icon type="right-circle" />
          </div>

          
        <div class="operate-box--item">
          <div class="operate-box--item-title">
            不再受限于办公场地，任何终端、任何地点，
            <br />
            一键接入工作空间，应用和数据随时待命，即点即用。
          </div>
          <img src="computer3.png"/>
        </div>
        <div class="operate-box--item">
          <div class="operate-box--item-title operate-box--item-title1">
            统一办公环境，一站式满足团队沟通协作，会议，数字面板等工作流需求
            <br />
            “你见即我见”，随时随地与客户完成交互并达到目标。
          </div>
          <img src="computer2.png"/>
        </div>
        <div class="operate-box--item">
          <div class="operate-box--item-title operate-box--item-title1">
            针对行业痛点，紧贴业务需求，为企业量身打造个性化功能，
            <br />
            安全易用两全其美，创造无摩擦员工体验。
          </div>
          <img src="computer.png"/>
        </div>
        </a-carousel>

      </div>

    </div>

    <div class="cost">
      <div class="home-titleps">
        <div class="home-titleps__top">
          降低成本
        </div>
        <div class="home-titleps__gang"></div>
        <div class="home-titleps__center">
          打造开放的办公生态，减少运营投入，专注生产力发展
        </div>
        <div class="home-titleps__goNext">
          <router-link to="contact_us">了解更多 ></router-link>
        </div>
      </div>

      <div class="cost-box">

        <div class="cost-box__item">
          <img src="st.png" />
          <div class="cost-box__item-title">
            降低带宽和IP的成本
          </div>
          <div class="cost-box__item-center">
            集成网络和IP资源，智能调度分配，降低组织的网络带宽和固定IP租用成本。
          </div>
        </div>
        <div class="cost-box__item">
          <img src="yw.png" />
          <div class="cost-box__item-title">
            减少安全方案投入
          </div>
          <div class="cost-box__item-center">
            一站式安全解决方案，通过数影极大降低终端侧的安全压力，从而降低终端侧安全方案的采购投入。
          </div>
        </div>
        <div class="cost-box__item">
          <img src="zy.png" />
          <div class="cost-box__item-title">
            开放的用工生态
          </div>
          <div class="cost-box__item-center">
            灵活的设立分支机构、外包场地、远程职位，通过更开放的用工生态，转移人力成本和运营成本，同时提升组织的应变能力。
          </div>
        </div>

      </div>

      <div class="home-titleps">
        <div class="home-titleps__top">
          申请演示
        </div>
      </div>

      <div class="cost-video">
        <img src="sqys.png" class="cost-video-img"/>
        <img src="play.png" class="cost-video__play" @click="goPay"/>
      </div>

      <div class="home-titleps">
        <div class="home-titleps__top">
          行业覆盖
        </div>
      </div>
      
      <div class="home-industry">
        <div class="home-industry--item" v-for="item in industryList" :key="item.name">
          <img class="home-industry--item-img" :src="item.icon" />
          <div class="home-industry--item-title">{{item.name}}</div>
        </div>
      </div>

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
      industryList: [ {
        icon: 'yys.png',
        name: '电商'
      },{
        icon: 'hlw.png',
        name: '互联网'
      }, {
        icon: 'jr.png',
        name: '金融'
      }, {
        icon: 'zzy.png',
        name: '制造业'
      }, {
        icon: 'qy.png',
        name: '企业'
      }]
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    goPay () {
      this.$router.push('/contact_us')
    }
  }
}
</script>

<style lang="less">

.home-banner {
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
}
.home-banner__box {
  position: absolute;
  top: 10vw;
  left: 50%;
  width: 1200px;
  transform: translate( -50%, 0);
  p {
    margin: 28px 0 31px;
    font-size: 26px;
    span {
      color: #4A85F9;
    }
  }
}
.home-banner__box-title {
  font-size: 46px;
  font-weight: bold;
  color: #333333;
  line-height: 30px;
}
.home-banner__box--buttton {
  width: 180px;
  height: 60px;
  background: #4A85F9;
  border-radius: 4px;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  cursor: pointer;
}
.home-introduce {
  width: 1200px;
  margin: 50px auto 100px;
}
.home-introduce-top {
  margin-left: 60px;
  img {
    width: 86px;
    position: relative;
    left: -100px;
    bottom: -40px;
    z-index: -1;
  }
}
.home-introduce-carousel {
  height: 400px;
  background: #FFFFFF;
  box-shadow: 0 0 10px #ddd;
}
.home-introduce-carousel__item {
  display: flex !important;
}
.home-introduce-carousel__item-left {
  flex: 1;
  background: #fff;
}
.home-introduce-carousel__item-right {
  width: 540px;
  height: 400px;
  background: #eee;
  img {
    width: 540px;
  }
}
.home-introduce-carousel__item-left__title {
  margin: 80px 61px 38px;
  font-size: 40px;
  font-weight: 500;
  color: #333333;
}
.home-introduce-carousel__item-left__ps {
  margin: 0 61px;
  text-align: justify;
  font-size: 18px;
  span {
    color: #4A85F9;
  }
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
.home-titleps__goNext {
  color: #4A85F9;
}
.security {
  position: relative;
  margin-bottom: 100px;
}
.security-box {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 10px #eee;
}
.security-box--left {
  position: absolute;
  top: -126px;
  left: -292px;
  width: 292px;
}
.security-box--right {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 68px;
  z-index: -1;
}
.operate {
  padding: 60px 0 ;
  background: #EBF2FF;
}
.operate-box {
  width: 100%;
  height: 600px;
  background: #EBF2FF;
  // box-shadow: 0px 4px 20px 2px rgba(114, 114, 114, 0.08);
  overflow: scroll;
  /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
  -ms-overflow-style:none;
  /*火狐下隐藏滚动条*/
  overflow:-moz-scrollbars-none;
  &::-webkit-scrollbar{
    display:none;
  }
}
.operate-box--item {
  position: sticky;
  top: 0;
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: #EBF2FF;
  img {
    width: 100%;
  }
}
.operate-box--item-title {
  position: absolute;
  top: 60px;
  width: 100%;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #333333;
}
.operate-box--item-title1 {
  color: #fff;
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
.cost-video {
  width: 1200px;
  margin: 0 auto 100px;
  position: relative;
  .cost-video-img {
    width: 100%;
  }
}
.cost-video__play {
  position: absolute;
  top: 180px;
  left: 550px;
  width: 110px;
  cursor: pointer;
}
.home-industry {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  img {
    width: 120px;
  }
}
.home-industry--item-title {
  margin-top: 20px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #333333;
}
.security-box-dot {
  // background: #111;
}
.ant-carousel .security-box-dot li button {
  background: #666 !important;
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
</style>