<template>
  <div>

    <Header />

    <div class="home-banner">
      <img src="banner.png"/>
      <div class="home-banner__box">
        <div class="home-banner__box-title">
          企业级办公的一站式终极解决方案
        </div>
        <p>随时随地，通过任何终端登录数字化平台，<span>安全高效</span>办公。</p>
        <div class="home-banner__box--buttton" @click="goPay">立即体验</div>
      </div>
    </div>


    <div class="home-introduce">
      <div class="home-introduce-top">
        <img src="dot.png"/>
      </div>
      <div class="home-introduce-carousel">
        <div class="home-introduce-carousel__item">
            <div class="home-introduce-carousel__item-left">
              <div class="home-introduce-carousel__item-left__title">
                数影空间介绍
              </div>
              <div class="home-introduce-carousel__item-left__ps">
                数影空间是一个安全、高效、智能的数字化工作空间，以全新概念“工作空间即服务”重新定义办公。脱离了传统工作模式的限制，不论你身在何处，使用何种设备，都可以轻松接入云端办公桌面，所需应用和数据全部即点即用，实现比本地更加高效流畅的工作体验。更为精彩的是，数影空间提供丰富的安全解决方案为企业数据保驾护航。云端接入的方式将数据隔离在安全围栏内部，终端侧不落地，有效避免数据泄露。面向未来的企业标准办公形态就在眼前，抢先一步，<router-link to="pay">即刻体验 ></router-link>
              </div>
            </div>
            <div class="home-introduce-carousel__item-right"></div>
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
          数据不落地，根本上解决企业的数据安全问题
        </div>
        <div class="home-titleps__goNext">
          <router-link to="pay">了解更多 ></router-link>
        </div>
      </div>

      <div class="security-box">
        <img src="bigdot.png" class="security-box--left" />
        <img src="diandian.png" class="security-box--right" />
        <a-carousel autoplay :dots="false">
          <div class="home-introduce-carousel__item">
            <div class="home-introduce-carousel__item-right">
              <img src="app.png" />
            </div>
            <div class="home-introduce-carousel__item-left">
              <div class="home-introduce-carousel__item-left__title">
                应用安全
              </div>
              <div class="home-introduce-carousel__item-left__ps">
                所有应用运行在云端，并辅以灵活的组策略发布控制，员工无需输入URL、无需下发账号，单点登录，OA、CRM、邮箱等业务系统即点即用。访问外网的应用部署在DMZ区，与内网员工终端隔离，更安全的访问外部网络。
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
                构建企业级安全围栏，加固系统防护，数据出不去，威胁进不来。后台弹性可用部署，业务零中断，网络权限按业务隔离，可以为CRM，邮箱，HR等不同业务系统指定单独的网络政策。
              </div>
            </div>
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
                数据不落地，文档数据隔离在封闭安全区域内，员工看到的都是文件的数字投影，打开时直接调用云端应用，全链路线上闭环。
              </div>
            </div>
          </div>
        </a-carousel>
      </div>

    </div>

    <div class="operate">

      <div class="home-titleps">
        <div class="home-titleps__top">
          安全护航
        </div>
        <div class="home-titleps__gang"></div>
        <div class="home-titleps__center">
          数据不落地，根本上解决企业的数据安全问题
        </div>
        <div class="home-titleps__goNext">
          <router-link to="pay">了解更多 ></router-link>
        </div>
      </div>

      <div class="operate-box">

        <div class="operate-box--item">
          <div class="operate-box--item-title">
            任何终端，任何地点，一键接入工作空间，
            <br />
            应用软件无需安装维护，自动登录，随时“待命”
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

      </div>

    </div>

    <div class="cost">
      <div class="home-titleps">
        <div class="home-titleps__top">
          降低成本
        </div>
        <div class="home-titleps__gang"></div>
        <div class="home-titleps__center">
          资源智能按需分配，减少运营投入，专注生产力发展
        </div>
        <div class="home-titleps__goNext">
          <router-link to="pay">了解更多 ></router-link>
        </div>
      </div>

      <div class="cost-box">

        <div class="cost-box__item">
          <img src="st.png" />
          <div class="cost-box__item-title">
            开放的用工生态
          </div>
          <div class="cost-box__item-center">
            灵活设立分支机构,外包场地，远程职位，转移人力成本，提升应变能力。
          </div>
        </div>
        <div class="cost-box__item">
          <img src="yw.png" />
          <div class="cost-box__item-title">
            开放的用工生态
          </div>
          <div class="cost-box__item-center">
            高质量云终端随时待命，能够长时间稳定运行，有效节省大量的运营成本（人力，能耗，硬件维修等）
          </div>
        </div>
        <div class="cost-box__item">
          <img src="zy.png" />
          <div class="cost-box__item-title">
            开放的用工生态
          </div>
          <div class="cost-box__item-center">
            可实现计算，存储等资源的共享与复用，业务扩张时，只需往资源池添加少量资源即可。
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
      industryList: [{
        icon: 'jr.png',
        name: '金融'
      }, {
        icon: 'yys.png',
        name: '运营商'
      }, {
        icon: 'qy.png',
        name: '企业'
      }, {
        icon: 'jy.png',
        name: '教育'
      }, {
        icon: 'zf.png',
        name: '政府'
      }, {
        icon: 'yl.png',
        name: '医疗'
      }]
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    goPay () {
      this.$router.push('/pay')
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
  top: 140px;
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
  left: -68px;
  width: 292px;
}
.security-box--right {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 68px;
}
.operate {
  padding: 60px 0 ;
  background: #EBF2FF;
}
.operate-box {
  margin: 0 auto;
  width: 1200px;
  height: 600px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px 2px rgba(114, 114, 114, 0.08);
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
  text-align: center;
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
</style>