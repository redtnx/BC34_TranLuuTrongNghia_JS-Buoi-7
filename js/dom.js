// Tag Name
var tagButton = document.getElementsByTagName("button");
console.log(tagButton);
console.log(tagButton[0].innerHTML);

// Class
var classButton = document.getElementsByClassName("btn");
console.log(classButton[4].innerHTML);

// Query Selector
var selector = document.querySelector(".container input#soNguyen");
console.log(selector);

// Query Selector All
var selectorAll = document.querySelectorAll(".container button");
console.log(selectorAll);

// Thêm số
var listNumber = [];

document.querySelector(".container button#themSo").onclick = function () {
  var number = document.getElementById("soNguyen").value * 1;
  listNumber.push(number);
};

document.querySelector(".container button#xuatSo").onclick = function () {
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }
  var content = "";
  for (var i = 0; i < listNumber.length; i++) {
    content += listNumber[i] + " ";
  }
  document.querySelector("#kq").innerHTML = content;
};

// Callback function
// document.querySelector("#abc").addEventListener("click", function () {
//   console.log(123);
// });

function submit() {
  console.log(123);
}
document.querySelector("#abc").addEventListener("click", submit);
