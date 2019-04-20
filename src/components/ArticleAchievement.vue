<!-- 文章成就 -->
<template>
  <div :class="ArticleAchievement" id="ArticleAchievement">文章成就</div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
export default {
  data () {
    return {
      ArticleAchievement: 'ArticleAchievement'
    };
  },
  computed: {

  },
  mounted() {
    this.drawECharts()
  },
  methods: {
     drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("ArticleAchievement"));

      myChart.setOption({
        // 标题
        title: {
          // 标题文本
          text: "文章成就统计",
          // 标题文本样式
          textStyle: {
            color: "#fff"
          },
          // 标题位置
          x: "center"
        },
        // 图形布局
        grid: {
          // 距离底部高度
          bottom: "20"
        },
        // 横轴
        xAxis: {
          show: false,
          type: "category",
          data: ["Github 提交：\n200", "Github Star数：\n36", "简书文章：\n10", "简书关注者：\n10"],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            // 横轴信息全部显示
            interval: 0
          }
        },
        // 纵轴
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            // 横轴信息全部显示
            interval: 0
          }
        },
        // 图形系列
        series: [
          {
            // 图类型
            type: "bar",
            // 数据
            data: [200, 36, 10, 10],
            // 文本
            label: {
              show: true,
              position: "top",
              color: "#fff",
              formatter: "{b}"
            },
            // 柱条样式
            itemStyle: {
              color: "deepskyblue"
            },
            zlevel: 1
          }
        ]
      });
    }


  },
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