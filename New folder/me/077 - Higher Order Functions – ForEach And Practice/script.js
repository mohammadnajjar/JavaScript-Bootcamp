/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allList = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
allList.forEach(function (el) {
  el.onclick = function () {
    allList.forEach(function (el) {
      el.classList.remove("active");
    });
    this.classList.add("active");
    console.log(allList);
    allDivs.forEach(function (el) {
      el.style.display = "none";
    });
  };
});
