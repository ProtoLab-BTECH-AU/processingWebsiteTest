let points = [];

function drawPoint(point) {
  let size = max(width * .04, height * .04);
  fill(226 * point[0], 0, 26);
  rect(point[0] * width, point[1] * height, point[0] * size, point[1] * size);
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0, 0, 0, 0);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    let point = [mouseX / width, mouseY / height];
    points.push(point);
    drawPoint(point);
  }
}

window.onresize = () => {
  resizeCanvas(innerWidth, innerHeight);
  points.map(drawPoint);
};