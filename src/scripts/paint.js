//notes
//change cursor to paint brush??
//add an eraser paint?? 

document.addEventListener("DOMContentLoaded", () => {
  //variables
  let currColor = "black";
  let strokeWidth = 2; //-- eventually create something for line stroke
  //-- eventually add something for stamp
  const canvas = document.getElementById("paintCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  let prevX = 0;
  let currX = 0;
  let prevY = 0;
  let currY = 0;
  let flag = false;
  let dot_flag = false;


  document.getElementById(currColor).classList.add("currColor")



  //add event listeners
  const colorsDivs = document.getElementsByClassName("color-bar");
  for (let i = 0; i < colorsDivs.length; i++){
    colorsDivs.item(i).addEventListener("click", (e) => chooseColor(e))
  }
  
  // canvas.addEventListener("mousemove", (e) => findxy('move', e)); //may need {}
  canvas.addEventListener("mousedown", (e) => findxy('down', e));
  canvas.addEventListener("mouseup", (e) => findxy('up', e));
  canvas.addEventListener("mouseout", (e) => findxy('out', e)); //removes mousedown on out!!




  //functions  
  function chooseColor(e){
    if (e.target.id === currColor) return; 

    document.getElementById(currColor).classList.remove("currColor")
    currColor = e.target.id;
    document.getElementById(currColor).classList.add("currColor")
    //eventually add some type of border to show currColor selected
  }

  function findxy(res, e) {

    console.log(res)
    console.log(e)

    //switch instead of multiple ifs? ------------
    //     if (res == 'down') {
    //         prevX = currX;
    //         prevY = currY;
    //         currX = e.clientX - canvas.offsetLeft;
    //         currY = e.clientY - canvas.offsetTop;
    
    //         flag = true;
    //         dot_flag = true;
    //         if (dot_flag) {
    //             ctx.beginPath();
    //             ctx.fillStyle = x;
    //             ctx.fillRect(currX, currY, 2, 2);
    //             ctx.closePath();
    //             dot_flag = false;
    //         }
    //     }
    //     if (res == 'up' || res == "out") {
    //         flag = false;
    //     }
    //     if (res == 'move') {
    //         if (flag) {
    //             prevX = currX;
    //             prevY = currY;
    //             currX = e.clientX - canvas.offsetLeft;
    //             currY = e.clientY - canvas.offsetTop;
    //             draw();
    //         }
    //     }
  }

    function draw() {
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(currX, currY);
      ctx.strokeStyle = currColor;
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
      ctx.closePath();
    }

    //function stamp(){}

    function clearAll() {
      const clearCanvas = confirm("Are you sure you want to erase everything?");
      if (clearCanvas) {
        ctx.clearRect(0, 0, w, h);
        // document.getElementById("canvasimg").style.display = "none"; //////
      }
    }

    //triggers a temporary PNG save, need to figure out how to utilize local storage
    function save() {
      // document.getElementById("canvasimg").style.border = "2px solid";
      // const savedImage = canvas.toDataURL();
      // document.getElementById("canvasimg").src = savedImage;

      // document.getElementById("canvasimg").style.display = "inline"; 
          //--- this is prob the line of code that saves it next to the current
    }
    
})








/*
	
	// Auto-adjust canvas size to fit window.
	canvas.width  = window.innerWidth - 75;
	canvas.height = window.innerHeight - 75;

  var stampId = '';
  var lastStampId = '';

function init() {
	
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