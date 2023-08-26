import request from "@/utils/request";

// 登陆
export const doLogin = (user)=>{
    return request.post('/user/login', {
        //这里是后端需要account字符，也就是用户名
        account: user.username,
        password: user.pass
    })
}

// 退出登录
export const logout = () => {
    return request.post('/user/logout')
}

// 创建管理员接口
export const createUser = ({ username, password, permission }) => {
    return request({
        url: '/permission/createUser',
        method: 'POST',
        data: {
            account: username,
            password,
            role_id: permission
        }
    })
}

// 列表展示接口
export const userList = () => {
    return request({
        url: '/user/list?type=new',
        method: 'GET',
    })
}

// 获取用户信息的接口
export const userInfo = () => {
    return request({
        url: "/user/info",
        method: 'get'
    })
}

