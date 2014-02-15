$(document).foundation();

$(document).ready(function(){

	// Under line Nav on hover.
	var $navLinks = $("nav a:not(a.button):not(a.icon)");
	$navLinks.hover(function(){
	
		// $(this).toggleClass("active");
		// console.log("howdy", this);
	});

});