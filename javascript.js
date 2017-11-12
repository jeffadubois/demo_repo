$(document).ready(function(){ 

   $('#lessid').hide();
   $('#collapseid').hide();
   document.getElementById("moreid").addEventListener("click", function(){
   	     $('#collapseid').toggle();
   	     if($('#collapseid').is(':visible')){
   	     	$('#lessid').show();
   	     	$('#moreid').hide();
   	     	//$('#expandContentid').text('Less...<a href="#">Less...</a>');
   	     } else {
    	   	$('#lessid').hide();
   	     	$('#moreid').show();
  	     	
   	     	//$('#expandContentid').text('More...<a href="#">More...</a>');
   	     }
   	});
   document.getElementById("lessid").addEventListener("click", function(){
   	     $('#collapseid').toggle();
   	     if($('#collapseid').is(':visible')){
   	     	$('#lessid').show();
   	     	$('#moreid').hide();
   	     	//$('#expandContentid').text('Less...<a href="#">Less...</a>');
   	     } else {
    	   	$('#lessid').hide();
   	     	$('#moreid').show();
  	     	
   	     	//$('#expandContentid').text('More...<a href="#">More...</a>');
   	     }

   //document.getElementById("collapseid").style = "display:none";
   });
//});

   $('.expandContent').click(function(){
       $('p').toggleClass(".collapseclass");
	   console.log("got here");
    });

});