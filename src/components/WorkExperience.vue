<!-- 工作经验 -->
<template>
  <div :class="WorkExperience">
    <h3 class="text-center text-top">工作经验</h3>
    <p>
      <a href="javascript:void(0)">保定点动科技有限公司</a>
      <span class="text-small">| 2018/06 - 至今</span>
    </p>
    <p class="text-small">工作内容：apicloud业务app、Vue </p>
    <p class="text-small">项目成就：</p>
    <p class="text-small">&emsp;1. 诚通项目外挂系统，完成PC端后台，手机app订单录入查询等功能，已经交付</p>
    <p class="text-small">&emsp;2. 搭建easy-mock数据模拟平台，用于前端数据模拟，已经完成内部部署</p>
    <p class="text-small">&emsp;3. 全民小说阅读项目，完成小说阅读H5开发，<a href="http://shunpingreadbook.diandongmark.com/index.html
" target="view_window">已经部署上线</a>
</p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      WorkExperience: 'WorkExperience'
    };
  },
  computed: {},

  methods: {},
  components: {}

}

</script>
<style  scoped>
.WorkExperience {
  width: 100%;
  height: 310px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
.part-five-responsive {
  width: 100%;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.text-center {
  text-align: center;
}
.text-small {
  font-size: 0.9em;
  color: rgb(253, 239, 239);
}

</style>
