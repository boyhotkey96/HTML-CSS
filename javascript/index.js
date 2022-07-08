const arrList = [1, 22, '33', 14, 15, 46, 7];
const maxArray = arrList.sort((a,b) => {
  // if (b > a) {
  //   return 1
  // } else if (a > b) {
  //   return -1
  // } else {
  //   return 0
  // }
  return b > a ? -1 : b < a ? 1 : 0
});
console.log('Tăng dần: ' + maxArray);
console.log(maxArray.reverse());




/* const wordList = ["javascripts", "JS", "love", "easy", "frontend", "PHP"];


var result = wordList.sort(function (a, b) {
  return b.length - a.length;
});
 
console.log(result[0]); */

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



/* // Hàm tính tổng viết bằng for...of
const sumFor = [1, 2, 3, 4, 5];
var total = 0;

for (var i of sumFor) {
   total += i;
}
console.log(total); */



// Hàm tính tổng bằng reduce
// 1. Xác định giá trị khởi tạo
// 2. Xác định công thức với KQ của bước trước đó
// --
// 0
// result = prevResult + current

/* const sumFor = [1, 2, 3, 4, 5];
var result = sumFor.reduce(function(total, value) {
  return total + value;
})
console.log(result); */





// Find the first longest word in list
// Input:   ['love', 'easy', 'frontend']
// Output:  frontend

/* const wordList = ['love', 'easy', 'frontend'];
var  result = wordList[0];
for (var i = 0; i < wordList.length; i++) {
  result.length < wordList[i].length ? result = wordList[i] : result;
}
console.log(result); */


/* const wordList = ['love', 'easy', 'frontend'];
var result = wordList[0];
wordList.forEach(function(value, index) {
  result = value;
})
console.log(result); */


/* const wordList = ['love', 'easy', 'frontend'];

if (!Array.isArray(wordList) || wordList.length === 0) return null;

var result = wordList.reduce(function (total, item) {
  return total.length < item.length ? item : total;
})
console.log(result); */


/* const wordList = ['love', 'js', 'easy', 'frontend'];

if (!Array.isArray(wordList) || wordList.length === 0) return null;

var result = wordList.sort(function (a, b) {
  return b.length - a.length;
})
console.log('Phần tử dài nhất: ' + result[0]);
console.log('Phần tử ngắn nhất: ' + result[result.length - 1]); */



/* const wordList = ['love', 'js', 'easy', 'frontend'];

if (!Array.isArray(wordList) || wordList.length === 0) return null;

var result = '';
wordList.map(function (item, index) {
  return item.length > result.length ? result = item : result;
})
console.log(result); */





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

/* const itemList = [
  { id: 'key1', value: 'Superman' },
  { id: 'key2', value: 'Wonder Woman' },
  { id: 'key3', value: 'Spider man' },
];

var result = itemList.reduce(function (arrNew, item) {
  arrNew[item.id] = item.value;
  return arrNew;
}, {})
console.log(result); */




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

/* function findMin(input) {
  return input.reduce(function (result, item) {
    return result < item ? result : item;
  })
} */

/* function findMax(input) {
  return input.reduce(function (result, item) {
    return result > item ? result : item;
  })
} */

/* const numberList = [24, 66, 21, 09, 88, 15, 34, 57, 73, 92];
console.log("Min: " + findMin(numberList));
console.log("Max: " + findMax(numberList)); */

/* const input = {
  key1: 'Superman',
  key2: 'Wonder Woman',
  key3: 'Spider man'
};
const output = [
  { id: 'key1', value: 'Superman' },
  { id: 'key2', value: 'Wonder Woman' },
  { id: 'key3', value: 'Spider man' },
];


const itemList = { key1: 'Superman', key2: 'Wonder Woman', key3: 'Spider man' };
var result = Object.entries(input).reduce(function (previous, current, index, array) {
  var obj = {};
  obj.id = current[0],
  obj['value'] = current[1]
  previous.push(obj);
 
  return previous;
}, []);
console.log(result);

var result2 = Object.values(input).reduce(function (previous, current, index, array) {
  var obj = {};
  obj.id = index,
  obj.value = current
  previous.push(obj);
 
  return previous;
}, [])
console.log(result2); */



