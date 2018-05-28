btn.addEventListener('click',(e)=>{
    //声明一个XMLHttpRequest对象
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4){
            console.log('请求完毕');
            console.log(xhr.status);
            console.log(xhr.statusText);

            if(xhr.status===200){
                console.log('请求成功');
                console.log(xhr.getAllResponseHeaders());
                console.log(xhr.getResponseHeader('Content-Type'));
                console.log(typeof xhr.responseText);
                console.log(xhr.responseText);
                // let parser = new DOMParser();
                // let xmlDoc = parser.parseFromString(xhr.responseText,"text/xml");
                //
                // let content= xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
                // console.log(content);
                let string=xhr.responseText;
                let object=window.JSON.parse(string);
                //把符合json语法的字符串
                //转换为js对应的值
                console.log(typeof object);
                console.log(object);
                console.log(object.note);
            }else if(xhr.status>=400){
                console.log('请求失败');

            }
            console.log(xhr.readyState);
        }}
    xhr.open('POST','/xxx'); //配置request
    xhr.setRequestHeader('frank',18);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    xhr.send('我偏要设置request的第四部分');

})