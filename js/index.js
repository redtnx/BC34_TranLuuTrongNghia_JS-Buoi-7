// Array (mảng) - danh sách

var listUser = ["Nguyên", "Tùng", "Thiện", "Văn", "Tuấn", "Bưởi"];
console.log(listUser);
console.log(listUser.length);

// console.log(listUser[0]);
// console.log(listUser[1]);
// console.log(listUser[2]);
// console.log(listUser[3]);
// console.log(listUser[4]);

for (var i = 0; i < listUser.length; i++) {
  console.log("listUser[" + i + "]: " + listUser[i]);
}

var listNumber = [];
listNumber.push(10, 20, 30);
listNumber.push(50);
console.log(listNumber);

for (var i = 0; i < listNumber.length; i++) {
  console.log(listNumber[i]);
}
