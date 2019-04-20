<!-- 求职意向 -->
<template>
  <div :class="JobIntention">
    <h3 class="text-center">求职意向</h3>
    <p class="text-small"><span class="font-bold">期望职位：</span>前端工程师</p>
    <p class="text-small"><span class="font-bold">工作技能：</span>Vue</p>
    <p class="text-small"><span class="font-bold">目标城市：</span>保定、北京</p>
    <p class="text-small"><span class="font-bold">期望薪资：</span>5K - 8K</p>
    <p class="text-small"><span class="font-bold">入职时间：</span>目前在职，看项目安排</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      JobIntention: 'JobIntention',
       curWidth: 0
    };
  },
  computed: {},

  methods: {},
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if(this.curWidth < 1000) {
      this.JobIntention = "part-sevev-responsive"
    }
  },
  components: {}

}

</script>
<style  scoped>
.JobIntention {
  width: 100%;
  height: 310px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.part-sevev-responsive {
  width: 100%;
  border: 40px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d; 
}
.text-center {
  text-align: center;
}
.text-small {
  font-size: .9em;
}
.font-bold {
  text-align: center;
  color: deepskyblue;
}
</style>