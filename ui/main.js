console.log('Loaded!');
var element=document.getElementById('spa');
element.innerHTML='New Value';
var img=document.getElementById('madi');
  var marginLeft=0;
function moveRight()
{
  
   marginLeft=marginLeft+10;
   img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
    
    var interval=setInterval(moveRight,100);
    
};


var counter=0;
var button=getElementById('but');
button.onclick=function(){
 counter=counter+1;
 var c=doucument.getElementById('spa');
 c.innerHTML='10';

 
};