<!-- 编程技能 -->
<template>
  <div :class="ProgrammingSkills">
     <h3 class="text-center">编程技能</h3>
    <p class="font-small"><span class="font-bold">前端：</span>HTML/HTML5、CSS/CSS3、Less/Sass、JS/ES6、jQuery、Vue技术栈、apicloud</p>
    <p class="font-small"><span class="font-bold">开发环境：</span>Node、VsCode、apicloud、Hubilder</p>
    <p class="font-small"><span class="font-bold">其他：</span>MongoDB、pm2</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ProgrammingSkills:'ProgrammingSkills'
    };
  },
  computed: {},

  methods: {},
  components: {}

}

</script>
<style  scoped>
.ProgrammingSkills {
  width: 100%;
  height: 310px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.part-six-responsive {
  width: 100%;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.text-center {
  text-align: center;
}
.font-small {
  font-size: .9em;
}
.font-bold {
  font-weight: bold;
  color: deepskyblue;
}
</style>