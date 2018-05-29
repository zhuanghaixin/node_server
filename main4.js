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


btn.addEventListener('click', (e) => {
    let obj={
        'url':'/xxx',
        'method':'post',
        'body':'a=1&b=2',
        'successFn':(e)=>{console.log(e)},
        'failFn':(xhr)=>{console.log(2)}
    }
    window.jQuery.ajax(obj);
})