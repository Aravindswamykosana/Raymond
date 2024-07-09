let a=document.getElementById("a1");
console.log(a);

let body=document.body
body.onclick=()=>{
    let div=document.getElementById("div1");
    let r=document.getElementById("rrrr");
    div.style.visibility="hidden"
    r.style.visibility="hidden" 
}
a.onmouseover=()=>{
    let div=document.getElementById("div1");
    let res=div.classList.toggle(true)
    if(res){
        div.style.visibility="visible"
    }
    else{
        div.style.visibility="hidden"
    }
}

let b=document.querySelector("#a2")
console.log(b);

b.onmouseover=()=>{
    let r=document.getElementById("rrrr")
    let rs=r.classList.toggle(true)
    if(rs){
        r.style.visibility="visible"
    }
    else{
        r.style.visibility="hidden"
    }
}

let u=document.getElementById("user")
console.log(u);

u.addEventListener("click",()=>{
    let r=document.getElementById("id")
    let res=r.classList.toggle(true)
    if(res){
        r.style.visibility="visible"
    }
    else{
        r.style.visibility="hidden"
    }

})

let add=document.getElementById("but")
console.log(add);

let count=0;
let s=document.getElementById("super")
add.onclick=()=>{
    count++;
    s.innerHTML=count;
}

let del=document.getElementById("but1")
del.onclick=function (){
    count=0;
    s.innerHTML=count;
}

let d=document.getElementById("but2")
d.onclick=function (){
    count--;
    s.innerHTML=count;
}