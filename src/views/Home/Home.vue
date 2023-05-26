<template>
    <div>
        <el-row :gutter="8">
            <el-col :span="6">
                <div class="grid-content bg-title">
                    <el-statistic group-separator="," :precision="2" :value="value2" :title="title"></el-statistic>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-title">
                    <el-statistic title="男女比">
                        <template slot="formatter"> 456/2 </template>
                    </el-statistic>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-title">
                    <el-statistic group-separator="," :precision="2" decimal-separator="." :value="value1" :title="title">
                        <template slot="prefix">
                            <i class="el-icon-s-flag" style="color: red"></i>
                        </template>
                        <template slot="suffix">
                            <i class="el-icon-s-flag" style="color: blue"></i>
                        </template>
                    </el-statistic>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-title1">
                    <el-statistic :value="like ? 521 : 520" title="Feedback">
                        <template slot="suffix">
                            <span @click="like = !like" class="like">
                                <i class="el-icon-star-on" style="color:red" v-show="!!like"></i>
                                <i class="el-icon-star-off" v-show="!like"></i>
                            </span>
                        </template>
                    </el-statistic>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="5">
                <div id="pie1" class="grid-content piechart"></div>
            </el-col>
            <el-col :span="4">
                <div id="pie2" class="grid-content piechart"></div>
            </el-col>
            <el-col :span="4">
                <div id="pie3" class="grid-content piechart"></div>
            </el-col>
            <el-col :span="4">
                <div id="pie4" class="grid-content piechart"></div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content piechart">
                    <h2>后台管理系统</h2>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="12">
                <div id="main" class="grid-content charts"></div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content charts" id="charts"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            like: true,
            value1: 4154.564,
            value2: 2222,
            title: '今年的增长'
        };
    },
    methods: {
        initCharts() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            });
        },
        getcharts() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('charts'));
            myChart.setOption({
                title: {
                    text: 'Rainfall vs Evaporation',
                    subtext: 'Fake Data'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Rainfall', 'Evaporation']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        // prettier-ignore
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Rainfall',
                        type: 'bar',
                        data: [
                            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                        ],
                        markPoint: {
                            data: [
                                { type: 'max', name: 'Max' },
                                { type: 'min', name: 'Min' }
                            ]
                        },
                        markLine: {
                            data: [{ type: 'average', name: 'Avg' }]
                        }
                    },
                    {
                        name: 'Evaporation',
                        type: 'bar',
                        data: [
                            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                        ],
                        markPoint: {
                            data: [
                                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
                            ]
                        },
                        markLine: {
                            data: [{ type: 'average', name: 'Avg' }]
                        }
                    }
                ]
            })
        },
        piecharts() {
            var pieChart1 = this.$echarts.init(document.getElementById('pie1'));
            var pieChart2 = this.$echarts.init(document.getElementById('pie2'));
            var pieChart3 = this.$echarts.init(document.getElementById('pie3'));
            var pieChart4 = this.$echarts.init(document.getElementById('pie4'));

            pieChart1.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '1%',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '60%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 15,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            });
            pieChart2.setOption({
                series: [
                    {
                        type: 'gauge',
                        progress: {
                            show: true,
                            width: 10
                        },
                        axisLine: {
                            lineStyle: {
                                width: 10
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            length: 8,
                            lineStyle: {
                                width: 2,
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            distance: 15,
                            color: '#999',
                            fontSize: 12
                        },
                        anchor: {
                            show: true,
                            showAbove: true,
                            size: 15,
                            itemStyle: {
                                borderWidth: 10
                            }
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            valueAnimation: true,
                            fontSize: 20,
                            offsetCenter: [0, '75%']
                        },
                        data: [
                            {
                                value: 70
                            }
                        ]
                    }
                ]
            });
            pieChart3.setOption({
                series: [
                    {
                        type: 'gauge',
                        center: ['50%', '60%'],
                        startAngle: 200,
                        endAngle: -20,
                        min: 0,
                        max: 60,
                        splitNumber: 12,
                        itemStyle: {
                            color: '#FFAB91'
                        },
                        progress: {
                            show: true,
                            width: 30
                        },
                        pointer: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                width: 30
                            }
                        },
                        axisTick: {
                            distance: -45,
                            splitNumber: 5,
                            lineStyle: {
                                width: 2,
                                color: '#999'
                            }
                        },
                        splitLine: {
                            distance: -52,
                            length: 14,
                            lineStyle: {
                                width: 3,
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            distance: 3,
                            color: '#999',
                            fontSize: 10
                        },
                        anchor: {
                            show: false
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            valueAnimation: true,
                            width: '60%',
                            lineHeight: 40,
                            borderRadius: 8,
                            offsetCenter: [0, '-15%'],
                            fontSize: 20,
                            fontWeight: 'bolder',
                            formatter: '{value} °C',
                            color: 'inherit'
                        },
                        data: [
                            {
                                value: 20
                            }
                        ]
                    },
                    {
                        type: 'gauge',
                        center: ['50%', '60%'],
                        startAngle: 200,
                        endAngle: -20,
                        min: 0,
                        max: 60,
                        itemStyle: {
                            color: '#FD7347'
                        },
                        progress: {
                            show: true,
                            width: 8
                        },
                        pointer: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        data: [
                            {
                                value: 20
                            }
                        ]
                    }
                ]
            });
            setInterval(function () {
                const random = +(Math.random() * 60).toFixed(2);
                pieChart3.setOption({
                    series: [
                        {
                            data: [
                                {
                                    value: random
                                }
                            ]
                        },
                        {
                            data: [
                                {
                                    value: random
                                }
                            ]
                        }
                    ]
                });
            }, 2000);
            pieChart4.setOption({
                series: [
                    {
                        name: 'hour',
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        min: 0,
                        max: 12,
                        splitNumber: 12,
                        clockwise: true,
                        axisLine: {
                            lineStyle: {
                                width: 5,
                                color: [[1, 'rgba(0,0,0,0.7)']],
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                shadowBlur: 15
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 3,
                                shadowOffsetX: 1,
                                shadowOffsetY: 2
                            }
                        },
                        axisLabel: {
                            fontSize: 10,
                            distance: 7,
                            formatter: function (value) {
                                if (value === 0) {
                                    return '';
                                }
                                return value + '';
                            }
                        },
                        anchor: {
                            show: true,
                            icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
                            showAbove: false,
                            offsetCenter: [0, '-35%'],
                            size: 40,
                            keepAspect: true,
                            itemStyle: {
                                color: '#707177'
                            }
                        },
                        pointer: {
                            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                            width: 6,
                            length: '70%',
                            offsetCenter: [0, '8%'],
                            itemStyle: {
                                color: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        detail: {
                            show: false
                        },
                        title: {
                            offsetCenter: [0, '30%']
                        },
                        data: [
                            {
                                value: 0
                            }
                        ]
                    },
                    {
                        name: 'minute',
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        min: 0,
                        max: 60,
                        clockwise: true,
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                            width: 4,
                            length: '79%',
                            offsetCenter: [0, '8%'],
                            itemStyle: {
                                color: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        anchor: {
                            show: true,
                            size: 20,
                            showAbove: false,
                            itemStyle: {
                                borderWidth: 15,
                                borderColor: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        detail: {
                            show: false
                        },
                        title: {
                            offsetCenter: ['0%', '-40%']
                        },
                        data: [
                            {
                                value: 0
                            }
                        ]
                    },
                    {
                        name: 'second',
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        min: 0,
                        max: 60,
                        animationEasingUpdate: 'bounceOut',
                        clockwise: true,
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                            width: 2,
                            length: '85%',
                            offsetCenter: [0, '8%'],
                            itemStyle: {
                                color: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        anchor: {
                            show: true,
                            size: 15,
                            showAbove: true,
                            itemStyle: {
                                color: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        detail: {
                            show: false
                        },
                        title: {
                            offsetCenter: ['0%', '-40%']
                        },
                        data: [
                            {
                                value: 0
                            }
                        ]
                    }
                ]
            });
            setInterval(function () {
                var date = new Date();
                var second = date.getSeconds();
                var minute = date.getMinutes() + second / 60;
                var hour = (date.getHours() % 12) + minute / 60;
                pieChart4.setOption.animationDurationUpdate = 300;
                pieChart4.setOption({
                    series: [
                        {
                            name: 'hour',
                            animation: hour !== 0,
                            data: [{ value: hour }]
                        },
                        {
                            name: 'minute',
                            animation: minute !== 0,
                            data: [{ value: minute }]
                        },
                        {
                            animation: second !== 0,
                            name: 'second',
                            data: [{ value: second }]
                        }
                    ]
                });
            }, 1000);
        }
    },
    mounted() {
        this.initCharts();
        this.getcharts();
        this.piecharts();
    }
};
</script>
<style lang="scss">
.like {
    cursor: pointer;
    font-size: 25px;
    display: inline-block;
}

.charts {
    height: 31.25rem;
    width: 100%;
    margin-top: 10px;
}

.bg-title {
    padding: 15px 0;
}

.bg-title1 {
    padding: 12.5px 0;
}

.piechart {
    width: 100%;
    height: 15.5rem;
    margin-top: 10px;
}
</style>
