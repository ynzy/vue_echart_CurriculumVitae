<!-- 工作经验 -->
<template>
  <div :class="WorkExperience">工作经验</div>
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
</style>
