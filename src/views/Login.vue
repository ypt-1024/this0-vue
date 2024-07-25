<script setup>

import Parallax from 'parallax-js';

let parallaxInstance = null;
onMounted(() => {

  const sceneElement = document.getElementById('scene');
  if (sceneElement) {
    parallaxInstance = new Parallax(sceneElement, {
      relativeInput: true,
      clipRelativeInput: false,
      hoverOnly: false
    });
  }

  if (signInBtn.value && signUpBtn.value && container.value) {
    signInBtn.value.addEventListener('click', () => {
      container.value.classList.remove('panel-active');
    });

    signUpBtn.value.addEventListener('click', () => {
      container.value.classList.add('panel-active');
    });
  }
});
import {onMounted, ref} from 'vue';

const signInBtn = ref(null);
const signUpBtn = ref(null);
const container = ref(null);


</script>
<template>
  <div class="wrapper">

    <!-- 视差效果容器-->
    <div class="parallax-wrapper">

      <!-- 定义各个图层 -->
      <div id="scene">

        <!-- 图层1 纯黑色背景-->
        <div class="layer">
          <img src="@/assets/images/icon/black-ground.svg" alt="">
        </div>

        <!-- 图层2 深蓝色镂空-->
        <div class="layer" data-depth="0.1">
          <img src="@/assets/images/icon/blue-ground.svg" alt="">
        </div>

        <!-- 图层3 浅蓝色镂空-->
        <div class="layer" data-depth="0.2">
          <img src="../assets/images/blue2.svg" alt="">
        </div>

        <!-- 图层4 更浅蓝色的镂空-->
        <div class="layer" data-depth="0.5">
          <img src="../assets/images/blue3.svg" alt="">
        </div>

        <!-- 图层5 最浅的蓝色镂空-->
        <div class="layer" data-depth="0.7">
          <img src="../assets/images/blue4.svg" alt="">
        </div>

        <!-- 图层6 白色镂空-->
        <div class="layer layer-mask" data-depth="0.9">
          <img src="../assets/images/white.svg" alt="">
        </div>

        <!-- 图层7 金星-->
        <div class="layer" data-depth="0.4">
          <img class="Venus" src="@/assets/images/Venus.svg" alt="">
        </div>

        <!-- 图层8 水星-->
        <div class="layer" data-depth="0.8">
          <img class="mercurio" src="@/assets/images/mercurio.svg" alt="">
        </div>

        <!-- 图层9 水星-->
        <div class="layer" data-depth="0.6">
          <img class="Jupiter" src="@/assets/images/Jupiter.svg" alt="">
        </div>

        <!-- 图层10 太空人-->
        <div class="layer" data-depth="0.5">
          <img class="astronaut" src="../assets/images/astronaut.svg" alt="">
        </div>
      </div>
    </div>

    <!-- 表单 -->
    <div class="form-wrapper">
      <div class="container" ref="container">
        <div class="formbox register" ref="registerFormBox">

          <!-- 注册表单内容 -->
          <n-form class="form" id="form1">
            <h2 class="title">注册</h2>
            <input type="text"
                   placeholder="用户名" class="input"/>
            <input type="email"
                   placeholder="邮箱" class="input"/>
            <input type="password"
                   placeholder="密码" class="input"/>
            <botton class="btn">注册</botton>
          </n-form>
        </div>

        <div class="formbox login" ref="loginFormBox">

          <!-- 登录表单内容 -->
          <n-form class="form" id="form2">
            <h2 class="title">登录</h2>
            <input type="email"
                   placeholder="邮箱" class="input"/>
            <input type="password"
                   placeholder="密码" class="input"/>
            <a href="#" class="link">忘记密码</a>
            <botton class="btn">登录</botton>
          </n-form>
        </div>

        <div class="overlay-box" ref="overlayBox">
          <div class="overlay">
            <div class="panel over-left">
              <button class="btn" id="signIn" ref="signInBtn">已有账号？立即登录</button>
            </div>
            <div class="panel over-right">
              <button class="btn" id="signup" ref="signUpBtn">无账号？立即登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 30px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.wrapper .parallax-wrapper {
  width: 100vw;
  height: 125%;
}

