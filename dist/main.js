/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
addEventListener("DOMContentLoaded", () => {
  // window.addEventListener("DOMContentLoaded", () => {
  const mainObj = document.getElementById("main");
  const home = document.getElementById("home-button");
  const activityDiv = document.getElementById("activity-comp");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  //HOME RESETS
  home.addEventListener("click", () => {
    activityDiv.innerHTML = "";
    document.getElementById("left-arrow").style.display = "none";
    document.getElementById("right-arrow").style.display = "none";
  });

  // Initial hover
  // window.onload = pointer;
  // function pointer() {

  //   const pointerObjs = document.createElement("div");
  //   pointerObjs.id = "pointer-div";
  //   pointerObjs.innerHTML = "<i class='fas fa-hand-pointer point-tools'></i><i class='fas fa-hand-pointer point-car'></i><i class='fas fa-hand-pointer point-fuel'></i>";

  //   const pointSpan = document.createElement("span");
  //   pointSpan.innerHTML = "Click Here";
  //   pointerObjs.append(pointSpan);

  //   mainObj.append(pointerObjs);
  //   setTimeout(() => mainObj.removeChild(pointerObjs), 5000);
  // }

  //   //EVENT LISTENERS - MAIN PAGE
  const greenCar = document.getElementsByClassName("green-car")[0];
  greenCar.addEventListener("click", tacoBoutIt);
  greenCar.addEventListener("mouseover", () => {
    //car smoke animation
    const smoke = document.createElement("div");
    smoke.id = "smoke";
    smoke.innerHTML = "<span class='smoke0'></span><span class='smoke1'></span><span class='smoke2'></span><span class='smoke3'></span><span class='smoke4'></span><span class='smoke5'></span><span class='smoke6'></span><span class='smoke7'></span><span class='smoke8'></span><span class='smoke9'></span>";
    greenCar.parentNode.insertBefore(smoke, greenCar.nextSibling);
    hoverDisplay("RETHINK", "Let's Process and solve our problems.");
  });
  greenCar.addEventListener("mouseleave", () => {
    removeHover();
    greenCar.nextSibling.remove();
  });
  const toolSet = document.getElementsByClassName("tools")[0];
  toolSet.addEventListener("click", repair);
  toolSet.addEventListener("mouseover", () => hoverDisplay("RESET", "Sometimes we just have to stop and take a break from everything. Let's cool down."));
  toolSet.addEventListener("mouseleave", removeHover);
  const fuel = document.getElementsByClassName("fuel")[0];
  fuel.addEventListener("click", recharge);
  fuel.addEventListener("mouseover", () => hoverDisplay("RECHARGE", "Let's give ourselves the tools we need to be successful using tools that work best for us."));
  fuel.addEventListener("mouseleave", removeHover);

  //   //ACTIVITY ICONS === should these be buttons?
  const paintBrushIcon = document.createElement("div");
  paintBrushIcon.innerHTML = '<i class="fas fa-paint-brush icon-paint"></i>';
  paintBrushIcon.addEventListener("click", paint);
  const bugsMeIcon = document.createElement("div");
  bugsMeIcon.innerHTML = '<i class="fas fa-bug icon-bug"></i>';
  // bugsMeIcon.addEventListener("click", bug);

  const stinkinGangIcon = document.createElement("div");
  stinkinGangIcon.innerHTML = '<i class="fas fa-user-ninja icon-gang"></i>';
  stinkinGangIcon.addEventListener("click", stinkinThinkin);
  const feelingsIcon = document.createElement("div");
  feelingsIcon.innerHTML = '<i class="far fa-meh icon-feelings"></i>';
  feelingsIcon.addEventListener("click", feelings);
  const selfControlIcon = document.createElement("div");
  selfControlIcon.innerHTML = '<i class="fas fa-fist-raised icon-self-control"></i>';
  selfControlIcon.addEventListener("click", selfControl);
  const problemSolveIcon = document.createElement("div");
  problemSolveIcon.innerHTML = '<i class="far fa-lightbulb icon-problem-solve"></i>';
  problemSolveIcon.addEventListener("click", problemSolving);
  const assertiveCommIcon = document.createElement("div");
  assertiveCommIcon.innerHTML = '<i class="far fa-comments icon-assert-comm"></i>';
  assertiveCommIcon.addEventListener("click", assertiveCommunication);
  const iCanControlIcon = document.createElement("div");
  iCanControlIcon.innerHTML = '<i class="fas fa-gamepad icon-ican-control"></i>';
  iCanControlIcon.addEventListener("click", iCanControl);
  const deepBreathingIcon = document.createElement("div");
  deepBreathingIcon.innerHTML = '<i class="fas fa-lungs icon-deep-breathing"></i>';
  deepBreathingIcon.addEventListener("click", deepBreathing);
  const selfTalkIcon = document.createElement("div");
  selfTalkIcon.innerHTML = '<i class="fas fa-user-plus icon-self-talk"></i>';
  selfTalkIcon.addEventListener("click", selfTalk);

  //   //MAIN COMPONENTS
  function repair() {
    const repairDiv = document.createElement("div");
    repairDiv.setAttribute("id", "repair-div");
    activityDiv.append(repairDiv);
    repairDiv.append(bugsMeIcon);
  }
  function recharge() {
    const rechargeDiv = document.createElement("div");
    rechargeDiv.setAttribute("id", "recharge-div");
    activityDiv.append(rechargeDiv);
    rechargeDiv.append(bugsMeIcon);
    // rechargeDiv.append(paintBrushIcon);
    rechargeDiv.append(stinkinGangIcon);
    rechargeDiv.append(feelingsIcon);
    rechargeDiv.append(selfControlIcon);
    rechargeDiv.append(problemSolveIcon);
    rechargeDiv.append(assertiveCommIcon);
    rechargeDiv.append(iCanControlIcon);
    rechargeDiv.append(deepBreathingIcon);
    rechargeDiv.append(selfTalkIcon);
  }

  //   //ACTIVITIES - REMOVE AND MOVE SOMEWHERE ELSE LATER
  function paint() {
    activityDiv.innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
  }

  //Functions for use:
  //shuffle scenarios with Fisher-Yates (Knuth) Shuffle
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  function hoverDisplay(text, subText) {
    const hoverDiv = document.createElement("div");
    hoverDiv.id = "hover-text";
    const hoverText = document.createElement("p");
    hoverText.innerHTML = text;
    hoverDiv.append(hoverText);
    const hoverSub = document.createElement("p");
    hoverSub.innerHTML = subText;
    hoverDiv.append(hoverSub);
    mainObj.append(hoverDiv);
  }
  function removeHover() {
    mainObj.removeChild(mainObj.lastChild);
  }

  //   function bug(e, currTab = 0){
  //     activityDiv.innerHTML = "";
  //     const bugDiv = document.createElement("div");
  //       bugDiv.id = "bug-div";
  //     activityDiv.append(bugDiv);
  //     const mainBug = document.createElement("img"); // for first two bug images

  //     switch (currTab) {
  //       case 1:
  //         bugDiv.innerHTML = "<h1>Things I Do That May Bug Others</h1>";
  //         mainBug.src = mainBug.src = "src/images/honeybee.png";
  //         mainBug.id = "bug-obj";
  //         bugDiv.append(mainBug);

  //         for (let i = 0; i < 6; i++) {
  //           const textbox = document.createElement("input");
  //           textbox.setAttribute("type", "text");
  //           textbox.setAttribute("class", "ibug-" + i);
  //           bugDiv.append(textbox);
  //         }
  //         break;
  //       case 2:
  //         bugDiv.innerHTML = "<h1>When Something Bugs Me, I Can Say</h1>";

  //         // const bugScript = document.createElement("script");
  //         // bugScript.type = "text/javascript";
  //         // bugScript.src = "src/scripts/Auz-Bug-8e27908/bug.js";
  //         // bugScript.onload = bugScript.onreadystatechange = function(){
  //         //   new BugController({});
  //         //   new SpiderController({});
  //         // }
  //         // bugDiv.append(bugScript);

  //         // const credit = document.createElement("span");
  //         // credit.innerHTML = "https://auz.github.io/Bug/";
  //         // credit.className = "bug-give-credit";
  //         // bugDiv.append(credit);

  //         break;
  //       case 3:
  //         bugDiv.innerHTML = "<h1>Scenarios</h1>";

  //         break;
  //       default:
  //         bugDiv.innerHTML = "<h1>Things That Bug Me</h1>";
  //         mainBug.src = "src/images/ladybug.png";
  //         mainBug.id = "bug-obj";
  //         bugDiv.append(mainBug);

  //         //things that bug me textboxes
  //         for (let i = 0; i < 6; i++) {
  //           const textbox = document.createElement("input");
  //           textbox.setAttribute("type", "text");
  //           textbox.setAttribute("class", "bugsme-" + i);
  //           bugDiv.append(textbox);
  //         }

  //         let bugLine = "";
  //         for (let i = 1; i < 10; i++) {
  //           const bug = `<img src="src/images/bug${i}.png" class="bug${i}">`;
  //           bugLine += bug;
  //         }

  //         const topRowDiv = document.createElement("div");
  //         topRowDiv.setAttribute("class", "topRowBug");
  //         topRowDiv.innerHTML = bugLine;
  //         bugDiv.append(topRowDiv);

  //         const bottomRowDiv = document.createElement("div");
  //         bottomRowDiv.setAttribute("class", "bottomRowBug");
  //         bottomRowDiv.innerHTML = bugLine;
  //         bugDiv.append(bottomRowDiv);

  //         for (let i = 1; i < 10; i++) {
  //           const tbug = document.getElementsByClassName(`bug${i}`)[0];
  //           tbug.style.top = Math.random() * windowHeight + "px";
  //           tbug.style.left = Math.random() * windowWidth + "px";

  //           const bbug = document.getElementsByClassName(`bug${i}`)[1];
  //           bbug.style.bottom = Math.random() * windowHeight + "px";
  //           bbug.style.left = Math.random() * windowWidth + "px";

  //           //flip images for travel direction
  //           if (parseInt(tbug.style.left) < (windowWidth * (i-1) / 9 )) {
  //             tbug.style.transform = "scaleX(-1)";
  //           }

  //           if (parseInt(bbug.style.left) < (windowWidth * (-i + 9) / 9 )) {
  //             bbug.style.transform = "scaleX(-1)";
  //           }

  //         }

  //         function move() {
  //           const bugs = document.getElementsByClassName("topRowBug")[0].childNodes;
  //           const bbugs = document.getElementsByClassName("bottomRowBug")[0].childNodes;
  //           let horizontal = 0;

  //           for (let i = 0; i < 9; i++) {
  //             bugs[i].style.top = "-13px";
  //             bugs[i].style.left = horizontal + "px";
  //             bugs[i].style.transition =
  //               "all " + Math.floor(100 * Math.random()) + 600 + "ms"; //  +" ease 5ms";

  //             const j = i * -1 + 8;
  //             bbugs[j].style.bottom = "-1vh";
  //             bbugs[j].style.left = horizontal + "px";
  //             bbugs[j].style.transition =
  //               "all " + Math.floor(100 * Math.random()) + 600 + "ms";

  //             horizontal += (windowWidth / 8.5);
  //           }
  //         }
  //         window.setTimeout(move, 1000);
  //     }

  // //Tabs
  // (currTab <= 0) ? leftArrow.style.display = "none" : leftArrow.style.display = "block";
  // (currTab >= 2) ? rightArrow.style.display = "none" : rightArrow.style.display = "block";

  //     leftArrow.addEventListener("click", () => bug("e", currTab -= 1)); 
  //     rightArrow.addEventListener("click", () => bug("e", currTab += 1)); 

  //   }

  function stinkinThinkin() {
    activityDiv.innerHTML = "";
    const gangMainDiv = document.createElement("div");
    gangMainDiv.id = "gangMainDiv";
    activityDiv.append(gangMainDiv);
    gangMainDiv.innerHTML = "<h1>THE STINK'N THINK'N GANG</h1><h4>Your Worst Enemies</h4>";
    const gangWrapper = document.createElement("div");
    gangWrapper.id = "gangWrapper";
    gangMainDiv.append(gangWrapper);
    const iwannitnow = document.createElement("div");
    iwannitnow.setAttribute("class", "gangDiv-iwannitnow");
    gangWrapper.append(iwannitnow);
    const iwannitnowImg = document.createElement("img");
    iwannitnowImg.setAttribute("class", "gangImg-iwannitnow");
    iwannitnowImg.setAttribute("src", "src/images/gang-iwannitnow.png");
    iwannitnow.append(iwannitnowImg);
    const iwannitnowTxt = document.createElement("span");
    iwannitnowTxt.innerHTML = "Iwannit Now - The leader of the Stinkin' Thinkin' Gang tries to get you to make bad choices by influencing your wants. His plan is to get you to want things NOW--not waiting and not caring about what you have to do or who might get hurt in the process. Once Iwannit Now gets a good hold on you--Biggs Bigger, Lil Fib and other members of the gang can pretty much get you to do anything, no matter how foolish or hurtful it may be.";
    iwannitnow.append(iwannitnowTxt);
    const biggsBigger = document.createElement("div");
    biggsBigger.setAttribute("class", "gangDiv-biggsBigger");
    gangWrapper.append(biggsBigger);
    const biggsBiggerImg = document.createElement("img");
    biggsBiggerImg.setAttribute("class", "gangImg-biggsBigger");
    biggsBiggerImg.setAttribute("src", "src/images/gang-biggsbigger.png");
    biggsBigger.append(biggsBiggerImg);
    const biggsBiggerTxt = document.createElement("span");
    biggsBiggerTxt.innerHTML = "Biggs Bigger - He works closely with Iwannit Now. This guy makes things seem more attractive, more important, more valuable, more desirable, more necessary, more urgent and even more frightening than they really are. He tries to get you to blow things so far out of proportion you can no longer properly judge their true value or worth. In doing so, he robs you of your ability to make choices.";
    biggsBigger.append(biggsBiggerTxt);
    const eencyWeency = document.createElement("div");
    eencyWeency.setAttribute("class", "gangDiv-eencyWeency");
    gangWrapper.append(eencyWeency);
    const eencyWeencyImg = document.createElement("img");
    eencyWeencyImg.setAttribute("class", "gangImg-eencyWeency");
    eencyWeencyImg.setAttribute("src", "src/images/gang-eencyweency.png");
    eencyWeency.append(eencyWeencyImg);
    const eencyWeencyTxt = document.createElement("span");
    eencyWeencyTxt.innerHTML = "Eency Weency Tiny Too - He tries to make you think things are less important than they really are. He'll try to make you think things are less valuable, less necessary, less urgent and less serious than they really are. For example, he will try to convince you that using drugs is no big deal and going to jail isn't really that bad.";
    eencyWeency.append(eencyWeencyTxt);
    const lilFib = document.createElement("div");
    lilFib.setAttribute("class", "gangDiv-lilFib");
    gangWrapper.append(lilFib);
    const lilFibImg = document.createElement("img");
    lilFibImg.setAttribute("class", "gangImg-lilFib");
    lilFibImg.setAttribute("src", "src/images/gang-lilfib.png");
    lilFib.append(lilFibImg);
    const lilFibTxt = document.createElement("span");
    lilFibTxt.innerHTML = "Lil Fib - She tries to make you believe things that aren't true. She will try to get you to lie to others and others to lie to you so neither of you know what to believe or do. She's at her best when she gets you to lie to yourself. She does this by getting you to justify doing things you know are wrong or to believe things that will hurt you.";
    lilFib.append(lilFibTxt);
    const nameitBlameit = document.createElement("div");
    nameitBlameit.setAttribute("class", "gangDiv-nameitBlameit");
    gangWrapper.append(nameitBlameit);
    const nameitBlameitImg = document.createElement("img");
    nameitBlameitImg.setAttribute("class", "gangImg-nameitBlameit");
    nameitBlameitImg.setAttribute("src", "src/images/gang-nameblame.png");
    nameitBlameit.append(nameitBlameitImg);
    const nameitBlameitTxt = document.createElement("span");
    nameitBlameitTxt.innerHTML = "Nameit Blameit - Tries to get you to blame other people or other things for your own behavior. For example, if you hurt someone else, he will try to get you to blame the other person for getting you angry. Nameit Blameit will also try to get you to put labels on people or ideas and make you believe that if you know the name, you know the person or understand the idea. If you let him, he will make it nearly impossible for you to think clearly and take responsibility for your own life.";
    nameitBlameit.append(nameitBlameitTxt);
    const judgeBFore = document.createElement("div");
    judgeBFore.setAttribute("class", "gangDiv-judgeBFore");
    gangWrapper.append(judgeBFore);
    const judgeBForeImg = document.createElement("img");
    judgeBForeImg.setAttribute("class", "gangImg-judgeBFore");
    judgeBForeImg.setAttribute("src", "src/images/gang-judgebfore.png");
    judgeBFore.append(judgeBForeImg);
    const judgeBForeTxt = document.createElement("span");
    judgeBForeTxt.innerHTML = "Judge B. Fore - Works closely with Nameit Blameit. He tries to get you to judge the worth of things before you know how much about them. He also gets you to assume the worst is going to happen in every situation causing you to give up or worse, not try at all. For example, 'I always fail math. Why bother studying at all!'";
    judgeBFore.append(judgeBForeTxt);
  }
  function feelings() {
    activityDiv.innerHTML = "";
    const feelingsDiv = document.createElement("div");
    feelingsDiv.className = "feelingsDiv";
    activityDiv.append(feelingsDiv);
    const feelingsWrapper = document.createElement("div");
    feelingsWrapper.className = "feelings-wrapper";
    feelingsDiv.append(feelingsWrapper);
    let data; //dragged element
    let currData; //current face, for face switch
    const emotions = ["happy", "excited", "sad", "surprised", "scared", "angry", "tired", "frustrated", "embarrassed", "shy", "worried", "blank"];
    for (let i = 0; i < emotions.length; i++) {
      const face = document.createElement("img");
      face.src = "src/images/emotions-img/lego-".concat(emotions[i], ".png");
      face.addEventListener("dragstart", event => {
        data = event.target;
      }, false);
      feelingsWrapper.append(face);
    }
    const bodyWrapper = document.createElement("div");
    bodyWrapper.className = "feelings-body";
    feelingsDiv.append(bodyWrapper);
    bodyWrapper.innerHTML = "<h2>Today I Feel...</h2>";
    const placeHeadDiv = document.createElement("div");
    bodyWrapper.append(placeHeadDiv);
    placeHeadDiv.addEventListener("dragover", event => event.preventDefault(), false);
    placeHeadDiv.addEventListener("dragenter", event => event.target.style.background = "gray", false);
    placeHeadDiv.addEventListener("drop", event => {
      event.preventDefault();
      if (currData) placeHeadDiv.removeChild(placeHeadDiv.lastChild);
      placeHeadDiv.appendChild(data.cloneNode());
      event.target.style.background = "";
      placeHeadDiv.style.background = "";
      currData = data;
    }, false);
    const bodyImg = document.createElement("img");
    bodyImg.src = "src/images/emotions-img/lego-body.png";
    bodyWrapper.append(bodyImg);
  }
  function selfControl() {
    activityDiv.innerHTML = "";
    const selfControlDiv = document.createElement("div");
    selfControlDiv.innerHTML = "<h1>FOUR STEPS TO SELF-CONTROL</h1>";
    selfControlDiv.className = "self-control-div";
    activityDiv.append(selfControlDiv);
    const selfControlWrapper = document.createElement("div");
    selfControlWrapper.className = "self-control-wrapper";
    selfControlDiv.append(selfControlWrapper);
    const stepOne = document.createElement("div");
    stepOne.className = "self-control-step-one";
    selfControlWrapper.append(stepOne);
    const stepOneImg = document.createElement("img");
    stepOneImg.src = "src/images/control-stop.png";
    stepOne.append(stepOneImg);
    stepOneDiv = document.createElement("div");
    stepOneDiv.innerHTML = "<h5>Step 1: Stop and Calm Down</h5>";
    stepOne.append(stepOneDiv);
    stepOneSpan = document.createElement("span");
    stepOneSpan.innerHTML = "Calm down your body by taking some deep breaths. Calm down your mind by saying to yourself.";
    stepOneDiv.append(stepOneSpan);
    stepOneUL = document.createElement("ul");
    const s1l1 = "<li>'I won't blow up.'  or</li>";
    const s1l2 = "<li>'I won't get myself in trouble.'  or</li>";
    const s1l3 = "<li>'I can control myself.'</li>";
    stepOneUL.innerHTML = s1l1 + s1l2 + s1l3;
    stepOneDiv.append(stepOneUL);
    const stepTwo = document.createElement("div");
    stepTwo.className = "self-control-step-two";
    selfControlWrapper.append(stepTwo);
    const stepTwoImg = document.createElement("img");
    stepTwoImg.src = "src/images/control-think.png";
    stepTwo.append(stepTwoImg);
    stepTwoDiv = document.createElement("div");
    stepTwoDiv.innerHTML = "<h5>Step 2: THINK</h5>";
    stepTwo.append(stepTwoDiv);
    stepTwoSpan = document.createElement("span");
    stepTwoSpan.innerHTML = "Think about: ";
    stepTwoDiv.append(stepTwoSpan);
    stepTwoUL = document.createElement("ul");
    const s2l1 = "<li>What will happen if you lose your temper.</li>";
    const s2l2 = "<li>Whether you should stay, ignore, or walk away.</li>";
    stepTwoUL.innerHTML = s2l1 + s2l2;
    stepTwoDiv.append(stepTwoUL);
    const stepThree = document.createElement("div");
    stepThree.className = "self-control-step-three";
    selfControlWrapper.append(stepThree);
    const stepThreeImg = document.createElement("img");
    stepThreeImg.src = "src/images/control-talk.png";
    stepThree.append(stepThreeImg);
    stepThreeDiv = document.createElement("div");
    stepThreeDiv.innerHTML = "<h5>Step 3: Talk</h5>";
    stepThree.append(stepThreeDiv);
    stepThreeSpan = document.createElement("span");
    stepThreeSpan.innerHTML = "Talk to the person you're mad at: ";
    stepThreeDiv.append(stepThreeSpan);
    stepThreeUL = document.createElement("ul");
    const s3l1 = "<li>Say what you're mad about</li>";
    const s3l2 = "<li>Say what you want.  Or</li>";
    const s3l3 = "<li>Talk to someone you trust about the problem.</li>";
    stepThreeUL.innerHTML = s3l1 + s3l2 + s3l3;
    stepThreeDiv.append(stepThreeUL);
    const stepFour = document.createElement("div");
    stepFour.className = "self-control-step-four";
    selfControlWrapper.append(stepFour);
    const stepFourImg = document.createElement("img");
    stepFourImg.src = "src/images/control-good.png";
    stepFour.append(stepFourImg);
    stepFourDiv = document.createElement("div");
    stepFourDiv.innerHTML = "<h5>Step 4: Feel GOOD Again</h5>";
    stepFour.append(stepFourDiv);
    stepFourSpan = document.createElement("span");
    stepFourSpan.innerHTML = "Get rid of any anger that's left by: ";
    stepFourDiv.append(stepFourSpan);
    stepFourUL = document.createElement("ul");
    const s4l1 = "<li>Doing something active.</li>";
    const s4l2 = "<li>Doing things you enjoy.</li>";
    const s4l3 = "<li>Doing a relaxation exercise.</li>";
    const s4l4 = "<li>Trying to forgive and forget.</li>";
    stepFourUL.innerHTML = s4l1 + s4l2 + s4l3 + s4l4;
    stepFourDiv.append(stepFourUL);
  }
  function problemSolving(e) {
    let currTab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    activityDiv.innerHTML = "";
    const problemSolvingDiv = document.createElement("div");
    problemSolvingDiv.className = "problem-solve-div";
    problemSolvingDiv.innerHTML = "<h1>Problem Solving:</h1>";
    activityDiv.append(problemSolvingDiv);
    const imgLeft = document.createElement("img");
    imgLeft.src = "src/images/problem-solve-left.jpeg";
    imgLeft.id = "problem-solve-left";
    problemSolvingDiv.append(imgLeft);
    const imgRight = document.createElement("img");
    imgRight.src = "src/images/problem-solve-right.png";
    imgRight.id = "problem-solve-right";
    problemSolvingDiv.append(imgRight);

    //     // USE SVG TO CREATE LITTLE PROBLEM SOLVING MAZE / start -> finish? / race track / circle

    const problemSolvingWrapper = document.createElement("div");
    problemSolvingWrapper.className = "problem-solve-wrapper";
    problemSolvingDiv.append(problemSolvingWrapper);
    const stepOne = "<p class='problem-solve-step-one'>Step 1: What happened?</p>";
    const stepTwo = "<p class='problem-solve-step-two'>Step 2: Why do you think it occurred?</p>";
    const stepThree = "<p class='problem-solve-step-three'>Step 3: My role in the situation?</p>";
    const stepFour = "<p class='problem-solve-step-four'>Step 4: How can I hold myself accountable to reduce how often this occurs?</p>";
    problemSolvingWrapper.innerHTML = stepOne + stepTwo + stepThree + stepFour;
    currTab <= 0 ? leftArrow.style.display = "none" : leftArrow.style.display = "block";
    currTab >= 3 ? rightArrow.style.display = "none" : rightArrow.style.display = "block";
    leftArrow.addEventListener("click", () => problemSolving("e", currTab -= 1));
    rightArrow.addEventListener("click", () => problemSolving("e", currTab += 1));
  }
  function assertiveCommunication(e) {
    let currTab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    activityDiv.innerHTML = "";
    const assertCommDiv = document.createElement("div");
    assertCommDiv.className = "assertive-comm-div";
    activityDiv.append(assertCommDiv);
    const assertCommWrapper = document.createElement("div");
    assertCommWrapper.className = "assertive-comm-wrapper";
    const section1 = document.createElement("section");
    section1.className = "assert-sec-1";
    section1.innerHTML = "<h3>Passive</h3>";
    const section2 = document.createElement("section");
    section2.className = "assert-sec-2";
    section2.innerHTML = "<h3>Aggressive</h3>";
    const section3 = document.createElement("section");
    section3.className = "assert-sec-3";
    section3.innerHTML = "<h3>Assertive</h3>";

    //Drag & Drop Functions
    function drag(event) {
      event.dataTransfer.setData("text", event.target.id);
    }
    function drop(event) {
      event.preventDefault();
      const data = event.dataTransfer.getData("text");
      event.target.append(document.getElementById(data));
    }
    switch (currTab) {
      case 1:
        assertCommDiv.innerHTML = "<h1>Different Ways People Communicate</h1>";
        assertCommDiv.append(assertCommWrapper);
        assertCommWrapper.addEventListener("dragover", event => event.preventDefault(), false);
        assertCommWrapper.addEventListener("drop", event => drop(event), false);
        assertCommWrapper.append(section1);
        section1.classList.add("tab-2");
        section1.addEventListener("dragover", event => event.preventDefault(), false);
        section1.addEventListener("drop", event => drop(event), false);
        assertCommWrapper.append(section2);
        section2.classList.add("tab-2");
        section2.addEventListener("dragover", event => event.preventDefault(), false);
        section2.addEventListener("drop", event => drop(event), false);
        assertCommWrapper.append(section3);
        section3.classList.add("tab-2");
        section3.addEventListener("dragover", event => event.preventDefault(), false);
        section3.addEventListener("drop", event => drop(event), false);

        //NEED TO CHECK DETAILS - DRAGOVER HEADER CAUSES P TO BECOME HEADER
        const scenarios = ["scenario one", "scenario two", "scenario three", "scenario four", "scenario five", "scenario six"];
        for (let i = 0; i < scenarios.length; i++) {
          const scenario = document.createElement("p");
          assertCommWrapper.append(scenario);
          scenario.id = "ac-tab-2-sc-".concat(i);
          scenario.innerHTML = scenarios[i];
          scenario.draggable = "true";
          scenario.addEventListener("dragstart", event => drag(event), false);
        }
        break;
      case 2:
        assertCommDiv.innerHTML = "<h1 class='ac-tab3-hr'>What Are Some Ways We Can Assertively Communicate With Others</h1>";
        assertCommDiv.append(assertCommWrapper);
        assertCommWrapper.classList.add("tab-3");
        const assert1 = "<span class='ac-tab3-1'>I don't like it when you</span>";
        const assert1txt = "<input type='text' class='ac-tab3-txt1'/></br>";
        const assert2 = "<span class='ac-tab3-2'>It makes me feel</span>";
        const assert2txt = "<input type='text' class='ac-tab3-txt2'/></br>";
        const assert3 = "<p class='ac-tab3-3'>Please don't do that.</p>";
        assertCommWrapper.innerHTML = assert1 + assert1txt + assert2 + assert2txt + assert3;
        const communication = ["I feel", "When", "Can you please", "Then we can/I can", "I feel", "Because", "I would like", "I feel", "When", "Because", "What I want or need is"];
        for (let i = 0; i < communication.length; i++) {
          const text = document.createElement("span");
          text.innerHTML = communication[i];
          text.className = "ac-tab3-sec2-".concat(i);
          assertCommWrapper.append(text);
          const input = document.createElement("input");
          input.type = "text";
          input.className = "ac-tab3-sec2-txt".concat(i);
          assertCommWrapper.append(input);
          assertCommWrapper.append(document.createElement("br"));
        }
        const assertComEnd = "<p class='ac-tab3-end1'>Examples:</p><p class='ac-tab3-end2'> - 'Leave me alone!'</p><p class='ac-tab3-end3'> - 'I' statement response: 'I feel frustrated and annoyed when I am reminded over and over to do my homework.'</p>";
        const assertComEndDiv = document.createElement("div");
        assertComEndDiv.innerHTML = assertComEnd;
        assertCommWrapper.append(assertComEndDiv);
        break;
      case 3:
        assertCommDiv.innerHTML = "<h1>TAB FOUR NOT DETERMINED YET</h1>";
        assertCommDiv.append(assertCommWrapper);
        break;
      default:
        assertCommDiv.innerHTML = "<h1>Assertive Communication</h1>";
        assertCommDiv.append(assertCommWrapper);
        assertCommWrapper.append(section1);
        const passiveTxt = document.createElement("p");
        passiveTxt.innerHTML = "HERE IS THE PASSIVE TEXT SCENARIO";
        section1.append(passiveTxt);
        const passiveImg = document.createElement("img");
        passiveImg.src = "src/images/assert-comm-passive2.png";
        section1.append(passiveImg);
        assertCommWrapper.append(section2);
        const aggressiveTxt = document.createElement("p");
        aggressiveTxt.innerHTML = "HERE IS THE AGGRESSIVE TEXT SCENARIO";
        section2.append(aggressiveTxt);
        const aggressiveImg = document.createElement("img");
        aggressiveImg.src = "src/images/assert-comm-aggressive.png";
        section2.append(aggressiveImg);
        assertCommWrapper.append(section3);
        const assertiveTxt = document.createElement("p");
        assertiveTxt.innerHTML = "HERE IS THE ASSERTIVE TEXT SCENARIO";
        section3.append(assertiveTxt);
        const assertiveImg = document.createElement("img");
        assertiveImg.src = "src/images/assert-comm-assertive2.png";
        section3.append(assertiveImg);
    }
    currTab <= 0 ? leftArrow.style.display = "none" : leftArrow.style.display = "block";
    currTab >= 2 ? rightArrow.style.display = "none" : rightArrow.style.display = "block";
    leftArrow.addEventListener("click", () => assertiveCommunication("e", currTab -= 1));
    rightArrow.addEventListener("click", () => assertiveCommunication("e", currTab += 1));
  }
  function iCanControl(e) {
    let currTab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    activityDiv.innerHTML = "";
    const iCanControlDiv = document.createElement("div");
    iCanControlDiv.id = "ican-control-div";
    activityDiv.append(iCanControlDiv);
    const iCanControlWrapper = document.createElement("div");
    iCanControlWrapper.id = "ican-control-wrapper";
    switch (currTab) {
      case 1:
        iCanControlDiv.innerHTML = "<h1>Ways to Respond: Inside and Outside Our Control</h1>";
        iCanControlDiv.append(iCanControlWrapper);
        break;
      default:
        iCanControlDiv.append(iCanControlWrapper);
        let data;
        const cantControl = document.createElement("div");
        cantControl.className = "cant-control-div";
        cantControl.innerHTML = "<h3>Things OUTSIDE My Control</h3>";
        iCanControlWrapper.append(cantControl);
        cantControl.addEventListener("dragover", event => event.preventDefault(), false);
        cantControl.addEventListener("drop", event => {
          event.preventDefault();
          cantControl.appendChild(data);
          data.style.removeProperty('top');
        }, false);
        const canControl = document.createElement("div");
        canControl.className = "can-control-div";
        canControl.innerHTML = "<h3>Things I CAN Control</h3>";
        iCanControlWrapper.append(canControl);
        canControl.addEventListener("dragover", event => event.preventDefault(), false);
        canControl.addEventListener("drop", event => {
          event.preventDefault();
          canControl.appendChild(data);
          data.style.removeProperty('top');
        }, false);
        const controlItems = ["Other People's Actions", "My Actions", "Other People's Words", "My Words", "Other People's Play", "My Play", "Other People's Behavior", "My Effort", "Other People's Mistakes", "My Mistakes", "Other People's Feelings", "Other People's Ideas", "My Behavior"];
        // const controlItems = ["Other People's Actions", "My Actions", "Other People's Words", "My Words", "Other People's Play", "My Play", "Other People's Behavior", "My Effort", "Other People's Mistakes", "My Mistakes", "Other People's Feelings", "Other People's Ideas", "My Behavior", "scenario1", "scenario2", "scenario3", "scenario4", "scenario5", "scenario6", "scenario7", "scenario8", "scenario9", "scenario10", "scenario11", "scenario12", "scenario13",]

        let vertical = 0;
        for (let i = 0; i < controlItems.length; i++) {
          const item = document.createElement("p");
          item.innerHTML = controlItems[i];
          item.className = "control-item-".concat(i);
          item.style.top = vertical + "px";
          if (i % 2 !== 0) vertical += 30;
          iCanControlWrapper.append(item);
          item.draggable = "true";
          item.addEventListener("dragstart", event => data = event.target, false);
        }
    }
    currTab <= 0 ? leftArrow.style.display = "none" : leftArrow.style.display = "block";
    currTab >= 1 ? rightArrow.style.display = "none" : rightArrow.style.display = "block";
    leftArrow.addEventListener("click", () => iCanControl("e", currTab -= 1));
    rightArrow.addEventListener("click", () => iCanControl("e", currTab += 1));
  }
  function deepBreathing() {
    activityDiv.innerHTML = "";
    const deepBreathingDiv = document.createElement("div");
    deepBreathingDiv.id = "deep-breathe-div";
    activityDiv.append(deepBreathingDiv);
    const deepBreathingWrapper = document.createElement("div");
    deepBreathingWrapper.id = "deep-breathe-wrapper";
    deepBreathingDiv.innerHTML = "<h1>Let's Practice Deep Breathing</h1>";
    deepBreathingDiv.append(deepBreathingWrapper);
    const breatheSecOne = document.createElement("section");
    breatheSecOne.innerHTML = "<div class='deep-breathe-div-one'><span>I smell a flower.</span><span>1 - 2 - 3 - 4 - 5</span></div>";
    const breatheImgOne = document.createElement("img");
    breatheImgOne.src = "src/images/deep-breathe-smell.jpg";
    breatheImgOne.className = "deep-breathe-img-one";
    breatheSecOne.append(breatheImgOne);
    deepBreathingWrapper.append(breatheSecOne);
    breatheSecOne.addEventListener("click", count); ///////

    const breatheSecTwo = document.createElement("section");
    breatheSecTwo.innerHTML = "<div class='deep-breathe-div-two'><span>I hold my breath.</span><span>1 - 2 - 3</span></div>";
    const breatheImgTwo = document.createElement("img");
    breatheImgTwo.src = "src/images/deep-breathe-hold.jpg";
    breatheImgTwo.className = "deep-breathe-img-two";
    breatheSecTwo.append(breatheImgTwo);
    deepBreathingWrapper.append(breatheSecTwo);
    breatheSecTwo.addEventListener("click", countTwo); ///////

    const breatheSecThree = document.createElement("section");
    breatheSecThree.innerHTML = "<div class='deep-breathe-div-three'><span>I blow bubbles.</span><span>1 - 2 - 3 - 4 - 5</span></div>";
    const breatheImgThree = document.createElement("img");
    breatheImgThree.src = "src/images/deep-breathe-blow.jpg";
    breatheImgThree.className = "deep-breathe-img-three";
    breatheSecThree.append(breatheImgThree);
    deepBreathingWrapper.append(breatheSecThree);
    breatheSecThree.addEventListener("click", count); ///////

    function count() {
      const modal = document.createElement("div");
      modal.id = "deep-breathe-modal";
      const words = ["Ready?", "", "Breathe In: 1", "2", "3", "4", "5", "Hold: 1", "2", "3", "Breathe Out: 1", "2", "3", "4", "5", "Great Job!"];
      deepBreathingDiv.append(modal);
      let counter = 0;
      const iterator = setInterval(() => {
        modal.innerHTML = words[counter];
        counter += 1;
        if (counter >= words.length + 1) {
          clearInterval(iterator);
          deepBreathingDiv.removeChild(modal);
        }
      }, 1005);
    }
    function countTwo() {
      const modalTwo = document.createElement("div");
      modalTwo.id = "deep-breathe-modal-two";
      const giphy = document.createElement("img");
      giphy.src = "https://media.giphy.com/media/zzwt3TRTaULv2/source.gif";
      modalTwo.append(giphy);
      const linkToGif = document.createElement("span");
      linkToGif.innerHTML = '<a href="https://giphy.com/gifs/take-deep-breathe-zzwt3TRTaULv2">via GIPHY</a>';
      modalTwo.append(linkToGif);
      deepBreathingDiv.append(modalTwo);
      setTimeout(() => deepBreathingDiv.removeChild(modalTwo), 17000);
    }
    function countThree() {} //TBD
  }
  function selfTalk() {
    activityDiv.innerHTML = "";
    const selfTalkDiv = document.createElement("div");
    selfTalkDiv.id = "self-talk-div";
    activityDiv.append(selfTalkDiv);
    const selfTalkLeft = document.createElement("div");
    selfTalkLeft.id = "self-talk-left";
    selfTalkLeft.innerHTML = "<h1>Positive Self Talk</h1>";
    selfTalkDiv.append(selfTalkLeft);
    const talkLeftWrapper = document.createElement("div");
    talkLeftWrapper.id = "self-talk-left-wrapper";
    selfTalkLeft.append(talkLeftWrapper);
    const selfTalkImg = document.createElement("img");
    selfTalkImg.src = "src/images/self-talk.jpg";
    talkLeftWrapper.append(selfTalkImg);
    let selectedColor = "green";
    let currColor;
    let clicked = false;

    // scenarios here
    const scenarios = ["Just let it go. It's not a big deal!", "This ALWAYS happens to me! It's not fair!", "They just makes me so mad. I should hit them.", "Be the bigger person and walk away.", "No one - and I mean NO ONE - talks to me that way!!!", "I don't want to do or say something I'll regret. Let me try to calm down!", "They're just trying to make me mad. It's not going to work!", "Think about what the consequences will be!", "I can't let them get away with it! They have to pay!", "As long as I stay calm, I'm in control.", "If he says one more thing, I'm going to explode!", "The last time this happened, I got in trouble. Let me do something different."];
    shuffle(scenarios);
    for (let i = 0; i < scenarios.length; i++) {
      const scenarioItem = document.createElement("span");
      scenarioItem.innerHTML = scenarios[i];
      talkLeftWrapper.append(scenarioItem);
      scenarioItem.addEventListener("mouseover", highlightColor);
      scenarioItem.addEventListener("mouseleave", removeHighlight);
      scenarioItem.addEventListener("click", paintColor);
    }
    const selfTalkRight = document.createElement("nav");
    selfTalkRight.id = "self-talk-right";
    selfTalkDiv.append(selfTalkRight);
    const instructions = document.createElement("div");
    instructions.id = "self-talk-instructions";
    instructions.innerHTML = "<span>Positive self-talk is when you say positive things to yourself that can help calm you down rather than make you angrier. Look at the examples below. Color the examples of Positive Self-Talk </span><span id='self-talk-green'>GREEN</span><span> and Negative Self-Talk </span><span id='self-talk-orange'>ORANGE</span>!";
    selfTalkRight.append(instructions);
    const greenPaint = document.createElement("div");
    greenPaint.innerHTML = '<i class="fas fa-paint-roller" id="self-talk-green"></i>';
    greenPaint.className = "selfTalkChosen";
    selfTalkRight.append(greenPaint);
    greenPaint.addEventListener("click", () => {
      selectedColor = "green";
      greenPaint.className = "selfTalkChosen";
      orangePaint.className = "";
    }), false;
    const orangePaint = document.createElement("div");
    orangePaint.innerHTML = '<i class="fas fa-paint-roller" id="self-talk-orange"></i>';
    selfTalkRight.append(orangePaint);
    orangePaint.addEventListener("click", () => {
      selectedColor = "orange";
      orangePaint.className = "selfTalkChosen";
      greenPaint.className = "";
    }, false);

    //functions for paint
    function highlightColor(e) {
      if (selectedColor) {
        currColor = e.target.style.backgroundColor;
        e.target.style.backgroundColor = selectedColor;
      }
    }
    function removeHighlight(e) {
      if (clicked) clicked = false;else {
        e.target.style.backgroundColor = currColor;
        clicked = false;
      }
    }
    function paintColor(e) {
      e.target.style.backgroundColor = selectedColor;
      clicked = true;
    }
  }
  function coolDownFold(e) {}
  function tacoBoutIt(e) {
    activityDiv.innerHTML = "";
    const selfTalkDiv = document.createElement("div");
    selfTalkDiv.id = "self-talk-div";
    activityDiv.append(selfTalkDiv);
  }
});

