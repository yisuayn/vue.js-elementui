<template>
    <div>
        <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
            <el-menu-item index="home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页展示</span>
            </el-menu-item>
            <el-menu-item index="inventory">
                <i class="el-icon-document"></i>
                <span slot="title">出入库信息</span>
            </el-menu-item>
            <el-submenu index="">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>设置</span>
                </template>
                <el-menu-item index="userset">用户信息</el-menu-item>
                <el-menu-item index="theme">主题设置</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">关于我们</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
