$(document).ready(function(){

$("h2").click(function(){
	$("ul").fadeToggle("slow");
	});
$("h2").mouseleave(function(){
	$("ul").fadeOut("medium");
	});







// $("h2").mouseenter(function(){
// 	$("h2").addClass("redText");
// 	});
// $("h2").mouseleave(function(){
// 	$("h2").removeClass("redText");
// 	});

$("ul").addClass("invisible");

// $("#myModel").model("show");
});
// $("h2").mouseenter(function(){
// 	$("ul").removeClass("invisible");
// $("p").css("font-size","2em");

// });