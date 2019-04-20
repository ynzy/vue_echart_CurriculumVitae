<!-- 求职意向 -->
<template>
  <div :class="JobIntention">求职意向</div>
</template>

<script>
export default {
  data () {
    return {
      JobIntention: 'JobIntention'
    };
  },
  computed: {},

  methods: {},
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
</style>