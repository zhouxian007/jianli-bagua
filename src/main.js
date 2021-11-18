let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string =
`
/*
你好，我是周显
接下来我要演示我的前端内容
首先我要准备一个div*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
    
    
}
/*
接下来我要把div变成八卦图
首先把div变成一个圆

*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;

}
/*
八卦是阴阳形成的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(1,98,137,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);

}
/*
加两个小圆
*/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    top:0;
    
    transform:translateX(-50%);
    background:#000;
    border-radius:50%
}   
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0;
   
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%
}   
`
let string2="";
let n =-1;
html.innerHTML=string.substring(0,n);
let step = ()=>{
    setTimeout(()=>{
        console.log(n);

    n=n+1
    if(string[n]==="\n"){
        string2=string2+"<br>"
    }else if(string[n]===" ")
    {
        string2=string2+"&nbsp"

    }else{
        string2=string2+string[n]
    }
  
  
    html.innerHTML=string2;
    style.innerHTML=string.substring(0,n);
    window.scrollTo(0,99999);//写完滚动
    html.scrollTo(0,99999);
    if(n+1<string.length){
        step();
        }
    
    },10)
 }
step();

