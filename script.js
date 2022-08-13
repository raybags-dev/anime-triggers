const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

const circle1 = { x: 10, y: 10, radius: 300 };
const circle2 = { x: 500, y: 500, radius: 150 }

let dx = circle2.x - circle1.x;
let dy = circle2.y - circle1.y;
let distance = Math.sqrt(dx * dx + dy * dy);
let sumOfRadii = circle1.radius + circle2.radius;

if (distance < sumOfRadii) {
    //circle collides
} else if (distance === sumOfRadii) {
    //circle touch
} else if (distance > sumOfRadii) {
    //no collission
}