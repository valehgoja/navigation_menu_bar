let scroll1 = window.pageYOffset;
window.onscroll = function(){
    let scroll2 =window.pageYOffset;
    console.log(scroll1);
    console.log(scroll2);

    if(scroll1 >scroll2){
        document.querySelector('nav').style.top="0";

    }
    else{
        document.querySelector('nav').style.top = "-100px";
    }
    scroll1=scroll2;
}