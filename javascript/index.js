// const wordList = ["javascripts", "JS", "love", "easy", "frontend", "PHP"];

// var result = wordList.sort(function (a, b) {
//   return b.length - a.length;
// });
 
// console.log(result[0]);

// https://helpex.vn/question/tim-chuoi-dai-nhat-trong-mang-60a76f0af31e29cf6fabf5c2


// -----------------------------------
// HỌC REDUCE() QUA CÁC VÍ DỤ ĐƠN GIẢN
// -----------------------------------

// Trong cái mớ hàm này
// for...i, for...of
// forEach
// filter
// map
// ...
// Cái hàm dễ diên nhất chính là reduce() :P
// Hàm này nó làm gì?
// Lặp qua các phần tử của mảng, 
// tính toán và trả về 1 KQ cuối cùng



// Hàm tính tổng viết bằng for...of
// const sumFor = [1, 2, 3, 4, 5];
// var total = 0;

// for (var i of sumFor) {
//    total += i;
// }
// console.log(total);


// Hàm tính tổng bằng reduce
// 1. Xác định giá trị khởi tạo
// 2. Xác định công thức với KQ của bước trước đó
// --
// 0
// result = prevResult + current

// const sumFor = [1, 2, 3, 4, 5];
// var result = sumFor.reduce(function(total, value) {
//   return total += value;
// })
// console.log(result);





// Find the first longest word in list
// Input:   ['love', 'easy', 'frontend']
// Output:  frontend

// const wordList = ['love', 'easy', 'frontend'];
// var  result = '';
// for (var i = 0; i < wordList.length; i++) {
//   result.length < wordList[i].length ? result = wordList[i] : result;
// }
// console.log(result);


// const wordList = ['love', 'easy', 'frontend'];
// var result = '';
// wordList.forEach(function(value, index) {
//   result = value;
// })
// console.log(result);


// const wordList = ['love', 'easy', 'frontend'];

// if (!Array.isArray(wordList) || wordList.length === 0) return null;

// var result = wordList.reduce(function (total, item) {
//   return total.length < item.length ? item : total;
// })
// console.log(result);


// const wordList = ['love', 'js', 'easy', 'frontend'];

// if (!Array.isArray(wordList) || wordList.length === 0) return null;

// var result = wordList.sort(function (a, b) {
//   return b.length - a.length;
// })
// console.log('Phần tử dài nhất: ' + result[0]);
// console.log('Phần tử ngắn nhất: ' + result[result.length - 1]);



// const wordList = ['love', 'js', 'easy', 'frontend'];

// if (!Array.isArray(wordList) || wordList.length === 0) return null;

// var result = '';
// wordList.map(function (item, index) {
//   return item.length > result.length ? result = item : result;
// })
// console.log(result);





// Viết hàm để chuyển đổi mảng thành object như bên dưới sử dụng reduce()
// const itemList = [
//   { id: 'key1', value: 'Superman' },
//   { id: 'key2', value: 'Wonder Woman' },
//   { id: 'key3', value: 'Spider man' },
// ];
// 
// is converted to 
// 
// const itemMap = {
//   key1: 'Superman',
//   key2: 'Wonder Woman',
//   key3: 'Spider man'
// };
// 
// to use later as itemMap.key1, O(1)
// instead of look up in itemList with id = key1, 0(n)

// const itemList = [
//   { id: 'key1', value: 'Superman' },
//   { id: 'key2', value: 'Wonder Woman' },
//   { id: 'key3', value: 'Spider man' },
// ];

// var result = itemList.reduce(function (arrNew, item) {
//   arrNew[item.id] = item.value;
//   return arrNew;
// }, {})
// console.log(result);




// Tóm lại 
// Mình có thể dùng reduce() nếu như gặp bài toán 
// lặp qua một mảng -> xử lý gì đó -> trả về một kết quả cuối cùng. 
// Vd như tìm min, max, sum, ...




// BÀI TẬP 
// 1. Viết hàm findMin(numberList) sử dụng reduce() 
// 2. Viết hàm findMaxEvenNumber(numberList) sử dụng reduce()
// 3. Viết hàm chuyển đổi object thành mảng, ngược lại với bài ở trên.

// HAPPY CODING!!! :)
// PS: Nếu các bạn vẫn còn chưa rõ phần nào thì hãy bình luận bên dưới nhé.
// Nếu đã thông suốt thì làm bài tập thôi ;)

// function findMin(input) {
//   return input.reduce(function (result, item) {
//     return result < item ? result : item;
//   })
// }

// function findMax(input) {
//   return input.reduce(function (result, item) {
//     return result > item ? result : item;
//   })
// }

// const numberList = [24, 66, 21, 09, 88, 15, 34, 57, 73, 92];
// console.log("Min: " + findMin(numberList));
// console.log("Max: " + findMax(numberList));

// const input = {
//   key1: 'Superman',
//   key2: 'Wonder Woman',
//   key3: 'Spider man'
// };
// const output = [
//   { id: 'key1', value: 'Superman' },
//   { id: 'key2', value: 'Wonder Woman' },
//   { id: 'key3', value: 'Spider man' },
// ];
// // const itemList = { key1: 'Superman', key2: 'Wonder Woman', key3: 'Spider man' };
// var result = Object.entries(input).reduce(function (previous, current, index, array) {
//   var obj = {};
//   obj.id = current[0],
//   obj.value = current[1]
//   previous.push(obj);
 
//   return previous;
// }, []);
// console.log(result);

// var result2 = Object.values(input).reduce(function (previous, current, index, array) {
//   var obj = {};
//   obj.id = index,
//   obj.value = current
//   previous.push(obj);
 
//   return previous;
// }, [])
// console.log(result2);

