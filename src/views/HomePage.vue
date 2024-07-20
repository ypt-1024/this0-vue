<template>
  <n-flex vertical>

    <!-- 顶部 -->
    <div>

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

      <!-- 顶部消息栏 -->
      <div class="topbar-message container">
        <n-flex justify="space-between" align="center">

          <!-- 左侧即刻 -->
          <span>
             即刻
            </span>

          <!-- 消息内容 -->
          <span>
            This0-开源Vitepress主题
          </span>

          <!-- 右侧展开图标 -->
          <svg class="icon">
            <use xlink:href="#icon-zhankai-jingguo"></use>
          </svg>
        </n-flex>
      </div>

      <!-- 顶部Banner -->
      <div class="topbar-banner container">
        <br>
        <n-flex justify="start" align="end">

          <!-- 左侧站点信息 -->
          <h1>This0</h1>
        </n-flex>
        <n-flex justify="start" align="stretch">
          <h1>这是站点描述</h1>
        </n-flex>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="container">
      <n-flex justify="space-between">

        <!-- 左边文章列表 -->
        <div class="container-left">

          <!-- 主要分类 -->
          <div class="main-category">
            <n-button type="info">
              推荐
            </n-button>
            <n-button type="tertiary">
              Archlinux
            </n-button>
            <n-button type="tertiary">
              Java
            </n-button>
            <n-button type="tertiary">
              Godot
            </n-button>
            <n-button type="tertiary">
              站点
            </n-button>
          </div>

          <!-- 内容区文章列表——单篇文章 -->
          <n-flex justify="start">

            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
                <!-- 1.文章标题 -->
                <n-flex justify="center">
                  <div class="article-title">
                    【spring MVC】
                  </div>
                </n-flex>
              </div>

              <!-- 文章摘要 -->
              <div class="article-abstract">
                Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                模块。
              </div>

              <!-- 文章发表时间 -->
              <div class="article-publish">
                发布于 2023-06-26
              </div>
            </div>
            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
                <!-- 1.文章标题 -->
                <n-flex justify="center">
                  <div class="article-title">
                    【spring MVC】
                  </div>
                </n-flex>
              </div>

              <!-- 2.文章摘要 -->
              <div class="article-abstract">
                Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                模块。
              </div>

              <!-- 3.文章发表时间 -->
              <div class="article-publish">
                发布于 2023-06-26
              </div>
            </div>
            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
                <!-- 1.文章标题 -->
                <n-flex justify="center">
                  <div class="article-title">
                    【spring MVC】
                  </div>
                </n-flex>
              </div>

              <!-- 2.文章摘要 -->
              <div class="article-abstract">
                Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                模块。
              </div>

              <!-- 3.文章发表时间 -->
              <div class="article-publish">
                发布于 2023-06-26
              </div>
            </div>
            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
                <!-- 1.文章标题 -->
                <n-flex justify="center">
                  <div class="article-title">
                    【spring MVC】
                  </div>
                </n-flex>
              </div>

              <!-- 2.文章摘要 -->
              <div class="article-abstract">
                Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                模块。
              </div>

              <!-- 3.文章发表时间 -->
              <div class="article-publish">
                发布于 2023-06-26
              </div>
            </div>
            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
                <!-- 1.文章标题 -->
                <n-flex justify="center">
                  <div class="article-title">
                    【spring MVC】
                  </div>
                </n-flex>
              </div>

              <!-- 2.文章摘要 -->
              <div class="article-abstract">
                Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                模块。
              </div>

              <!-- 3.文章发表时间 -->
              <div class="article-publish">
                发布于 2023-06-26
              </div>
            </div>
            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
                <!-- 1.文章标题 -->
                <n-flex justify="center">
                  <div class="article-title">
                    【spring MVC】
                  </div>
                </n-flex>
              </div>

              <!-- 2.文章摘要 -->
              <div class="article-abstract">
                Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                模块。
              </div>

              <!-- 3.文章发表时间 -->
              <div class="article-publish">
                发布于 2023-06-26
              </div>
            </div>
            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
                <!-- 1.文章标题 -->
                <n-flex justify="center">
                  <div class="article-title">
                    【spring MVC】
                  </div>
                </n-flex>
              </div>

              <!-- 2.文章摘要 -->
              <div class="article-abstract">
                Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                模块。
              </div>

              <!-- 3.文章发表时间 -->
              <div class="article-publish">
                发布于 2023-06-26
              </div>
            </div>
            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
                <!-- 1.文章标题 -->
                <n-flex justify="center">
                  <div class="article-title">
                    【spring MVC】
                  </div>
                </n-flex>
              </div>

              <!-- 2.文章摘要 -->
              <div class="article-abstract">
                Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                模块。
              </div>

              <!-- 3.文章发表时间 -->
              <div class="article-publish">
                发布于 2023-06-26
              </div>
            </div>

          </n-flex>

          <!-- 分页 -->
          <div class="main-page">
            <n-flex justify="center">
              <n-pagination v-model:page="page" size="large" :page-count="100">
                <template #prev>
                  上一页
                </template>
                <template #next>
                  下一页
                </template>
              </n-pagination>
            </n-flex>
          </div>
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

<script setup>
import {ref} from "vue";
import {NIcon} from "naive-ui";
import {RouterLink} from "vue-router";
import {
  PersonOutline as PersonIcon,
  Book, BuildSharp, PlanetSharp, Bulb
} from "@vicons/ionicons5";

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

const activeKey = ref(null);
</script>
<style lang="scss" scoped>

</style>