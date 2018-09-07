
//angle =  n * 137.5
//radius = c * sqrt(n)

let angle;
let angler = 137.1;
let radius;

let c = 1.5;
let n = 20;

let x;
let y;

let sizeX = 2.75;
let sizeY = 2.75;

let timer = 0;
let secs = 0;

function windowResized(){
	frameRate(5000);
	resizeCanvas(windowWidth, windowHeight);
	background(0);
	noStroke();
}

function setup(){
	frameRate(5000);
	createCanvas(windowWidth, windowHeight);
	background(0);

	angleMode(DEGREES);
	colorMode(HSB);
	noStroke();
}

function draw(){
	colorMode(RGB);
	textSize(32)
	textAlign(CENTER);

	fill(255,255,255);
	text('The Elusive Phyllotaxis', windowWidth/2, 70);

	colorMode(HSB);
	drawPhyloOne();
	drawPhyloTwo();
	drawPhyloThree();


	// if(timer / 4 == 1){
	// 	angler+=.0001;
	// 	secs += 1;
	// 	timer = 0;
	// }
}

function drawPhyloOne(){
	angle = n * angler;
	radius = c * sqrt(n);

	x = radius * cos(angle) + windowWidth/4;
	y = radius * sin(angle) + windowHeight/2;

	//draw ellipse at x and y point; derived from the current angle we are at
	if(((n * c) / 51) < 255){
		if(n > 12){
			fill((((n * c) / 51)) % 256, 255, 255);
			ellipse(x,y,sizeX,sizeY);
			// sizeX+=.005;
			// sizeY+=.005;
		}
	}else{
		noLoop();
	}

	n++;
	timer++;
}

function drawPhyloTwo(){
	angle = n * 137.5;
	radius = c * sqrt(n);

	x = radius * cos(angle) + windowWidth/2;
	y = radius * sin(angle) + windowHeight/2;

	//draw ellipse at x and y point; derived from the current angle we are at
	if(((n * c) / 51) < 255){
		fill((((n * c) / 51)) % 256, 255, 255);
		ellipse(x,y,sizeX,sizeY);
		// sizeX+=.005;
		// sizeY+=.005;
	}else{
		noLoop();
	}

	n++;
	timer++;
}

function drawPhyloThree(){
	angle = n * 138.1;
	radius = c * sqrt(n);

	x = radius * cos(angle) + windowWidth - windowWidth/4;
	y = radius * sin(angle) + windowHeight/2;

	//draw ellipse at x and y point; derived from the current angle we are at
	if(((n * c) / 51) < 255){
		fill((((n * c) / 51)) % 256, 255, 255);
		ellipse(x,y,sizeX,sizeY);
		// sizeX+=.005;
		// sizeY+=.005;
	}else{
		noLoop();
	}

	n++;
	timer++;
}