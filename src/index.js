
document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home-button");
  home.addEventListener("click", () => {
    document.getElementById("paint").innerHTML = "";
  })

  const per1 = document.getElementsByClassName("person1")[0];
  per1.addEventListener("click", repair)

  function repair(){
    console.log("CLICKITY CLACK")
    document.getElementById("paint").innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';

  }

})