<template>
    <div class="header">
        <div class="logo">
            <h1>logo图片和介绍</h1>
        </div>
        <div class="otherinfo">
            <el-badge :value="12" class="item" @click="handleOpen">
                <i class="el-icon-s-comment"></i>
            </el-badge>
            <el-dropdown style="margin-right: 60px;" @command="handlecommand">
                <span class="el-dropdown-link">
                    <el-avatar shape="circle" :size="50" :src="url"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="edit" class="clearfix">
                        资料编辑
                    </el-dropdown-item>
                    <el-dropdown-item command="loginout" class="clearfix">
                        退出登录
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-drawer direction="ltr" ref="drawer" :before-close="drawerClose" title="我是标题" :visible.sync="drawer"
            :show-close="false">
            <div class="demo-drawer__content">
                <span>我来啦!</span>
                <div class="demo-drawer__footer">
                    <el-button @click="cancelForm">取 消</el-button>
                    <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">
                        {{ loading ? '提交中...' : '确 定' }}</el-button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            drawer: false,
            loading: false,
            timer: null,
            delivery: false
        }
    },
    methods: {
        handlecommand(e) {
            if (e === 'edit') {
                // 资料编辑
                this.drawer = true
            } else if (e === 'loginout') {
                // 用户退出系统操作
                window.sessionStorage.clear(); // 清空token
                this.$router.push('/login')
            }
        },
        drawerClose(done) {
            if (this.loading) {
                return;
            }
            this.$confirm('确定要提交表单吗？')
                .then(_ => {
                    this.loading = true;
                    this.timer = setTimeout(() => {
                        done();
                        // 动画关闭需要一定的时间
                        setTimeout(() => {
                            this.loading = false;
                        }, 400);
                    }, 2000);
                })
                .catch(_ => { });
        },
        cancelForm() {
            this.loading = false;
            this.drawer = false;
            clearTimeout(this.timer);
        },
        handleOpen() {
            console.log('11111')
        }
    }
}
</script>
<style lang="scss">
.header {
    background-color: rgb(230, 241, 241);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer !important;
    .logo{
        margin-left: 20px;
    }
}

.otherinfo {
    display: flex;
    align-items: center;
}

.item {
    font-size: 30px;
    margin: 5px 30px 0 0;
}

.demo-drawer__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 10px 20px 10px;
}

.demo-drawer__content>span {
    flex: 1;
}

.demo-drawer__footer {
    display: flex;

    .el-button {
        flex: 1;
    }
}</style>
