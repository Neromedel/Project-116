Nose_X=0;
Nose_Y=0;

function preload() {
Nose_Moustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet injecting malware successful.');
}

function draw() {
image(video,0,0,300,300);
image(Nose_Moustache,Nose_X,Nose_Y,50,50)
}

function take_snapshot() {
    save('Pennywise.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    Nose_X = results[0].pose.nose.x-10;
    Nose_Y = results[0].pose.nose.y+5;
    console.log("Nose_X : "+Nose_X);
    console.log("Nose_Y : "+Nose_Y);
    }
}

