<template>
    <div>
        <el-container>
            <!-- 侧边栏  -->
            <el-aside width="200px">
                <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
                    active-text-color="#ffd04b">
                    <!-- //没有二级导航的 -->
                    <el-menu-item index="1">
                        <span slot="title">
                            <router-link to="/home">首页</router-link>
                        </span>
                    </el-menu-item>

                    <!-- 贷款管理 -->
                    <el-submenu index="2">
                        <template slot="title">
                            <span>贷款管理</span>
                        </template>
                        <el-menu-item index="2-1">
                            <router-link to="/loan-input/index">贷款申请</router-link>
                        </el-menu-item>
                    </el-submenu>

                    <!-- 申请管理 -->
                    <el-submenu index="3">
                        <template slot="title">
                            <span>申请管理</span>
                        </template>
                        <el-menu-item index="3-1">
                            <router-link to='/application-manager/index'>申请列表</router-link>
                        </el-menu-item>
                    </el-submenu>

                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <!--//左侧面包屑-->
                    <div class="left">
                        <BreadCrumb />
                    </div>
                    <!--//右侧用户名-->
                    <div class="right">
                        <!--//下拉菜单-->
                        <el-dropdown @command="logout">
                            <span class="el-dropdown-link"> admin </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>

                        </el-dropdown>
                    </div>
                </el-header>

                <!-- 页面包含 -->
                <el-main>
                    <!-- //放置一个路由出口 -->
                    <router-view />
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
import { logout } from "@/apis/user.js";
export default {
    components: { BreadCrumb },
    methods: {
        async logout(commond) {
            console.log(commond);
            if (commond === "logout") {
                // 退出登录业务逻辑
                let res = await logout();
                if (res.data.code === 603) {
                    // localStorage.removeItem("token");
                    localStorage.clear();//清除所有数据  包含token
                }
            }
        },
    },
    computed: {
        userName() {
            return this.$store.state.userName;
        },
        menuList() {
            return this.$store.state.menuList;
        },
    },
};
</script>

<style lang="scss" scoped>
a:link {
    text-decoration: none;
    color: #fff;

}

/* 状态二: 已经访问过的链接 */
a:visited {
    text-decoration: none;
    color: #fff;
}

/* 状态三: 鼠标划过(停留)的链接(默认红色) */
a:hover {
    text-decoration: none;
    color: #fff;
}

/* 状态四: 被点击的链接 */
a:active {
    text-decoration: none;
    color: #fff;
}

.el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}

.el-container {
    height: 100vh;
}

.el-menu-vertical-demo {
    border: none;
}

.router-link-active {
    color: rgb(255, 208, 75) !important;
}
</style>