window.addEventListener("DOMContentLoaded", () => {
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
  })


  // Initial hover

  window.onload = pointer;
  
  function pointer() {
    // const pointTools = document.createElement("span");
    // const pointCar = document.createElement("span");
    // const pointFuel = document.createElement("span");
    
    // pointTools.innerHTML = "<i class='far fa-hand-pointer point-tools'></i>";
    // pointCar.innerHTML = "<i class='far fa-hand-pointer point-car'></i>";
    // pointFuel.innerHTML = "<i class='far fa-hand-pointer point-fuel'></i>";

    const pointerObjs = document.createElement("div");
    pointerObjs.id = "pointer-div";
    pointerObjs.innerHTML = "<i class='fas fa-hand-pointer point-tools'></i><i class='fas fa-hand-pointer point-car'></i><i class='fas fa-hand-pointer point-fuel'></i>";
    
    document.getElementById("main").append(pointerObjs);
  }





  //EVENT LISTENERS - MAIN PAGE
  const greenCar = document.getElementsByClassName("green-car")[0];
  greenCar.addEventListener("click", selfTalk);

  const toolSet = document.getElementsByClassName("tools")[0];
  toolSet.addEventListener("click", repair)

  const fuel = document.getElementsByClassName("fuel")[0];
  fuel.addEventListener("click", recharge);



  //ACTIVITY ICONS === should these be buttons?
  const paintBrushIcon = document.createElement("div");
  paintBrushIcon.innerHTML = '<i class="fas fa-paint-brush icon-paint"></i>';
  paintBrushIcon.addEventListener("click", paint);

  const bugsMeIcon = document.createElement("div");
  bugsMeIcon.innerHTML = '<i class="fas fa-bug icon-bug"></i>';
  bugsMeIcon.addEventListener("click", bug);

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



  //MAIN COMPONENTS
  function repair(){
    const repairDiv = document.createElement("div");
    repairDiv.setAttribute("id", "repair-div");
    activityDiv.append(repairDiv);
    repairDiv.append(bugsMeIcon);
  }

  function recharge(){
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


  //car smoke animation
  greenCar.addEventListener("mouseover", () => {
    const smoke = document.createElement("div");
    smoke.id = "smoke";
      smoke.innerHTML = "<span class='smoke0'></span><span class='smoke1'></span><span class='smoke2'></span><span class='smoke3'></span><span class='smoke4'></span><span class='smoke5'></span><span class='smoke6'></span><span class='smoke7'></span><span class='smoke8'></span><span class='smoke9'></span>"
    greenCar.parentNode.insertBefore(smoke, greenCar.nextSibling);
  });

  greenCar.addEventListener("mouseleave", () => {
    greenCar.nextSibling.remove();
  });

  





  //ACTIVITIES - REMOVE AND MOVE SOMEWHERE ELSE LATER
  function paint(){
    activityDiv.innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
  }



  function bug(e, currTab = 0){
    activityDiv.innerHTML = "";
    const bugDiv = document.createElement("div");
      bugDiv.id = "bug-div";
    activityDiv.append(bugDiv);
    const mainBug = document.createElement("img"); // for first two bug images

    switch (currTab) {
      case 1:
        bugDiv.innerHTML = "<h1>Things I Do That May Bug Others</h1>";
        mainBug.src = mainBug.src = "src/images/honeybee.png";
        mainBug.id = "bug-obj";
        bugDiv.append(mainBug);

        for (let i = 0; i < 6; i++) {
          const textbox = document.createElement("input");
          textbox.setAttribute("type", "text");
          textbox.setAttribute("class", "ibug-" + i);
          bugDiv.append(textbox);
        }
        break;
      case 2:
        bugDiv.innerHTML = "<h1>When Something Bugs Me, I Can Say</h1>";

        // const bugScript = document.createElement("script");
        // bugScript.type = "text/javascript";
        // bugScript.src = "src/scripts/Auz-Bug-8e27908/bug.js";
        // bugScript.onload = bugScript.onreadystatechange = function(){
        //   new BugController({});
        //   new SpiderController({});
        // }
        // bugDiv.append(bugScript);

        // const credit = document.createElement("span");
        // credit.innerHTML = "https://auz.github.io/Bug/";
        // credit.className = "bug-give-credit";
        // bugDiv.append(credit);

        break;
      case 3:
        bugDiv.innerHTML = "<h1>Scenarios</h1>";

        break;
      default:
        bugDiv.innerHTML = "<h1>Things That Bug Me</h1>";
        mainBug.src = "src/images/ladybug.png";
        mainBug.id = "bug-obj";
        bugDiv.append(mainBug);

        //things that bug me textboxes
        for (let i = 0; i < 6; i++) {
          const textbox = document.createElement("input");
          textbox.setAttribute("type", "text");
          textbox.setAttribute("class", "bugsme-" + i);
          bugDiv.append(textbox);
        }

        let bugLine = "";
        for (let i = 1; i < 10; i++) {
          const bug = `<img src="src/images/bug${i}.png" class="bug${i}">`;
          bugLine += bug;
        }

        const topRowDiv = document.createElement("div");
        topRowDiv.setAttribute("class", "topRowBug");
        topRowDiv.innerHTML = bugLine;
        bugDiv.append(topRowDiv);

        const bottomRowDiv = document.createElement("div");
        bottomRowDiv.setAttribute("class", "bottomRowBug");
        bottomRowDiv.innerHTML = bugLine;
        bugDiv.append(bottomRowDiv);

        for (let i = 1; i < 10; i++) {
          const tbug = document.getElementsByClassName(`bug${i}`)[0];
          tbug.style.top = Math.random() * windowHeight + "px";
          tbug.style.left = Math.random() * windowWidth + "px";
          
          const bbug = document.getElementsByClassName(`bug${i}`)[1];
          bbug.style.bottom = Math.random() * windowHeight + "px";
          bbug.style.left = Math.random() * windowWidth + "px";
          
          //flip images for travel direction
          if (parseInt(tbug.style.left) < (windowWidth * (i-1) / 9 )) {
            tbug.style.transform = "scaleX(-1)";
          }

          if (parseInt(bbug.style.left) < (windowWidth * (-i + 9) / 9 )) {
            bbug.style.transform = "scaleX(-1)";
          }

        }

        function move() {
          const bugs = document.getElementsByClassName("topRowBug")[0].childNodes;
          const bbugs = document.getElementsByClassName("bottomRowBug")[0].childNodes;
          let horizontal = 0;

          for (let i = 0; i < 9; i++) {
            bugs[i].style.top = "-13px";
            bugs[i].style.left = horizontal + "px";
            bugs[i].style.transition =
              "all " + Math.floor(100 * Math.random()) + 600 + "ms"; //  +" ease 5ms";

            const j = i * -1 + 8;
            bbugs[j].style.bottom = "-1vh";
            bbugs[j].style.left = horizontal + "px";
            bbugs[j].style.transition =
              "all " + Math.floor(100 * Math.random()) + 600 + "ms";

            horizontal += (windowWidth / 8.5);
          }
        }
        window.setTimeout(move, 1000);
    }
    
    //Tabs
    (currTab <= 0) ? leftArrow.style.display = "none" : leftArrow.style.display = "block";
    (currTab >= 2) ? rightArrow.style.display = "none" : rightArrow.style.display = "block";

    leftArrow.addEventListener("click", () => bug("e", currTab -= 1)); 
    rightArrow.addEventListener("click", () => bug("e", currTab += 1)); 

  }



  function stinkinThinkin(){
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

  function feelings(){
    activityDiv.innerHTML = "";
    const feelingsDiv = document.createElement("div");
    feelingsDiv.className = "feelingsDiv"
    activityDiv.append(feelingsDiv);

    const feelingsWrapper = document.createElement("div");
    feelingsWrapper.className = "feelings-wrapper"
    feelingsDiv.append(feelingsWrapper);

    let data; //dragged element
    let currData; //current face, for face switch
    const emotions = ["happy", "excited", "sad", "surprised", "scared", "angry", "tired", "frustrated", "embarrassed", "shy", "worried", "blank"];

    for(let i = 0; i < emotions.length; i++){
      const face = document.createElement("img");
      face.src = `src/images/emotions-img/lego-${emotions[i]}.png`;
      face.addEventListener("dragstart", event => {data = event.target}, false);
      feelingsWrapper.append(face);
    }

    const bodyWrapper = document.createElement("div");
    bodyWrapper.className = "feelings-body";
    feelingsDiv.append(bodyWrapper);
    bodyWrapper.innerHTML = "<h2>Today I Feel...</h2>"

    const placeHeadDiv = document.createElement("div");
    bodyWrapper.append(placeHeadDiv);
      placeHeadDiv.addEventListener("dragover", event => event.preventDefault(), false);
      placeHeadDiv.addEventListener("dragenter", event => event.target.style.background = "gray", false)
      placeHeadDiv.addEventListener("drop", (event) => { 
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



  function selfControl(){
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



  function problemSolving(e, currTab = 0){
    activityDiv.innerHTML = "";
    const problemSolvingDiv = document.createElement("div");
    problemSolvingDiv.className = "problem-solve-div";
    problemSolvingDiv.innerHTML = "<h1>Problem Solving:</h1>"
    activityDiv.append(problemSolvingDiv);

    const imgLeft = document.createElement("img");
      imgLeft.src = "src/images/problem-solve-left.jpeg";
      imgLeft.id = "problem-solve-left";
    problemSolvingDiv.append(imgLeft);
    const imgRight = document.createElement("img");
      imgRight.src = "src/images/problem-solve-right.png";
      imgRight.id = "problem-solve-right";
    problemSolvingDiv.append(imgRight);


    // USE SVG TO CREATE LITTLE PROBLEM SOLVING MAZE / start -> finish? / race track / circle

    const problemSolvingWrapper = document.createElement("div");
    problemSolvingWrapper.className = "problem-solve-wrapper";
    problemSolvingDiv.append(problemSolvingWrapper);
      const stepOne = "<p class='problem-solve-step-one'>Step 1: What happened?</p>";
      const stepTwo = "<p class='problem-solve-step-two'>Step 2: Why do you think it occurred?</p>";
      const stepThree = "<p class='problem-solve-step-three'>Step 3: My role in the situation?</p>";
      const stepFour = "<p class='problem-solve-step-four'>Step 4: How can I hold myself accountable to reduce how often this occurs?</p>";

    problemSolvingWrapper.innerHTML = stepOne + stepTwo + stepThree + stepFour;


    (currTab <= 0) ? leftArrow.style.display = "none" : leftArrow.style.display = "block";
    (currTab >= 3) ? rightArrow.style.display = "none" : rightArrow.style.display = "block";

    leftArrow.addEventListener("click", () => problemSolving("e", currTab -= 1)); 
    rightArrow.addEventListener("click", () => problemSolving("e", currTab += 1)); 
  }


  
  function assertiveCommunication(e, currTab = 0){
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
        assertCommWrapper.addEventListener("dragover", (event) => event.preventDefault(), false);
        assertCommWrapper.addEventListener("drop", (event) => drop(event), false);

        assertCommWrapper.append(section1);
          section1.classList.add("tab-2");
          section1.addEventListener("dragover", (event) => event.preventDefault(), false);
          section1.addEventListener("drop", (event) => drop(event), false);
          
        assertCommWrapper.append(section2);
          section2.classList.add("tab-2");
          section2.addEventListener("dragover", (event) => event.preventDefault(), false);
          section2.addEventListener("drop", (event) => drop(event), false);
          
        assertCommWrapper.append(section3);
          section3.classList.add("tab-2");
          section3.addEventListener("dragover", (event) => event.preventDefault(), false);
          section3.addEventListener("drop", (event) => drop(event), false);

        //NEED TO CHECK DETAILS - DRAGOVER HEADER CAUSES P TO BECOME HEADER
        const scenarios = ["scenario one", "scenario two", "scenario three", "scenario four", "scenario five", "scenario six"];
        for (let i = 0; i < scenarios.length; i++){
          const scenario = document.createElement("p");
          assertCommWrapper.append(scenario); 
            scenario.id = `ac-tab-2-sc-${i}`;
            scenario.innerHTML = scenarios[i]
            scenario.draggable = "true";
            scenario.addEventListener("dragstart", (event) => drag(event), false);
        }
        break;
      case 2: 
        assertCommDiv.innerHTML = "<h1 class='ac-tab3-hr'>What Are Some Ways We Can Assertively Communicate With Others</h1>";
        assertCommDiv.append(assertCommWrapper);
        assertCommWrapper.classList.add("tab-3")

          const assert1 = "<span class='ac-tab3-1'>I don't like it when you</span>";
          const assert1txt = "<input type='text' class='ac-tab3-txt1'/></br>";
          const assert2 = "<span class='ac-tab3-2'>It makes me feel</span>";
          const assert2txt = "<input type='text' class='ac-tab3-txt2'/></br>";
          const assert3 = "<p class='ac-tab3-3'>Please don't do that.</p>";
          assertCommWrapper.innerHTML = assert1 + assert1txt + assert2 + assert2txt + assert3;

          const communication = ["I feel", "When", "Can you please", "Then we can/I can", "I feel", "Because", "I would like", "I feel", "When", "Because", "What I want or need is"];

          for (let i = 0; i < communication.length; i++){
            const text = document.createElement("span");
            text.innerHTML = communication[i];
            text.className = `ac-tab3-sec2-${i}`;
            assertCommWrapper.append(text);

            const input = document.createElement("input");
            input.type = "text";
            input.className = `ac-tab3-sec2-txt${i}`;
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

    (currTab <= 0) ? leftArrow.style.display = "none" : leftArrow.style.display = "block";
    (currTab >= 2) ? rightArrow.style.display = "none" : rightArrow.style.display = "block";

    leftArrow.addEventListener("click", () => assertiveCommunication("e", currTab -= 1)); 
    rightArrow.addEventListener("click", () => assertiveCommunication("e", currTab += 1)); 
  }
  


  function iCanControl(e, currTab = 0){
    activityDiv.innerHTML = "";
    const iCanControlDiv = document.createElement("div");
    iCanControlDiv.id = "ican-control-div";
    activityDiv.append(iCanControlDiv);

    const iCanControlWrapper = document.createElement("div");
    iCanControlWrapper.id = "ican-control-wrapper";
    
    switch (currTab){
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
          
        const controlItems = ["Other People's Actions", "My Actions", "Other People's Words", "My Words", "Other People's Play", "My Play", "Other People's Behavior", "My Effort", "Other People's Mistakes", "My Mistakes", "Other People's Feelings", "Other People's Ideas", "My Behavior",]
        // const controlItems = ["Other People's Actions", "My Actions", "Other People's Words", "My Words", "Other People's Play", "My Play", "Other People's Behavior", "My Effort", "Other People's Mistakes", "My Mistakes", "Other People's Feelings", "Other People's Ideas", "My Behavior", "scenario1", "scenario2", "scenario3", "scenario4", "scenario5", "scenario6", "scenario7", "scenario8", "scenario9", "scenario10", "scenario11", "scenario12", "scenario13",]


        let vertical = 0;
        for (let i = 0; i < controlItems.length; i++) {
          const item = document.createElement("p");
          item.innerHTML = controlItems[i];
          item.className = `control-item-${i}`;

          item.style.top = vertical + "px";
          if (i % 2 !== 0) vertical += 30;

          iCanControlWrapper.append(item);
            item.draggable = "true";
            item.addEventListener("dragstart", event => data = event.target, false);
        }
 
    }
    
    (currTab <= 0) ? leftArrow.style.display = "none" : leftArrow.style.display = "block";
    (currTab >= 1) ? rightArrow.style.display = "none" : rightArrow.style.display = "block";

    leftArrow.addEventListener("click", () => iCanControl("e", currTab -= 1)); 
    rightArrow.addEventListener("click", () => iCanControl("e", currTab += 1)); 
  }



  function deepBreathing(){
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

    function count(){
      const modal = document.createElement("div");
      modal.id = "deep-breathe-modal";
      const words = ["Ready?", "", "Breathe In: 1", "2", "3", "4", "5", "Hold: 1", "2", "3", "Breathe Out: 1", "2", "3", "4", "5", "Great Job!"];
      deepBreathingDiv.append(modal);

      let counter = 0;
      const iterator = setInterval( () => {
        modal.innerHTML = words[counter];
        counter += 1;

        if (counter >= words.length + 1) {
          clearInterval(iterator);
          deepBreathingDiv.removeChild(modal);
        }
      }, 1005 );
    }

    function countTwo(){
      const modalTwo = document.createElement("div");
      modalTwo.id = "deep-breathe-modal-two";
      const giphy = document.createElement("img");
      giphy.src = "https://media.giphy.com/media/zzwt3TRTaULv2/source.gif";
      modalTwo.append(giphy);
      
      const linkToGif = document.createElement("span");
      linkToGif.innerHTML = '<a href="https://giphy.com/gifs/take-deep-breathe-zzwt3TRTaULv2">via GIPHY</a>'
      modalTwo.append(linkToGif);

      deepBreathingDiv.append(modalTwo);

      setTimeout(() => deepBreathingDiv.removeChild(modalTwo), 17000);
    }

    function countThree(){
    } //TBD

  }


  function selfTalk(){
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

      // scenarios here

    const selfTalkRight = document.createElement("nav");
    selfTalkRight.id = "self-talk-right";
    selfTalkDiv.append(selfTalkRight);
    // selfTalkRight.append(INSTRUCTINO TEXT)

    const greenPaint = document.createElement("div");
    greenPaint.innerHTML = '<i class="fas fa-paint-roller" id="self-talk-green"></i>';
    selfTalkRight.append(greenPaint);
      greenPaint.addEventListener("click", () => {});
      
    const orangePaint = document.createElement("div");
    orangePaint.innerHTML = '<i class="fas fa-paint-roller" id="self-talk-orange"></i>';
    selfTalkRight.append(orangePaint);
      orangePaint.addEventListener("click", () => {});



  }

})




// 2319 x 1329 - big
// 1199 x 686 - small
// 1440 x 686 - max
