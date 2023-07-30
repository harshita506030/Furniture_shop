
let flag=0;

function controller(x)
{
    flag=flag+x;
    imageslider(flag);
}
imageslider(flag);

function imageslider(num)
{
  let s=document.getElementsByClassName('slide');
   

if(num==s.length)
{
    flag=0;
    num=0;
}

if(num<0)
{
    flag=s.length-1;
    num=s.length-1;
}
 for(let y of s ){
     y.style.display="none";
 }
 s[num].style.display="block";
}