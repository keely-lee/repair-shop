

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("canvas-home");
  const context = ctx.getContext('2d');

  ctx.width = document.documentElement.clientWidth;
  ctx.height = document.documentElement.clientHeight;
  const person1 = new Image();
  person1.src = "src/images/person1.png";
  person1.onload = function(){
    context.drawImage(person1, 100, 100, person1.width/13, person1.height/13)
  }

  ctx.setAttribute("class", "test")
  person1.addEventListener('click', repair)



  function repair(){
    //clear canvas
    //draw first obj
    console.log("CLICKITY CLACK")
    ctx.style.backgroundImage = "none";
  }

})