

var button=document.getElementById('countery');
var counter=0;
button.onclick=function(){
 counter=counter+1;
 var element=document.getElementById('spa');
element.innerHTML=counter.toString();

 
};