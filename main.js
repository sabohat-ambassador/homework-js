let cards = document.getElementsByClassName('country');
for(let i=0; i<cards.length;  i++){
    setTimeout(function(){
        cards[i].style.opacity = ' 1';
    }, (i+1)*3000)
}

