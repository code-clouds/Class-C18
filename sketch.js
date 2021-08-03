var c;
function setup() {
  createCanvas(400,400);
  c = new Student("greg", 10, 4);
}

function draw() 
{
  background(30);
  c.display();
}