//注意每次调用$.get 或$.post 或 $.ajax 时候
// 会先调用ajaxPrefilter这个函数
// 在这个函数中 可以拿到给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    //在发起真正的ajax 请求之前 统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
    // console.log(options.url);
    //统一为有权限的接口，设置headers 请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }



    // 全局统计挂载 complete函数
    options.complete = function(res) {
        //无论成功还是失败 最终都会调用complete函数

        // console.log('执行了complete回调');
        console.log(res);
        //在complete回调中可以使用responseJSON拿到服务器响应回来的数据
        if (res.responseJSON.status === 1 && res.responseJSON.message == '身份认证失败!') {
            //获取用户信息失败
            localStorage.removeItem('token');
            location.href = '/login.html'
        }

    }
})