/* var number = 1;
console.log(number++); 
console.log(number);
console.log(number++);
console.log(++number);
var number2 = number--;
console.log(number2)
console.log(number); */



/* 
// Viết code tại đây
function isNumber(value) {
  console.log(value + 0)
  return  value + 0 == value ? true : false
}
Kì vọng đạt được
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false */




/* // Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant', 'Pig', 'Chicken'];
var result = animals.splice(-1, 1, 'water')
// var result = animals.slice(0, -1)
console.log(result); 
console.log(animals);  */




/* var myInfo = {
  name: 'Dự',
  age: 26,
  'address': 'Bình Định'
}
var myEmail = 'email'
myInfo[myEmail] = 'boyhotkey96@gmail.com'
console.log(myInfo)
console.log(myInfo.name)
console.log(myInfo['age']) */





/* const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var date = new Date();

var year = date.getFullYear();
// var month = parseInt((date.getMonth() + 1).toString().padStart(2, "0"));
var month = ("0" + (date`.getMonth() + 1)).slice(-2)
// var month = String(date.getMonth() + 1).padStart(2, '0'); // is no supported in IE
// var month = monthNames[date.getMonth()];
// var month2 = date.toLocaleString('default', { month: 'long' });
var day = ('0' + (date.getDate())).slice(-2)
var hour = date.getHours()
var second = date.getSeconds()

console.log(typeof month)
console.log(`${day}/${month}/${year} ${hour}:${second}`) */




// var xxx = {name: '1', manufacturer: '2', price: '3'};
// console.log(Object.keys(xxx));
// for (var i = 0; i < Object.keys(xxx).length; i++) {
//     console.log(Object.keys(xxx)[i]);
// }


/* // chia lấy phần nguyên trong js
let num1 = 20;
let num2 = 3;
// let result = (num1 - num1 % num2) / num2;
let result = Math.floor(num1 / num2);
console.log(result);  */



/* let resultArray = [1, 3, 5, 6];
let enterNumber = 55;
console.log(resultArray.push(enterNumber)); // 5 */

/* let test;
console.log(test) // undefine
console.log(typeof []) // object
console.log(typeof(null)) // object
console.log(typeof NaN) // number
console.log(typeof(NaN) === "number") */



// const defaultResult = 0;
// let currenResult = defaultResult;

// function add(num1, num2) {
//   console.log('1')
//   return currenResult = num1 + num2;
// }

// console.log('2')
// currenResult = add(1, 2);
// console.log(currenResult);


/* console.log('test')
var x = 1;
function f1() {
  console.log(x);
}
f1()
 
x = 100;
function f2() {
  f1();
}
f2() */




/* let object1 = {
  name: "John",
  lastName: "Doe"
}

let object2 = {
  name: "John",
  lastName: "Doe"
}
let object3 = object1;`
console.log(object1 === object2);
console.log(object3 === object1); */




/* // Viết hàm kiểm tra giá trị có phải là 1 số hay không
function isNumber(value) {
  // return typeof value === 'number' && value.toString() !== 'NaN';
  // return typeof value === 'number' && !isNaN(value);
  return Number.isFinite(value);
}
console.log(isNumber(1/0)); */




/* // Duyệt mảng color và thay đổi background của body sau mỗi click
const colorList = ['pink', 'green', 'red'];
const btn = document.getElementById('btn');
let index = 0;    
// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor = colorList[index];
//   index++; 
//   if (index > 2) {
//     index = 0;
//   }
// });
btn.addEventListener('click', () => {
  document.body.style.backgroundColor = colorList[index++ % 3];
});
// btn.onclick = () => document.body.style.backgroundColor = colorList[index++ % 3]; */


