<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    李叁則主页 | Vue全栈 | React全栈 | node全栈
    <div class="footer-link">
      <a href="">李叁則主页</a>
      <a href="">Vue全栈</a>
      <a href="">React全栈</a>
      <a href="">node全栈</a>
    </div>
    <div class="copyright">Copyright ©2021 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
 .footer {
   height: 234px;
   border-top: 4px solid #FF6600;
   background-color:#333;
   color: #999;
   font-size: 16px;
   text-align: center;
   .footer-logo {
     margin-top: 46px;
     margin-bottom: 31px;
     img {
       width: 53px;
       height: 36px;
       margin-bottom: 13px;
     }
  }
    .footer-link {
      a{
        color: #999;
        display: inline-block;
      }
      span{
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
      .copyright {
        .domain {
          color: #FF6600;
        }
      }
  }
</style>
