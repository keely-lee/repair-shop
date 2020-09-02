

document.addEventListener("DOMContentLoaded", () => {
  // const mainCanvas = document.getElementById("canvas-home");
  // const ctxMain = mainCanvas.getContext("2d");

  // const person1 = new Image();
  // person1.src = "src/images/background.jpg"



  // const person1 = document.createElement("button");
  // person1.innerHTML = '<img src="src/images/person1.png" />';
  const person1 = document.createElement("img");
  const ctx = document.getElementById("main");
  person1.src = "src/images/person1.png";
  person1.style.width = '30%'
  person1.style.height = 'auto'
  ctx.appendChild(person1);

  // const test = document.createElement("H1")
  // const t1 = document.createTextNode("HOWDY HOWDY")
  // test.appendChild(t1)
  // ctx.appendChild(test)



  function repair(){
    //clear canvas
    //draw first obj
  }

})