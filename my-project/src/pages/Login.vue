<template>
  <div class="wrapper">
    <div class="title-bar">
      <p class="close">X</p>
      <h2>短信验证码登录</h2>
    </div>
    <div class="content">
      <ul class="common-form">
        <li class="country-region">
          <span class="icon"></span>
          <span class="cr">国家和地区</span>
          <span role="button" class="country ng-binding" title="中国">中国</span>
        </li>
        <li class="username">
          <span class="icon">
            <i>手机号</i>
          </span>
          <span class="ccc ng-binding" ng-bind="ccc">86</span>
          <input type="text" placeholder="手机号" name="username" />
        </li>

        <li class="verification">
          <input type="text" placeholder="短信验证码" />
          <button>获取验证码</button>
        </li>

        <div class="btn btn-primary disabled">
          <a role="button">登录</a>
        </div>
      </ul>

      <p>
        <span class="registercloud">未注册的手机号验证后将自动注册</span>
        <a href="###" class="toLogin">账号密码登录</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.wrapper {
  padding: s(14.5) s(12.5) 0;
  background-image: url("../assets/images/bg-layout.png");
  min-width: inherit;
  height: 100%;
  min-height: 400px;
}
.title-bar {
  background: #1d1d1d;
  background-image: linear-gradient(#1d1d1d, #181818);
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 199;
  h2 {
    color: #fff;
    font-size: 18px;
    line-height: 20px;
    padding: 16px 0 0;
    font-weight: bolder;
    text-align: center;
    position: absolute;
    top: 0;
    left: 60px;
    right: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.content {
  margin: 14px 12px 0;
}
.common-form {
  list-style: none;
  .country-region {
    background-color: #fff;
    margin: 0 0 12px;
    overflow: hidden;
    line-height: 33px;
    height: 46px;
    width: 336px;
    opacity: 1 !important;
    .icon {
      background: url("../assets/images/bg-white.png") repeat-x;
      border-radius: 6px 0 0 6px;
      border-right: 1px solid #d7d7d7;
      width: 32px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .cr {
      position: absolute;
      left: 10px;
      line-height: 44px;
      display: inline-block;
      text-align: center;
      font-size: 16px;
    }
    .country {
      position: absolute;
      right: 10px;
      font-size: 15px;
      line-height: 44px;
      display: inline-block;
      max-width: 76px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-right: 20px;
      text-align: right;
      background-image: url("../assets/images/jiantou.png");
      background-size: auto 9px;
      background-repeat: no-repeat;
      background-position: right center;
      cursor: pointer;
      z-index: 100;
    }
  }
}
</style>