<!-- 基本信息 -->
<template>
  <div class="BasicInfo">
        <img class="part-one-image" :src="headImage" alt="头像">
    <p>姓&emsp;&emsp;张勇</p>
    <p>学&emsp;&emsp;历：专科</p>
    <p>工作年限：1.5 年</p>
    <p>年&emsp;&emsp;龄：23</p>
    <p>联系电话：18131239692</p>
    <p>电子邮箱：758922096@qq.com</p>
    <p>博&emsp;&emsp;客：<a href="https://ynzy.github.io" target="view_window">ynzy.github.io</a></p>
    <p>简&emsp;&emsp;书：<a href="https://www.jianshu.com/u/a119a26f3e98" target="view_window">云翼飞</a></p>
    <p>GitHub：<a href="https://github.com/ynzy" target="view_window">ynzy</a></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headImage: require('../assets/img/head_image.png')
    };
  },
  computed: {},

  methods: {},
  components: {}

}

</script>
<style  scoped>
.BasicInfo {
  width: 100%;
  height: 500px;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
p {
  line-height: 30px;
}
.part-one-image {
  width: 100%;
  height: 150px;
}
</style>