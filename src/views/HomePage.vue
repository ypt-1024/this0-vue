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
  </n-flex>
</template>

<script>
import {defineComponent, h, ref} from "vue";
import {NIcon} from "naive-ui";
import {RouterLink} from "vue-router";
import {
  PersonOutline as PersonIcon,
  Book,BuildSharp,PlanetSharp,Bulb
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
  },{
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