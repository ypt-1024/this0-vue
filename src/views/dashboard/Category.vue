<script setup>

import {NDataTable, NButton, NInput, NSelect, useDialog, useMessage} from "naive-ui";
import {listCategory, addCategory, updateCategory, removeCategoryById} from '@/api/category'
import {deleteArticleById} from "@/api/article.js";

// 使用消息提示功能
const message = useMessage();

const dialog = useDialog();

onMounted(() => {
  getCategoryList()
})

// 创建表格列
const categoryColumns = () => [
  {title: "分类id", key: "cid"},
  {title: "分类名称", key: "cname"},
  {title: "创建时间", key: "createTime"},
  {
    title: "操作",
    key: "actions",

    // 渲染自定义按钮
    render: (row) =>
        [
          h(NButton, {
            size: "small",
            type: "info",
            onClick: () => update(row),
          }, "修改"),
          h(NButton, {
            size: "small",
            type: "error",
            onClick: () => deleteById(row),
          }, "删除"),
        ],
  }
];

// 创建列定义
const columns = categoryColumns();

// 表格数据
let categoryList = ref([])

// 获取文章分类列表
const getCategoryList = async () => {
  const {data} = await listCategory()
  categoryList.value = data
}

// 分页设置
const pagination = true;

//分类数据
const defaultCategory = {
  cid: '',
  cname: '',
}

const category = ref(defaultCategory)

const addOneCategory = async () => {

  const content = () => h(
      'div', null, [
        h(NInput, {
          value: category.value.cname,
          'onUpdate:value': (val) => {
            category.value.cname = val;
          },
          placeholder: '请输入文章标题',
          size: 'large',
          style: {marginBottom: '16px'} // 添加一些底部边距以区分输入框和编辑器
        }),
      ]);
  dialog.create({
    title: "添加文章分类",
    content, // 使用 content 变量
    positiveText: "确定",
    negativeText: "不确定",
    onPositiveClick: async () => {

      const {code} = await addCategory(category.value)
      if (code == 200) {
        message.success("成功添加分类！");
        dialog.destroyAll
        getCategoryList()
      }
    },
    onNegativeClick: () => {
      message.info("放弃添加分类");
    },
    showIcon: false,
    style: {}
  });
}

const update = async (row) => {

  //拿到单篇文章数据
  category.value = row;
  const content = () => h(
      'div', null, [
        h(NInput, {
          value: category.value.cname,
          'onUpdate:value': (val) => {
            category.value.cname = val;
          },
          placeholder: '输入修改后的分类标题',
          size: 'large',
          style: {marginBottom: '16px'} // 添加一些底部边距以区分输入框和编辑器
        }),
      ]);
  dialog.create({
    title: "修改文章分类",
    content,
    positiveText: "确定",
    negativeText: "不确定",
    onPositiveClick: async () => {

      if (category.value.cid) {

        //修改
        const {code} = await updateCategory(category.value)
        if (code == 200) {
          message.success("成功修改分类名称")
          dialog.destroyAll
          getCategoryList()
        }
      } else {

        //新增
        const {code} = await addCategory(category.value)
        if (code == 200) {
          message.success("成功添加分类！");
          dialog.destroyAll
          getCategoryList()
        }
      }
    },
    onNegativeClick: () => {
      message.info("放弃添加分类");
    },
    showIcon: false,
    style: {}
  });
}

const deleteById = async (row) => {
  dialog.warning({
    title: "警告",
    content: "确定删除分类？",
    positiveText: "删除",
    negativeText: "放弃",
    onPositiveClick: async () => {
      try {
        const {code} = await removeCategoryById(row.cid)
        if (code == 200) {
          message.success("成功删除分类");
          dialog.destroyAll;
          getCategoryList()
        }
      } catch {
        message.error("删除失败");
      }
    },
    onNegativeClick: () => {
      message.info("放弃删除");
    }
  });
}
</script>

<template>
  <!-- 分类添加按钮 -->
  <div class="tools-div">
    <n-button type="info" @click="addOneCategory">新增分类</n-button>
  </div>

  <!-- 分类表格数据 -->
  <div class="main-div">
    <n-data-table
        :columns="columns"
        :data="categoryList"
        :pagination="pagination"
        :bordered="false"
    ></n-data-table>
  </div>
</template>

<style scoped lang="scss">
.tools-div {
  margin-top: 20px;
}
</style>