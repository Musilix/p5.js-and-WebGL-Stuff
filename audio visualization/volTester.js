let vol;
let mic;

let checker = -50;
let checker2;

let timer;

function setup(){
	frameRate(23);
	createCanvas(windowWidth,windowHeight);
	mic = new p5.AudioIn();
	mic.start();

	//checker = -50;
	checker2 = -25;

	timer = 0;
}

function draw(){
	background(175);
	noStroke();

	fill('black');

	ellipse(windowWidth/2 - 195, windowHeight/2 - 90, 55, checker);
	ellipse(windowWidth/2 + 195, windowHeight/2 - 90, 55, checker);

	// fill('white');
	// ellipse(windowWidth/2 - 195, windowHeight/2 - 90, 25, checker2);
	// ellipse(windowWidth/2 + 195, windowHeight/2 - 90, 25, checker2);

	if(checker < 50){
		checker += 11;
	}
	// if(checker2 < 25){
	// 	checker+=6;
	// }

	if(timer % 115 == 0){
		blink();
	}

	vol = mic.getLevel();

	// console.log(vol);

	if(vol < .15){
		fill('green');
	}else if(vol < .4){
		fill('blue');
	}else{
		fill('red');
	}

	rectMode(CENTER);
	rect(windowWidth/2, windowHeight/2, 15, vol * 500);
	rect(windowWidth/2 + 25, windowHeight/2, 15, vol * 450);
	rect(windowWidth/2 - 25, windowHeight/2, 15, vol * 450);

	rect(windowWidth/2 + 50, windowHeight/2, 15, vol * 375);
	rect(windowWidth/2 - 50, windowHeight/2, 15, vol * 375);

	rect(windowWidth/2 + 75, windowHeight/2, 15, vol * 300);
	rect(windowWidth/2 - 75, windowHeight/2, 15, vol * 300);

	rect(windowWidth/2 + 100, windowHeight/2, 15, vol * 150);
	rect(windowWidth/2 - 100, windowHeight/2, 15, vol * 150);

	timer++;
}

function blink(){
	while(checker > 0){
		checker-=11;
	}
}