const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)


//Trong phần gán mã đính kèm.js, bạn tìm thấy một biến chứa một số ngẫu nhiên từ 0 đến 1. Viết mã hiển thị cảnh báo (với bất kỳ thông báo nào) khi số đó lớn hơn 0,7.
if (randomNumber > 0.7) {
  console.log('randomNumber:' + randomNumber)
  alert('Số lớn hơn 0.7');
} else {

}


//Tạo một mảng số (bất kỳ số nào bạn chọn) và lặp qua mảng theo hai cách khác nhau - xuất các số bên trong vòng lặp.
let numberList = [1, 4, 6, 3, 6, 9];
for (let key in numberList) {
  console.log("Cách 1: " + numberList[key])
}
for (let value of numberList) {
  console.log("Cách 2: " + value)
}

//Điều chỉnh một trong các vòng lặp từ nhiệm vụ cuối cùng sao cho nó thực sự bắt đầu ở cuối (phần tử cuối cùng) của mảng và các vòng lặp đến phần tử đầu tiên.
for (let i = numberList.length - 1; i >= 0; i--) {
  console.log(numberList[i])
}


// Tạo một số ngẫu nhiên khác (trong một hằng số riêng biệt) và hiển thị cảnh báo trong hai trường hợp khác nhau: Cả hai đều lớn hơn 0,7 HOẶC ít nhất một trong hai không lớn hơn 0,2.
const randomNumber2 = Math.random();
if (randomNumber > 0.7 && randomNumber2 > 0.7 || randomNumber <= 0.2 || randomNumber2 <= 0.2) {
  console.log('randomNumber2: ' + randomNumber2)
  alert('Cả 2 đều lớn hơn 0.7 or 1 trong 2 nhở hơn 0.2')
} else {
  
}