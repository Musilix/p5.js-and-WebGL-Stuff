let img;
let bg;

let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;

let angleMidSquare = 0;
let angleMiniSquares = 0;

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	// img = loadImage("https://c1.staticflickr.com/3/2521/3884071286_edb50f8137_b.jpg");
	bg = loadImage("https://uspstrackingtool.com/wp-content/uploads/2018/04/star-background-225.jpg");
	//img = createCapture(VIDEO);
}

function draw(){
	noStroke();
	background("white");
	//ambientLight(255);
	//pointLight(255, 255, 255, mouseX - windowWidth/2, mouseY - windowHeight/2, 200);

	directionalLight(255,0,255, windowHeight/2, 0, -50);
	directionalLight(0,150,255, -windowHeight/2, 0, -50);
	directionalLight(100,150,0, 0, windowWidth/2, -50);
	directionalLight(100,0,180, 0, -windowWidth/2, -50);


	ambientMaterial(255,255,255);

	// rotateX(angle1);
	// rotateY(angle2);
	// rotateZ(angle3);

	// rectMode(CENTER);
	// rect(0,0,200,200);

	//sphere(150);
	rotateX((mouseY - height/2) / 700);
	rotateY(angleMidSquare);
	box(150);
	angleMidSquare+=.005;

	rotateY(angleMiniSquares);
	//rotateX(angleMiniSquares);
	translate(-width/6, 0,0);
	sphere(35);

	//rotateX(angleMiniSquares);
	translate(width/3, 0,0);
	sphere(35);

	//rotateX(-angleMiniSquares);
	translate(-width/6, 0, width/6);
	sphere(35);

	// rotateX(-angleMiniSquares);
	translate(0, 0, -width/3);
	sphere(35);

	angleMiniSquares+= .04;
	//texture(img);

}

// let img;
// let bg;

// let angle1 = 0;
// let angle2 = 0;
// let angle3 = 0;

// function setup(){
// 	createCanvas(windowWidth, windowHeight, WEBGL);
// 	img = createCapture(VIDEO);
// 	bg = loadImage("https://uspstrackingtool.com/wp-content/uploads/2018/04/star-background-225.jpg");
// 	// createCapture(VIDEO);
// }

// function draw(){
// 	noStroke();
// 	background("black");
// 	ambientLight(255);

// 	rotateX(0);
// 	rotateY(angle2);
// 	rotateZ(45);

// 	// rectMode(CENTER);
// 	// rect(0,0,200,200);
// 	rectMode(CENTER);
// 	torus(150,10);
// 	texture(img);

// 	angle1+=.1;
// 	angle2+=.01;

// }