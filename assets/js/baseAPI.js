//注意每次调用$.get 或$.post 或 $.ajax 时候
// 会先调用ajaxPrefilter这个函数
// 在这个函数中 可以拿到给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    //在发起真正的ajax 请求之前 统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
    console.log(options.url);

})