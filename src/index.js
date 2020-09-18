
document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home-button");
  home.addEventListener("click", () => {
    document.getElementById("paint").innerHTML = "";
  })

  // const introVid = document.getElementsByClassName("startVid")[0];
  // introVid.onended = () => introVid.addAttribute

  const per1 = document.getElementsByClassName("person1")[0];
  per1.addEventListener("click", repair)

  function repair(){
    console.log("CLICKITY CLACK")
    document.getElementById("paint").innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
  }

  function bug(){
    console.log("BUGGITY BUG BUG")
    // document.getElementById("comp-bug").innerHTML = 
  }

})