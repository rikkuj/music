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
  
  }

  function draw(){
    image(video,0,0,600,500);
   }