// const array = [1,2,3,4,5];
// for (let number of array) {
//   console.log(`index: ${array.indexOf(number)}`);
//   console.log(number);
// }



/* // Phân biệt null và undefined trong js
let testVar1;
let testVar2 = null;
console.log(testVar1) //undefine: biến đã được khai báo nhưng chưa được gán giá trị (chưa được gán)
console.log(testVar2) //null: là một giá trị gán. Nó có thể được gán cho một biến dưới dạng đại diện không có giá trị (giá trị được gán = null) */




// var a = 0/0;
// console.log(a === NaN); // false
// console.log(Object.is(a, NaN)); // true


// let userInput = 1;
// let age;
// if(!0 && userInput && age === null) {
//   console.log(3 + true - 5)
//   console.log((5 - 5 % 2) / 2)
// }
// let x = Number.isNaN(!0/0)
// let y = 'NaN' === 'NaN'
// let z = 0;
// console.log(x)
// console.log(y)
// console.log(isNaN(z))
// // console.log(isNaN('   s'))


// console.log(isNaN({a:2}))
// console.log(Number.isFinite(0/0))


// let sum = 0;
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(i);
//         // console.log(j);
//         sum = sum + i + j;
//         console.log('sum: ' + sum)
//     }
// }
// let total = 0+0+0+1+1+0+1+1+2+0+2+1+3+0+3+1+4+0+4+1;
// console.log(total)


/* let greeting = 'say Hi';
if (true) {
    let greeting = 'say Hello instead';
    console.log(greeting); // “say Hello instead”
}
console.log(greeting); // “say Hi” */




/* let myName = 'Flavio'
let secondName = myName;
myName = 'Roger'
console.log(secondName) */




/* //Cách truyền đối số đầu tiên với tham số mặc định đầu tiên
let winner = (computer = 'tôi là: ', person) => console.log(computer + person)
winner(undefined, 'boyhotkey96') */





/* const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? pChoice > 0.5
        ? RESULT_PLAYER_WINS_GOOD
        : RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
    // if (cChoice === pChoice) {
    //   return RESULT_DRAW;
    // } else if (
    //   (cChoice === ROCK && pChoice === PAPER) ||
    //   (cChoice === PAPER && pChoice === SCISSORS) ||
    //   (cChoice === SCISSORS && pChoice === ROCK)
    // ) {
    //   if (pChoice > 0.5) {
    //     return RESULT_PLAYER_WINS_GOOD;
    //   } else {
    //     return RESULT_PLAYER_WINS;
    //   }
    //   // return RESULT_PLAYER_WINS;
    // } else {
    //   return RESULT_COMPUTER_WINS;
    // } */







/* //REST trong arrow function
const total = (a, ...numbers) => {
  // console.log(numbers);
  // console.log(arguments);
  const validateNumber = (number) => {
    return Number.isNaN(number) ? 0 : +number
  }

  let result = 0;
  for (let i of numbers) {
    result += validateNumber(i);
  }
  return result;
}       
console.log(total(1, 2, 3, 4, '9', 11));

console.log(typeof '9') */





//Understanding Callback Function
const combind = (resultHandler, operator, ...numbers) => {
  const checkValidateNumber = (number) => {
    return !Number.isNaN(number) && typeof number === 'number' ? number : 0;
  }

  let result = 0;
  for (const number of numbers) {
    if (operator === 'ADD') {
      result += checkValidateNumber(number);
    } else if(operator === 'SUB')
      result -= checkValidateNumber(number);
  }
  resultHandler(result, operator);
}

// const sub = (resultHandler, ...numbers) => {
//   const checkValidateNumber = (number) => {
//     return !Number.isNaN(number) && typeof number === 'number' ? number : 0;
//   }
//   let result = 0;
//   for (const number of numbers) {
//     result -= checkValidateNumber(number);
//   }
//   resultHandler(result, 'Tổng âm là: ');
// }

const showTotal = (message, result) => {
  console.log(message + ' ' + result);
}

