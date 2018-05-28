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
## 9.只有 协议+端口+域名 一模一样才允许发 AJAX 请求,form表单可以跨源发送请求
```
node server3.js 8888
```