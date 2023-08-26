<template>
    <div id="application-manage">
        <el-row>
            <el-col :span="22">
                <!--这个属性接收名称，下面统一定义 -->
                <el-input placeholder="请输入名称" type="text" v-model="query"></el-input>
            </el-col>
            <el-col :span="2">
                <!-- 按钮事件也是下面统一定义 -->
                <el-button type="primary" @click="setQueryName">搜索</el-button>
            </el-col>
        </el-row>

        <!--tableData是表格数据-->
        <el-table :data="tableData" id="gbox" :useIndex="true" :stripe="true" :border="true" :fit="true"
            :useMultiSelect="false">
            <!--第一列序号-->
            <el-table-column type="index" label="序号" width="55" align="center">
            </el-table-column>
            <el-table-column v-for="(col, index) in columns" :key="index" :label="col.label" :prop="col.prop"
                :width="col.width">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getLoanList } from '@/apis/loan.js'
export default {
    data() {
        return {
            query: '',
            tableData: [],
            columns: [
                {
                    label: "姓名",
                    prop: "name",
                    width: "80",
                },
                {
                    label: "出生日期",
                    prop: "birthday",
                    width: "160",
                },
                {
                    label: "性别",
                    prop: "sex",
                },
                {
                    label: "教育程度",
                    prop: "education",
                },
                {
                    label: "居住地址",
                    prop: "address1",
                },
                {
                    label: "手机号",
                    prop: "mobile_phone",
                },
                {
                    label: "申请状态",
                    prop: "status",
                },
                {
                    label: "操作",
                    width: "280",
                    prop: "opts",
                },
            ],
            pageOptions: {
                pageNo: 1,
                pageSize: 10
            },
            rows:0
        }
    },
    methods: {
        async setQueryName() {

        },
        async getLoanList() {
            let res = await getLoanList(this.pageOptions)
            //20000代表成功，rows是后端返回的总条数
            if (res.data.code === 20000) {
                this.tableData = res.data.data.data.data
                this.rows = res.data.data.rows
            }
        }
    },
    mounted() {
        this.getLoanList()
    }
}
</script>

<style lang="scss" scoped></style>