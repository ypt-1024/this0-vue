<template>
  <div class="main-div">

    <!-- 添加文章按钮 -->
    <div class="tools-div">
      <n-button @click="addShow">新增文章</n-button>
    </div>

    <!--- 角色表格数据 -->
    <n-table :single-line="false">
      <tr>
        <th>文章ID</th>
        <th>文章标题</th>
        <th>文章摘要</th>
        <th>发布时间</th>
        <th>操作</th>
      </tr>

      <tbody>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      </tbody>
    </n-table>

  </div>
</template>

<script setup>
import {NButton, useMessage} from "naive-ui";


</script>

<style scoped>

.main-div {
  margin-bottom: 10px;
  background-color: #9a7d7d;
}

.tools-div {
  background-color: #ecc7c7;
}
</style>
