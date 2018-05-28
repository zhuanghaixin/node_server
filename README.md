# node_server
## 1.启动应用
```
node server.js 8888
```
或者
```
node server.js 8888
```
## 2.用户付款案例(未使用数据库)
```
node server1_1.js 8888
```
## 3.用户付款案例(使用文件系统数据库）
```
node server1_2.js 8888
```
## 3.用户付款案例(使用文件系统数据库并用iframe进行优化）
```
node server1_3.js 8888
```
## 4.用户付款案例(使用文件系统数据库并用img标签发送请求)
```
node server1_4.js 8888
```
## 5.用户付款案例(使用文件系统数据库并用script标签发送请求，然后在服务器端（刷新页面或者修改innerText)
```
node server1_5.js 8888
```
## 6.用户付款案例(使用文件系统数据库并用script标签发送请求，比如说是frank写的前端页面向jack写的后台发送请求) **JSONP**
```
node server1_6.js 8888
```
## 7.用户付款案例（jQuery中的jsonp)
```
node server1_7.js 8888
```
## 8.使用原生JS写的AJAX来发送请求
```
node server2.js 8888
```
## 9.(同源策略)只有 协议+端口+域名 一模一样才允许发 AJAX 请求,form表单可以跨源发送请求
```
node server3.js 8888
```
## 10.修改hosts文件,127.0.0.1 jack.com和127.0.0.1 frank.com,同时开启两个服务器
两个网站同时访问jack.com:8002/xxx,即jack的后台
jack.com:8002 访问 jack.com:8002/xxx
```
node server3.js 8001
node server3.js 8002
```
## 11.CORS(跨域资源共享)
突破同源策略 === 跨域

Cross-Origin Resource Sharing
C O源 R S
```
node server4.js 8001
node server4.js 8002
```
## 12.
- 客户端的JS发起请求（浏览器上的）
- 服务端的JS发送响应（Node.js上的）
JS 可以设置任意请求 header 吗 可以
```
第一部分 request.open('get', '/xxx')
第二部分 request.setHeader('content-type','x-www-form-urlencoded')
第四部分 request.send('a=1&b=2')
```
JS 可以获取任意响应 header 吗？可以
```
第一部分 request.status / request.statusText
第二部分 request.getResponseHeader() / request.getAllResponseHeaders()
第四部分 request.responseText
```
## 13.自己封装window.jQuery.ajax
```
node server5.js 8888
```