// // 2319 x 1329 - big
// // 1199 x 686 - small
// // 1440 x 686 - max
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNnRCxNQUFNLENBQUNnSyxXQUFXLENBQUM7RUFDakM7QUFFRixDQUFDLENBQUM7O0FBS0Y7QUFDQTtBQUNBLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwYWlyLXNob3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgbWFpbk9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idXR0b25cIik7XG4gIGNvbnN0IGFjdGl2aXR5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpdml0eS1jb21wXCIpO1xuXG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWFycm93XCIpO1xuICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1hcnJvd1wiKTtcblxuICAvL0hPTUUgUkVTRVRTXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhY3Rpdml0eURpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1hcnJvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1hcnJvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pXG5cblxuICAvLyBJbml0aWFsIGhvdmVyXG4gIC8vIHdpbmRvdy5vbmxvYWQgPSBwb2ludGVyO1xuICAvLyBmdW5jdGlvbiBwb2ludGVyKCkge1xuICAgIFxuICAvLyAgIGNvbnN0IHBvaW50ZXJPYmpzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICBwb2ludGVyT2Jqcy5pZCA9IFwicG9pbnRlci1kaXZcIjtcbiAgLy8gICBwb2ludGVyT2Jqcy5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtaGFuZC1wb2ludGVyIHBvaW50LXRvb2xzJz48L2k+PGkgY2xhc3M9J2ZhcyBmYS1oYW5kLXBvaW50ZXIgcG9pbnQtY2FyJz48L2k+PGkgY2xhc3M9J2ZhcyBmYS1oYW5kLXBvaW50ZXIgcG9pbnQtZnVlbCc+PC9pPlwiO1xuXG4gIC8vICAgY29uc3QgcG9pbnRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIC8vICAgcG9pbnRTcGFuLmlubmVySFRNTCA9IFwiQ2xpY2sgSGVyZVwiO1xuICAvLyAgIHBvaW50ZXJPYmpzLmFwcGVuZChwb2ludFNwYW4pO1xuICAgIFxuICAvLyAgIG1haW5PYmouYXBwZW5kKHBvaW50ZXJPYmpzKTtcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IG1haW5PYmoucmVtb3ZlQ2hpbGQocG9pbnRlck9ianMpLCA1MDAwKTtcbiAgLy8gfVxuXG5cblxuXG5cbi8vICAgLy9FVkVOVCBMSVNURU5FUlMgLSBNQUlOIFBBR0VcbiAgY29uc3QgZ3JlZW5DYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JlZW4tY2FyXCIpWzBdO1xuICBncmVlbkNhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFjb0JvdXRJdCk7XG4gIGdyZWVuQ2FyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIC8vY2FyIHNtb2tlIGFuaW1hdGlvblxuICAgIGNvbnN0IHNtb2tlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzbW9rZS5pZCA9IFwic21va2VcIjtcbiAgICAgIHNtb2tlLmlubmVySFRNTCA9IFwiPHNwYW4gY2xhc3M9J3Ntb2tlMCc+PC9zcGFuPjxzcGFuIGNsYXNzPSdzbW9rZTEnPjwvc3Bhbj48c3BhbiBjbGFzcz0nc21va2UyJz48L3NwYW4+PHNwYW4gY2xhc3M9J3Ntb2tlMyc+PC9zcGFuPjxzcGFuIGNsYXNzPSdzbW9rZTQnPjwvc3Bhbj48c3BhbiBjbGFzcz0nc21va2U1Jz48L3NwYW4+PHNwYW4gY2xhc3M9J3Ntb2tlNic+PC9zcGFuPjxzcGFuIGNsYXNzPSdzbW9rZTcnPjwvc3Bhbj48c3BhbiBjbGFzcz0nc21va2U4Jz48L3NwYW4+PHNwYW4gY2xhc3M9J3Ntb2tlOSc+PC9zcGFuPlwiXG4gICAgZ3JlZW5DYXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc21va2UsIGdyZWVuQ2FyLm5leHRTaWJsaW5nKTtcbiAgICBob3ZlckRpc3BsYXkoXCJSRVRISU5LXCIsIFwiTGV0J3MgUHJvY2VzcyBhbmQgc29sdmUgb3VyIHByb2JsZW1zLlwiKTtcblxuICB9KTtcbiAgZ3JlZW5DYXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgIHJlbW92ZUhvdmVyKCk7XG4gICAgZ3JlZW5DYXIubmV4dFNpYmxpbmcucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHRvb2xTZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9vbHNcIilbMF07XG4gIHRvb2xTZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcGFpcik7XG4gIHRvb2xTZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiBob3ZlckRpc3BsYXkoXCJSRVNFVFwiLCBcIlNvbWV0aW1lcyB3ZSBqdXN0IGhhdmUgdG8gc3RvcCBhbmQgdGFrZSBhIGJyZWFrIGZyb20gZXZlcnl0aGluZy4gTGV0J3MgY29vbCBkb3duLlwiKSk7XG4gIHRvb2xTZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcmVtb3ZlSG92ZXIpO1xuICBcbiAgY29uc3QgZnVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmdWVsXCIpWzBdO1xuICBmdWVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWNoYXJnZSk7XG4gIGZ1ZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiBob3ZlckRpc3BsYXkoXCJSRUNIQVJHRVwiLCBcIkxldCdzIGdpdmUgb3Vyc2VsdmVzIHRoZSB0b29scyB3ZSBuZWVkIHRvIGJlIHN1Y2Nlc3NmdWwgdXNpbmcgdG9vbHMgdGhhdCB3b3JrIGJlc3QgZm9yIHVzLlwiKSk7XG4gIGZ1ZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcmVtb3ZlSG92ZXIpO1xuXG5cblxuXG4vLyAgIC8vQUNUSVZJVFkgSUNPTlMgPT09IHNob3VsZCB0aGVzZSBiZSBidXR0b25zP1xuICBjb25zdCBwYWludEJydXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhaW50QnJ1c2hJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wYWludC1icnVzaCBpY29uLXBhaW50XCI+PC9pPic7XG4gIHBhaW50QnJ1c2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYWludCk7XG5cbiAgY29uc3QgYnVnc01lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1Z3NNZUljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWJ1ZyBpY29uLWJ1Z1wiPjwvaT4nO1xuICAvLyBidWdzTWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWcpO1xuXG4gIGNvbnN0IHN0aW5raW5HYW5nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0aW5raW5HYW5nSWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1uaW5qYSBpY29uLWdhbmdcIj48L2k+JztcbiAgc3RpbmtpbkdhbmdJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGlua2luVGhpbmtpbik7XG5cbiAgY29uc3QgZmVlbGluZ3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbGluZ3NJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1tZWggaWNvbi1mZWVsaW5nc1wiPjwvaT4nO1xuICBmZWVsaW5nc0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZlZWxpbmdzKTtcblxuICBjb25zdCBzZWxmQ29udHJvbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxmQ29udHJvbEljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWZpc3QtcmFpc2VkIGljb24tc2VsZi1jb250cm9sXCI+PC9pPic7XG4gIHNlbGZDb250cm9sSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZkNvbnRyb2wpO1xuXG4gIGNvbnN0IHByb2JsZW1Tb2x2ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9ibGVtU29sdmVJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1saWdodGJ1bGIgaWNvbi1wcm9ibGVtLXNvbHZlXCI+PC9pPic7XG4gIHByb2JsZW1Tb2x2ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2JsZW1Tb2x2aW5nKTtcblxuICBjb25zdCBhc3NlcnRpdmVDb21tSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFzc2VydGl2ZUNvbW1JY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1jb21tZW50cyBpY29uLWFzc2VydC1jb21tXCI+PC9pPic7XG4gIGFzc2VydGl2ZUNvbW1JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3NlcnRpdmVDb21tdW5pY2F0aW9uKTtcblxuICBjb25zdCBpQ2FuQ29udHJvbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpQ2FuQ29udHJvbEljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWdhbWVwYWQgaWNvbi1pY2FuLWNvbnRyb2xcIj48L2k+JztcbiAgaUNhbkNvbnRyb2xJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpQ2FuQ29udHJvbCk7XG5cbiAgY29uc3QgZGVlcEJyZWF0aGluZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWVwQnJlYXRoaW5nSWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtbHVuZ3MgaWNvbi1kZWVwLWJyZWF0aGluZ1wiPjwvaT4nO1xuICBkZWVwQnJlYXRoaW5nSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVlcEJyZWF0aGluZyk7XG5cbiAgY29uc3Qgc2VsZlRhbGtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsZlRhbGtJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS11c2VyLXBsdXMgaWNvbi1zZWxmLXRhbGtcIj48L2k+JztcbiAgc2VsZlRhbGtJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmVGFsayk7IFxuXG5cblxuLy8gICAvL01BSU4gQ09NUE9ORU5UU1xuICBmdW5jdGlvbiByZXBhaXIoKXtcbiAgICBjb25zdCByZXBhaXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlcGFpckRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlcGFpci1kaXZcIik7XG4gICAgYWN0aXZpdHlEaXYuYXBwZW5kKHJlcGFpckRpdik7XG4gICAgcmVwYWlyRGl2LmFwcGVuZChidWdzTWVJY29uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2hhcmdlKCl7XG4gICAgY29uc3QgcmVjaGFyZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlY2hhcmdlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVjaGFyZ2UtZGl2XCIpO1xuICAgIGFjdGl2aXR5RGl2LmFwcGVuZChyZWNoYXJnZURpdik7XG5cbiAgICByZWNoYXJnZURpdi5hcHBlbmQoYnVnc01lSWNvbik7XG4gICAgLy8gcmVjaGFyZ2VEaXYuYXBwZW5kKHBhaW50QnJ1c2hJY29uKTtcbiAgICByZWNoYXJnZURpdi5hcHBlbmQoc3RpbmtpbkdhbmdJY29uKTtcbiAgICByZWNoYXJnZURpdi5hcHBlbmQoZmVlbGluZ3NJY29uKTtcbiAgICByZWNoYXJnZURpdi5hcHBlbmQoc2VsZkNvbnRyb2xJY29uKTtcbiAgICByZWNoYXJnZURpdi5hcHBlbmQocHJvYmxlbVNvbHZlSWNvbik7XG4gICAgcmVjaGFyZ2VEaXYuYXBwZW5kKGFzc2VydGl2ZUNvbW1JY29uKTtcbiAgICByZWNoYXJnZURpdi5hcHBlbmQoaUNhbkNvbnRyb2xJY29uKTtcbiAgICByZWNoYXJnZURpdi5hcHBlbmQoZGVlcEJyZWF0aGluZ0ljb24pO1xuICAgIHJlY2hhcmdlRGl2LmFwcGVuZChzZWxmVGFsa0ljb24pO1xuICB9XG5cblxuXG4gIFxuXG5cblxuXG5cbi8vICAgLy9BQ1RJVklUSUVTIC0gUkVNT1ZFIEFORCBNT1ZFIFNPTUVXSEVSRSBFTFNFIExBVEVSXG4gIGZ1bmN0aW9uIHBhaW50KCl7XG4gICAgYWN0aXZpdHlEaXYuaW5uZXJIVE1MID0gJzxvYmplY3QgaWQ9XCJwYWludC1vYmpcIiB0eXBlPVwidGV4dC9odG1sXCIgZGF0YT1cInBhaW50Lmh0bWxcIiA+PC9vYmplY3Q+JztcbiAgfVxuXG5cblxuXG4gIC8vRnVuY3Rpb25zIGZvciB1c2U6XG4gICAgICAvL3NodWZmbGUgc2NlbmFyaW9zIHdpdGggRmlzaGVyLVlhdGVzIChLbnV0aCkgU2h1ZmZsZVxuICAgICAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuXG4gICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcbiAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBob3ZlckRpc3BsYXkodGV4dCwgc3ViVGV4dCkge1xuICAgICAgICBjb25zdCBob3ZlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdmVyRGl2LmlkID0gXCJob3Zlci10ZXh0XCI7XG5cbiAgICAgICAgY29uc3QgaG92ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGhvdmVyVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICBob3ZlckRpdi5hcHBlbmQoaG92ZXJUZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhvdmVyU3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGhvdmVyU3ViLmlubmVySFRNTCA9IHN1YlRleHQ7XG4gICAgICAgIGhvdmVyRGl2LmFwcGVuZChob3ZlclN1Yik7XG4gICAgICAgIFxuICAgICAgICBtYWluT2JqLmFwcGVuZChob3ZlckRpdik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUhvdmVyKCkge1xuICAgICAgICBtYWluT2JqLnJlbW92ZUNoaWxkKG1haW5PYmoubGFzdENoaWxkKTtcbiAgICAgIH1cblxuXG5cbi8vICAgZnVuY3Rpb24gYnVnKGUsIGN1cnJUYWIgPSAwKXtcbi8vICAgICBhY3Rpdml0eURpdi5pbm5lckhUTUwgPSBcIlwiO1xuLy8gICAgIGNvbnN0IGJ1Z0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICBidWdEaXYuaWQgPSBcImJ1Zy1kaXZcIjtcbi8vICAgICBhY3Rpdml0eURpdi5hcHBlbmQoYnVnRGl2KTtcbi8vICAgICBjb25zdCBtYWluQnVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgLy8gZm9yIGZpcnN0IHR3byBidWcgaW1hZ2VzXG5cbi8vICAgICBzd2l0Y2ggKGN1cnJUYWIpIHtcbi8vICAgICAgIGNhc2UgMTpcbi8vICAgICAgICAgYnVnRGl2LmlubmVySFRNTCA9IFwiPGgxPlRoaW5ncyBJIERvIFRoYXQgTWF5IEJ1ZyBPdGhlcnM8L2gxPlwiO1xuLy8gICAgICAgICBtYWluQnVnLnNyYyA9IG1haW5CdWcuc3JjID0gXCJzcmMvaW1hZ2VzL2hvbmV5YmVlLnBuZ1wiO1xuLy8gICAgICAgICBtYWluQnVnLmlkID0gXCJidWctb2JqXCI7XG4vLyAgICAgICAgIGJ1Z0Rpdi5hcHBlbmQobWFpbkJ1Zyk7XG5cbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbi8vICAgICAgICAgICBjb25zdCB0ZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICAgICAgICAgIHRleHRib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4vLyAgICAgICAgICAgdGV4dGJveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlidWctXCIgKyBpKTtcbi8vICAgICAgICAgICBidWdEaXYuYXBwZW5kKHRleHRib3gpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSAyOlxuLy8gICAgICAgICBidWdEaXYuaW5uZXJIVE1MID0gXCI8aDE+V2hlbiBTb21ldGhpbmcgQnVncyBNZSwgSSBDYW4gU2F5PC9oMT5cIjtcblxuLy8gICAgICAgICAvLyBjb25zdCBidWdTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuLy8gICAgICAgICAvLyBidWdTY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4vLyAgICAgICAgIC8vIGJ1Z1NjcmlwdC5zcmMgPSBcInNyYy9zY3JpcHRzL0F1ei1CdWctOGUyNzkwOC9idWcuanNcIjtcbi8vICAgICAgICAgLy8gYnVnU2NyaXB0Lm9ubG9hZCA9IGJ1Z1NjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuLy8gICAgICAgICAvLyAgIG5ldyBCdWdDb250cm9sbGVyKHt9KTtcbi8vICAgICAgICAgLy8gICBuZXcgU3BpZGVyQ29udHJvbGxlcih7fSk7XG4vLyAgICAgICAgIC8vIH1cbi8vICAgICAgICAgLy8gYnVnRGl2LmFwcGVuZChidWdTY3JpcHQpO1xuXG4vLyAgICAgICAgIC8vIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuLy8gICAgICAgICAvLyBjcmVkaXQuaW5uZXJIVE1MID0gXCJodHRwczovL2F1ei5naXRodWIuaW8vQnVnL1wiO1xuLy8gICAgICAgICAvLyBjcmVkaXQuY2xhc3NOYW1lID0gXCJidWctZ2l2ZS1jcmVkaXRcIjtcbi8vICAgICAgICAgLy8gYnVnRGl2LmFwcGVuZChjcmVkaXQpO1xuXG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSAzOlxuLy8gICAgICAgICBidWdEaXYuaW5uZXJIVE1MID0gXCI8aDE+U2NlbmFyaW9zPC9oMT5cIjtcblxuLy8gICAgICAgICBicmVhaztcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIGJ1Z0Rpdi5pbm5lckhUTUwgPSBcIjxoMT5UaGluZ3MgVGhhdCBCdWcgTWU8L2gxPlwiO1xuLy8gICAgICAgICBtYWluQnVnLnNyYyA9IFwic3JjL2ltYWdlcy9sYWR5YnVnLnBuZ1wiO1xuLy8gICAgICAgICBtYWluQnVnLmlkID0gXCJidWctb2JqXCI7XG4vLyAgICAgICAgIGJ1Z0Rpdi5hcHBlbmQobWFpbkJ1Zyk7XG5cbi8vICAgICAgICAgLy90aGluZ3MgdGhhdCBidWcgbWUgdGV4dGJveGVzXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4vLyAgICAgICAgICAgY29uc3QgdGV4dGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbi8vICAgICAgICAgICB0ZXh0Ym94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuLy8gICAgICAgICAgIHRleHRib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidWdzbWUtXCIgKyBpKTtcbi8vICAgICAgICAgICBidWdEaXYuYXBwZW5kKHRleHRib3gpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgbGV0IGJ1Z0xpbmUgPSBcIlwiO1xuLy8gICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbi8vICAgICAgICAgICBjb25zdCBidWcgPSBgPGltZyBzcmM9XCJzcmMvaW1hZ2VzL2J1ZyR7aX0ucG5nXCIgY2xhc3M9XCJidWcke2l9XCI+YDtcbi8vICAgICAgICAgICBidWdMaW5lICs9IGJ1Zztcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGNvbnN0IHRvcFJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICAgIHRvcFJvd0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvcFJvd0J1Z1wiKTtcbi8vICAgICAgICAgdG9wUm93RGl2LmlubmVySFRNTCA9IGJ1Z0xpbmU7XG4vLyAgICAgICAgIGJ1Z0Rpdi5hcHBlbmQodG9wUm93RGl2KTtcblxuLy8gICAgICAgICBjb25zdCBib3R0b21Sb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgICBib3R0b21Sb3dEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3R0b21Sb3dCdWdcIik7XG4vLyAgICAgICAgIGJvdHRvbVJvd0Rpdi5pbm5lckhUTUwgPSBidWdMaW5lO1xuLy8gICAgICAgICBidWdEaXYuYXBwZW5kKGJvdHRvbVJvd0Rpdik7XG5cbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XG4vLyAgICAgICAgICAgY29uc3QgdGJ1ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGJ1ZyR7aX1gKVswXTtcbi8vICAgICAgICAgICB0YnVnLnN0eWxlLnRvcCA9IE1hdGgucmFuZG9tKCkgKiB3aW5kb3dIZWlnaHQgKyBcInB4XCI7XG4vLyAgICAgICAgICAgdGJ1Zy5zdHlsZS5sZWZ0ID0gTWF0aC5yYW5kb20oKSAqIHdpbmRvd1dpZHRoICsgXCJweFwiO1xuICAgICAgICAgIFxuLy8gICAgICAgICAgIGNvbnN0IGJidWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBidWcke2l9YClbMV07XG4vLyAgICAgICAgICAgYmJ1Zy5zdHlsZS5ib3R0b20gPSBNYXRoLnJhbmRvbSgpICogd2luZG93SGVpZ2h0ICsgXCJweFwiO1xuLy8gICAgICAgICAgIGJidWcuc3R5bGUubGVmdCA9IE1hdGgucmFuZG9tKCkgKiB3aW5kb3dXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICBcbi8vICAgICAgICAgICAvL2ZsaXAgaW1hZ2VzIGZvciB0cmF2ZWwgZGlyZWN0aW9uXG4vLyAgICAgICAgICAgaWYgKHBhcnNlSW50KHRidWcuc3R5bGUubGVmdCkgPCAod2luZG93V2lkdGggKiAoaS0xKSAvIDkgKSkge1xuLy8gICAgICAgICAgICAgdGJ1Zy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlWCgtMSlcIjtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICBpZiAocGFyc2VJbnQoYmJ1Zy5zdHlsZS5sZWZ0KSA8ICh3aW5kb3dXaWR0aCAqICgtaSArIDkpIC8gOSApKSB7XG4vLyAgICAgICAgICAgICBiYnVnLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGVYKC0xKVwiO1xuLy8gICAgICAgICAgIH1cblxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZnVuY3Rpb24gbW92ZSgpIHtcbi8vICAgICAgICAgICBjb25zdCBidWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvcFJvd0J1Z1wiKVswXS5jaGlsZE5vZGVzO1xuLy8gICAgICAgICAgIGNvbnN0IGJidWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJvdHRvbVJvd0J1Z1wiKVswXS5jaGlsZE5vZGVzO1xuLy8gICAgICAgICAgIGxldCBob3Jpem9udGFsID0gMDtcblxuLy8gICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4vLyAgICAgICAgICAgICBidWdzW2ldLnN0eWxlLnRvcCA9IFwiLTEzcHhcIjtcbi8vICAgICAgICAgICAgIGJ1Z3NbaV0uc3R5bGUubGVmdCA9IGhvcml6b250YWwgKyBcInB4XCI7XG4vLyAgICAgICAgICAgICBidWdzW2ldLnN0eWxlLnRyYW5zaXRpb24gPVxuLy8gICAgICAgICAgICAgICBcImFsbCBcIiArIE1hdGguZmxvb3IoMTAwICogTWF0aC5yYW5kb20oKSkgKyA2MDAgKyBcIm1zXCI7IC8vICArXCIgZWFzZSA1bXNcIjtcblxuLy8gICAgICAgICAgICAgY29uc3QgaiA9IGkgKiAtMSArIDg7XG4vLyAgICAgICAgICAgICBiYnVnc1tqXS5zdHlsZS5ib3R0b20gPSBcIi0xdmhcIjtcbi8vICAgICAgICAgICAgIGJidWdzW2pdLnN0eWxlLmxlZnQgPSBob3Jpem9udGFsICsgXCJweFwiO1xuLy8gICAgICAgICAgICAgYmJ1Z3Nbal0uc3R5bGUudHJhbnNpdGlvbiA9XG4vLyAgICAgICAgICAgICAgIFwiYWxsIFwiICsgTWF0aC5mbG9vcigxMDAgKiBNYXRoLnJhbmRvbSgpKSArIDYwMCArIFwibXNcIjtcblxuLy8gICAgICAgICAgICAgaG9yaXpvbnRhbCArPSAod2luZG93V2lkdGggLyA4LjUpO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICB3aW5kb3cuc2V0VGltZW91dChtb3ZlLCAxMDAwKTtcbi8vICAgICB9XG4gICAgXG4gICAgLy8gLy9UYWJzXG4gICAgLy8gKGN1cnJUYWIgPD0gMCkgPyBsZWZ0QXJyb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIDogbGVmdEFycm93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgLy8gKGN1cnJUYWIgPj0gMikgPyByaWdodEFycm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IHJpZ2h0QXJyb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuLy8gICAgIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnVnKFwiZVwiLCBjdXJyVGFiIC09IDEpKTsgXG4vLyAgICAgcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnVnKFwiZVwiLCBjdXJyVGFiICs9IDEpKTsgXG5cbi8vICAgfVxuXG5cblxuICBmdW5jdGlvbiBzdGlua2luVGhpbmtpbigpe1xuICAgIGFjdGl2aXR5RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgZ2FuZ01haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbmdNYWluRGl2LmlkID0gXCJnYW5nTWFpbkRpdlwiO1xuICAgIGFjdGl2aXR5RGl2LmFwcGVuZChnYW5nTWFpbkRpdik7XG4gICAgZ2FuZ01haW5EaXYuaW5uZXJIVE1MID0gXCI8aDE+VEhFIFNUSU5LJ04gVEhJTksnTiBHQU5HPC9oMT48aDQ+WW91ciBXb3JzdCBFbmVtaWVzPC9oND5cIjtcblxuICAgIGNvbnN0IGdhbmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW5nV3JhcHBlci5pZCA9IFwiZ2FuZ1dyYXBwZXJcIjtcbiAgICBnYW5nTWFpbkRpdi5hcHBlbmQoZ2FuZ1dyYXBwZXIpO1xuXG4gICAgY29uc3QgaXdhbm5pdG5vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXdhbm5pdG5vdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdhbmdEaXYtaXdhbm5pdG5vd1wiKTtcbiAgICBnYW5nV3JhcHBlci5hcHBlbmQoaXdhbm5pdG5vdyk7IFxuXG4gICAgICBjb25zdCBpd2Fubml0bm93SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGl3YW5uaXRub3dJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnYW5nSW1nLWl3YW5uaXRub3dcIik7XG4gICAgICBpd2Fubml0bm93SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcInNyYy9pbWFnZXMvZ2FuZy1pd2Fubml0bm93LnBuZ1wiKTtcbiAgICAgIGl3YW5uaXRub3cuYXBwZW5kKGl3YW5uaXRub3dJbWcpO1xuICAgICAgY29uc3QgaXdhbm5pdG5vd1R4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgaXdhbm5pdG5vd1R4dC5pbm5lckhUTUwgPSBcIkl3YW5uaXQgTm93IC0gVGhlIGxlYWRlciBvZiB0aGUgU3RpbmtpbicgVGhpbmtpbicgR2FuZyB0cmllcyB0byBnZXQgeW91IHRvIG1ha2UgYmFkIGNob2ljZXMgYnkgaW5mbHVlbmNpbmcgeW91ciB3YW50cy4gSGlzIHBsYW4gaXMgdG8gZ2V0IHlvdSB0byB3YW50IHRoaW5ncyBOT1ctLW5vdCB3YWl0aW5nIGFuZCBub3QgY2FyaW5nIGFib3V0IHdoYXQgeW91IGhhdmUgdG8gZG8gb3Igd2hvIG1pZ2h0IGdldCBodXJ0IGluIHRoZSBwcm9jZXNzLiBPbmNlIEl3YW5uaXQgTm93IGdldHMgYSBnb29kIGhvbGQgb24geW91LS1CaWdncyBCaWdnZXIsIExpbCBGaWIgYW5kIG90aGVyIG1lbWJlcnMgb2YgdGhlIGdhbmcgY2FuIHByZXR0eSBtdWNoIGdldCB5b3UgdG8gZG8gYW55dGhpbmcsIG5vIG1hdHRlciBob3cgZm9vbGlzaCBvciBodXJ0ZnVsIGl0IG1heSBiZS5cIjtcbiAgICAgIGl3YW5uaXRub3cuYXBwZW5kKGl3YW5uaXRub3dUeHQpO1xuXG4gICAgY29uc3QgYmlnZ3NCaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJpZ2dzQmlnZ2VyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ2FuZ0Rpdi1iaWdnc0JpZ2dlclwiKTtcbiAgICBnYW5nV3JhcHBlci5hcHBlbmQoYmlnZ3NCaWdnZXIpO1xuXG4gICAgICBjb25zdCBiaWdnc0JpZ2dlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBiaWdnc0JpZ2dlckltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdhbmdJbWctYmlnZ3NCaWdnZXJcIik7XG4gICAgICBiaWdnc0JpZ2dlckltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJzcmMvaW1hZ2VzL2dhbmctYmlnZ3NiaWdnZXIucG5nXCIpO1xuICAgICAgYmlnZ3NCaWdnZXIuYXBwZW5kKGJpZ2dzQmlnZ2VySW1nKTtcbiAgICAgIGNvbnN0IGJpZ2dzQmlnZ2VyVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBiaWdnc0JpZ2dlclR4dC5pbm5lckhUTUwgPSBcIkJpZ2dzIEJpZ2dlciAtIEhlIHdvcmtzIGNsb3NlbHkgd2l0aCBJd2Fubml0IE5vdy4gVGhpcyBndXkgbWFrZXMgdGhpbmdzIHNlZW0gbW9yZSBhdHRyYWN0aXZlLCBtb3JlIGltcG9ydGFudCwgbW9yZSB2YWx1YWJsZSwgbW9yZSBkZXNpcmFibGUsIG1vcmUgbmVjZXNzYXJ5LCBtb3JlIHVyZ2VudCBhbmQgZXZlbiBtb3JlIGZyaWdodGVuaW5nIHRoYW4gdGhleSByZWFsbHkgYXJlLiBIZSB0cmllcyB0byBnZXQgeW91IHRvIGJsb3cgdGhpbmdzIHNvIGZhciBvdXQgb2YgcHJvcG9ydGlvbiB5b3UgY2FuIG5vIGxvbmdlciBwcm9wZXJseSBqdWRnZSB0aGVpciB0cnVlIHZhbHVlIG9yIHdvcnRoLiBJbiBkb2luZyBzbywgaGUgcm9icyB5b3Ugb2YgeW91ciBhYmlsaXR5IHRvIG1ha2UgY2hvaWNlcy5cIjtcbiAgICAgIGJpZ2dzQmlnZ2VyLmFwcGVuZChiaWdnc0JpZ2dlclR4dCk7XG5cbiAgICBjb25zdCBlZW5jeVdlZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWVuY3lXZWVuY3kuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnYW5nRGl2LWVlbmN5V2VlbmN5XCIpO1xuICAgIGdhbmdXcmFwcGVyLmFwcGVuZChlZW5jeVdlZW5jeSk7XG5cbiAgICAgIGNvbnN0IGVlbmN5V2VlbmN5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGVlbmN5V2VlbmN5SW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ2FuZ0ltZy1lZW5jeVdlZW5jeVwiKTtcbiAgICAgIGVlbmN5V2VlbmN5SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcInNyYy9pbWFnZXMvZ2FuZy1lZW5jeXdlZW5jeS5wbmdcIik7XG4gICAgICBlZW5jeVdlZW5jeS5hcHBlbmQoZWVuY3lXZWVuY3lJbWcpO1xuICAgICAgY29uc3QgZWVuY3lXZWVuY3lUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGVlbmN5V2VlbmN5VHh0LmlubmVySFRNTCA9IFwiRWVuY3kgV2VlbmN5IFRpbnkgVG9vIC0gSGUgdHJpZXMgdG8gbWFrZSB5b3UgdGhpbmsgdGhpbmdzIGFyZSBsZXNzIGltcG9ydGFudCB0aGFuIHRoZXkgcmVhbGx5IGFyZS4gSGUnbGwgdHJ5IHRvIG1ha2UgeW91IHRoaW5rIHRoaW5ncyBhcmUgbGVzcyB2YWx1YWJsZSwgbGVzcyBuZWNlc3NhcnksIGxlc3MgdXJnZW50IGFuZCBsZXNzIHNlcmlvdXMgdGhhbiB0aGV5IHJlYWxseSBhcmUuIEZvciBleGFtcGxlLCBoZSB3aWxsIHRyeSB0byBjb252aW5jZSB5b3UgdGhhdCB1c2luZyBkcnVncyBpcyBubyBiaWcgZGVhbCBhbmQgZ29pbmcgdG8gamFpbCBpc24ndCByZWFsbHkgdGhhdCBiYWQuXCI7XG4gICAgICBlZW5jeVdlZW5jeS5hcHBlbmQoZWVuY3lXZWVuY3lUeHQpO1xuXG4gICAgY29uc3QgbGlsRmliID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaWxGaWIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnYW5nRGl2LWxpbEZpYlwiKTtcbiAgICBnYW5nV3JhcHBlci5hcHBlbmQobGlsRmliKTtcblxuICAgICAgY29uc3QgbGlsRmliSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGxpbEZpYkltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdhbmdJbWctbGlsRmliXCIpO1xuICAgICAgbGlsRmliSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcInNyYy9pbWFnZXMvZ2FuZy1saWxmaWIucG5nXCIpO1xuICAgICAgbGlsRmliLmFwcGVuZChsaWxGaWJJbWcpO1xuICAgICAgY29uc3QgbGlsRmliVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBsaWxGaWJUeHQuaW5uZXJIVE1MID0gXCJMaWwgRmliIC0gU2hlIHRyaWVzIHRvIG1ha2UgeW91IGJlbGlldmUgdGhpbmdzIHRoYXQgYXJlbid0IHRydWUuIFNoZSB3aWxsIHRyeSB0byBnZXQgeW91IHRvIGxpZSB0byBvdGhlcnMgYW5kIG90aGVycyB0byBsaWUgdG8geW91IHNvIG5laXRoZXIgb2YgeW91IGtub3cgd2hhdCB0byBiZWxpZXZlIG9yIGRvLiBTaGUncyBhdCBoZXIgYmVzdCB3aGVuIHNoZSBnZXRzIHlvdSB0byBsaWUgdG8geW91cnNlbGYuIFNoZSBkb2VzIHRoaXMgYnkgZ2V0dGluZyB5b3UgdG8ganVzdGlmeSBkb2luZyB0aGluZ3MgeW91IGtub3cgYXJlIHdyb25nIG9yIHRvIGJlbGlldmUgdGhpbmdzIHRoYXQgd2lsbCBodXJ0IHlvdS5cIjtcbiAgICAgIGxpbEZpYi5hcHBlbmQobGlsRmliVHh0KTtcblxuICAgIGNvbnN0IG5hbWVpdEJsYW1laXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVpdEJsYW1laXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnYW5nRGl2LW5hbWVpdEJsYW1laXRcIik7XG4gICAgZ2FuZ1dyYXBwZXIuYXBwZW5kKG5hbWVpdEJsYW1laXQpO1xuXG4gICAgICBjb25zdCBuYW1laXRCbGFtZWl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIG5hbWVpdEJsYW1laXRJbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnYW5nSW1nLW5hbWVpdEJsYW1laXRcIik7XG4gICAgICBuYW1laXRCbGFtZWl0SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcInNyYy9pbWFnZXMvZ2FuZy1uYW1lYmxhbWUucG5nXCIpO1xuICAgICAgbmFtZWl0QmxhbWVpdC5hcHBlbmQobmFtZWl0QmxhbWVpdEltZyk7XG4gICAgICBjb25zdCBuYW1laXRCbGFtZWl0VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBuYW1laXRCbGFtZWl0VHh0LmlubmVySFRNTCA9IFwiTmFtZWl0IEJsYW1laXQgLSBUcmllcyB0byBnZXQgeW91IHRvIGJsYW1lIG90aGVyIHBlb3BsZSBvciBvdGhlciB0aGluZ3MgZm9yIHlvdXIgb3duIGJlaGF2aW9yLiBGb3IgZXhhbXBsZSwgaWYgeW91IGh1cnQgc29tZW9uZSBlbHNlLCBoZSB3aWxsIHRyeSB0byBnZXQgeW91IHRvIGJsYW1lIHRoZSBvdGhlciBwZXJzb24gZm9yIGdldHRpbmcgeW91IGFuZ3J5LiBOYW1laXQgQmxhbWVpdCB3aWxsIGFsc28gdHJ5IHRvIGdldCB5b3UgdG8gcHV0IGxhYmVscyBvbiBwZW9wbGUgb3IgaWRlYXMgYW5kIG1ha2UgeW91IGJlbGlldmUgdGhhdCBpZiB5b3Uga25vdyB0aGUgbmFtZSwgeW91IGtub3cgdGhlIHBlcnNvbiBvciB1bmRlcnN0YW5kIHRoZSBpZGVhLiBJZiB5b3UgbGV0IGhpbSwgaGUgd2lsbCBtYWtlIGl0IG5lYXJseSBpbXBvc3NpYmxlIGZvciB5b3UgdG8gdGhpbmsgY2xlYXJseSBhbmQgdGFrZSByZXNwb25zaWJpbGl0eSBmb3IgeW91ciBvd24gbGlmZS5cIjtcbiAgICAgIG5hbWVpdEJsYW1laXQuYXBwZW5kKG5hbWVpdEJsYW1laXRUeHQpO1xuXG4gICAgY29uc3QganVkZ2VCRm9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAganVkZ2VCRm9yZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdhbmdEaXYtanVkZ2VCRm9yZVwiKTtcbiAgICBnYW5nV3JhcHBlci5hcHBlbmQoanVkZ2VCRm9yZSk7XG5cbiAgICAgIGNvbnN0IGp1ZGdlQkZvcmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAganVkZ2VCRm9yZUltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdhbmdJbWctanVkZ2VCRm9yZVwiKTtcbiAgICAgIGp1ZGdlQkZvcmVJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwic3JjL2ltYWdlcy9nYW5nLWp1ZGdlYmZvcmUucG5nXCIpO1xuICAgICAganVkZ2VCRm9yZS5hcHBlbmQoanVkZ2VCRm9yZUltZyk7XG4gICAgICBjb25zdCBqdWRnZUJGb3JlVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBqdWRnZUJGb3JlVHh0LmlubmVySFRNTCA9IFwiSnVkZ2UgQi4gRm9yZSAtIFdvcmtzIGNsb3NlbHkgd2l0aCBOYW1laXQgQmxhbWVpdC4gSGUgdHJpZXMgdG8gZ2V0IHlvdSB0byBqdWRnZSB0aGUgd29ydGggb2YgdGhpbmdzIGJlZm9yZSB5b3Uga25vdyBob3cgbXVjaCBhYm91dCB0aGVtLiBIZSBhbHNvIGdldHMgeW91IHRvIGFzc3VtZSB0aGUgd29yc3QgaXMgZ29pbmcgdG8gaGFwcGVuIGluIGV2ZXJ5IHNpdHVhdGlvbiBjYXVzaW5nIHlvdSB0byBnaXZlIHVwIG9yIHdvcnNlLCBub3QgdHJ5IGF0IGFsbC4gRm9yIGV4YW1wbGUsICdJIGFsd2F5cyBmYWlsIG1hdGguIFdoeSBib3RoZXIgc3R1ZHlpbmcgYXQgYWxsISdcIjtcbiAgICAgIGp1ZGdlQkZvcmUuYXBwZW5kKGp1ZGdlQkZvcmVUeHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmVlbGluZ3MoKXtcbiAgICBhY3Rpdml0eURpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGZlZWxpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmZWVsaW5nc0Rpdi5jbGFzc05hbWUgPSBcImZlZWxpbmdzRGl2XCJcbiAgICBhY3Rpdml0eURpdi5hcHBlbmQoZmVlbGluZ3NEaXYpO1xuXG4gICAgY29uc3QgZmVlbGluZ3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmZWVsaW5nc1dyYXBwZXIuY2xhc3NOYW1lID0gXCJmZWVsaW5ncy13cmFwcGVyXCJcbiAgICBmZWVsaW5nc0Rpdi5hcHBlbmQoZmVlbGluZ3NXcmFwcGVyKTtcblxuICAgIGxldCBkYXRhOyAvL2RyYWdnZWQgZWxlbWVudFxuICAgIGxldCBjdXJyRGF0YTsgLy9jdXJyZW50IGZhY2UsIGZvciBmYWNlIHN3aXRjaFxuICAgIGNvbnN0IGVtb3Rpb25zID0gW1wiaGFwcHlcIiwgXCJleGNpdGVkXCIsIFwic2FkXCIsIFwic3VycHJpc2VkXCIsIFwic2NhcmVkXCIsIFwiYW5ncnlcIiwgXCJ0aXJlZFwiLCBcImZydXN0cmF0ZWRcIiwgXCJlbWJhcnJhc3NlZFwiLCBcInNoeVwiLCBcIndvcnJpZWRcIiwgXCJibGFua1wiXTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbW90aW9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGZhY2Uuc3JjID0gYHNyYy9pbWFnZXMvZW1vdGlvbnMtaW1nL2xlZ28tJHtlbW90aW9uc1tpXX0ucG5nYDtcbiAgICAgIGZhY2UuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBldmVudCA9PiB7ZGF0YSA9IGV2ZW50LnRhcmdldH0sIGZhbHNlKTtcbiAgICAgIGZlZWxpbmdzV3JhcHBlci5hcHBlbmQoZmFjZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYm9keVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvZHlXcmFwcGVyLmNsYXNzTmFtZSA9IFwiZmVlbGluZ3MtYm9keVwiO1xuICAgIGZlZWxpbmdzRGl2LmFwcGVuZChib2R5V3JhcHBlcik7XG4gICAgYm9keVdyYXBwZXIuaW5uZXJIVE1MID0gXCI8aDI+VG9kYXkgSSBGZWVsLi4uPC9oMj5cIlxuXG4gICAgY29uc3QgcGxhY2VIZWFkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2R5V3JhcHBlci5hcHBlbmQocGxhY2VIZWFkRGl2KTtcbiAgICAgIHBsYWNlSGVhZERpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSwgZmFsc2UpO1xuICAgICAgcGxhY2VIZWFkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgZXZlbnQgPT4gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcImdyYXlcIiwgZmFsc2UpXG4gICAgICBwbGFjZUhlYWREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7IFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoY3VyckRhdGEpIHBsYWNlSGVhZERpdi5yZW1vdmVDaGlsZChwbGFjZUhlYWREaXYubGFzdENoaWxkKTtcbiAgICAgICAgcGxhY2VIZWFkRGl2LmFwcGVuZENoaWxkKGRhdGEuY2xvbmVOb2RlKCkpO1xuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XG4gICAgICAgIHBsYWNlSGVhZERpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJcIjtcbiAgICAgICAgY3VyckRhdGEgPSBkYXRhO1xuICAgICAgfSwgZmFsc2UpO1xuICAgICAgXG4gICAgY29uc3QgYm9keUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYm9keUltZy5zcmMgPSBcInNyYy9pbWFnZXMvZW1vdGlvbnMtaW1nL2xlZ28tYm9keS5wbmdcIjtcbiAgICBib2R5V3JhcHBlci5hcHBlbmQoYm9keUltZyk7XG4gICAgXG4gIH1cblxuXG5cbiAgZnVuY3Rpb24gc2VsZkNvbnRyb2woKXtcbiAgICBhY3Rpdml0eURpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHNlbGZDb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWxmQ29udHJvbERpdi5pbm5lckhUTUwgPSBcIjxoMT5GT1VSIFNURVBTIFRPIFNFTEYtQ09OVFJPTDwvaDE+XCI7XG4gICAgc2VsZkNvbnRyb2xEaXYuY2xhc3NOYW1lID0gXCJzZWxmLWNvbnRyb2wtZGl2XCI7XG4gICAgYWN0aXZpdHlEaXYuYXBwZW5kKHNlbGZDb250cm9sRGl2KTtcblxuICAgIGNvbnN0IHNlbGZDb250cm9sV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VsZkNvbnRyb2xXcmFwcGVyLmNsYXNzTmFtZSA9IFwic2VsZi1jb250cm9sLXdyYXBwZXJcIjtcbiAgICBzZWxmQ29udHJvbERpdi5hcHBlbmQoc2VsZkNvbnRyb2xXcmFwcGVyKTtcblxuICAgICAgY29uc3Qgc3RlcE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzdGVwT25lLmNsYXNzTmFtZSA9IFwic2VsZi1jb250cm9sLXN0ZXAtb25lXCI7XG4gICAgICBzZWxmQ29udHJvbFdyYXBwZXIuYXBwZW5kKHN0ZXBPbmUpO1xuICAgICAgICBjb25zdCBzdGVwT25lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgc3RlcE9uZUltZy5zcmMgPSBcInNyYy9pbWFnZXMvY29udHJvbC1zdG9wLnBuZ1wiO1xuICAgICAgICBzdGVwT25lLmFwcGVuZChzdGVwT25lSW1nKTtcbiAgICAgICAgc3RlcE9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN0ZXBPbmVEaXYuaW5uZXJIVE1MID0gXCI8aDU+U3RlcCAxOiBTdG9wIGFuZCBDYWxtIERvd248L2g1PlwiO1xuICAgICAgICBzdGVwT25lLmFwcGVuZChzdGVwT25lRGl2KTtcbiAgICAgICAgc3RlcE9uZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3RlcE9uZVNwYW4uaW5uZXJIVE1MID0gXCJDYWxtIGRvd24geW91ciBib2R5IGJ5IHRha2luZyBzb21lIGRlZXAgYnJlYXRocy4gQ2FsbSBkb3duIHlvdXIgbWluZCBieSBzYXlpbmcgdG8geW91cnNlbGYuXCI7XG4gICAgICAgIHN0ZXBPbmVEaXYuYXBwZW5kKHN0ZXBPbmVTcGFuKTtcbiAgICAgICAgc3RlcE9uZVVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgIGNvbnN0IHMxbDEgPSBcIjxsaT4nSSB3b24ndCBibG93IHVwLicgIG9yPC9saT5cIjtcbiAgICAgICAgICBjb25zdCBzMWwyID0gXCI8bGk+J0kgd29uJ3QgZ2V0IG15c2VsZiBpbiB0cm91YmxlLicgIG9yPC9saT5cIjtcbiAgICAgICAgICBjb25zdCBzMWwzID0gXCI8bGk+J0kgY2FuIGNvbnRyb2wgbXlzZWxmLic8L2xpPlwiO1xuICAgICAgICAgIHN0ZXBPbmVVTC5pbm5lckhUTUwgPSBzMWwxICsgczFsMiArIHMxbDM7XG4gICAgICAgIHN0ZXBPbmVEaXYuYXBwZW5kKHN0ZXBPbmVVTCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdGVwVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3RlcFR3by5jbGFzc05hbWUgPSBcInNlbGYtY29udHJvbC1zdGVwLXR3b1wiO1xuICAgICAgICBzZWxmQ29udHJvbFdyYXBwZXIuYXBwZW5kKHN0ZXBUd28pO1xuICAgICAgICBjb25zdCBzdGVwVHdvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgc3RlcFR3b0ltZy5zcmMgPSBcInNyYy9pbWFnZXMvY29udHJvbC10aGluay5wbmdcIjtcbiAgICAgICAgc3RlcFR3by5hcHBlbmQoc3RlcFR3b0ltZyk7XG4gICAgICAgIHN0ZXBUd29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdGVwVHdvRGl2LmlubmVySFRNTCA9IFwiPGg1PlN0ZXAgMjogVEhJTks8L2g1PlwiO1xuICAgICAgICBzdGVwVHdvLmFwcGVuZChzdGVwVHdvRGl2KTtcbiAgICAgICAgc3RlcFR3b1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3RlcFR3b1NwYW4uaW5uZXJIVE1MID0gXCJUaGluayBhYm91dDogXCI7XG4gICAgICAgIHN0ZXBUd29EaXYuYXBwZW5kKHN0ZXBUd29TcGFuKTtcbiAgICAgICAgc3RlcFR3b1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb25zdCBzMmwxID0gXCI8bGk+V2hhdCB3aWxsIGhhcHBlbiBpZiB5b3UgbG9zZSB5b3VyIHRlbXBlci48L2xpPlwiO1xuICAgICAgICBjb25zdCBzMmwyID0gXCI8bGk+V2hldGhlciB5b3Ugc2hvdWxkIHN0YXksIGlnbm9yZSwgb3Igd2FsayBhd2F5LjwvbGk+XCI7XG4gICAgICAgIHN0ZXBUd29VTC5pbm5lckhUTUwgPSBzMmwxICsgczJsMjtcbiAgICAgICAgc3RlcFR3b0Rpdi5hcHBlbmQoc3RlcFR3b1VMKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHN0ZXBUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN0ZXBUaHJlZS5jbGFzc05hbWUgPSBcInNlbGYtY29udHJvbC1zdGVwLXRocmVlXCI7XG4gICAgICAgIHNlbGZDb250cm9sV3JhcHBlci5hcHBlbmQoc3RlcFRocmVlKTtcbiAgICAgICAgICBjb25zdCBzdGVwVGhyZWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIHN0ZXBUaHJlZUltZy5zcmMgPSBcInNyYy9pbWFnZXMvY29udHJvbC10YWxrLnBuZ1wiO1xuICAgICAgICAgIHN0ZXBUaHJlZS5hcHBlbmQoc3RlcFRocmVlSW1nKTtcbiAgICAgICAgICBzdGVwVGhyZWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHN0ZXBUaHJlZURpdi5pbm5lckhUTUwgPSBcIjxoNT5TdGVwIDM6IFRhbGs8L2g1PlwiO1xuICAgICAgICAgIHN0ZXBUaHJlZS5hcHBlbmQoc3RlcFRocmVlRGl2KTtcbiAgICAgICAgICBzdGVwVGhyZWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgc3RlcFRocmVlU3Bhbi5pbm5lckhUTUwgPSBcIlRhbGsgdG8gdGhlIHBlcnNvbiB5b3UncmUgbWFkIGF0OiBcIjtcbiAgICAgICAgICBzdGVwVGhyZWVEaXYuYXBwZW5kKHN0ZXBUaHJlZVNwYW4pO1xuICAgICAgICAgIHN0ZXBUaHJlZVVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgY29uc3QgczNsMSA9IFwiPGxpPlNheSB3aGF0IHlvdSdyZSBtYWQgYWJvdXQ8L2xpPlwiO1xuICAgICAgICAgICAgY29uc3QgczNsMiA9IFwiPGxpPlNheSB3aGF0IHlvdSB3YW50LiAgT3I8L2xpPlwiO1xuICAgICAgICAgICAgY29uc3QgczNsMyA9IFwiPGxpPlRhbGsgdG8gc29tZW9uZSB5b3UgdHJ1c3QgYWJvdXQgdGhlIHByb2JsZW0uPC9saT5cIjtcbiAgICAgICAgICAgIHN0ZXBUaHJlZVVMLmlubmVySFRNTCA9IHMzbDEgKyBzM2wyICsgczNsMztcbiAgICAgICAgICBzdGVwVGhyZWVEaXYuYXBwZW5kKHN0ZXBUaHJlZVVMKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBzdGVwRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3RlcEZvdXIuY2xhc3NOYW1lID0gXCJzZWxmLWNvbnRyb2wtc3RlcC1mb3VyXCI7XG4gICAgICAgICAgc2VsZkNvbnRyb2xXcmFwcGVyLmFwcGVuZChzdGVwRm91cik7XG4gICAgICAgICAgICBjb25zdCBzdGVwRm91ckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBzdGVwRm91ckltZy5zcmMgPSBcInNyYy9pbWFnZXMvY29udHJvbC1nb29kLnBuZ1wiO1xuICAgICAgICAgICAgc3RlcEZvdXIuYXBwZW5kKHN0ZXBGb3VySW1nKTtcbiAgICAgICAgICAgIHN0ZXBGb3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHN0ZXBGb3VyRGl2LmlubmVySFRNTCA9IFwiPGg1PlN0ZXAgNDogRmVlbCBHT09EIEFnYWluPC9oNT5cIjtcbiAgICAgICAgICAgIHN0ZXBGb3VyLmFwcGVuZChzdGVwRm91ckRpdik7XG4gICAgICAgICAgICBzdGVwRm91clNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHN0ZXBGb3VyU3Bhbi5pbm5lckhUTUwgPSBcIkdldCByaWQgb2YgYW55IGFuZ2VyIHRoYXQncyBsZWZ0IGJ5OiBcIjtcbiAgICAgICAgICAgIHN0ZXBGb3VyRGl2LmFwcGVuZChzdGVwRm91clNwYW4pO1xuICAgICAgICAgICAgc3RlcEZvdXJVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgICAgY29uc3QgczRsMSA9IFwiPGxpPkRvaW5nIHNvbWV0aGluZyBhY3RpdmUuPC9saT5cIjtcbiAgICAgICAgICAgICAgY29uc3QgczRsMiA9IFwiPGxpPkRvaW5nIHRoaW5ncyB5b3UgZW5qb3kuPC9saT5cIjtcbiAgICAgICAgICAgICAgY29uc3QgczRsMyA9IFwiPGxpPkRvaW5nIGEgcmVsYXhhdGlvbiBleGVyY2lzZS48L2xpPlwiO1xuICAgICAgICAgICAgICBjb25zdCBzNGw0ID0gXCI8bGk+VHJ5aW5nIHRvIGZvcmdpdmUgYW5kIGZvcmdldC48L2xpPlwiO1xuICAgICAgICAgICAgICBzdGVwRm91clVMLmlubmVySFRNTCA9IHM0bDEgKyBzNGwyICsgczRsMyArIHM0bDQ7XG4gICAgICAgICAgICBzdGVwRm91ckRpdi5hcHBlbmQoc3RlcEZvdXJVTCk7XG4gIH1cblxuXG5cbiAgZnVuY3Rpb24gcHJvYmxlbVNvbHZpbmcoZSwgY3VyclRhYiA9IDApe1xuICAgIGFjdGl2aXR5RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvYmxlbVNvbHZpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2JsZW1Tb2x2aW5nRGl2LmNsYXNzTmFtZSA9IFwicHJvYmxlbS1zb2x2ZS1kaXZcIjtcbiAgICBwcm9ibGVtU29sdmluZ0Rpdi5pbm5lckhUTUwgPSBcIjxoMT5Qcm9ibGVtIFNvbHZpbmc6PC9oMT5cIlxuICAgIGFjdGl2aXR5RGl2LmFwcGVuZChwcm9ibGVtU29sdmluZ0Rpdik7XG5cbiAgICBjb25zdCBpbWdMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZ0xlZnQuc3JjID0gXCJzcmMvaW1hZ2VzL3Byb2JsZW0tc29sdmUtbGVmdC5qcGVnXCI7XG4gICAgICBpbWdMZWZ0LmlkID0gXCJwcm9ibGVtLXNvbHZlLWxlZnRcIjtcbiAgICBwcm9ibGVtU29sdmluZ0Rpdi5hcHBlbmQoaW1nTGVmdCk7XG4gICAgY29uc3QgaW1nUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nUmlnaHQuc3JjID0gXCJzcmMvaW1hZ2VzL3Byb2JsZW0tc29sdmUtcmlnaHQucG5nXCI7XG4gICAgICBpbWdSaWdodC5pZCA9IFwicHJvYmxlbS1zb2x2ZS1yaWdodFwiO1xuICAgIHByb2JsZW1Tb2x2aW5nRGl2LmFwcGVuZChpbWdSaWdodCk7XG5cblxuLy8gICAgIC8vIFVTRSBTVkcgVE8gQ1JFQVRFIExJVFRMRSBQUk9CTEVNIFNPTFZJTkcgTUFaRSAvIHN0YXJ0IC0+IGZpbmlzaD8gLyByYWNlIHRyYWNrIC8gY2lyY2xlXG5cbiAgICBjb25zdCBwcm9ibGVtU29sdmluZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2JsZW1Tb2x2aW5nV3JhcHBlci5jbGFzc05hbWUgPSBcInByb2JsZW0tc29sdmUtd3JhcHBlclwiO1xuICAgIHByb2JsZW1Tb2x2aW5nRGl2LmFwcGVuZChwcm9ibGVtU29sdmluZ1dyYXBwZXIpO1xuICAgICAgY29uc3Qgc3RlcE9uZSA9IFwiPHAgY2xhc3M9J3Byb2JsZW0tc29sdmUtc3RlcC1vbmUnPlN0ZXAgMTogV2hhdCBoYXBwZW5lZD88L3A+XCI7XG4gICAgICBjb25zdCBzdGVwVHdvID0gXCI8cCBjbGFzcz0ncHJvYmxlbS1zb2x2ZS1zdGVwLXR3byc+U3RlcCAyOiBXaHkgZG8geW91IHRoaW5rIGl0IG9jY3VycmVkPzwvcD5cIjtcbiAgICAgIGNvbnN0IHN0ZXBUaHJlZSA9IFwiPHAgY2xhc3M9J3Byb2JsZW0tc29sdmUtc3RlcC10aHJlZSc+U3RlcCAzOiBNeSByb2xlIGluIHRoZSBzaXR1YXRpb24/PC9wPlwiO1xuICAgICAgY29uc3Qgc3RlcEZvdXIgPSBcIjxwIGNsYXNzPSdwcm9ibGVtLXNvbHZlLXN0ZXAtZm91cic+U3RlcCA0OiBIb3cgY2FuIEkgaG9sZCBteXNlbGYgYWNjb3VudGFibGUgdG8gcmVkdWNlIGhvdyBvZnRlbiB0aGlzIG9jY3Vycz88L3A+XCI7XG5cbiAgICBwcm9ibGVtU29sdmluZ1dyYXBwZXIuaW5uZXJIVE1MID0gc3RlcE9uZSArIHN0ZXBUd28gKyBzdGVwVGhyZWUgKyBzdGVwRm91cjtcblxuXG4gICAgKGN1cnJUYWIgPD0gMCkgPyBsZWZ0QXJyb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIDogbGVmdEFycm93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgKGN1cnJUYWIgPj0gMykgPyByaWdodEFycm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IHJpZ2h0QXJyb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcHJvYmxlbVNvbHZpbmcoXCJlXCIsIGN1cnJUYWIgLT0gMSkpOyBcbiAgICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcm9ibGVtU29sdmluZyhcImVcIiwgY3VyclRhYiArPSAxKSk7IFxuICB9XG5cblxuICBcbiAgZnVuY3Rpb24gYXNzZXJ0aXZlQ29tbXVuaWNhdGlvbihlLCBjdXJyVGFiID0gMCl7XG4gICAgYWN0aXZpdHlEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBhc3NlcnRDb21tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhc3NlcnRDb21tRGl2LmNsYXNzTmFtZSA9IFwiYXNzZXJ0aXZlLWNvbW0tZGl2XCI7XG4gICAgYWN0aXZpdHlEaXYuYXBwZW5kKGFzc2VydENvbW1EaXYpO1xuICAgIFxuICAgIGNvbnN0IGFzc2VydENvbW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhc3NlcnRDb21tV3JhcHBlci5jbGFzc05hbWUgPSBcImFzc2VydGl2ZS1jb21tLXdyYXBwZXJcIjtcbiAgICBcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgc2VjdGlvbjEuY2xhc3NOYW1lID0gXCJhc3NlcnQtc2VjLTFcIjtcbiAgICAgIHNlY3Rpb24xLmlubmVySFRNTCA9IFwiPGgzPlBhc3NpdmU8L2gzPlwiOyAgICBcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgc2VjdGlvbjIuY2xhc3NOYW1lID0gXCJhc3NlcnQtc2VjLTJcIjtcbiAgICAgIHNlY3Rpb24yLmlubmVySFRNTCA9IFwiPGgzPkFnZ3Jlc3NpdmU8L2gzPlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcImFzc2VydC1zZWMtM1wiO1xuICAgICAgc2VjdGlvbjMuaW5uZXJIVE1MID0gXCI8aDM+QXNzZXJ0aXZlPC9oMz5cIjtcblxuICAgIC8vRHJhZyAmIERyb3AgRnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gZHJhZyhldmVudCkge1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGV2ZW50LnRhcmdldC5pZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJvcChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICBldmVudC50YXJnZXQuYXBwZW5kKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1cnJUYWIpIHtcbiAgICAgIGNhc2UgMTogXG4gICAgICAgIGFzc2VydENvbW1EaXYuaW5uZXJIVE1MID0gXCI8aDE+RGlmZmVyZW50IFdheXMgUGVvcGxlIENvbW11bmljYXRlPC9oMT5cIjtcbiAgICAgICAgYXNzZXJ0Q29tbURpdi5hcHBlbmQoYXNzZXJ0Q29tbVdyYXBwZXIpO1xuICAgICAgICBhc3NlcnRDb21tV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpLCBmYWxzZSk7XG4gICAgICAgIGFzc2VydENvbW1XcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldmVudCkgPT4gZHJvcChldmVudCksIGZhbHNlKTtcblxuICAgICAgICBhc3NlcnRDb21tV3JhcHBlci5hcHBlbmQoc2VjdGlvbjEpO1xuICAgICAgICAgIHNlY3Rpb24xLmNsYXNzTGlzdC5hZGQoXCJ0YWItMlwiKTtcbiAgICAgICAgICBzZWN0aW9uMS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpLCBmYWxzZSk7XG4gICAgICAgICAgc2VjdGlvbjEuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiBkcm9wKGV2ZW50KSwgZmFsc2UpO1xuICAgICAgICAgIFxuICAgICAgICBhc3NlcnRDb21tV3JhcHBlci5hcHBlbmQoc2VjdGlvbjIpO1xuICAgICAgICAgIHNlY3Rpb24yLmNsYXNzTGlzdC5hZGQoXCJ0YWItMlwiKTtcbiAgICAgICAgICBzZWN0aW9uMi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpLCBmYWxzZSk7XG4gICAgICAgICAgc2VjdGlvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiBkcm9wKGV2ZW50KSwgZmFsc2UpO1xuICAgICAgICAgIFxuICAgICAgICBhc3NlcnRDb21tV3JhcHBlci5hcHBlbmQoc2VjdGlvbjMpO1xuICAgICAgICAgIHNlY3Rpb24zLmNsYXNzTGlzdC5hZGQoXCJ0YWItMlwiKTtcbiAgICAgICAgICBzZWN0aW9uMy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpLCBmYWxzZSk7XG4gICAgICAgICAgc2VjdGlvbjMuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiBkcm9wKGV2ZW50KSwgZmFsc2UpO1xuXG4gICAgICAgIC8vTkVFRCBUTyBDSEVDSyBERVRBSUxTIC0gRFJBR09WRVIgSEVBREVSIENBVVNFUyBQIFRPIEJFQ09NRSBIRUFERVJcbiAgICAgICAgY29uc3Qgc2NlbmFyaW9zID0gW1wic2NlbmFyaW8gb25lXCIsIFwic2NlbmFyaW8gdHdvXCIsIFwic2NlbmFyaW8gdGhyZWVcIiwgXCJzY2VuYXJpbyBmb3VyXCIsIFwic2NlbmFyaW8gZml2ZVwiLCBcInNjZW5hcmlvIHNpeFwiXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuYXJpb3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGNvbnN0IHNjZW5hcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgYXNzZXJ0Q29tbVdyYXBwZXIuYXBwZW5kKHNjZW5hcmlvKTsgXG4gICAgICAgICAgICBzY2VuYXJpby5pZCA9IGBhYy10YWItMi1zYy0ke2l9YDtcbiAgICAgICAgICAgIHNjZW5hcmlvLmlubmVySFRNTCA9IHNjZW5hcmlvc1tpXVxuICAgICAgICAgICAgc2NlbmFyaW8uZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICBzY2VuYXJpby5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldmVudCkgPT4gZHJhZyhldmVudCksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogXG4gICAgICAgIGFzc2VydENvbW1EaXYuaW5uZXJIVE1MID0gXCI8aDEgY2xhc3M9J2FjLXRhYjMtaHInPldoYXQgQXJlIFNvbWUgV2F5cyBXZSBDYW4gQXNzZXJ0aXZlbHkgQ29tbXVuaWNhdGUgV2l0aCBPdGhlcnM8L2gxPlwiO1xuICAgICAgICBhc3NlcnRDb21tRGl2LmFwcGVuZChhc3NlcnRDb21tV3JhcHBlcik7XG4gICAgICAgIGFzc2VydENvbW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YWItM1wiKVxuXG4gICAgICAgICAgY29uc3QgYXNzZXJ0MSA9IFwiPHNwYW4gY2xhc3M9J2FjLXRhYjMtMSc+SSBkb24ndCBsaWtlIGl0IHdoZW4geW91PC9zcGFuPlwiO1xuICAgICAgICAgIGNvbnN0IGFzc2VydDF0eHQgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nYWMtdGFiMy10eHQxJy8+PC9icj5cIjtcbiAgICAgICAgICBjb25zdCBhc3NlcnQyID0gXCI8c3BhbiBjbGFzcz0nYWMtdGFiMy0yJz5JdCBtYWtlcyBtZSBmZWVsPC9zcGFuPlwiO1xuICAgICAgICAgIGNvbnN0IGFzc2VydDJ0eHQgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nYWMtdGFiMy10eHQyJy8+PC9icj5cIjtcbiAgICAgICAgICBjb25zdCBhc3NlcnQzID0gXCI8cCBjbGFzcz0nYWMtdGFiMy0zJz5QbGVhc2UgZG9uJ3QgZG8gdGhhdC48L3A+XCI7XG4gICAgICAgICAgYXNzZXJ0Q29tbVdyYXBwZXIuaW5uZXJIVE1MID0gYXNzZXJ0MSArIGFzc2VydDF0eHQgKyBhc3NlcnQyICsgYXNzZXJ0MnR4dCArIGFzc2VydDM7XG5cbiAgICAgICAgICBjb25zdCBjb21tdW5pY2F0aW9uID0gW1wiSSBmZWVsXCIsIFwiV2hlblwiLCBcIkNhbiB5b3UgcGxlYXNlXCIsIFwiVGhlbiB3ZSBjYW4vSSBjYW5cIiwgXCJJIGZlZWxcIiwgXCJCZWNhdXNlXCIsIFwiSSB3b3VsZCBsaWtlXCIsIFwiSSBmZWVsXCIsIFwiV2hlblwiLCBcIkJlY2F1c2VcIiwgXCJXaGF0IEkgd2FudCBvciBuZWVkIGlzXCJdO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tdW5pY2F0aW9uLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gY29tbXVuaWNhdGlvbltpXTtcbiAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gYGFjLXRhYjMtc2VjMi0ke2l9YDtcbiAgICAgICAgICAgIGFzc2VydENvbW1XcmFwcGVyLmFwcGVuZCh0ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBgYWMtdGFiMy1zZWMyLXR4dCR7aX1gO1xuICAgICAgICAgICAgYXNzZXJ0Q29tbVdyYXBwZXIuYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIGFzc2VydENvbW1XcmFwcGVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGFzc2VydENvbUVuZCA9IFwiPHAgY2xhc3M9J2FjLXRhYjMtZW5kMSc+RXhhbXBsZXM6PC9wPjxwIGNsYXNzPSdhYy10YWIzLWVuZDInPiAtICdMZWF2ZSBtZSBhbG9uZSEnPC9wPjxwIGNsYXNzPSdhYy10YWIzLWVuZDMnPiAtICdJJyBzdGF0ZW1lbnQgcmVzcG9uc2U6ICdJIGZlZWwgZnJ1c3RyYXRlZCBhbmQgYW5ub3llZCB3aGVuIEkgYW0gcmVtaW5kZWQgb3ZlciBhbmQgb3ZlciB0byBkbyBteSBob21ld29yay4nPC9wPlwiO1xuICAgICAgICAgIGNvbnN0IGFzc2VydENvbUVuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgYXNzZXJ0Q29tRW5kRGl2LmlubmVySFRNTCA9IGFzc2VydENvbUVuZDtcbiAgICAgICAgICBhc3NlcnRDb21tV3JhcHBlci5hcHBlbmQoYXNzZXJ0Q29tRW5kRGl2KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGFzc2VydENvbW1EaXYuaW5uZXJIVE1MID0gXCI8aDE+VEFCIEZPVVIgTk9UIERFVEVSTUlORUQgWUVUPC9oMT5cIjtcbiAgICAgICAgYXNzZXJ0Q29tbURpdi5hcHBlbmQoYXNzZXJ0Q29tbVdyYXBwZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydENvbW1EaXYuaW5uZXJIVE1MID0gXCI8aDE+QXNzZXJ0aXZlIENvbW11bmljYXRpb248L2gxPlwiOyBcbiAgICAgICAgYXNzZXJ0Q29tbURpdi5hcHBlbmQoYXNzZXJ0Q29tbVdyYXBwZXIpO1xuXG4gICAgICAgIGFzc2VydENvbW1XcmFwcGVyLmFwcGVuZChzZWN0aW9uMSk7XG4gICAgICAgICAgY29uc3QgcGFzc2l2ZVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHBhc3NpdmVUeHQuaW5uZXJIVE1MID0gXCJIRVJFIElTIFRIRSBQQVNTSVZFIFRFWFQgU0NFTkFSSU9cIjtcbiAgICAgICAgICBzZWN0aW9uMS5hcHBlbmQocGFzc2l2ZVR4dCk7XG4gICAgICAgICAgY29uc3QgcGFzc2l2ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgcGFzc2l2ZUltZy5zcmMgPSBcInNyYy9pbWFnZXMvYXNzZXJ0LWNvbW0tcGFzc2l2ZTIucG5nXCI7XG4gICAgICAgICAgc2VjdGlvbjEuYXBwZW5kKHBhc3NpdmVJbWcpO1xuICAgICAgICAgIFxuICAgICAgICBhc3NlcnRDb21tV3JhcHBlci5hcHBlbmQoc2VjdGlvbjIpO1xuICAgICAgICAgIGNvbnN0IGFnZ3Jlc3NpdmVUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICBhZ2dyZXNzaXZlVHh0LmlubmVySFRNTCA9IFwiSEVSRSBJUyBUSEUgQUdHUkVTU0lWRSBURVhUIFNDRU5BUklPXCI7XG4gICAgICAgICAgc2VjdGlvbjIuYXBwZW5kKGFnZ3Jlc3NpdmVUeHQpO1xuICAgICAgICAgIGNvbnN0IGFnZ3Jlc3NpdmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIGFnZ3Jlc3NpdmVJbWcuc3JjID0gXCJzcmMvaW1hZ2VzL2Fzc2VydC1jb21tLWFnZ3Jlc3NpdmUucG5nXCI7XG4gICAgICAgICAgc2VjdGlvbjIuYXBwZW5kKGFnZ3Jlc3NpdmVJbWcpO1xuICAgICAgICAgIFxuICAgICAgICBhc3NlcnRDb21tV3JhcHBlci5hcHBlbmQoc2VjdGlvbjMpO1xuICAgICAgICAgIGNvbnN0IGFzc2VydGl2ZVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIGFzc2VydGl2ZVR4dC5pbm5lckhUTUwgPSBcIkhFUkUgSVMgVEhFIEFTU0VSVElWRSBURVhUIFNDRU5BUklPXCI7XG4gICAgICAgICAgc2VjdGlvbjMuYXBwZW5kKGFzc2VydGl2ZVR4dCk7XG4gICAgICAgICAgY29uc3QgYXNzZXJ0aXZlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICBhc3NlcnRpdmVJbWcuc3JjID0gXCJzcmMvaW1hZ2VzL2Fzc2VydC1jb21tLWFzc2VydGl2ZTIucG5nXCI7XG4gICAgICAgICAgc2VjdGlvbjMuYXBwZW5kKGFzc2VydGl2ZUltZyk7XG4gICAgfVxuXG4gICAgKGN1cnJUYWIgPD0gMCkgPyBsZWZ0QXJyb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIDogbGVmdEFycm93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgKGN1cnJUYWIgPj0gMikgPyByaWdodEFycm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IHJpZ2h0QXJyb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYXNzZXJ0aXZlQ29tbXVuaWNhdGlvbihcImVcIiwgY3VyclRhYiAtPSAxKSk7IFxuICAgIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFzc2VydGl2ZUNvbW11bmljYXRpb24oXCJlXCIsIGN1cnJUYWIgKz0gMSkpOyBcbiAgfVxuICBcblxuXG4gIGZ1bmN0aW9uIGlDYW5Db250cm9sKGUsIGN1cnJUYWIgPSAwKXtcbiAgICBhY3Rpdml0eURpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGlDYW5Db250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpQ2FuQ29udHJvbERpdi5pZCA9IFwiaWNhbi1jb250cm9sLWRpdlwiO1xuICAgIGFjdGl2aXR5RGl2LmFwcGVuZChpQ2FuQ29udHJvbERpdik7XG5cbiAgICBjb25zdCBpQ2FuQ29udHJvbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlDYW5Db250cm9sV3JhcHBlci5pZCA9IFwiaWNhbi1jb250cm9sLXdyYXBwZXJcIjtcbiAgICBcbiAgICBzd2l0Y2ggKGN1cnJUYWIpe1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpQ2FuQ29udHJvbERpdi5pbm5lckhUTUwgPSBcIjxoMT5XYXlzIHRvIFJlc3BvbmQ6IEluc2lkZSBhbmQgT3V0c2lkZSBPdXIgQ29udHJvbDwvaDE+XCI7XG4gICAgICAgIGlDYW5Db250cm9sRGl2LmFwcGVuZChpQ2FuQ29udHJvbFdyYXBwZXIpO1xuICAgICAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpQ2FuQ29udHJvbERpdi5hcHBlbmQoaUNhbkNvbnRyb2xXcmFwcGVyKTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhbnRDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjYW50Q29udHJvbC5jbGFzc05hbWUgPSBcImNhbnQtY29udHJvbC1kaXZcIjtcbiAgICAgICAgICBjYW50Q29udHJvbC5pbm5lckhUTUwgPSBcIjxoMz5UaGluZ3MgT1VUU0lERSBNeSBDb250cm9sPC9oMz5cIjtcbiAgICAgICAgICBpQ2FuQ29udHJvbFdyYXBwZXIuYXBwZW5kKGNhbnRDb250cm9sKTtcbiAgICAgICAgICBjYW50Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSwgZmFsc2UpOyBcbiAgICAgICAgICBjYW50Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2FudENvbnRyb2wuYXBwZW5kQ2hpbGQoZGF0YSk7XG5cbiAgICAgICAgICAgIGRhdGEuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgICAgICAgIH0sIGZhbHNlKTsgXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgY2FuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY2FuQ29udHJvbC5jbGFzc05hbWUgPSBcImNhbi1jb250cm9sLWRpdlwiO1xuICAgICAgICAgIGNhbkNvbnRyb2wuaW5uZXJIVE1MID0gXCI8aDM+VGhpbmdzIEkgQ0FOIENvbnRyb2w8L2gzPlwiO1xuICAgICAgICAgIGlDYW5Db250cm9sV3JhcHBlci5hcHBlbmQoY2FuQ29udHJvbCk7XG4gICAgICAgICAgY2FuQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSwgZmFsc2UpOyBcbiAgICAgICAgICBjYW5Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjYW5Db250cm9sLmFwcGVuZENoaWxkKGRhdGEpO1xuXG4gICAgICAgICAgICBkYXRhLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICAgICAgICB9LCBmYWxzZSk7IFxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBjb250cm9sSXRlbXMgPSBbXCJPdGhlciBQZW9wbGUncyBBY3Rpb25zXCIsIFwiTXkgQWN0aW9uc1wiLCBcIk90aGVyIFBlb3BsZSdzIFdvcmRzXCIsIFwiTXkgV29yZHNcIiwgXCJPdGhlciBQZW9wbGUncyBQbGF5XCIsIFwiTXkgUGxheVwiLCBcIk90aGVyIFBlb3BsZSdzIEJlaGF2aW9yXCIsIFwiTXkgRWZmb3J0XCIsIFwiT3RoZXIgUGVvcGxlJ3MgTWlzdGFrZXNcIiwgXCJNeSBNaXN0YWtlc1wiLCBcIk90aGVyIFBlb3BsZSdzIEZlZWxpbmdzXCIsIFwiT3RoZXIgUGVvcGxlJ3MgSWRlYXNcIiwgXCJNeSBCZWhhdmlvclwiLF1cbiAgICAgICAgLy8gY29uc3QgY29udHJvbEl0ZW1zID0gW1wiT3RoZXIgUGVvcGxlJ3MgQWN0aW9uc1wiLCBcIk15IEFjdGlvbnNcIiwgXCJPdGhlciBQZW9wbGUncyBXb3Jkc1wiLCBcIk15IFdvcmRzXCIsIFwiT3RoZXIgUGVvcGxlJ3MgUGxheVwiLCBcIk15IFBsYXlcIiwgXCJPdGhlciBQZW9wbGUncyBCZWhhdmlvclwiLCBcIk15IEVmZm9ydFwiLCBcIk90aGVyIFBlb3BsZSdzIE1pc3Rha2VzXCIsIFwiTXkgTWlzdGFrZXNcIiwgXCJPdGhlciBQZW9wbGUncyBGZWVsaW5nc1wiLCBcIk90aGVyIFBlb3BsZSdzIElkZWFzXCIsIFwiTXkgQmVoYXZpb3JcIiwgXCJzY2VuYXJpbzFcIiwgXCJzY2VuYXJpbzJcIiwgXCJzY2VuYXJpbzNcIiwgXCJzY2VuYXJpbzRcIiwgXCJzY2VuYXJpbzVcIiwgXCJzY2VuYXJpbzZcIiwgXCJzY2VuYXJpbzdcIiwgXCJzY2VuYXJpbzhcIiwgXCJzY2VuYXJpbzlcIiwgXCJzY2VuYXJpbzEwXCIsIFwic2NlbmFyaW8xMVwiLCBcInNjZW5hcmlvMTJcIiwgXCJzY2VuYXJpbzEzXCIsXVxuXG5cbiAgICAgICAgbGV0IHZlcnRpY2FsID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBjb250cm9sSXRlbXNbaV07XG4gICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBgY29udHJvbC1pdGVtLSR7aX1gO1xuXG4gICAgICAgICAgaXRlbS5zdHlsZS50b3AgPSB2ZXJ0aWNhbCArIFwicHhcIjtcbiAgICAgICAgICBpZiAoaSAlIDIgIT09IDApIHZlcnRpY2FsICs9IDMwO1xuXG4gICAgICAgICAgaUNhbkNvbnRyb2xXcmFwcGVyLmFwcGVuZChpdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZXZlbnQgPT4gZGF0YSA9IGV2ZW50LnRhcmdldCwgZmFsc2UpO1xuICAgICAgICB9XG4gXG4gICAgfVxuICAgIFxuICAgIChjdXJyVGFiIDw9IDApID8gbGVmdEFycm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IGxlZnRBcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIChjdXJyVGFiID49IDEpID8gcmlnaHRBcnJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgOiByaWdodEFycm93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGlDYW5Db250cm9sKFwiZVwiLCBjdXJyVGFiIC09IDEpKTsgXG4gICAgcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaUNhbkNvbnRyb2woXCJlXCIsIGN1cnJUYWIgKz0gMSkpOyBcbiAgfVxuXG5cblxuICBmdW5jdGlvbiBkZWVwQnJlYXRoaW5nKCl7XG4gICAgYWN0aXZpdHlEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBkZWVwQnJlYXRoaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWVwQnJlYXRoaW5nRGl2LmlkID0gXCJkZWVwLWJyZWF0aGUtZGl2XCI7XG4gICAgYWN0aXZpdHlEaXYuYXBwZW5kKGRlZXBCcmVhdGhpbmdEaXYpO1xuXG4gICAgY29uc3QgZGVlcEJyZWF0aGluZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlZXBCcmVhdGhpbmdXcmFwcGVyLmlkID0gXCJkZWVwLWJyZWF0aGUtd3JhcHBlclwiO1xuXG4gICAgZGVlcEJyZWF0aGluZ0Rpdi5pbm5lckhUTUwgPSBcIjxoMT5MZXQncyBQcmFjdGljZSBEZWVwIEJyZWF0aGluZzwvaDE+XCI7XG4gICAgZGVlcEJyZWF0aGluZ0Rpdi5hcHBlbmQoZGVlcEJyZWF0aGluZ1dyYXBwZXIpO1xuXG4gICAgY29uc3QgYnJlYXRoZVNlY09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgYnJlYXRoZVNlY09uZS5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J2RlZXAtYnJlYXRoZS1kaXYtb25lJz48c3Bhbj5JIHNtZWxsIGEgZmxvd2VyLjwvc3Bhbj48c3Bhbj4xIC0gMiAtIDMgLSA0IC0gNTwvc3Bhbj48L2Rpdj5cIjtcbiAgICAgIGNvbnN0IGJyZWF0aGVJbWdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgYnJlYXRoZUltZ09uZS5zcmMgPSBcInNyYy9pbWFnZXMvZGVlcC1icmVhdGhlLXNtZWxsLmpwZ1wiO1xuICAgICAgYnJlYXRoZUltZ09uZS5jbGFzc05hbWUgPSBcImRlZXAtYnJlYXRoZS1pbWctb25lXCI7XG4gICAgICBicmVhdGhlU2VjT25lLmFwcGVuZChicmVhdGhlSW1nT25lKTtcbiAgICAgIGRlZXBCcmVhdGhpbmdXcmFwcGVyLmFwcGVuZChicmVhdGhlU2VjT25lKTtcbiAgICAgIGJyZWF0aGVTZWNPbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvdW50KTsgLy8vLy8vL1xuXG4gICAgY29uc3QgYnJlYXRoZVNlY1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgYnJlYXRoZVNlY1R3by5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J2RlZXAtYnJlYXRoZS1kaXYtdHdvJz48c3Bhbj5JIGhvbGQgbXkgYnJlYXRoLjwvc3Bhbj48c3Bhbj4xIC0gMiAtIDM8L3NwYW4+PC9kaXY+XCI7XG4gICAgICBjb25zdCBicmVhdGhlSW1nVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGJyZWF0aGVJbWdUd28uc3JjID0gXCJzcmMvaW1hZ2VzL2RlZXAtYnJlYXRoZS1ob2xkLmpwZ1wiO1xuICAgICAgYnJlYXRoZUltZ1R3by5jbGFzc05hbWUgPSBcImRlZXAtYnJlYXRoZS1pbWctdHdvXCI7XG4gICAgICBicmVhdGhlU2VjVHdvLmFwcGVuZChicmVhdGhlSW1nVHdvKTtcbiAgICAgIGRlZXBCcmVhdGhpbmdXcmFwcGVyLmFwcGVuZChicmVhdGhlU2VjVHdvKTtcbiAgICAgIGJyZWF0aGVTZWNUd28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvdW50VHdvKTsgLy8vLy8vL1xuXG4gICAgY29uc3QgYnJlYXRoZVNlY1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICBicmVhdGhlU2VjVGhyZWUuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdkZWVwLWJyZWF0aGUtZGl2LXRocmVlJz48c3Bhbj5JIGJsb3cgYnViYmxlcy48L3NwYW4+PHNwYW4+MSAtIDIgLSAzIC0gNCAtIDU8L3NwYW4+PC9kaXY+XCI7XG4gICAgICBjb25zdCBicmVhdGhlSW1nVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgYnJlYXRoZUltZ1RocmVlLnNyYyA9IFwic3JjL2ltYWdlcy9kZWVwLWJyZWF0aGUtYmxvdy5qcGdcIjtcbiAgICAgIGJyZWF0aGVJbWdUaHJlZS5jbGFzc05hbWUgPSBcImRlZXAtYnJlYXRoZS1pbWctdGhyZWVcIjtcbiAgICAgIGJyZWF0aGVTZWNUaHJlZS5hcHBlbmQoYnJlYXRoZUltZ1RocmVlKTtcbiAgICAgIGRlZXBCcmVhdGhpbmdXcmFwcGVyLmFwcGVuZChicmVhdGhlU2VjVGhyZWUpO1xuICAgICAgYnJlYXRoZVNlY1RocmVlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb3VudCk7IC8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGNvdW50KCl7XG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtb2RhbC5pZCA9IFwiZGVlcC1icmVhdGhlLW1vZGFsXCI7XG4gICAgICBjb25zdCB3b3JkcyA9IFtcIlJlYWR5P1wiLCBcIlwiLCBcIkJyZWF0aGUgSW46IDFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiSG9sZDogMVwiLCBcIjJcIiwgXCIzXCIsIFwiQnJlYXRoZSBPdXQ6IDFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiR3JlYXQgSm9iIVwiXTtcbiAgICAgIGRlZXBCcmVhdGhpbmdEaXYuYXBwZW5kKG1vZGFsKTtcblxuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgY29uc3QgaXRlcmF0b3IgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSB3b3Jkc1tjb3VudGVyXTtcbiAgICAgICAgY291bnRlciArPSAxO1xuXG4gICAgICAgIGlmIChjb3VudGVyID49IHdvcmRzLmxlbmd0aCArIDEpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGl0ZXJhdG9yKTtcbiAgICAgICAgICBkZWVwQnJlYXRoaW5nRGl2LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwNSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvdW50VHdvKCl7XG4gICAgICBjb25zdCBtb2RhbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtb2RhbFR3by5pZCA9IFwiZGVlcC1icmVhdGhlLW1vZGFsLXR3b1wiO1xuICAgICAgY29uc3QgZ2lwaHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgZ2lwaHkuc3JjID0gXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS96end0M1RSVGFVTHYyL3NvdXJjZS5naWZcIjtcbiAgICAgIG1vZGFsVHdvLmFwcGVuZChnaXBoeSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGxpbmtUb0dpZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbGlua1RvR2lmLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly9naXBoeS5jb20vZ2lmcy90YWtlLWRlZXAtYnJlYXRoZS16end0M1RSVGFVTHYyXCI+dmlhIEdJUEhZPC9hPidcbiAgICAgIG1vZGFsVHdvLmFwcGVuZChsaW5rVG9HaWYpO1xuXG4gICAgICBkZWVwQnJlYXRoaW5nRGl2LmFwcGVuZChtb2RhbFR3byk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGVlcEJyZWF0aGluZ0Rpdi5yZW1vdmVDaGlsZChtb2RhbFR3byksIDE3MDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3VudFRocmVlKCl7XG4gICAgfSAvL1RCRFxuXG4gIH1cblxuXG4gIGZ1bmN0aW9uIHNlbGZUYWxrKCl7XG4gICAgYWN0aXZpdHlEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBzZWxmVGFsa0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VsZlRhbGtEaXYuaWQgPSBcInNlbGYtdGFsay1kaXZcIjtcbiAgICBhY3Rpdml0eURpdi5hcHBlbmQoc2VsZlRhbGtEaXYpO1xuXG4gICAgY29uc3Qgc2VsZlRhbGtMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlbGZUYWxrTGVmdC5pZCA9IFwic2VsZi10YWxrLWxlZnRcIjtcbiAgICAgIHNlbGZUYWxrTGVmdC5pbm5lckhUTUwgPSBcIjxoMT5Qb3NpdGl2ZSBTZWxmIFRhbGs8L2gxPlwiO1xuICAgIHNlbGZUYWxrRGl2LmFwcGVuZChzZWxmVGFsa0xlZnQpO1xuXG4gICAgY29uc3QgdGFsa0xlZnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhbGtMZWZ0V3JhcHBlci5pZCA9IFwic2VsZi10YWxrLWxlZnQtd3JhcHBlclwiO1xuICAgICAgc2VsZlRhbGtMZWZ0LmFwcGVuZCh0YWxrTGVmdFdyYXBwZXIpO1xuICAgIGNvbnN0IHNlbGZUYWxrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHNlbGZUYWxrSW1nLnNyYyA9IFwic3JjL2ltYWdlcy9zZWxmLXRhbGsuanBnXCI7XG4gICAgICB0YWxrTGVmdFdyYXBwZXIuYXBwZW5kKHNlbGZUYWxrSW1nKTtcblxuICAgIGxldCBzZWxlY3RlZENvbG9yID0gXCJncmVlblwiO1xuICAgIGxldCBjdXJyQ29sb3I7XG4gICAgbGV0IGNsaWNrZWQgPSBmYWxzZTtcblxuICAgIC8vIHNjZW5hcmlvcyBoZXJlXG4gICAgY29uc3Qgc2NlbmFyaW9zID0gW1xuICAgICAgXCJKdXN0IGxldCBpdCBnby4gSXQncyBub3QgYSBiaWcgZGVhbCFcIiwgXCJUaGlzIEFMV0FZUyBoYXBwZW5zIHRvIG1lISBJdCdzIG5vdCBmYWlyIVwiLCBcIlRoZXkganVzdCBtYWtlcyBtZSBzbyBtYWQuIEkgc2hvdWxkIGhpdCB0aGVtLlwiLCBcIkJlIHRoZSBiaWdnZXIgcGVyc29uIGFuZCB3YWxrIGF3YXkuXCIsIFwiTm8gb25lIC0gYW5kIEkgbWVhbiBOTyBPTkUgLSB0YWxrcyB0byBtZSB0aGF0IHdheSEhIVwiLCBcIkkgZG9uJ3Qgd2FudCB0byBkbyBvciBzYXkgc29tZXRoaW5nIEknbGwgcmVncmV0LiBMZXQgbWUgdHJ5IHRvIGNhbG0gZG93biFcIiwgXCJUaGV5J3JlIGp1c3QgdHJ5aW5nIHRvIG1ha2UgbWUgbWFkLiBJdCdzIG5vdCBnb2luZyB0byB3b3JrIVwiLCBcIlRoaW5rIGFib3V0IHdoYXQgdGhlIGNvbnNlcXVlbmNlcyB3aWxsIGJlIVwiLCBcIkkgY2FuJ3QgbGV0IHRoZW0gZ2V0IGF3YXkgd2l0aCBpdCEgVGhleSBoYXZlIHRvIHBheSFcIiwgXCJBcyBsb25nIGFzIEkgc3RheSBjYWxtLCBJJ20gaW4gY29udHJvbC5cIiwgXCJJZiBoZSBzYXlzIG9uZSBtb3JlIHRoaW5nLCBJJ20gZ29pbmcgdG8gZXhwbG9kZSFcIiwgXCJUaGUgbGFzdCB0aW1lIHRoaXMgaGFwcGVuZWQsIEkgZ290IGluIHRyb3VibGUuIExldCBtZSBkbyBzb21ldGhpbmcgZGlmZmVyZW50LlwiXG4gICAgXVxuICAgIHNodWZmbGUoc2NlbmFyaW9zKVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNjZW5hcmlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2NlbmFyaW9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzY2VuYXJpb0l0ZW0uaW5uZXJIVE1MID0gc2NlbmFyaW9zW2ldO1xuICAgICAgdGFsa0xlZnRXcmFwcGVyLmFwcGVuZChzY2VuYXJpb0l0ZW0pO1xuICAgICAgc2NlbmFyaW9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaGlnaGxpZ2h0Q29sb3IpO1xuICAgICAgc2NlbmFyaW9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHJlbW92ZUhpZ2hsaWdodCk7XG4gICAgICBzY2VuYXJpb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBhaW50Q29sb3IpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGZUYWxrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHNlbGZUYWxrUmlnaHQuaWQgPSBcInNlbGYtdGFsay1yaWdodFwiO1xuICAgIHNlbGZUYWxrRGl2LmFwcGVuZChzZWxmVGFsa1JpZ2h0KTtcblxuICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5zdHJ1Y3Rpb25zLmlkID0gXCJzZWxmLXRhbGstaW5zdHJ1Y3Rpb25zXCJcbiAgICBpbnN0cnVjdGlvbnMuaW5uZXJIVE1MID0gXCI8c3Bhbj5Qb3NpdGl2ZSBzZWxmLXRhbGsgaXMgd2hlbiB5b3Ugc2F5IHBvc2l0aXZlIHRoaW5ncyB0byB5b3Vyc2VsZiB0aGF0IGNhbiBoZWxwIGNhbG0geW91IGRvd24gcmF0aGVyIHRoYW4gbWFrZSB5b3UgYW5ncmllci4gTG9vayBhdCB0aGUgZXhhbXBsZXMgYmVsb3cuIENvbG9yIHRoZSBleGFtcGxlcyBvZiBQb3NpdGl2ZSBTZWxmLVRhbGsgPC9zcGFuPjxzcGFuIGlkPSdzZWxmLXRhbGstZ3JlZW4nPkdSRUVOPC9zcGFuPjxzcGFuPiBhbmQgTmVnYXRpdmUgU2VsZi1UYWxrIDwvc3Bhbj48c3BhbiBpZD0nc2VsZi10YWxrLW9yYW5nZSc+T1JBTkdFPC9zcGFuPiFcIjtcbiAgICBzZWxmVGFsa1JpZ2h0LmFwcGVuZChpbnN0cnVjdGlvbnMpXG5cbiAgICBjb25zdCBncmVlblBhaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmVlblBhaW50LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wYWludC1yb2xsZXJcIiBpZD1cInNlbGYtdGFsay1ncmVlblwiPjwvaT4nO1xuICAgIGdyZWVuUGFpbnQuY2xhc3NOYW1lID0gXCJzZWxmVGFsa0Nob3NlblwiO1xuICAgIHNlbGZUYWxrUmlnaHQuYXBwZW5kKGdyZWVuUGFpbnQpO1xuICAgICAgZ3JlZW5QYWludC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzZWxlY3RlZENvbG9yID0gXCJncmVlblwiOyBcbiAgICAgICAgZ3JlZW5QYWludC5jbGFzc05hbWUgPSBcInNlbGZUYWxrQ2hvc2VuXCI7XG4gICAgICAgIG9yYW5nZVBhaW50LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICB9KSwgZmFsc2U7XG4gICAgICBcbiAgICBjb25zdCBvcmFuZ2VQYWludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3JhbmdlUGFpbnQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXBhaW50LXJvbGxlclwiIGlkPVwic2VsZi10YWxrLW9yYW5nZVwiPjwvaT4nO1xuICAgIHNlbGZUYWxrUmlnaHQuYXBwZW5kKG9yYW5nZVBhaW50KTtcbiAgICAgIG9yYW5nZVBhaW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNlbGVjdGVkQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICBvcmFuZ2VQYWludC5jbGFzc05hbWUgPSBcInNlbGZUYWxrQ2hvc2VuXCI7XG4gICAgICAgIGdyZWVuUGFpbnQuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgLy9mdW5jdGlvbnMgZm9yIHBhaW50XG4gICAgICBmdW5jdGlvbiBoaWdobGlnaHRDb2xvcihlKSB7XG4gICAgICAgIGlmKHNlbGVjdGVkQ29sb3IpIHtcbiAgICAgICAgICBjdXJyQ29sb3IgPSBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVIaWdobGlnaHQoZSkge1xuICAgICAgICBpZiAoY2xpY2tlZCkgY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjdXJyQ29sb3I7XG4gICAgICAgICAgY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBhaW50Q29sb3IoZSkge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZWxlY3RlZENvbG9yO1xuICAgICAgICBjbGlja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvb2xEb3duRm9sZChlKSB7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHRhY29Cb3V0SXQoZSkge1xuICAgIGFjdGl2aXR5RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3Qgc2VsZlRhbGtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGZUYWxrRGl2LmlkID0gXCJzZWxmLXRhbGstZGl2XCI7XG4gICAgYWN0aXZpdHlEaXYuYXBwZW5kKHNlbGZUYWxrRGl2KTtcbiAgfVxuXG59KVxuXG5cblxuXG4vLyAvLyAyMzE5IHggMTMyOSAtIGJpZ1xuLy8gLy8gMTE5OSB4IDY4NiAtIHNtYWxsXG4vLyAvLyAxNDQwIHggNjg2IC0gbWF4XG4iXSwibmFtZXMiOlsiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW5PYmoiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaG9tZSIsImFjdGl2aXR5RGl2Iiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJsZWZ0QXJyb3ciLCJyaWdodEFycm93IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JlZW5DYXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGFjb0JvdXRJdCIsInNtb2tlIiwiY3JlYXRlRWxlbWVudCIsImlkIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiaG92ZXJEaXNwbGF5IiwicmVtb3ZlSG92ZXIiLCJyZW1vdmUiLCJ0b29sU2V0IiwicmVwYWlyIiwiZnVlbCIsInJlY2hhcmdlIiwicGFpbnRCcnVzaEljb24iLCJwYWludCIsImJ1Z3NNZUljb24iLCJzdGlua2luR2FuZ0ljb24iLCJzdGlua2luVGhpbmtpbiIsImZlZWxpbmdzSWNvbiIsImZlZWxpbmdzIiwic2VsZkNvbnRyb2xJY29uIiwic2VsZkNvbnRyb2wiLCJwcm9ibGVtU29sdmVJY29uIiwicHJvYmxlbVNvbHZpbmciLCJhc3NlcnRpdmVDb21tSWNvbiIsImFzc2VydGl2ZUNvbW11bmljYXRpb24iLCJpQ2FuQ29udHJvbEljb24iLCJpQ2FuQ29udHJvbCIsImRlZXBCcmVhdGhpbmdJY29uIiwiZGVlcEJyZWF0aGluZyIsInNlbGZUYWxrSWNvbiIsInNlbGZUYWxrIiwicmVwYWlyRGl2Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwicmVjaGFyZ2VEaXYiLCJzaHVmZmxlIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGV4dCIsInN1YlRleHQiLCJob3ZlckRpdiIsImhvdmVyVGV4dCIsImhvdmVyU3ViIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJnYW5nTWFpbkRpdiIsImdhbmdXcmFwcGVyIiwiaXdhbm5pdG5vdyIsIml3YW5uaXRub3dJbWciLCJpd2Fubml0bm93VHh0IiwiYmlnZ3NCaWdnZXIiLCJiaWdnc0JpZ2dlckltZyIsImJpZ2dzQmlnZ2VyVHh0IiwiZWVuY3lXZWVuY3kiLCJlZW5jeVdlZW5jeUltZyIsImVlbmN5V2VlbmN5VHh0IiwibGlsRmliIiwibGlsRmliSW1nIiwibGlsRmliVHh0IiwibmFtZWl0QmxhbWVpdCIsIm5hbWVpdEJsYW1laXRJbWciLCJuYW1laXRCbGFtZWl0VHh0IiwianVkZ2VCRm9yZSIsImp1ZGdlQkZvcmVJbWciLCJqdWRnZUJGb3JlVHh0IiwiZmVlbGluZ3NEaXYiLCJjbGFzc05hbWUiLCJmZWVsaW5nc1dyYXBwZXIiLCJkYXRhIiwiY3VyckRhdGEiLCJlbW90aW9ucyIsImkiLCJmYWNlIiwic3JjIiwiY29uY2F0IiwiZXZlbnQiLCJ0YXJnZXQiLCJib2R5V3JhcHBlciIsInBsYWNlSGVhZERpdiIsInByZXZlbnREZWZhdWx0IiwiYmFja2dyb3VuZCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwiYm9keUltZyIsInNlbGZDb250cm9sRGl2Iiwic2VsZkNvbnRyb2xXcmFwcGVyIiwic3RlcE9uZSIsInN0ZXBPbmVJbWciLCJzdGVwT25lRGl2Iiwic3RlcE9uZVNwYW4iLCJzdGVwT25lVUwiLCJzMWwxIiwiczFsMiIsInMxbDMiLCJzdGVwVHdvIiwic3RlcFR3b0ltZyIsInN0ZXBUd29EaXYiLCJzdGVwVHdvU3BhbiIsInN0ZXBUd29VTCIsInMybDEiLCJzMmwyIiwic3RlcFRocmVlIiwic3RlcFRocmVlSW1nIiwic3RlcFRocmVlRGl2Iiwic3RlcFRocmVlU3BhbiIsInN0ZXBUaHJlZVVMIiwiczNsMSIsInMzbDIiLCJzM2wzIiwic3RlcEZvdXIiLCJzdGVwRm91ckltZyIsInN0ZXBGb3VyRGl2Iiwic3RlcEZvdXJTcGFuIiwic3RlcEZvdXJVTCIsInM0bDEiLCJzNGwyIiwiczRsMyIsInM0bDQiLCJlIiwiY3VyclRhYiIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInByb2JsZW1Tb2x2aW5nRGl2IiwiaW1nTGVmdCIsImltZ1JpZ2h0IiwicHJvYmxlbVNvbHZpbmdXcmFwcGVyIiwiYXNzZXJ0Q29tbURpdiIsImFzc2VydENvbW1XcmFwcGVyIiwic2VjdGlvbjEiLCJzZWN0aW9uMiIsInNlY3Rpb24zIiwiZHJhZyIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJkcm9wIiwiZ2V0RGF0YSIsImNsYXNzTGlzdCIsImFkZCIsInNjZW5hcmlvcyIsInNjZW5hcmlvIiwiZHJhZ2dhYmxlIiwiYXNzZXJ0MSIsImFzc2VydDF0eHQiLCJhc3NlcnQyIiwiYXNzZXJ0MnR4dCIsImFzc2VydDMiLCJjb21tdW5pY2F0aW9uIiwiaW5wdXQiLCJ0eXBlIiwiYXNzZXJ0Q29tRW5kIiwiYXNzZXJ0Q29tRW5kRGl2IiwicGFzc2l2ZVR4dCIsInBhc3NpdmVJbWciLCJhZ2dyZXNzaXZlVHh0IiwiYWdncmVzc2l2ZUltZyIsImFzc2VydGl2ZVR4dCIsImFzc2VydGl2ZUltZyIsImlDYW5Db250cm9sRGl2IiwiaUNhbkNvbnRyb2xXcmFwcGVyIiwiY2FudENvbnRyb2wiLCJyZW1vdmVQcm9wZXJ0eSIsImNhbkNvbnRyb2wiLCJjb250cm9sSXRlbXMiLCJ2ZXJ0aWNhbCIsIml0ZW0iLCJ0b3AiLCJkZWVwQnJlYXRoaW5nRGl2IiwiZGVlcEJyZWF0aGluZ1dyYXBwZXIiLCJicmVhdGhlU2VjT25lIiwiYnJlYXRoZUltZ09uZSIsImNvdW50IiwiYnJlYXRoZVNlY1R3byIsImJyZWF0aGVJbWdUd28iLCJjb3VudFR3byIsImJyZWF0aGVTZWNUaHJlZSIsImJyZWF0aGVJbWdUaHJlZSIsIm1vZGFsIiwid29yZHMiLCJjb3VudGVyIiwiaXRlcmF0b3IiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtb2RhbFR3byIsImdpcGh5IiwibGlua1RvR2lmIiwic2V0VGltZW91dCIsImNvdW50VGhyZWUiLCJzZWxmVGFsa0RpdiIsInNlbGZUYWxrTGVmdCIsInRhbGtMZWZ0V3JhcHBlciIsInNlbGZUYWxrSW1nIiwic2VsZWN0ZWRDb2xvciIsImN1cnJDb2xvciIsImNsaWNrZWQiLCJzY2VuYXJpb0l0ZW0iLCJoaWdobGlnaHRDb2xvciIsInJlbW92ZUhpZ2hsaWdodCIsInBhaW50Q29sb3IiLCJzZWxmVGFsa1JpZ2h0IiwiaW5zdHJ1Y3Rpb25zIiwiZ3JlZW5QYWludCIsIm9yYW5nZVBhaW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29vbERvd25Gb2xkIl0sInNvdXJjZVJvb3QiOiIifQ==