// Khai báo mảng
var listNumber = [];

// Thêm só
document.getElementById("themSo").onclick = function () {
  // Lấy thông tin người dùng nhập
  var number = document.getElementById("soNguyen").value * 1;

  // Thêm number vào mảng listNumber
  listNumber.push(number);
};

// Xuất số
document.getElementById("xuatSo").onclick = function () {
  var content = "";
  for (var i = 0; i < listNumber.length; i++) {
    content += listNumber[i] + " ";
  }
  document.getElementById("kq").innerHTML = content;
};

// Tính tổng
// - Khai báo tổng = 0
// - Duyệt mảng listNumber
// + Nếu như listNumber[i] % 2 === 0
// => Tính tổng số chẵn
// - Show kết quả
document.getElementById("tinhTongDuong").onclick = function () {
  // Cách 1:
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }
  var tong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 === 0) {
      tong += listNumber[i];
    }
  }
  document.getElementById("kqTong").innerHTML = "Tổng các số chẵn là: " + tong;

  // Cách 2:
  //   if (listNumber.length > 0) {
  //     var tong = 0;
  //     for (var i = 0; i < listNumber.length; i++) {
  //       if (listNumber[i] % 2 === 0) {
  //         tong += listNumber[i];
  //       }
  //     }
  //     document.getElementById("kqTong").innerHTML =
  //       "Tổng các số chẵn là: " + tong;
  //   } else {
  //     alert("Vui lòng nhập số!");
  //   }
};
