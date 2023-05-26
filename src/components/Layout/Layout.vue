<template>
    <div class="layout">
        <el-container>
            <el-header>
                <headerpage />
            </el-header>
            <el-container>
                <el-aside width="210px">
                    <sidenav />
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view />
                    </el-main>
                    <el-footer>相关介绍和广告</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import headerpage from './Header/Header.vue';
import sidenav from './Sidenav/Sidenav.vue'
export default {
    components: { headerpage, sidenav },
    data() {
        return {}
    },
    methods: {
    }
}
</script>

<style lang="scss">
@import url('./Layout.scss');
@import url('./Layuout.css');
</style>
