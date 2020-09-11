document.addEventListener("DOMContentLoaded", () => {
  //add event listener here
  const colorsDivs = document.getElementsByClassName("color-bar");
  console.log("YAY IN SECOND JS");
  console.log(colorsDivs);
  console.log("colorsDivs");

  for (let i = 0; i < colorsDivs.length; i++){
    colorsDivs.item(i).addEventListener("click", (e) => chooseColor(e))
  }

  function chooseColor(e){
    console.log(e.target.id)
    console.log("IM IN CHOOSE COLOR")
  }
})