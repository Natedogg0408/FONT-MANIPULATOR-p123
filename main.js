function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(600, 600);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background('#439B53');
}

 function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}