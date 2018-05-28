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
        var string = fs.readFileSync('./index5.html');
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write(string)
        response.end()
    }
    else if (path == '/style1&style2.css') {
        response.setHeader('Content-Type', 'text/css; charset=utf-8')
        response.write('body{background-color: #ddd;}h1{color: red;}')
        response.end()
    } else if (path == '/main.js') {
        var string = fs.readFileSync('./main.js')
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
        response.write(string)
        response.end()
    }  else if (path == '/main2.js') {
        var string = fs.readFileSync('./main2.js')
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
        response.write(string)
        response.end()
    } else if (path == '/main3.js') {
        var string = fs.readFileSync('./main3.js')
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
        response.write(string)
        response.end()
    } else if (path == '/main4.js') {
        var string = fs.readFileSync('./main4.js')
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
        response.write(string)
        response.end()
    }else if (path == '/xxx') {
        response.statusCode = 200;
        // response.setHeader('Content-Type', 'text/xml; charset=utf-8')
        response.setHeader('Content-Type', 'text/json; charset=utf-8')


//         response.write(`<?xml version="1.0" encoding="UTF-8"?>
// <note>
//   <to>芳芳</to>
//   <from>小姑</from>
//   <heading>你好</heading>
//   <body>Don't forget me this weekend!</body>
// </note>`)
        response.write(`
        {
        "note":{
            "to":"小姑",
            "from":"芳芳",
            "heading":"你好",
            "body":"你好世界"
            } 
       }
        `);
        response.end()
    } else {
        response.statusCode = 404
        response.end()
    }


    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

