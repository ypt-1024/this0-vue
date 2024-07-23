<script setup>
import {ref, onMounted} from 'vue'
import {RouterLink, useRoute, useRouter} from 'vue-router'
import {showArticle} from '@/api/article'

import {MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import {NIcon} from "naive-ui";

// 图标
import {
  PersonOutline as PersonIcon, Book, BuildSharp, PlanetSharp, Bulb
} from "@vicons/ionicons5";

const v3id = 'preview-only';
const scrollElement = document.documentElement;
//获取路由对象
const route = useRoute()

// 文章数据
const articleData = {
  // id: null,
  // title: null,
  // content: '',
  // cid: null,
  // uid: null,
  // createTime: null,
  // updateTime: null,
}
const article = ref(articleData)

//从后端获取文章数据
const getArticle = async () => {

  //TODO 上个页面通过路由传来的参数id
  let id = route.query.id
  const {data} = await showArticle(id)
  article.value = data
}
onMounted(() => getArticle())

// 用来渲染图标的函数
const renderIcon = (icon) => () => h(NIcon, null, {default: () => h(icon)});
const menuOptions = [
  {
    label: "文章",
    key: "dance-dance-dance",
    icon: renderIcon(Book),
    children: [
      {
        label: () => h(RouterLink, {to: "/category-list"}, {default: () => "羊男"}),
        key: "narrator",
        icon: renderIcon(PersonIcon)
      },
      {
        label: "羊男",
        key: "sheep-man",
        icon: renderIcon(PersonIcon)
      }
    ]
  }, {
    label: "工具",
    key: "dance-dance-dance",
    icon: renderIcon(BuildSharp),
    children: [
      {
        label: () => h(RouterLink, {to: "/category-list"}, {default: () => "羊男"}),
        key: "narrator",
        icon: renderIcon(PersonIcon)
      },
      {
        label: "羊男",
        key: "sheep-man",
        icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    label: "站点",
    key: "dance-dance-dance",
    icon: renderIcon(PlanetSharp),
    children: [
      {
        label: () => h(RouterLink, {to: "/category-list"}, {default: () => "羊男"}),
        key: "narrator",
        icon: renderIcon(PersonIcon)
      },
      {
        label: "羊男",
        key: "sheep-man",
        icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    label: "关于",
    key: "dance-dance-dance",
    icon: renderIcon(Bulb),
    children: [
      {
        label: () => h(RouterLink, {to: "/category-list"}, {default: () => "羊男"}),
        key: "narrator",
        icon: renderIcon(PersonIcon)
      },
      {
        label: "羊男",
        key: "sheep-man",
        icon: renderIcon(PersonIcon)
      }
    ]
  },
];
</script>
<template>
  <n-flex vertical>

    <!-- 内容区 -->
    <div class="container">
      <n-flex justify="space-between">

        <!-- 顶部导航 -->
        <div class="topbar-nav container">
          <n-flex justify="space-between">

            <!-- 左侧Home键 -->
            <RouterLink to="/">
              <svg class="icon">
                <use xlink:href="#icon-home"></use>
              </svg>
            </RouterLink>

            <!-- 中间菜单 -->
            <div>
              <n-menu
                  v-model:value="activeKey"
                  mode="horizontal"
                  icon-size="26"
                  :options="menuOptions"
                  responsive
              />
            </div>

            <!-- 右侧搜索键 -->
            <svg class="icon">
              <use xlink:href="#icon-sousuo1"></use>
            </svg>
          </n-flex>
        </div>
        <!-- 左边文章 -->
        <div class="container-left" style="margin-top: 10px">
          <MdPreview :editorId="v3id" :modelValue="article.content"/>
        </div>

        <!-- 右边侧边栏 -->
        <div class="container-right">

          <!-- 站长卡片 -->
          <div class="container-author-info">

            <!-- 头像 -->
            <n-image
                width="245"
                src="/src/assets/images/avatar.svg"
            />

            <!-- 站长信息 -->
            <div class="author-info">

              <!-- 文字和图标 -->
              <n-flex justify="space-between">

                <!-- 左边的文字 -->
                <n-flex vertical>
                  <div style="font-size: 20px ">This0</div>
                  <div style="font-size: 12px">生活明朗，万物可期</div>
                </n-flex>

                <!-- 微信 -->
                <n-flex vertical>
                  <div style="margin-top: 25px;margin-left: 23px">
                    <n-image
                        width="25"
                        src="/src/assets/images/icon/wx.svg"/>
                  </div>
                </n-flex>

                <!-- github -->
                <n-flex vertical>

                  <div style="margin-top: 25px">
                    <n-image
                        width="25"
                        src="/src/assets/images/icon/github.svg"/>
                  </div>
                </n-flex>
              </n-flex>
            </div>
          </div>

          <!-- 文章统计 -->
          <div class="main-article-count">
            <n-flex justify="start">

              <!-- 单个统计卡片 -->
              <div class="count-article">

                <!-- 1.时间 -->
                <div>
                  2023-06-26
                </div>
                <!-- 2.篇数 -->
                <div>
                  3篇
                </div>
              </div>
              <div class="count-article">

                <!-- 1.时间 -->
                <div>
                  2023-06-26
                </div>
                <!-- 2.篇数 -->
                <div>
                  3篇
                </div>
              </div>
              <div class="count-article">

                <!-- 1.时间 -->
                <div>
                  2023-06-26
                </div>
                <!-- 2.篇数 -->
                <div>
                  3篇
                </div>
              </div>
              <div class="count-article">

                <!-- 1.时间 -->
                <div>
                  2023-06-26
                </div>
                <!-- 2.篇数 -->
                <div>
                  3篇
                </div>
              </div>
              <div class="count-article">

                <!-- 1.时间 -->
                <div>
                  2023-06-26
                </div>
                <!-- 2.篇数 -->
                <div>
                  3篇
                </div>
              </div>
              <div class="count-article">

                <!-- 1.时间 -->
                <div>
                  2023-06-26
                </div>
                <!-- 2.篇数 -->
                <div>
                  3篇
                </div>
              </div>
              <div class="count-article">

                <!-- 1.时间 -->
                <div>
                  2023-06-26
                </div>
                <!-- 2.篇数 -->
                <div>
                  3篇
                </div>
              </div>
              <div class="count-article">

                <!-- 1.时间 -->
                <div>
                  2023-06-26
                </div>
                <!-- 2.篇数 -->
                <div>
                  3篇
                </div>
              </div>
            </n-flex>
          </div>

          <!-- 文章标签 -->
          <div class="main-article-tag">
            <n-flex justify="center">
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
              <div
                  style="background-color: #F7F7F5; border: #D3C2A8 1px solid; padding: 5px;border-radius: 10px;margin-right: 10px">
                <n-badge :value="520" :offset="[6, -8]">
                  Java
                </n-badge>
              </div>
            </n-flex>

          </div>

          <!-- 全站统计 -->
          <div class="main-site-count" style="padding: 20px">
            <n-flex>
              <div>
                <n-icon size="25">
                  <svg class="icon">
                    <use xlink:href="#icon-wenzhang"></use>
                  </svg>
                </n-icon>
              </div>
              <div style="font-size: 16px;font-weight: bold">文章总数</div>
              <div style="font-size: 16px;font-weight: bold;margin-left: 50px">5645</div>
            </n-flex>
            <n-flex>
              <div>
                <n-icon size="25">
                  <svg class="icon">
                    <use xlink:href="#icon-fengche"></use>
                  </svg>
                </n-icon>
              </div>
              <div style="font-size: 16px;font-weight: bold">建站天数</div>
              <div style="font-size: 16px;font-weight: bold;margin-left: 50px">5645</div>
            </n-flex>
            <n-flex>
              <div>
                <n-icon size="25">
                  <svg class="icon">
                    <use xlink:href="#icon-liuyanban"></use>
                  </svg>
                </n-icon>
              </div>
              <div style="font-size: 16px;font-weight: bold">全站字数</div>
              <div style="font-size: 16px;font-weight: bold;margin-left: 50px">5645</div>
            </n-flex>
          </div>

        </div>
      </n-flex>
    </div>

    <!-- 页脚 -->
    <div class="container footer">
      <n-flex justify="space-between">

        <!-- 页脚导航 -->
        <div class="footer-group">
          <h2>主题</h2>
          <div>导航</div>
          <div>服务</div>
          <div>协议</div>
          <div>友链</div>
        </div>
        <div class="footer-group">
          <h2>导航</h2>
          <div>导航</div>
          <div>服务</div>
          <div>协议</div>
          <div>友链</div>
        </div>
        <div class="footer-group">
          <h2>服务</h2>
          <div>主题</div>
          <div>导航</div>
          <div>协议</div>
          <div>友链</div>
        </div>
        <div class="footer-group">
          <h2>协议</h2>
          <div>主题</div>
          <div>导航</div>
          <div>服务</div>
          <div>友链</div>
        </div>
        <div class="footer-group">
          <h2>友链</h2>
          <div>主题</div>
          <div>导航</div>
          <div>服务</div>
          <div>协议</div>
        </div>
      </n-flex>

      <!-- 品牌图标 -->
      <n-flex justify="center">
        <div class="shields">
          <a target="_blank" href="https://this0.com/" title="主题采用This0">
            <img src="/src/assets/images/icon/Theme-This0.svg" alt="">
          </a>
        </div>
        <div class="shields">
          <a target="_blank" href="https://shields.io/" title="框架采用vitepress"> <img
              src="/src/assets/images/icon/Frame-Vitepress.svg" alt="">
          </a>
        </div>
        <div class="shields">
          <img src="/src/assets/images/icon/Copyright-BY--NC--SA_4.0.svg" alt="">
        </div>
        <div class="shields">
          <a target="_blank" href="https://github.com/" title="使用github托管代码">
            <img src="/src/assets/images/icon/Source-Github.svg" alt="">
          </a>
        </div>
        <div class="shields">
          <a target="_blank" href="https://shields.io/" title="徽标使用shields制作"> <img
              src="/src/assets/images/icon/Icon-Shields.svg" alt=""></a>
        </div>
      </n-flex>

      <!-- 备案号 -->
      <n-flex justify="center">
        <div class="shields">
          <a target="_blank" href="https://this0.com/" title="主题采用This0">
            <img src="/src/assets/images/icon/蜀ICP备-2023013130号.svg" alt="">
          </a>
        </div>
      </n-flex>
    </div>
  </n-flex>
</template>
<style>
</style>