<template>
  <div class="about">
    <Header />

    <div class="about-box">
      <div class="about-box__text about-box__text-left">
        <div class="about-box__text-title">
          公司简介
        </div>
        <div class="about-box__text-center">
          我们是一家初创公司，核心团队来自阿里巴巴和网易，有过硬的技术实力和丰富的创业经验。我们致力于构建新一代的云办公环境，为企业打造一个安全、高效、低成本的智能化数字工作空间。
          <br />
          <br />
          我们位于未来科技城核心地段，距阿里西溪园区1公里，地铁5号线直达，交通十分便利。我们信仰“双成文化”，成熟的成年人文化。大家都知道自己该做什么，能做什么，明确自己的定位。技术修炼内功，打磨产品，创造产品；业务沟通交流，获取市场，铺设渠道。这里没有 PUA，同一个问题我们更愿意选择用善意的视角去解读，因为我们彼此信任。这里没有繁文缛节，来去自由，我们只为过程鼓掌，为结果买单。
          <br />
          <br />
          资源到位，团队靠谱，全新理念，绝佳赛道，我们已然扬帆起航，我们的征途将是星辰大海！
        </div>
      </div>
      <div class="about-box__img">
        <img src="gsjj.png"/>
      </div>
    </div>

    <div class="about-box1">
      <div class="about-box__img about-box__text-right">
        <img src="gsjj.png"/>
      </div>
      <div class="about-box1__text">
        <div class="about-box__text-title">
          联系方式
        </div>
        <p>
          地址：杭州市余杭区贝达梦工场D座610室
        </p>
        <p>
        邮政编码：311100
        </p>
        <p>
        电话：+86 106521 6500
        </p>
        <p>
        传真：+86 106521 6500
        </p>
        <p>
        电邮：<span>chinaifo@citrix.com</span>
        </p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
.about-title {
  height: 70px;
  width: 100%;
  background: #fff;
}
.about-title__box {
  margin: 0 auto;
  width: 1200px;
  height: 70px;
  display: flex;
  align-items: center;
}
.about-title__box-logo {
  width: 120px;
}
.about-title__box-menu {
  display: flex;
  font-size: 16px;
}
.about-title__box-menu__item {
  width: 90px;
  text-align: center;
  color: #666666;
}
.about-title__seach {
  flex: 1;
  text-align: right;
}
.about-title__call {
  margin: 0 60px;
}
.about-box {
  margin: 82px auto 0;
  display: flex;
  width: 1200px;
}
.about-box1 {
  margin: 82px auto 100px;
  display: flex;
  width: 1200px;
  box-shadow: 0 0 10px #eee;
}
.about-box__img {
  width: 600px;
  height: 400px;
  img {
    width: 600px;
  }
}
.about-box__text {
  width: 600px;
  span {
    color: #4A85F9;
  }
}
.about-box1__text {
  width: 600px;
  padding: 104px 0 0;
  span {
    color: #4A85F9;
  }
  p {
    margin-bottom: 3px;
    font-size: 16px;
    font-weight: 400;
    color: #666666;
  }
}
.about-box__text-title {
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 500;
  color: #333333;
}
.about-box__text-center {
  font-size: 16px;
  font-weight: 400;
  color: #666666;
}
.about-box__text-left {
  margin-right: 48px;
}
.about-box__text-right {
  margin-right: 48px;
}
</style>