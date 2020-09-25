
document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home-button");
  const activityDiv = document.getElementById("activity-comp");

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  home.addEventListener("click", () => {
    document.getElementById("activity-comp").innerHTML = "";
  })

  // const introVid = document.getElementsByClassName("startVid")[0];
  // introVid.onended = () => introVid.addAttribute


  //EVENT LISTENERS - MAIN PAGE
  //condense these to one liners later??
  const greenCar = document.getElementsByClassName("green-car")[0];
  greenCar.addEventListener("click", bug);

  const toolSet = document.getElementsByClassName("tools")[0];
  toolSet.addEventListener("click", repair)

  const fuel = document.getElementsByClassName("fuel")[0];
  fuel.addEventListener("click", recharge);



  //ACTIVITY ICONS
  const paintBrushIcon = document.createElement("div");
  paintBrushIcon.innerHTML = '<i class="fas fa-paint-brush icon-paint"></i>';
  paintBrushIcon.addEventListener("click", paint);

  const bugsMeIcon = document.createElement("div");
  bugsMeIcon.innerHTML = '<i class="fas fa-bug icon-bug"></i>';
  bugsMeIcon.addEventListener("click", bug);


  //MAIN COMPONENTS
  function repair(){
    console.log("I AM IN THE REPAIR FUNCTION")
    const repairDiv = document.createElement("div");
    repairDiv.setAttribute("id", "repair-div")
    activityDiv.append(repairDiv);
    repairDiv.append(paintBrushIcon);
  }

  function recharge(){
    console.log("I AM IN THE RECHARGE FUNCTION");
    const rechargeDiv = document.createElement("div");
    rechargeDiv.setAttribute("id", "recharge-div");
    activityDiv.append(rechargeDiv);
    rechargeDiv.append(bugsMeIcon);
    rechargeDiv.append(paintBrushIcon)
  }




  //ACTIVITIES - REMOVE AND MOVE SOMEWHERE ELSE LATER
  function paint(){
    console.log("CLICKITY CLACK")
    activityDiv.innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
  }

  function bug(){
    console.log("BUGGITY BUG BUG") /////
    activityDiv.innerHTML = "";
    const mainBug = document.createElement("img");
    mainBug.src = "src/images/ladybug.png";
    mainBug.id = "bug-obj";
    mainBug.height = (windowHeight * .8);
    mainBug.width = (windowWidth * .7);
    activityDiv.append(mainBug);

    //things that bug me textboxes
    for(let i = 0; i < 6; i++){
      const textbox = document.createElement("input");
      textbox.setAttribute("type",  "text");
      textbox.setAttribute("class", "bugsme-"+i);
      activityDiv.append(textbox);
    }

    let bugLine = "";
    for(let i = 1; i < 10; i++){
      const bug = `<img src="src/images/bug${i}.png" class="bug${i}">`;
      bugLine += bug;
    }
    
    const topRowDiv = document.createElement("div");
    topRowDiv.setAttribute("class", "topRowBug")
    topRowDiv.innerHTML = bugLine;
    activityDiv.append(topRowDiv);
    
    const bottomRowDiv = document.createElement("div");
    bottomRowDiv.setAttribute("class", "bottomRowBug");
    bottomRowDiv.innerHTML = bugLine;
    activityDiv.append(bottomRowDiv);
    
    for(let i = 1; i < 10; i++){
      const tbug = document.getElementsByClassName(`bug${i}`)[0];
      tbug.style.top = (Math.random() * 1000) + "px";
      tbug.style.left = (Math.random() * 1000) + "px";

      const bbug = document.getElementsByClassName(`bug${i}`)[1];
      bbug.style.top = Math.random() * 1000 + "px";
      bbug.style.left = Math.random() * 1000 + "px";
    }
    
    function move() {
      const bugs = document.getElementsByClassName("topRowBug")[0].childNodes;
      let horizontal = 0;

      for(let i = 0; i < 9; i++){
        bugs[i].style.top = "0px";
        bugs[i].style.left = horizontal + "px";
        bugs[i].style.transition = "all " + Math.floor(100 * Math.random()) + 600 + "ms";
        //  +" ease 5ms";
        horizontal += Math.floor(windowWidth / 9);
      }
    } 

    window.setTimeout(move, 1000);
  }

})









// 2319 x 1329 - big
// 1199 x 686 - small
// 1440 x 686 - max
