document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home-button");
  const activityDiv = document.getElementById("activity-comp");
  const tabDiv = document.getElementById("tab-comp");

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  home.addEventListener("click", () => {
    activityDiv.innerHTML = "";
    tabDiv.innerHTML = "";
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

  const stinkinGangIcon = document.createElement("div");
  stinkinGangIcon.innerHTML = '<i class="fas fa-user-ninja icon-gang"></i>';
  stinkinGangIcon.addEventListener("click", stinkinThinkin)


  //MAIN COMPONENTS
  function repair(){
    console.log("I AM IN THE REPAIR FUNCTION")
    const repairDiv = document.createElement("div");
    repairDiv.setAttribute("id", "repair-div");
    tabDiv.append(repairDiv);
    repairDiv.append(paintBrushIcon);
  }

  function recharge(){
    console.log("I AM IN THE RECHARGE FUNCTION");
    const rechargeDiv = document.createElement("div");
    rechargeDiv.setAttribute("id", "recharge-div");
    tabDiv.append(rechargeDiv);

    rechargeDiv.append(bugsMeIcon);
    rechargeDiv.append(paintBrushIcon);
    rechargeDiv.append(stinkinGangIcon);
  }




  //ACTIVITIES - REMOVE AND MOVE SOMEWHERE ELSE LATER
  function paint(){
    console.log("PAINT FUNCTION ACTIVATED")
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
    topRowDiv.setAttribute("class", "topRowBug");
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
    
    function move(){
      const bugs = document.getElementsByClassName("topRowBug")[0].childNodes;
      let horizontal = 0;

      for(let i = 0; i < 9; i++){
        bugs[i].style.top = "0px";
        bugs[i].style.left = horizontal + "px";
        bugs[i].style.transition = "all " + Math.floor(100 * Math.random()) + 600 + "ms"; //  +" ease 5ms";
        horizontal += Math.floor(windowWidth / 9);
      }
    } 

    window.setTimeout(move, 1000);
  }

  function stinkinThinkin(){
    activityDiv.innerHTML = "";
    
    const iwannitnow = document.createElement("div");
    activityDiv.append(iwannitnow);

    //HEADERS HERE

    iwannitnow.setAttribute("class", "gang-iwannitnow");
    const iwannitnowImg = document.createElement("img");
    iwannitnowImg.setAttribute("class", "gangImg-iwannitnow");
    // iwannitnowImg.src = "src/images/gang-iwannitnow.png";
    iwannitnowImg.setAttribute("src", "src/images/gang-iwannitnow.png");
    iwannitnow.append(iwannitnowImg);
    const iwannitnowTxt = document.createElement("span");
    iwannitnowTxt.setAttribute("class", "gangP-iwannitnow");
    iwannitnowTxt.innerHTML = "Iwannit Now - The leader of the Stinkin' Thinkin' Gang tries to get you to make bad choices by influencing your wants. His plan is to get you to want things NOW--not waiting and not caring about what you have to do or who might get hurt in the process. Once Iwannit Now gets a good hold on you--Biggs Bigger, Lil Fib and other members of the gang can pretty much get you to do anything, no matter how foolish or hurtful it may be.";
    
    
  }






})




// 2319 x 1329 - big
// 1199 x 686 - small
// 1440 x 686 - max
