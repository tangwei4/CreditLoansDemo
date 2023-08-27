import requset from "@/utils/request";

// 创建贷款申请
export const createLoan = (data) => {
    return requset({
        url: '/loan/create',
        method: 'POST',
        data
    })
}

// 获取表格数据接口
export const getLoanList = (params) => {
    return requset({
        url: '/loan/list',
        method: 'GET',
        params
    })
}

// 编辑申请列表接口
export const updateLoan = (data) => {
    return requset({
        url: "/loan/update",
        method: 'PUT',
        data
    })
}

// 删除申请列表接口
export const deleteLoan = (id) => {
    return requset({
        url: '/loan/delete/' + id,
        method: 'DELETE',
    })
}

// 提交审核接口
export const submitLoan = (id) => {
    return requset({
        url: "/loan/submitToApprove",
        method: 'POST',
        data: {
            id
        }
    })
}

// 审批-初审-查询接口
export const queryList = (params) => {
    return requset({
        url: '/approve/first/list',
        method: 'get',
        params
    })
}

// 审批 - 初审-通过/拒绝接口
export const approveFirst = (id, flag) => {
    return requset({
        url: '/approve/first/' + flag,
        method: 'POST',
        data: {
            appId: id,
            loanId: id
        }
    })
}

// 审批-终审-查询接口
export const queryEndList = (params) => {
    return requset({
        url: '/approve/end/list',
        method: 'get',
        params
    })
}

// 审批 - 终审-通过/拒绝接口
export const approveEnd = (id, flag) => {
    return requset({
        url: '/approve/end/' + flag,
        method: 'POST',
        data: {
            appId: id,
            loanId: id
        }
    })
}


// 合同管理-合同列表接口
export const contractList = (params) => {
    console.log("--"+JSON.stringify(params) );
    return requset({
        url: '/contract/list',
        method: 'get',
        params
    })
}

// 合同管理- 生成合同接口
export const generateContract = (id) => {
    return requset({
        url: '/contract/createFile',
        method: 'post',
        data: {
            id
        }
    })
}

// 合同管理- 下载合同接口
export const downloadContract = (id) => {
    return requset({
        url: '/contract/download',
        method: 'get',
        params: {
            id
        }
    })
}


