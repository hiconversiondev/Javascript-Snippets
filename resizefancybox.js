var maskWidth = $(window).width();
var fancywidth = $("#fancybox-wrap").width();
if(maskWidth >= fancywidth || maskWidth == fancywidth){
  var dif = maskWidth-fancywidth;
  var leftmargin = dif/2;
  $("#fancybox-wrap").css("left",leftmargin);
  }
 else if(maskWidth < fancywidth){
  $("#fancybox-wrap").css("left","0");
 }

$( window ).resize(function() {
 var maskWidth = $(window).width();
 var fancywidth = $("#fancybox-wrap").width();
  if(maskWidth > fancywidth){
  var dif = maskWidth-fancywidth;
  var leftmargin = dif/2;
  $("#fancybox-wrap").css("left",leftmargin);
 }
 else if(maskWidth < fancywidth || maskWidth == fancywidth){
  $("#fancybox-wrap").css("left","0");
 }
});
