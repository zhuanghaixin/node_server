window.jQuery=function(nodeOrSelector){
    let nodes={};
    nodes.addClass=function () {

    }
    nodes.html=function () {

    }
    return nodes;


}

window.jQuery.ajax = function (options) {
    let url=options.url;
    let method=options.method;
    let body=options.body;
    let successFn=options.successFn;
    let failFn=options.failFn;
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                successFn.call(undefined,xhr.responseText);
            } else if (xhr.status >= 400) {
                failFn.call(undefined,xhr);
            }
        }
    }


    xhr.send(body);

}
//执行成功后，调用两个函数
function f1(responseText){
    console.log(1);
}
function f2(responseText){
    console.log(2);
}



btn.addEventListener('click', (e) => {
    let obj={
        'url':'/xxx',
        'method':'post',
        'body':'a=1&b=2',
        'successFn':(e)=>{
            f1.call(undefined,e);
            f2.call(undefined,e);
        },
        'failFn':(xhr)=>{console.log(xhr.status);
            console.log(xhr.responseText);
        }

    }
    window.jQuery.ajax(obj);
})