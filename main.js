song1 = "";
song2 = "";
function preload(){
  song1 = loadSound("the-way-home-6674.mp3");
  song2 = loadSound("triumphant-long-6673.mp3");
  }
  
  function setup(){
      canvas = createCanvas(600,500);
       canvas.position(670,200);
  
       video = createCapture(VIDEO);
       video.hide();
       poseNet = ml5.poseNet(video,modelLoaded);
       poseNet.on('pose',gotPoses)
  }

  function draw(){
    image(video,0,0,600,500);
   }
   function modelLoaded(){
    console.log("! ! ! ! ! M O D E L ! ! L O A D E D ! ! ! ! !")
}

function gotPoses(result){
    if(result.length > 0){
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log('leftWristX = ' + leftWristX + 'leftWristY = ' + leftWristY);
        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log('rightWristX = ' + rightWristX + 'rightWristY = ' + rightWristY);
    }
  }