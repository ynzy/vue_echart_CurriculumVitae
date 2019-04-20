<!-- 文章成就 -->
<template>
  <div :class="ArticleAchievement">文章成就</div>
</template>

<script>
export default {
  data () {
    return {
      ArticleAchievement: 'ArticleAchievement'
    };
  },
  computed: {},

  methods: {},
  components: {}

}

</script>
<style  scoped>
.ArticleAchievement {
  width: 100%;
  height: 310px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>