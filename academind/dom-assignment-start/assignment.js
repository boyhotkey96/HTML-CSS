//1
const liColor = document.querySelector('ol li:first-child');
const liBackround = document.getElementById('task-1');

liColor.style.color = 'white'
liBackround.style.backgroundColor = 'black'

//2
// document.title = 'Assignment';
const title1 = document.querySelector('title');
title1.textContent = 'Assigment';

const title2 = document.head.querySelector('title')
title2.textContent = 'Assigment - Solves!';

//3
const h1 = document.querySelector('h1');
h1.textContent = 'Assignment - Solved!';