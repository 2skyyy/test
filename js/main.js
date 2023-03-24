const elLi = document.querySelectorAll('#gnb > ul > li ');
const elMenu = document.querySelectorAll('#gnb > ul > li > a');
const elBar = document.querySelector('.bar');

elLi.forEach(function(aa){
  aa.onmouseover = function(){
    elBar.style = `width:${this.offsetWidth}px;
                  left:${this.offsetLeft}px`;
    // if(this.children[1]) this.children[1].style.display = 'block'; 
  }
  aa.onmouseout = function(){
    elBar.style = `width:0px;
                  left:${this.offsetLeft}px`;
    // if(this.children[1]) this.children[1].style.display = 'none'; 
  }
})

//jQuery
const jqLi = $('#gnb > ul > li');

jqLi.on('mouseenter',function(){
  $(this).children('.sub').stop().fadeIn(300);
})
jqLi.on('mouseleave',function(){
  $(this).children('.sub').stop().fadeOut(100);
})