let containerdiv = document.querySelector(".container");
let btn = document.querySelector("#rk");

//with event listner//

btn.addEventListener("click", () => {
  console.log(containerdiv);
  containerdiv.classList.toggle("hidden");
});
//with function calling directly//
const changeColor = (rk) => {
  if (rk === "add") {
    console.log("=====>>>>");
    containerdiv.classList.add("green");
  } else if (rk === "remove") {
    containerdiv.classList.remove("red");
  } else if (rk === "toggle") {
    containerdiv.classList.toggle("hidden");
  }
};
