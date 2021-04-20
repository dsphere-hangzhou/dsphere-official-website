<template>
  <div class="pay">
    <Header />

    <div class="pay-banner">
      <img src="banner1.png"/>
      <div class="pay-banner__box">
        <div class="pay-banner__box-title">
          立即预约数影星球专家主导演示
        </div>
        <p>探索全新工作方式，了解更加安全,高效的数字化工作空间，</p>
        <p>获取为您量身定制的行业解决方案和个性化建议。</p>
      </div>
    </div>

    <div class="pay-introduce">
      <div class="pay-introduce-top">
        <img src="dot.png"/>
      </div>
      <div class="pay-introduce--box">
        <div class="pay-introduce--box-title">
          填写表单，我们将第一时间与您取得联系
        </div>
        <div class="pay-introduce--box-form">
          <div class="pay-introduce--box-form__title">
            姓名<span>*</span>
          </div>
          <div class="pay-introduce--box-form__input">
            <a-input v-model="form.name" />
          </div>
          <div class="pay-introduce--box-form__ps">
            <span v-if="showName">请输入姓名</span>
          </div>

          <div class="pay-introduce--box-form__title">
            电话<span>*</span>
          </div>
          <div class="pay-introduce--box-form__input">
            <a-input v-model="form.phone" />
          </div>
          <div class="pay-introduce--box-form__ps">
            <span v-if="showPhone">请输入有效电话</span>
          </div>

          <div class="pay-introduce--box-form__title">
            邮箱<span>*</span>
          </div>
          <div class="pay-introduce--box-form__input">
            <a-input v-model="form.email" />
          </div>
          <div class="pay-introduce--box-form__ps">
            <span v-if="showEmail">请输入有效邮箱</span>
          </div>

          <div class="pay-introduce--box-form__title">
            公司<span>*</span>
          </div>
          <div class="pay-introduce--box-form__input">
            <a-input v-model="form.company" />
          </div>
          <div class="pay-introduce--box-form__ps">
            <span v-if="showCompany">请输入公司</span>
            
          </div>

          <div class="pay-introduce--box-form__title">
            职务<span>*</span>
          </div>
          <div class="pay-introduce--box-form__input">
            <a-input v-model="form.position" />
          </div>
          <div class="pay-introduce--box-form__ps">
            <span v-if="showPosition">请选择职务</span>
            
          </div>

          <div class="pay-introduce--box-form__title">
            行业<span>*</span>
          </div>
          <div class="pay-introduce--box-form__input">
            <a-input v-model="form.business" />
          </div>
          <div class="pay-introduce--box-form__ps">
            <span v-if="showBusiness">请输入行业</span>
            
          </div>

          <div class="pay-introduce--box-form__title">
            项目需求概述（可选）
          </div>
          <div class="pay-introduce--box-form__input">
            <a-textarea
              :auto-size="{ minRows: 3, maxRows: 5 }"
              v-model="form.note"
            />
          </div>

          <a-button type="primary" block size="large" class="pay-button" @click="getAxios">
            提交
          </a-button>
        </div>
      </div>
    </div>

    <div class="pay-contact">
      <div class="pay-contact__title">
        在线沟通
      </div>
      <div class="pay-contact__box">
        <div class="pay-contact__box-item">
          <img src="QQ.png"/>
          <p>QQ</p>
          <p >123456789<a-icon type="copy" class="pay-copy" @click="copy" /></p>
        </div>
         <div class="pay-contact__box-item">
          <div class="pay-contact__box-item-right">
            <img src="gx.png"/>
            <img src="er.png" class="pay-contact__box-item-right__er"/>
          </div>
          <img src="wx.png"/>
          <p>微信公众号</p>
        </div>
      </div>
    </div>
    <textarea id="复制复制" style="display: none">123456789</textarea>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

import axios from 'axios'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        company: "",
        position: "",
        business: "",
        note: ""
      },
      showName: false,
      showPhone: false,
      showEmail: false,
      showCompany: false,
      showPosition: false,
      showBusiness: false,
    }
  },
  methods: {
    copy () {
      var Url2=document.getElementById("复制复制");
      Url2.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.$message.success('复制成功')
    },
    getAxios() {
      let isreturn = false
      if (!this.form.name) {
        this.showName = true
        isreturn = true
      } else {
        this.showName = false
      }
      if (!this.form.phone) {
        this.showPhone = true
        isreturn = true
      } else {
        this.showPhone = false
      }
      if (!this.form.email) {
        this.showEmail = true
        isreturn = true
      } else {
        this.showEmail = false
      }
      if (!this.form.company) {
        this.showCompany = true
        isreturn = true
      } else {
        this.showCompany = false
      }
      if (!this.form.position) {
        this.showPosition = true
        isreturn = true
      } else {
        this.showPosition = false
      }
      if (!this.form.business) {
        this.showBusiness = true
        isreturn = true
      } else {
        this.showBusiness = false
      }
      if (isreturn) return
      axios.post('http://192.168.98.24:9008/api/v1/client/commit', this.form).then(res => {
        console.log(res.data)
        if (res.data.data) {
          this.$message.success('提交成功')
          this.form = {
            name: "",
            phone: "",
            email: "",
            company: "",
            position: "",
            business: "",
            note: ""
          }
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  }
}
</script>

<style lang="less">

.pay-banner {
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
}
.pay-banner__box {
  position: absolute;
  top: 140px;
  left: 50%;
  width: 1200px;
  transform: translate( -50%, 0);
  p {
    margin-bottom: 15px;
    font-size: 26px;
    color: #666666;
    line-height: 20px;
  }
}
.pay-banner__box-title {
  margin-bottom: 30px;
  font-size: 46px;
  font-weight: bold;
  color: #333333;
  line-height: 30px;
}
.pay-banner__box--buttton {
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
.pay-introduce {
  width: 1200px;
  margin: 50px auto 100px;
}
.pay-introduce-top {
  margin-left: 60px;
  img {
    width: 86px;
  }
}
.pay-introduce--box {
  padding: 60px 200px;
  box-shadow: 0 0 10px #eee;
}
.pay-introduce--box-title {
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  color: #333333;
}
.pay-introduce--box-form {
  width: 560px;
  margin: 50px auto 0;
  font-size: 18px;
}
.pay-introduce--box-form__title {
  line-height: 30px;
  color: #333333;
  span {
    color: #F63840;
  }
}
.pay-introduce--box-form__ps {
  height: 20px;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  color: #F63840;
}
.pay-button {
  margin-top: 40px;
}
.pay-contact {
  width: 800px;
  margin: 100px auto;
}
.pay-contact__title {
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  color: #333333;
}
.pay-contact__box {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.pay-contact__box-item {
  position: relative;
  width: 300px;
  padding: 82px;
  box-shadow: 0 0 10px #eee;
  text-align: center;
  img {
    width: 82px;
  }
  p {
    margin: 5px 0 0 ;
    font-size: 18px;
  }
}
.pay-contact__box-item-right {
  position: absolute;
  top: 0;
  right: 0;
  &:hover .pay-contact__box-item-right__er{
    display: inline;
  }
  img {
    width: 100px;
  }
}
.pay-contact__box-item-right__er {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  display: none;;
}
.pay-copy {
  cursor: pointer;
  margin-left: 5px;
}
</style>
