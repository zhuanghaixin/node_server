window.jQuery=function(nodeOrSelector){
    let nodes={};
    nodes.addClass=function () {

    }
    nodes.html=function () {

    }
    return nodes;


}
// window.Promise=function(fn){
//     //....
//     return {
//         then:function () {
//            
//         }
//     }
// }
window.jQuery.ajax = function ({url,method,body,headers}) {
    //一个函数如何接受两种参数
    // let url
    //
    // if(arguments.length===1) {
    //     url=options.url;
    // }else if(arguments.length===2){
    //     let url=arguments[0];
    //     options=arguments[1];
    // }
    // let method = options.method;
    // let body = options.body;
    // let headers = options.headers;
    // let successFn = options.successFn;
    // let failFn = options.failFn;
    //ES6解构
    // let{url,method,body,headers,successFn,failFn}=options;

    return new Promise(function (resolve,reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        for(let key in headers){
            let value=headers[key];
            xhr.setRequestHeader(key,value);
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve.call(undefined,xhr.responseText);
                } else if (xhr.status >= 400) {
                    reject.call(undefined,xhr);
                }
            }
        }
        xhr.send(body);
    })


}




btn.addEventListener('click', (e) => {
    let obj={
        'url':'/xxx',
        'method':'post',
        'body':'a=1&b=2',
        'headers':{
            'Content-Type':'application/x-www-form-urlencoded',
            'name':'frank'
        }


    }
    window.jQuery.ajax(obj)
        .then(
            (responseText)=>{
        console.log(responseText);},
            (request)=>{
        console.log(request)}
        )
})