<template>
    <div>
        <el-row>
            <el-col>
                <div class="grid-content bg-purple-top">
                    <el-table :data="tableData">
                        <el-table-column fixed prop="id" label="ID" width="75">
                        </el-table-column>
                        <el-table-column prop="username" label="姓名" width="130">
                        </el-table-column>
                        <el-table-column prop="province" label="省份" width="180">
                        </el-table-column>
                        <el-table-column prop="city" label="市区" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" width="320">
                        </el-table-column>
                        <el-table-column prop="zip" label="邮编" width="120">
                        </el-table-column>
                        <el-table-column prop="intotime" label="日期" width="120">
                        </el-table-column>
                        <el-table-column prop="email" label="Email" width="190">
                        </el-table-column>
                        <el-table-column prop="postcode" label="ID编号" width="190">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="100">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="editinfo(scope.row)">编辑</el-button>
                                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-button type="primary" icon="el-icon-plus">添加</el-button>
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper"
                            :total="1000">
                        </el-pagination>
                    </div>
                    <el-dialog title="请根据实际情况修改" :visible.sync="dialogFormVisible" v-loading="loading"
                        element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)">
                        <el-form :model="form">
                            <el-form-item label="id" :label-width="formLabelWidth">
                                <el-input v-model="form.id" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="姓名" :label-width="formLabelWidth">
                                <el-input v-model="form.username" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="省份" :label-width="formLabelWidth">
                                <el-input v-model="form.province" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="市区" :label-width="formLabelWidth">
                                <el-input v-model="form.city" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="地址" :label-width="formLabelWidth">
                                <el-input v-model="form.address" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="邮编" :label-width="formLabelWidth">
                                <el-input v-model="form.zip" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="日期" :label-width="formLabelWidth">
                                <el-input v-model="form.intotime" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="Email" :label-width="formLabelWidth">
                                <el-input v-model="form.email" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="ID编号" :label-width="formLabelWidth">
                                <el-input v-model="form.postcode" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="Updatedata(form)">确 定</el-button>
                        </div>
                    </el-dialog>
                </div>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
            <el-col>
                <div class="grid-content bg-purple" id="area">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [],
            dialogFormVisible: false,
            form: {},
            formLabelWidth: '80px',
            currentPage3: 1,
            loading: false
        }
    },
    created() {
        this.gettest()
    },
    methods: {
        gettest() {
            this.axios.get('http://192.168.38.6:3000/testconnect').then(
                response => {
                    if (response.status === 200) {
                        this.tableData = response.data;
                    }
                },
                error => {
                    console.log('请求失败', error.message)
                })
        },
        handleClick(row) {
            console.log(row);
        },
        editinfo(row) { // 弹窗修改相关信息
            this.form = row;
            this.dialogFormVisible = true;
        },
        areachart() { // 图表数据采集渲染
            var myChart = this.$echarts.init(document.getElementById('area'));

            myChart.setOption({
                title: {
                    text: 'Stacked Area Chart'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        Updatedata(req) { // 更新数据库数据或插入新数据
            this.axios.post('http://192.168.38.6:3000/saveinfo', req).then(
                response => {
                    if (response.status === 200) {
                        this.loading = true;
                        setTimeout(() => {
                            this.loading = false;
                            this.dialogFormVisible = false;
                            this.$notify({
                                title: '成功',
                                message: '修改数据成功',
                                type: 'success'
                            });
                        }, 2000);
                    } else {
                        this.loading = true;
                        setTimeout(() => {
                            this.loading = false;
                            this.dialogFormVisible = false;
                            this.$notify({
                                title: '错误',
                                message: '修改数据失败',
                                type: 'error'
                            });
                        }, 2000);
                    }
                },
                error => {
                    console.log(error);
                }
            )
        }
    },
    mounted() {
        this.areachart()
    }
}
</script>
<style lang="scss">
@import url('./InventoryInfo.scss');

.el-form {
    display: grid;
    grid-template-columns: auto auto; //左右排布,一行排列两个
    grid-column-gap: 1px; //左右间距
    grid-row-gap: 0px; //上下间距
}
</style>
