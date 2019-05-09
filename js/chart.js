const myChart = echarts.init(document.getElementById("chart"));

// 指定图表的配置项和数据
let option = {
  title: {
    text: "本週的營收情況",
    subtext: "纯属虚构"
  },
  tooltip: {
    trigger: "axis"
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} 元"
    }
  },
  series: [{
      name: "單日營收",
      color: ["#7ED321"],
      data: [390000, 610000, 700000, 534000, 870000, 1330000, 1020000],
      type: "line",
      markPoint: {
        data: [{
            type: "max",
            name: "最大值"
          },
          {
            type: "min",
            name: "最小值"
          }
        ]
      },
      markLine: {
        data: [{
          type: "average",
          name: "平均值"
        }]
      }
    },
    {
      name: "單日支出",
      color: ["#D0021B"],
      type: "line",
      data: [140000, 80000, 50000, 150000, 250000, 350000, 300000],
      markPoint: {
        data: [{
            type: "max",
            name: "最大值"
          },
          {
            type: "min",
            name: "最小值"
          }
        ]
      },
      markLine: {
        data: [{
          type: "average",
          name: "平均值"
        }]
      }
    },
    {
      name: "單日獲益",
      color: ["#4A90E2"],
      type: "line",
      data: [250000, 590000, 650000, 384000, 520000, 970000, 720000],
      markPoint: {
        data: [{
            type: "max",
            name: "最大值"
          },
          {
            type: "min",
            name: "最小值"
          }
        ]
      },
      markLine: {
        data: [{
          type: "average",
          name: "平均值"
        }]
      }
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);