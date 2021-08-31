let cards = document.getElementsByClassName('country');



function changedPicture (){
    
    let i = 0
 {
       setInterval(function(){
           if(i==cards.length){
               i=0;
               for(el of cards){
                   el.style.opacity = '0'
               }
           }
           cards[i].style.opacity = '1';
           i++;
         
       }, 2000)
   }
}

changedPicture()