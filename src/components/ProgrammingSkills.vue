<!-- 编程技能 -->
<template>
  <div :class="ProgrammingSkills">编程技能</div>
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
</style>