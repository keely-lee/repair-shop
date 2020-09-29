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


  //MAIN COMPONENTS
  function repair(){
    const repairDiv = document.createElement("div");
    repairDiv.setAttribute("id", "repair-div");
    tabDiv.append(repairDiv);
    repairDiv.append(paintBrushIcon);
  }

  function recharge(){
    const rechargeDiv = document.createElement("div");
    rechargeDiv.setAttribute("id", "recharge-div");
    tabDiv.append(rechargeDiv);

    rechargeDiv.append(bugsMeIcon);
    rechargeDiv.append(paintBrushIcon);
    rechargeDiv.append(stinkinGangIcon);
    rechargeDiv.append(feelingsIcon);
    rechargeDiv.append(selfControlIcon);
    rechargeDiv.append(problemSolveIcon);
    rechargeDiv.append(assertiveCommIcon);
  }




  //ACTIVITIES - REMOVE AND MOVE SOMEWHERE ELSE LATER
  function paint(){
    activityDiv.innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
  }



  function bug(){
    let currTab = 0;

    activityDiv.innerHTML = "";
    const bugDiv = document.createElement("div");
      bugDiv.id = "bug-div";
    activityDiv.append(bugDiv);


    switch (currTab){
      case currTab === 1:

        break;
      case currTab === 2:

        break;
      case currTab === 3:

        break;
      default:
        bugDiv.innerHTML = "<h1>Things That Bug Me</h1>";

        const mainBug = document.createElement("img");
        mainBug.src = "src/images/ladybug.png";
        mainBug.id = "bug-obj";
        // mainBug.height = (windowHeight * .7);
        // mainBug.width = (windowWidth * .6);
        bugDiv.append(mainBug);

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
          const bbugs = document.getElementsByClassName("bottomRowBug")[0].childNodes;
          let horizontal = 0;

          for(let i = 0; i < 9; i++){
            bugs[i].style.top = "-12px";
            bugs[i].style.left = horizontal + "px";
            bugs[i].style.transition = "all " + Math.floor(100 * Math.random()) + 600 + "ms"; //  +" ease 5ms";
            
            const j = (i * -1) + 8;
            bbugs[j].style.top = "82vh";
            bbugs[j].style.left = horizontal + "px";
            bbugs[j].style.transition = "all " + Math.floor(100 * Math.random()) + 600 + "ms";

            horizontal += Math.floor(windowWidth / 9);
          }
        } 
        window.setTimeout(move, 1000);
    }
    
    const rightArrow = document.createElement("button");
    rightArrow.innerHTML = "next";
    rightArrow.addEventListener("click", () => currTab++);
    bugDiv.append(rightArrow);

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

    const emotions = ["angry", "annoyed", "apathetic", "ashamed", "awe", "bored", "calm", "confident", "confused", "disgust", "disobedient", "distracted", "embarrassed", "excited", "focused", "friendly", "grief", "guilt", "happy", "hungry", "hyper", "invisible", "jealous", "lonely", "love", "on-edge", "overwhelmed", "proud", "resilient", "sad", "scared", "secretive", "sick", "silly", "skeptical", "sleepy", "strong", "surprised", "worn-out", "worried"];

    for(let i = 0; i < emotions.length; i++){
      const face = document.createElement("img");
      face.src = `src/images/emotions-img/${emotions[i]}.png`;
      feelingsWrapper.append(face);
    }

    const bodyWrapper = document.createElement("div");
    bodyWrapper.className = "feelings-body";
    feelingsDiv.append(bodyWrapper);
    bodyWrapper.innerHTML = "<h2>Today I Feel...</h2>"

    const bodyImg = document.createElement("img");
    bodyImg.src = "src/images/emotions-img/body.png";
    bodyWrapper.append(bodyImg);

    const therapistAid = document.createElement("p");
    therapistAid.innerHTML = "© 2016 Therapist Aid LLC | Provided by TherapistAid.com";
    feelingsDiv.append(therapistAid);
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
        stepTwoImg.src =
          "src/images/control-think.png";
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



  function problemSolving(){
    activityDiv.innerHTML = "";
    const problemSolvingDiv = document.createElement("div");
    problemSolvingDiv.className = "problem-solve-div";
    problemSolvingDiv.innerHTML = "<h1>Problem Solving:</h1>"
    activityDiv.append(problemSolvingDiv);

    const imgLeft = document.createElement("img");
      imgLeft.src = "../../src/images/problem-solve-left.jpeg";
      imgLeft.id = "problem-solve-left";
    problemSolvingDiv.append(imgLeft);
    const imgRight = document.createElement("img");
      imgRight.src = "../../src/images/problem-solve-right.jpeg";
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
  }


  
  function assertiveCommunication(){
    activityDiv.innerHTML = "";
    const assertCommDiv = document.createElement("div");
    assertCommDiv.className = "assertive-comm-div";
    activityDiv.append(assertCommDiv);

    const sideImg = document.createElement("img");
    sideImg.src = "src/images/assert-comm.jpg";
    sideImg.id = "assert-comm-img";
    assertCommDiv.append(sideImg);
    
    const assertCommWrapper = document.createElement("div");
    assertCommWrapper.className = "assertive-comm-wrapper";
    assertCommDiv.append(assertCommWrapper);
    
    const assertHeader = "<h1>Assertive Communication</h1>"
    const assert1 = "<span class='assertive-comm-1'>I don't like it when you</span>";
    const assert1txt = "<input type='text' class='assertive-comm-txt1'/></br>";
    const assert2 = "<span class='assertive-comm-2'>It makes me feel</span>";
    const assert2txt = "<input type='text' class='assertive-comm-txt2'/></br>";
    const assert3 = "<p class='assertive-comm-3'>Please don't do that.</p>";
    assertCommWrapper.innerHTML = assertHeader + assert1 + assert1txt + assert2 + assert2txt + assert3;

    const communication = ["I feel", "When", "Can you please", "Then we can/I can", "I feel", "Because", "I would like", "I feel", "When", "Because", "What I want or need is"];

    for (let i = 0; i < communication.length; i++){
      const text = document.createElement("span");
      text.innerHTML = communication[i];
      text.className = `assert-comm-${i}`;
      assertCommWrapper.append(text);

      const input = document.createElement("input");
      input.type = "text";
      input.className = `assert-comm-txt${i}`;
      assertCommWrapper.append(input);
      assertCommWrapper.append(document.createElement("br"));
    }

    const assertComEnd = "<p class='assert-end1'>Examples:</p><p class='assert-end2'> - 'Leave me alone!'</p><p class='assert-end3'> - 'I' statement response: 'I feel frustrated and annoyed when I am reminded over and over to do my homework.'</p>";
    const assertComEndDiv = document.createElement("div");
    assertComEndDiv.innerHTML = assertComEnd;
    assertCommWrapper.append(assertComEndDiv);
  }
  


  function iCanControl(){
    activityDiv.innerHTML = "";
    const iCanControlDiv = document.createElement("div");
    iCanControlDiv.id = "ican-control-div";
    activityDiv.append(iCanControlDiv);

    const iCanControlWrapper = document.createElement("div");
    iCanControlDiv.append(iCanControlWrapper);
    iCanControlWrapper.id = "ican-control-wrapper";

    const cantControl = document.createElement("div");
      cantControl.className = "cant-control-div";
      iCanControlWrapper.append(cantControl);
      
    const canControl = document.createElement("div");
      canControl.className = "can-control-div";
      iCanControlWrapper.append(canControl);

  }



})




// 2319 x 1329 - big
// 1199 x 686 - small
// 1440 x 686 - max
