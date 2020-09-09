// import sketchFunc from './my-plugin/sketch-app'
import mycommand from './my-plugin/src/my-command';

document.addEventListener("DOMContentLoaded", () => {
  const per1 = document.getElementsByClassName("person1")[0];
  per1.addEventListener("click", repair)



  function repair(){
    console.log("CLICKITY CLACK")

  }

})