const task3Element = document.getElementById('task-3');

function greet() {
  alert('Hi there!');
}

function greetUser(username) {
  alert(username)
}

function combine(str1, str2, str3) {
  const combinedText = `${str1} ${str2} ${str3}`;
  return combinedText;
}

greet();
greetUser('boyhotkey96');

task3Element.addEventListener('click', greet);

alert(combine('Hi', 'there!', 'boyhotkey96'));

/* let a = 3;
let b = '3';
console.log(a * b) */

