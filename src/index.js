
document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home-button");
  const activityDiv = document.getElementById("activity-comp");

  console.log(window.innerWidth)
  console.log(window.innerHeight)

  home.addEventListener("click", () => {
    document.getElementById("comp-paint").innerHTML = "";
  })

  // const introVid = document.getElementsByClassName("startVid")[0];
  // introVid.onended = () => introVid.addAttribute

  const per1 = document.getElementsByClassName("person1")[0];
  per1.addEventListener("click", bug);



  function paint(){
    console.log("CLICKITY CLACK")
    activityDiv.innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
    // document.getElementById("comp-paint").innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
  }

  function bug(){
    console.log("BUGGITY BUG BUG")
    const mainBug = document.createElement("img");
    mainBug.src = "src/images/ladybug.png";
    mainBug.id = "bug-obj";
    mainBug.height = (window.innerHeight * .8);
    mainBug.width = (window.innerWidth * .7);
    activityDiv.append(mainBug);

    for(let i = 0; i < 6; i++){
      const textbox = document.createElement("input");
      textbox.setAttribute("type",  "text");
      textbox.setAttribute("id", "bugsme-"+i);
      activityDiv.append(textbox);
    }

    // for (let i = 0; i < 4; i++){
    //   activityDiv.append(ladybug)
    //   activityDiv.append(beetle)
    //   activityDiv.append(honeybee)
    //   console.log("TESTER")
    // }
  }

})


// 2319 x 1329 - big
// 1199 x 686 - small
// 1440 x 686 - max

// use 1500 width as marker
//ladybug - 1280 x 1226
//bee - 1280 x 808
//beetle - 1280 x 997
