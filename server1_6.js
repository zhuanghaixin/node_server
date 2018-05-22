// 这是jack.com的后台代码
var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var path = request.url
    var query = ''
    if (path.indexOf('?') >= 0) {
        query = path.substring(path.indexOf('?'))
    }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/













    console.log('方方说：得到 HTTP 路径为\n' + path)
    console.log('方方说：查询字符串为\n' + query)
    console.log('方方说：不含查询字符串的路径为\n' + pathNoQuery)
    if (path == '/') {
        var string = fs.readFileSync('./index1_4.html','utf8');
        var amount=fs.readFileSync('./db','utf8'); //100
        string=string.replace('&&&amount&&&',amount);
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write(string);
        response.end()
    }else if(pathNoQuery=='/pay'){
        var amount=fs.readFileSync('./db','utf8') //100
        var newAmount=amount-1;
        // console.dir(parsedUrl.query.callbackName);

        if(Math.random()>0.5){
            fs.writeFileSync('./db',newAmount);
            response.setHeader('Content-Type','application/javascript');
            response.statusCode=200;
            response.write(`
            //说明jack.com的后端程序员需要对frank.com的页面细节了解
            //qq.com的后端程序员不需要对baidu.com页面细节了解
            //耦合 解耦
            //xxx函数名
            // xxx.call(undefined,'success');   //解耦还是不干净，xxx是谁？
            
            // ${parsedUrl.query.callback}.call(undefined,{
            // "success":true,
            // "left":${amount}
            // });
           
           //JSONP =  JSON + padding
           
             ${parsedUrl.query.callback}.call(undefined,'success');
           
            
            `);

        }else{
            // response.statusCode=400;
            response.write('alert("失败")');
        }
        response.end();

    }
    else if (path == '/style1&style2.css') {
        response.setHeader('Content-Type', 'text/css; charset=utf-8')
        response.write('body{background-color: #ddd;}h1{color: red;}')
        response.end()
    } else if (path == '/main.js') {
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
        response.write('alert("这是JS执行的")')
        response.end()
    } else {
        response.statusCode = 404
        response.end()
    }


    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

