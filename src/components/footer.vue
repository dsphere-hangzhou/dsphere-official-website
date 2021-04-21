<template>
  <div class="footer">
      <div class="footer-box">

        <div class="footer-item">
          <div class="footer-item--title">
            关于我们
          </div>
          <div class="footer-item--center">
            <span @click="goAbout">
              了解数影星球
            </span>
            <br />
            新闻动态
            <br />
            联系我们
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
            <br />
            邮件
          </div>
        </div>

        <div class="footer-item">
          <div class="footer-item--title">
            关注数影星球
          </div>
          <div class="footer-item--center">
            <!-- <img src="wb.png" style="marginRight: 20px"/> -->
            <a-popover placement="bottom">
              <template slot="content">
                <p><img src="er.png" style="width: 100px"/></p>
              </template>
              <img src="wx.png"/>
            </a-popover>
          </div>
        </div>

      </div>
      <div class="footer-bottom">@2021 数影星球（杭州）科技有限公司 版权所有 备案号：浙ICP备2020043431号</div>
    </div>
</template>

<script>
export default {
  methods: {
    goPay() {
      this.$router.push('/pay')
    },
    goAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="less">
 .footer {
  padding: 80px 0 30px;
  background: #F7F7F7;
}
.footer-box {
  width: 1200px;
  margin: 0 auto 157px;
  display: flex;
}
.footer-bottom {
  text-align: center;
}
.footer-item {
  display: inline-block;
  width: 180px;
}
.footer-item--title {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 40px;
  color: #333333;
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
