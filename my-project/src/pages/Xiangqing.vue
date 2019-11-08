<template>
  <div>
    <div class="title-bar">
      <a class="nav-back">返回</a>
      <h2>坚果 Pro3</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title-bar {
  background: #1d1d1d;
  background-image: linear-gradient(#1d1d1d, #181818);
  height: 50px;
  position: fixed;
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
  .nav-back {
    background: linear-gradient(#131313, #070707);
    color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 12px;
    height: 32px;
    line-height: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ::before {
      background: url("../assets/images/left.png") no-repeat;
      background-size: cover;
      content: " ";
      height: 100%;
      width: 6px;
      position: absolute;
      top: 50%;
      left: 9px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
}
</style>