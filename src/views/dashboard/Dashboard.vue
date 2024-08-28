<template>



  <!--  总面板-->
  <div class="main-panel">

    <n-flex justify="space-between">

    <!--    菜单面板-->
    <div class="menus" >

      <!--     后台banner-->
      <RouterLink to="/">
        <svg class="icon">
          <use xlink:href="#icon-home"></use>
        </svg>
      </RouterLink>

      <!--      侧边栏菜单-->
      <div v-for="(menu, index) in menus" @click="toPage(menu)">
        {{ menu.name }}
      </div>
    </div>

    <!--    后台子页面路由-->
    <div style=" width: 85%">
      <router-view></router-view>
    </div>
    </n-flex>
  </div>


</template>

<script setup>
import {ref, reactive, inject, onMounted, computed} from 'vue'
import {useRouter, useRoute, RouterLink} from 'vue-router'
import cookie from 'js-cookie'

const router = useRouter()
const route = useRoute()

// 分类列表
const adminMenus = [
  {name: '文章管理', href: '/dashboard/article'},
  {name: '分类管理', href: '/dashboard/category'},
  {name: '用户中心', href: '/dashboard/user'},
  {name: '退出', href: 'logout'},
]
const menus = ref(adminMenus)

const name = ref(null)

onMounted(() => {
  getName()
})

// 从cookie获取用户名
const getName = () => {
  name.value = cookie.get('username')
  if (!name.value) {
    router.push("/login")
  }
}

// 后台菜单跳转与退出
const toPage = (menu) => {
  if (menu.href == 'logout') {
    router.push('/login')
  } else {
    let paths = menu.href
    router.push(paths)
  }
}
</script>

<style lang="scss" scoped>

  //主面板
.main-panel {
  background-color: #EDECEA;
  font-size: large;
  font-weight: bold;
}

//侧边菜单
.menus {
  padding-top: 20px;
  border-radius: 10px;
  line-height: 55px;
  text-align: center;
  width: 13%;
  background-color: #F7F7F5;
  //border-right: 2px solid #dadada;
  cursor: pointer;
}


</style>
