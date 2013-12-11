// jQuery = $


// Shape Picker

$("#buttonSquare").click(function() {
	$("#bigSquare")  .css("display", "inherit");
	$("#bigCircle")  .css("display", "none"   );
	$("#bigTriangle").css("display", "none"   );
});

$("#buttonCircle").click(function() {
	$("#bigCircle")  .css("display", "inherit");
	$("#bigSquare")  .css("display", "none"   );	
	$("#bigTriangle").css("display", "none"   );
});

$("#buttonTriangle").click(function() {
	$("#bigTriangle").css("display", "inherit"); 
	$("#bigSquare")  .css("display", "none"   );
	$("#bigCircle")  .css("display", "none"   );
});


// Color Picker

$("#buttonBlue").click(function() {
	$("#bigSquare")  .css("background-color", "#5c97e6")
	$("#bigCircle")  .css("background-color", "#5c97e6")
	$("#bigTriangle").css("border-bottom", "200px solid #5c97e6")
	$("#a")          .css("color", "#5c97e6")
});

$("#buttonGreen").click(function() {
	$("#bigSquare")  .css("background-color", "#98d9ad")
	$("#bigCircle")  .css("background-color", "#98d9ad")
	$("#bigTriangle").css("border-bottom", "200px solid #98d9ad")
	$("#a")          .css("color", "#98d9ad")
});

$("#buttonRed").click(function() {
	$("#bigSquare")  .css("background-color", "#ff998f")
	$("#bigCircle")  .css("background-color", "#ff998f")
	$("#bigTriangle").css("border-bottom", "200px solid #ff998f")
	$("#a")          .css("color", "#ff998f")
});