combind(showTotal.bind(this, 'Tổng số dương là:'), 'ADD', 1, 5, '4', 2, 8);
combind(showTotal.bind(null, 'Tổng số dương là:'), 'ADD', 3, 5, 6, 2, 8);
combind(showTotal.bind('kakaka', 'Tổng số âm là:'), 'SUB', 3, 5, 6, 2, 8);



/* // Dùng split() & chuyển đổi về số linh động hơn
const info = 'Hồ Chí Minh, 7000, Việt Nam, 19008198';
const transData = info.split(', ');
for (let i in transData) {
  if (transData[i] * 1 == transData[i]) {
    transData[i] = +transData[i];
  }
}
console.log(transData); */





/* function workArray() {
  const input = [
    {
      id: 1,
      city: "taipei",
      color: "blue",
      total: 200
    },
    {
      id: 2,
      city: "taichung",
      color: "red",
      total: 100
    },
    {
      id: 3,
      city: "hsinchu",
      color: "blue",
      total: 100
    },
    {
      id: 4,
      city: "taoyuan",
      total: 100,
      age: 30
    }
  ];
   
  const expected = [
    {
      param: "id",
      values: [1, 2, 3, 4]
    },
    {
      param: "city",
      values: ["taipei", "taichung", "hsinchu", "taoyuan"]
    },
    {
      param: "color",
      values: ["red", "blue"]
    },
    {
      param: "total",
      values: [100, 200]
    },
    {
      param: "age",
      values: [30]
    }
  ];
  
  let obj = {};
  input.forEach(item => {
    Object.keys(item).forEach(key => {
      // console.log('values: ' + item[key])
      // console.log(obj[key])
      obj[key] = obj[key] ? [ ...obj[key], item[key] ] : [ item[key] ] 
    })
  });
  console.log(obj);
  
  const out = Object.keys(obj).map(key => {
    return { param: key, values: obj[key] }
  });
  console.log(out);
  
  // // input -> output với mảng
  // const obj = {}
  // input.forEach((el) => {
  //   Object.keys(el).forEach(key => {
  //     obj[key] = obj[key] ? [ ...obj[key], el[key] ] : [ el[key] ] 
  //   })
  // })
   
  // const out = Object.keys(obj).map(key => {
  //   return { param: key, values: obj[key] }
  // })
   
  // console.log(out);
}
workArray(); */





/* var maximum = Number.MIN_SAFE_INTEGER;
 
var array = [-3, -2, 217, 9, -8, 46];
array.forEach(function(value){
  if(value > maximum) {
    maximum = value;
  }
});
 
console.log(maximum); // 217 */



/*// Tim max & min
const timSoMaxMin = (...input) => {
  let max = input[0];
  let min = input[0];
  for (const value of input) {
    if (value > max) {
      max = value
    } else if (value < min) {
      min = value
    }
  }
  return [max, min];
}
console.log(timSoMaxMin(3, 1, 5, 91, 2, 56, 32));
console.log(timSoMaxMin(...array)); */


// Factory funtion
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}
 
const calculateVatAmount = createTaxCalculator(0.19);
console.log(calculateVatAmount(100));

console.log(createTaxCalculator(0.19)(100));




/* // Đệ quy
function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1)
}
console.log(powerOf(2, 4)); */



// Rest with reduce
const course = 'Javascript'
const brand = 'F8'
function highlight([first,...strings], ...values) {
  return values.reduce((acc, cur) => [
    ...acc, `<span>${cur}</span>` + strings.shift()
  ], [first]
  )
}
const html = highlight`Học lập trình ${course} tại ${brand}!`
console.log(html.join(''))

// console[log]('warning')



const arr = ['a', 'b', 'c', 'd']
let arrayItem = arr[42];
console.log(arrayItem)

var greeting = 'Hola';
var name = 'Thau';

(function(window, name){
//code here
var greeting = 'Hello';
console.log(greeting + ' ' + name)
})(window, name);