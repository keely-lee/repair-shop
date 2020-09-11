document.addEventListener("DOMContentLoaded", () => {
  //add event listener here
  const colorsDivs = document.getElementsByClassName("color-bar");
  console.log("YAY IN SECOND JS");
  console.log(colorsDivs);
  console.log("colorsDivs");

  for (let i = 0; i < colorsDivs.length; i++){
    colorsDivs.item(i).addEventListener("click", (e) => chooseColor(e))
  }

  function chooseColor(e){
    console.log(e.target.id)
    console.log("IM IN CHOOSE COLOR")
  }
})




/*


var started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';

function init() {
	canvas = $('#imageView').get(0);
	context = canvas.getContext('2d');
	
	// Auto-adjust canvas size to fit window.
	canvas.width  = window.innerWidth - 75;
	canvas.height = window.innerHeight - 75;
  
	//$('#container').get(0).addEventListener('mousemove', onMouseMove, false);
	canvas.addEventListener('mousemove', onMouseMove, false);
	canvas.addEventListener('click', onClick, false);
	
	// Add events for toolbar buttons.
	$('#cat').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#dragonfly').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#ladybug').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#heart').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#dog').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#fill').get(0).addEventListener('click', function(e) { onFill(); }, false);
	$('#save').get(0).addEventListener('click', function(e) { onSave(); }, false);
}

function onMouseMove(ev) {
	var x, y;
		
	// Get the mouse position.
	if (ev.layerX >= 0) {
		// Firefox
		x = ev.layerX - 50;
		y = ev.layerY - 5;
	}
	else if (ev.offsetX >= 0) {
		// Opera
		x = ev.offsetX - 50;
		y = ev.offsetY - 5;
	}
	
	if (!started) {
		started = true;

		context.beginPath();
		context.moveTo(x, y);		
	}
	else {
		context.lineTo(x, y);
		context.stroke();
	}
	
	$('#stats').text(x + ', ' + y);
}

function onClick(e) {
	if (stampId.length > 0) {
		context.drawImage($(stampId).get(0), e.pageX - 90, e.pageY - 60, 80, 80);
	}
}

function onColorClick(color) {
	// Start a new path to begin drawing in a new color.
	context.closePath();
	context.beginPath();
	
	// Select the new color.
	context.strokeStyle = color;
	
	// Highlight selected color.
	var borderColor = 'white';
	if (color == 'white' || color == 'yellow') {
		borderColor = 'black';
	}
	
	$('#' + lastColor).css("border", "0px dashed white");
	$('#' + color).css("border", "1px dashed " + borderColor);
	
	// Store color so we can un-highlight it next time around.
	lastColor = color;
}

function onFill() {
	// Start a new path to begin drawing in a new color.
	context.closePath();
	context.beginPath();

	context.fillStyle = context.strokeStyle;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function onStamp(id) {
	// Update the stamp image.
	stampId = '#' + id;

    if (lastStampId == stampId) {
        // User clicked the selected stamp again, so deselect it.
        stampId = '';
    }

	$(lastStampId).css("border", "0px dashed white");
	$(stampId).css("border", "1px dashed black");
	
	// Store stamp so we can un-highlight it next time around.
	lastStampId = stampId;	
}

function onSave() {
	var img = canvas.toDataURL("image/png");
	document.write('<img src="' + img + '"/>');
}

*/