<template>
  <n-flex vertical>

    <!-- 顶部 -->
    <div>

      <!-- 顶部导航 -->
      <div class="topbar-nav container">
        <n-flex justify="space-between" align="center">

          <!-- 左侧Home键 -->
          <RouterLink to="/">
            <svg class="icon" aria-hidden="true">
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
          <svg class="icon" aria-hidden="true">
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
          <svg class="icon" aria-hidden="true">
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

      <!-- 左边文章列表 -->
      <div>

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

        <!-- 内容区文章列表 -->
        <div class="article-list">

          <!-- 单篇文章 -->
          <n-flex justify="start" align="center">
            <div class="main-article">

              <!-- 图片部分 -->
              <div class="articlebg">
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
              </div>

              <!-- 1.文章标题 -->
              <div class="article-title">
                【spring MVC】
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
        </div>

        <!-- 分页 -->
        <div class="main-page">
          <n-flex justify="center" align="center">
            <n-pagination v-model:page="page" :page-count="100"/>
          </n-flex>
        </div>

      </div>
    </div>
  </n-flex>
</template>

<script>
import {defineComponent, h, ref} from "vue";
import {NIcon} from "naive-ui";
import {RouterLink} from "vue-router";
import {
  PersonOutline as PersonIcon,
  Book, BuildSharp, PlanetSharp, Bulb
} from "@vicons/ionicons5";

// 用来渲染图标的函数
function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

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

export default defineComponent({
  setup() {
    return {
      // 菜单
      activeKey: ref(null),
      menuOptions
    };
  }
});
</script>

<style lang="scss" scoped>

</style>