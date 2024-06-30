//JQuery// !!!!!!!!!!!!!!!!
$(function(){
    /* tool-tip */
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    /* navigation bar */
    $(".menu img").click(function(){
        $("nav ul").toggleClass("active");
    })
    $("nav ul li").click(function(){
        $("nav ul").removeClass("active");
    })
});

//JavaScript// !!!!!!!!!!!!!
function sayHello() {
    let newDate = new Date();
    let currentTime = newDate.getHours();
    if (currentTime < 12 && currentTime > 3) document.getElementById('greeter').innerHTML= '<p>Good Morning.</p>';
    if (currentTime > 11 && currentTime < 18) document.getElementById('greeter').innerHTML= '<p>Good Afternoon.</p>';
    else document.getElementById('greeter').innerHTML= '<p>Good Evening.</p>';
}

window.onload = sayHello();