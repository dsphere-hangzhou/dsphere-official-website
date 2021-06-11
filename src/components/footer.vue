<template>
  <div class="footer">
      <div class="footer-box">
        <div class="footer-item">
          <img src="logo2.png" style="width: 180px"/>
        </div>
        <div class="footer-item1">

          <div class="footer-item__top">
            <div class="footer-item__top-item">
              <img src="foothome.png"/>
              首页
            </div>
            <div class="footer-item__top-item">
              <img src="footsolution.png"/>
              解决方案
            </div>
            <div class="footer-item__top-item">
              <img src="footask.png"/>
              咨询购买
            </div>
            <div class="footer-item__top-item">
              <img src="footabout.png"/>
              关于我们
            </div>
            <div class="footer-item__top-item">
              <img src="footlogin.png"/>
              企业登录
            </div>
          </div>

          <div class="footer-item__mil">
            通过数影星球，实现高效、安全、智能的线上工作体验
          </div>

          <div class="footer-item__bottom">
            版权所有@2021数影星球（杭州）科技有限公司
            <span>备案号：浙ICP备2020043431号-1</span>
          </div>

        </div>

        <!-- <div class="footer-item">
          <div class="footer-item--title">
            关于我们
          </div>
          <div class="footer-item--center">
            <span @click="goAbout">
              了解数影星球
            </span>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-item--title">
            如何购买
          </div>
          <div class="footer-item--center">
            <span @click="goPay">
              在线咨询
            </span>
            <br />
            <span @click="goPay">
              项目咨询
            </span>
          </div>
        </div> -->

        <!-- <div class="footer-item">
          <div class="footer-item--title">
            关注数影星球
          </div>
          <div class="footer-item--center">
            <a-popover placement="bottom">
              <template slot="content">
                <p><img src="er.png" style="width: 100px"/></p>
              </template>
              <img src="wx.png"/>
            </a-popover>
          </div>
        </div> -->
        <div class="footer-item">
          <img src="er.png" style="width: 100px"/>
        </div>

        

      </div>
      <!-- <div class="footer-bottom">@2021 数影星球（杭州）科技有限公司 版权所有 备案号：浙ICP备2020043431号-1</div> -->
    </div>
</template>

<script>
export default {
  methods: {
    goPay() {
      this.$router.push('/contact_us')
    },
    goAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="less">
 .footer {
  padding: 80px 0 54px;
  background: #F7F7F7;
}
.footer-box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.footer-bottom {
  text-align: center;
}
.footer-item {
  display: inline-block;
}
.footer-item1 {
  display: inline-block;
  margin: 0 150px;
}
.footer-item--title {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 40px;
  color: #333333;
}
.footer-item__top {
  padding: 12px 0;
  color: #011847;
  display: flex;
  border-bottom: 1px solid #011847;
  .footer-item__top-item {
    margin: 0 12px;
  }
  img {
    width: 16px;
    vertical-align: sub;
  }
}
.footer-item__mil {
  margin: 16px 0 24px;
  padding-left: 12px;
  color: #011847;
  font-size: 16px;
}
.footer-item__bottom {
  margin: 16px 0 24px;
  padding-left: 12px;
  color: #011847;
  font-size: 14px;
  span {
    padding-left: 16px;
  }
}
.footer-item--center {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 30px;
  color: #666666;
  img {
    width: 56px;
    height: 56px;
  }
  span {
    cursor: pointer;
  }
}

</style>
