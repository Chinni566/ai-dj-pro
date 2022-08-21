Peter_pan_song="";
Harry_potter_theme_song="";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY =0;


left_wrist_score = 0;
right_wrist_score = 0;

function setup(){
    canvas = createCanvas(400,430);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Pose Net Is initialized")
}

function preload(){
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,400,430);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        left_wrist_score = results[0].pose.keypoints[9].score;
        right_wrist_score = results[0].pose.keypoints[10].score;
        console.log(" right_wrist_score = " + right_wrist_score + "left_wrist_score" + left_wrist_score );

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(" leftWristX = "+ leftWristX +  " leftWristY = " +  leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(" rightWristX = "+rightWristX +  " rightWristY = " + rightWristY);

        

    } 
}

function draw(){
    image (video,0,0,600,500);

    
    fill ("#FF0000");
    stroke ("#FF0000");}
