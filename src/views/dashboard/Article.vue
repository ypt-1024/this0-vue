<template>


  <!-- 添加文章按钮 -->
  <div class="tools-div">
    <n-button @click="addShow" type="info">新增文章</n-button>
  </div>

  <!-- 表格数据 -->
  <div class="main-div">
    <n-data-table
        :columns="columns"
        :data="list"
        :pagination="pagination"
        :bordered="false"
    ></n-data-table>
  </div>
</template>

<script setup>
import {MdPreview, MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/preview.css';
import 'md-editor-v3/lib/style.css';
import {useDialog} from "naive-ui";
import {NButton, NInput, NSelect, NDataTable, useMessage} from "naive-ui";
import cookie from 'js-cookie'
import {
  listArticleByUid, showArticle, updataArticleById, insertArticle,
  deleteArticleById,
} from '@/api/article'
import {listCategory} from '@/api/category'

const dialog = useDialog();
const v3id = 'v3id-2'; // 仅预览id
const v3id3 = 'v3id-3'; // 编辑器id

const show = async (row) => {

  //拿到单篇文章数据
  const {data} = await showArticle(row.id)
  article.value = data

  // 渲染内容
  const content = () => h(MdPreview, {editorId: v3id, modelValue: article.value.content});

  dialog.create({
    title: article.value.title,
    content, // 使用 content 变量
    showIcon: false,
    style: "width:60%"
  });
};

// 创建表格列的函数
const articleColumns = () => [
  {title: "文章id", key: "id"},
  {title: "文章标题", key: "title"},
  {
    title: "文章分类", key: "cid", render: (row) => {

      // 查找 cid 对应的分类名称
      const category = categoryList.value.find(item => item.value === row.cid);
      return h('span', null, category ? category.label : '未知分类');
    },
  },
  {title: "文章摘要", key: "introduction"},
  {title: "发布时间", key: "updateTime"},
  {
    title: "Action",
    key: "actions",

    // 渲染自定义按钮
    render: (row) =>
        [
          h(NButton, {
            size: "small",
            type: "info",
            onClick: () => show(row),
          }, "查看"),
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


let list = ref([])

// 定义表格数据模型
const defaultForm = {
  id: '',
  cid: '',
  title: '',
}
const article = ref(defaultForm)

//1.查询所有
const getArticleList = async () => {

  //1.获取uid
  let uid = cookie.get(`uid`)

  //2.uid作为条件发送异步请求，得到数据，解构
  const {data} = await listArticleByUid(uid)

  //3.赋值给表格绑定的list集合
  list.value = data
}

// 使用消息提示功能
const message = useMessage();

// 创建列定义
const columns = articleColumns();

// 分页设置
const pagination = true;
onMounted(() => {
  getArticleList()
  getCategoryList()
})

// 获取文章分类列表
const categoryList = ref([])
const getCategoryList = async () => {
  const {data} = await listCategory()
  categoryList.value = data.map(item => ({
    label: item.cname,
    value: item.cid
  }))
}

//3.修改文章之前，先要展示要修改的文章
//同样是单个查询，不过用来显示的组件不一样
const update = async (row) => {

  //拿到单篇文章数据
  const {data} = await showArticle(row.id)
  article.value = data

  //渲染编辑器内容
  const content = () => h(
      'div', null, [
        h(NInput, {
          value: article.value.title,
          'onUpdate:value': (val) => {
            article.value.title = val;
          },
          placeholder: '请输入文章标题',
          size: 'large',
          style: {marginBottom: '16px'} // 添加一些底部边距以区分输入框和编辑器
        }),
        h(NInput, {
          value: article.value.introduction,
          'onUpdate:value': (val) => {
            article.value.introduction = val;
          },
          placeholder: '请输入文章简介',
          size: 'large',
          style: {marginBottom: '16px'} // 添加一些底部边距以区分输入框和编辑器
        }),
        h(NSelect, {
          value: article.value.category,
          options: categoryList.value,
          'onUpdate:value': (val) => {
            article.value.cid = val;
          },
          placeholder: '修改文章分类',
          size: 'large',
          style: {marginBottom: '16px'}
        }),

        h(
            MdEditor, {
              editorId: v3id3, modelValue: article.value.content,

              //提交事件
              onSave: submit,

              //这里绑定一个 onInput 事件处理器，监听输入值
              'onUpdate:modelValue': (val) => {
                article.value.content = val;
              }
            }
        )
      ]);

  dialog.create({
    title: article.value.title,
    content, // 使用 content 变量
    showIcon: false,
    style: {
      width: '1546px',
      height: '80vh', // 设置高度为视口高度的80%
      maxWidth: 'calc(100vw - 32px)',
      maxHeight: 'calc(100vh - 128px)',
      overflowY: 'auto'
    }
  });
}

//4.修改 或 新增
const submit = async () => {

  //根据article的id做判断即可
  if (article.value.id) {
    const {code} = await updataArticleById(article.value)
    if (code == 200) {
      message.success("修改文章成功");
      getArticleList()
    }
  } else {

    //从cookie获得uid，新增文章
    const uid = cookie.get('uid')
    article.value.uid = uid
    const {code} = await insertArticle(article.value)
    if (code == 200) {
      message.success("添加文章成功")
      getArticleList()
    }
  }
}

const addShow = async () => {

  //渲染编辑器内容
  const content = () => h(
      'div', null, [
        h(NInput, {
          value: article.value.title,
          'onUpdate:value': (val) => {
            article.value.title = val;
          },
          placeholder: '请输入文章标题',
          size: 'large',
          style: {marginBottom: '16px'} // 添加一些底部边距以区分输入框和编辑器
        }),
        h(NInput, {
          value: article.value.introduction,
          'onUpdate:value': (val) => {
            article.value.introduction = val;
          },
          placeholder: '请输入文章简介',
          size: 'large',
          style: {marginBottom: '16px'} // 添加一些底部边距以区分输入框和编辑器
        }),
        h(NSelect, {
          value: article.value.category,
          options: categoryList.value,
          'onUpdate:value': (val) => {
            article.value.cid = val;
          },
          placeholder: '选择文章分类',
          size: 'large',
          style: {marginBottom: '16px'}
        }),

        h(
            MdEditor, {
              editorId: v3id3, modelValue: article.value.content,

              //提交事件
              onSave: submit,

              //这里绑定一个 onInput 事件处理器，监听输入值
              'onUpdate:modelValue': (val) => {
                article.value.content = val;
              }
            }
        )
      ]);

  dialog.create({
    title: article.value.title,
    content, // 使用 content 变量
    showIcon: false,
    style: {
      width: '1546px',
      height: '80vh', // 设置高度为视口高度的80%
      maxWidth: 'calc(100vw - 32px)',
      maxHeight: 'calc(100vh - 128px)',
      overflowY: 'auto'
    }
  });
}

//6,删除
const deleteById = async (row) => {
  dialog.warning({
    title: "警告",
    content: "确定删除文章？",
    positiveText: "删除",
    negativeText: "放弃",
    onPositiveClick: async () => {
      try {
        const {code} = await deleteArticleById(row.id)
        if (code == 200) {
          message.success("文章已删除！");
          getArticleList()
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

<style scoped>

.main-div {
  margin-top: 20px;
}

.tools-div {
  margin-top: 20px;
}

</style>
