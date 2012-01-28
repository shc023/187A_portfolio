$(document).ready(function() {

  /*Put your Javascript code here*/

  /*
    Simple image gallery. Use default settings
  */
  $('.fancybox').fancybox();
  
  $("#proj1_thumb").click( function(){
		$("#gallery").fadeOut("fast",function(){
			$("#proj1").fadeIn("fast");
		});
   });
  $("#proj2_thumb").click( function(){
		$("#gallery").fadeOut("fast",function(){
			$("#proj2").fadeIn("fast");
		});
   });
  $("#proj3_thumb").click( function(){
		$("#gallery").fadeOut("fast",function(){
			$("#proj3").fadeIn("fast");
		});
   });
  
  $(".back").click( function(){
		$(".project_div").fadeOut("fast",function(){
			$("#gallery").fadeIn("fast");
		});						 
	});

});