.wrapper .parallax-wrapper #scene {
  position: relative;
  left: -15%;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.wrapper .parallax-wrapper #scene .layer {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}

.wrapper .parallax-wrapper #scene .layer svg {
  position: absolute;
  width: 99%;
  height: 99%;
  left: 0;
  top: 0;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
}

.wrapper .parallax-wrapper #scene .layer svg::before {
  content: "";
  display: block;
  height: 110%;
  /* 调整为您需要的宽度 */
  border-right: 80px solid #FFF;
  /* 创建L型的左下部分 */
  position: absolute;
  top: -5%;
  right: -125px;
}

.wrapper .parallax-wrapper #scene .layer .mercurio {
  position: absolute;
  left: 45%;
  top: 68%;
}

.wrapper .parallax-wrapper #scene .layer .Jupiter {
  position: absolute;
  left: 32%;
  top: 40%;
}

.wrapper .parallax-wrapper #scene .layer .Venus {
  position: absolute;
  left: 63%;
  top: 18%;
}

.wrapper .parallax-wrapper #scene .layer .astronaut {
  width: 800px;
  position: absolute;
  left: 50%;
  top: 30%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.wrapper .parallax-wrapper #scene .layer-mask::before {
  content: "";
  display: block;
  width: 125%;
  height: 125%;
  position: fixed !important;
  left: -10% !important;
  top: -15% !important;
  z-index: 1;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), color-stop(4%, #fff), color-stop(4%, transparent), color-stop(95%, transparent), color-stop(95%, #fff), to(#fff)), -webkit-gradient(linear, left top, right top, from(#fff), color-stop(15%, #fff), color-stop(15%, transparent), color-stop(88%, transparent), color-stop(88%, #fff), to(#fff)), -webkit-gradient(linear, left top, left bottom, from(#fff), color-stop(15%, #fff), color-stop(15%, transparent), color-stop(88%, transparent), color-stop(88%, #fff), to(#fff));
  background-image: linear-gradient(#fff, #fff 4%, transparent 4%, transparent 95%, #fff 95%, #fff 100%), linear-gradient(to right, #fff, #fff 15%, transparent 15%, transparent 88%, #fff 88%, #fff 100%), linear-gradient(to bottom, #fff, #fff 15%, transparent 15%, transparent 88%, #fff 88%, #fff 100%);
}

@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}


.wrapper .form-wrapper {
  width: 800px;
  position: absolute;
  right: 7%;
  top: 50%;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
}


.container {
  width: 100%;
  max-width: 785px;
  height: 420px;
  /* 相对定位 */
  position: relative;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  /* 阴影 */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}


.formbox {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
}

.login {
  left: 0;
  width: 50%;
  z-index: 2;
}

.register {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 2;
}

.form {
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
}

.title {
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
}

.input {
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;

}

.link {
  color: #333;
  font-size: 16px;
  margin: 1.5rem 0;
  text-decoration: none;
}

.btn {
  background-color: #095c91;
  background-image: linear-gradient(
      0deg, #095c91 0%, #0393a3 74%);
  border-radius: 5px;
  border: none;
  color: #e9e9e9;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 0ms ease-in;
}

.form > .btn {
  margin-top: 1.5rem;

}

.btn:active {
  transform: scale(0.95);
}

.overlay-box {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.25);
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.panel {
  width: 50%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

}

.over-left {
  transform: translateX(-20%);
}

.over-right {
  right: 0;
  transform: translateX(0%);
}

.panel-active .login {
  transform: translateX(100%);
}

.panel-active .register {
  opacity: 1;
  transform: translateX(100%);
  z-index: 3;
}

.panel-active .overlay-box {
  transform: translateX(-100%);
}

.panel-active .overlay {
  transform: translateX(50%);
}

.panel-active .overlay-left {
  transform: translateX(0);
}

.panel-active .overlay-right {
  transform: translateX(20%);
}


</style>