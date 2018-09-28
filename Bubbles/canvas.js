var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

var colorArray = [
    /*'#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498D8',
    '#2980B9',
    'purple',
    'yellow',
    'orange'*/
    'black'
];

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

//Circle object constructor
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


    //genious variables for inflation control
    this.initR = this.radius;
    maxRadius = 70;
    this.minRadius = this.initR; //prevents over-shrinking
    distance = this.radius + 100; //inflation distance

    //Draw Circle
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.strokeStyle = 'blue';
        c.lineWidth = 5;
        c.stroke();
        c.fill();
    }

    //Moves and bounces circles from the edges
    this.update = function() {

        //Bounce left-right
        if (this.x + this.radius > innerWidth ||
            this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        //Bounce up-down
        if (this.y + this.radius > innerHeight ||
            this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interactivity and distance calculation by hypotenus
        if ((mouse.x - this.x) * (mouse.x - this.x) +
            (mouse.y - this.y) * (mouse.y - this.y) <
            distance * distance &&
            this.radius < maxRadius) {
            this.radius += 1;
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

//Random locations and speeds for circles
function randomizeCircles(circleCount) {
    for (var i = 0; i < circleCount; i++) {
        var radius = 5 + Math.random() * 50;
        var x = radius + (Math.random() * (innerWidth -
            2 * radius));
        var y = radius + (Math.random() * (innerHeight -
            2 * radius));
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

randomizeCircles(200);

//This gives error inside the object constructor :(
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();