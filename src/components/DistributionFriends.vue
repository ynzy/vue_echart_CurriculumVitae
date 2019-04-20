<!-- 好友分布 -->
<template>
  <div :class="DistributionFriends">好友分布</div>
</template>

<script>
export default {
  data () {
    return {
      DistributionFriends: 'DistributionFriends'
    };
  },
  computed: {},

  methods: {},
  components: {}

}

</script>
<style  scoped>
.DistributionFriends {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>