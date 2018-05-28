window.jQuery=function(nodeOrSelector){
    let nodes={};
    nodes.addClass=function () {

    }
    nodes.html=function () {

    }
    return nodes;
}

window.jQuery.ajax = function (url, method, body, successFn, failFn) {

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
    window.jQuery.ajax(
        '/xxx',
        'post',
        'a=1&b=2',
        (responseText)=>{ console.log(1)},
        (xhr)=>{console.log(2)}
    )
})