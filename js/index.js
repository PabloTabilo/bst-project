

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const cPad = parseInt(getComputedStyle(document.querySelector("header")).height)||0; // top del container

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight-cPad;

console.log(canvas.width);
console.log(canvas.height);



