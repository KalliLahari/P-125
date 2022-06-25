leftwristx=0;
rightwristx=0;
difference=0;

function setup(){
video=createCapture(VIDEO);
video.size(500,600);
video.position(150,180);
canvas=createCanvas(500,500);
canvas.position(720,231);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);

}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}

function draw(){
    background("lightyellow");
    textSize(difference);
    fill("lightblue");
    text("Lahari",165,250);
}
