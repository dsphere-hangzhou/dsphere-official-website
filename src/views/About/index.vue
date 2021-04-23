<template>
  <div class="about">
    <Header />

    <div class="about-box">
      <div class="about-box__text about-box__text-left">
        <div class="about-box__text-title">
          公司简介
        </div>
        <div class="about-box__text-center">
          我们，致力于构建新一代线上办公环境，为企业打造一个安全、高效、低成本的智能化数字工作空间。
          <br />
          <br />
          我们，笃信业务和数据的安全是企业工作空间的坚实底座，抛开安全，一切都是空中楼阁。
          <br />
          <br />
          我们，核心团队来自阿里巴巴等前沿互联网公司，具备过硬的技术实力和丰富的行业经验。
          <br />
          <br />
          我们，拥有业内资深的信息安全专家，愿与您共谱未来安全工作空间的终局蓝图。
          <br />
          <br />
          我们，彼此信任，面朝星辰大海，扬帆起航！
        </div>
      </div>
      <div class="about-box__img">
        <img src="gsjj.png"/>
      </div>
    </div>

    <div class="about-box1">
      <div class="about-box__img about-box__text-right" id="container">
        <!-- <img src="gsjj.png"/> -->
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
        电话：(0571) 88773523
        </p>
        <p>
        电邮：<span>ds@dsphere.cn</span>
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
  },
  mounted() {
    /*eslint-disable*/
    var map = new AMap.Map('container', {
       center:[120.023875,30.289076],
       zoom:16
    });
    var marker = new AMap.Marker({
      position: new AMap.LngLat(120.023875,30.289076),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '数影星球'
    });
    map.add(marker)

    /*eslint-disable*/
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