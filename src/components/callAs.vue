<template>
  <div class="callAs">
    <div class="callAs-logo" @click="$router.push('/')">
      <img src="logo3.png"/>
    </div>
    <div class="callAs-center">
      <img src="callas.png" class="callAs-center--no"/>
      <img src="callAss.png" class="callAs-center--active"/>
      <p>联系</p>
      <p>我们</p>
    </div>
    <div class="callAs-top" @click="goTop">
      <img src="calltopp.png" class="callAs-top--no"/>
      <img src="calltop.png" class="callAs-top--active"/>
    </div>

    <div class="callAs-pop">
      <div class="callAs-pop--right"></div>
      <div class="callAs-pop--item">
        <img src="phone1.png"/>
        (0571)88773523
      </div>
      <div class="callAs-pop--item">
        <img src="email1.png"/>
        ds@dsphere.cn
      </div>
      <div class="callAs-pop--item">
        <img src="email1.png"/>
        微信咨询
      </div>
      <img src="er.png" class="callAs-pop--er"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style lang="less">
  .callAs{
    position: fixed;
    top: 50%;
    right: 0;
    width: 78px;
    height: 288px;
    padding: 12px 18px 12px 8px;
    border: 2px solid #a6bcf5;
    box-shadow: 0px 8px 14px 0px rgba(7, 86, 240, 0.08);
    border-radius: 15px 0 0 15px;
    background: #fff;
    z-index: 1;
  }
  .callAs-logo {
    padding: 16px 0 18px;
    text-align: center;
    border-bottom: 2px solid #a6bcf5;
    img {
      width: 38px;
    }
  }
  .callAs-center {
    padding: 20px 0 10px;
    text-align: center;
    border-bottom: 2px solid #a6bcf5;
    cursor: pointer;
    p {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: #0756F0;
      line-height: 18px;
      text-shadow: 0px 8px 14px rgba(7, 86, 240, 0.2);
    }
    img {
      margin-bottom: 8px;
      width: 38px;
      height: 38px;
    }
    .callAs-center--active {
      display: none;
    }
    &:hover {
      .callAs-center--no {
        display: none;
      }
      .callAs-center--active {
      display: inline;
      }
    }
  }
  .callAs-center:hover + .callAs-top + .callAs-pop {
    display: block;
  }
  .callAs-top {
    padding: 20px 0;
    text-align: center;
    cursor: pointer;
    img {
      width: 38px;
    }
    &:hover {
      .callAs-top--no {
          display: none;
      }
      .callAs-top--active {
        display: inline;
      }
    }
    .callAs-top--no {
      &:hover {
        display: none;
      }
    }
    .callAs-top--active {
      display: none;
      &:hover {
        display: inline;
      }
    }
  }
  .callAs-pop {
    display: none;
    position: absolute;
    right: 100px;
    top: 100px;
    padding: 20px;
    width: 161px;
    height: 242px;
    background: #FFFFFF;
    border: 2px solid #a6bcf5;
    box-shadow: 0px 8px 14px 0px rgba(7, 86, 240, 0.08);
    border-radius: 18px;
  }
  .callAs-pop--right {
    position: absolute;
    right: -11px;
    top: 30px;
    border-right: 2px solid #a6bcf5 ;
    border-bottom: 2px solid #a6bcf5 ;
    height: 20px;
    width: 20px;
    transform: rotate(-45deg);
    background: #fff;
  }
  .callAs-pop--item {
    margin-bottom: 11px;
    font-size: 12px;
    font-weight: normal;
    color: #011847;
    line-height: 17px;
    img {
      width: 12px;
    }
  }
  .callAs-pop--er {
    width: 100%;
  }
</style>