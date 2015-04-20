var box = document.querySelectorAll('.box')[0]; 


 function moveBox(){ 

	var value_1 =  Math.floor(Math.random() * 500) + 1 ;
	var value_2 =  Math.floor(Math.random() * 500) + 1 ;
	var value_3 = Math.floor(Math.random() * 500) + 1 ;

  	box.style.left = value_1+ 'px';
  	box.style.right = value_2+ 'px';
  	box.style.top = value_3 + 'px';

 } 

var value = -1 ;
 function startMove(){ 
   	window.setInterval(moveBox, 10000); 
   	value++;
   	alert('score:'+value+'점');

   }
 
 box.addEventListener('click',  startMove); 
