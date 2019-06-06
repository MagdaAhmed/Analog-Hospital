$(document).ready(function(){
  var readMoreHtml = $(".readMore").html();
  var lessText = readMoreHtml.substr(0 , 450);
    if(readMoreHtml.length <450){
        $(".readMore").html(lessText).append("<a href='continue.html' target='_blank'>...Continue Reading</a>");
    }else{
        $(".readMore").html(readMoreHtml);
    }
});
function myFunction() {
  window.print();
}
new WOW().init();