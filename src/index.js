
document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home-button");
  const activityDiv = document.getElementById("activity-comp");

  home.addEventListener("click", () => {
    document.getElementById("comp-paint").innerHTML = "";
  })

  // const introVid = document.getElementsByClassName("startVid")[0];
  // introVid.onended = () => introVid.addAttribute

  const per1 = document.getElementsByClassName("person1")[0];
  per1.addEventListener("click", repair)

  function repair(){
    console.log("CLICKITY CLACK")
    activityDiv.innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
    // document.getElementById("comp-paint").innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
  }

  function bug(){
    console.log("BUGGITY BUG BUG")
    // document.getElementById("comp-bug").innerHTML = 
  }

})