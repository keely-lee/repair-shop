
document.addEventListener("DOMContentLoaded", () => {
  const per1 = document.getElementsByClassName("person1")[0];
  console.log(per1)
  console.log("PER 1")
  per1.addEventListener("click", repair)

  function repair(){
    console.log("CLICKITY CLACK")
    document.getElementById("paint").innerHTML = '<object id="paint-obj" type="text/html" data="paint.html" ></object>';
  }



})