var Links = {
    setColor : function (color){
        var a_list = document.querySelectorAll('a');
        var i = 0;
        while(i<a_list.length){
            a_list[i].style.color=color;
            i = i+1;
        }
    }
}
function LinkSetColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
        alist[i].style.color = color;
        i = i+1;
    }
}
var Body = {
    setColor : function (color){
        document.querySelector('body').style.color=color;
},
    setBackgroundColor : function (color){
        document.querySelector('body').style.backgroundColor=color;
}
}


function nightDayHandler(self){
var target = document.querySelector('body');
if (self.value ==='night'){
    Body.setBackgroundColor('gray')
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');

}
else {
    Body.setBackgroundColor('white')
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
    }
}   