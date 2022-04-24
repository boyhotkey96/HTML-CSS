const sayHello = name => console.log('Hi ' + name);
 
const sayHello2 = (text, name) => console.log(text + ' ' + name);
const sayHello3 = () => console.log('Hi hard-code!');
const sayHello4 = (name) => 'Hi ' +  name;
const sayHello5 = (text = 'Hello', name = 'Ông Phùng') => console.log(text + ' ' + name);

sayHello('boyhotkey96');
sayHello2( 'Hello', 'boyhotkey96');
sayHello3();
console.log(sayHello4('bothotkey96'));
sayHello5();

// function checkInput(cb, ...strings) {
//   let hasEmptyText = true;
//   for (const text of strings) {
//     if (!text) {
//       console.log('Có đoạn text rỗng!')
//       hasEmptyText = false;
//       break;
//     }
//   }
//   if (hasEmptyText) {
//     cb();
//   }
// }

// checkInput(
//   () => {
//     console.log('All not empty!');
//   },
//   'Hello',
//   '12',
//   'sdfsfasfsd',
//   ''
// );

const validInput = (inputCheck, ...strings) => {
  for (const str of strings){
    if (inputCheck(str) === "Invalid String") {
      return "Invalid String";
    }
  } 
  return "Valid String";
}
function checkInput2(str){
  return (str === '' || str === null || str === undefined) ? "Invalid String" : "Valid String";
}

console.log(validInput(checkInput2, "bs", "fsgs", ""));
