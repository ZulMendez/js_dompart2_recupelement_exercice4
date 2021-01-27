// 1
let redP = document.getElementsByClassName('redPurple');
console.log(redP);

// 2
let redP2 = document.querySelectorAll('.redPurple');
console.log(redP2);

// 3
let redP3 = document.querySelectorAll('.redPurple')[0];
console.log(redP3);

// 4
let list = document.querySelectorAll('li, p, span');
console.log(list);

// 5
let important = document.querySelectorAll('li.important, p');
console.log(important);

// 6
let last = document.querySelectorAll('h1.redPurple, span.redPurple');
console.log(last);