song1=""
song2=""
song3=""
song4=""
song5=""
song6=""
song7=""
song8=""
song9=""
song10=""

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

scoreleftwrist=0;
scorerightwrist=0;

function preload() {
    song1=loadSound("djtillu.mp3");
    song2=loadSound("mcstan.mp3");
    song3=loadSound("pehlebhimain.mp3");
    song4=loadSound("arjan.mp3");
    song5=loadSound("harekrishna.mp3");
    song6=loadSound("yalgaar.mp3");
    song7=loadSound("pyarhai.mp3");
    song8=loadSound("TheMonster.mp3");
    song9=loadSound("vardaan.mp3");
    song10=loadSound("yadavbrand2.mp3");
    }
    
function setup() {
    
    canvas= createCanvas(500,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, singerIsReady);
    poseNet.on("pose", gotPoses);

}
function singerIsReady() {

    console.log("singerIsReady")
    
}

function draw(){

    image(video,0,0,500,400);
    fill("red");
    stroke("black");
    if(scorerightwrist > 0.2)
    {
    circle(rightWristX,rightWristY,20);    
    if(rightWristY>0 && rightWristY<= 100){

        document.getElementById("speedee").innerHTML= "Speed=0.5x";
        song1.rate(0.5);
        song2.rate(0.5);
        song3.rate(0.5);
        song4.rate(0.5);
        song5.rate(0.5);
        song6.rate(0.5);
        song7.rate(0.5);
        song8.rate(0.5);
        song9.rate(0.5);
        song10.rate(0.5);

    }
    else if(rightWristY>100 && rightWristY<= 200){

        document.getElementById("speedee").innerHTML= "Speed=1x";
        song1.rate(1);
        song2.rate(1);
        song3.rate(1);
        song4.rate(1);
        song5.rate(1);
        song6.rate(1);
        song7.rate(1);
        song8.rate(1);
        song9.rate(1);
        song10.rate(1);

    }
    else if(rightWristY>200 && rightWristY<= 300){

        document.getElementById("speedee").innerHTML= "Speed=1.5x";
        song1.rate(1.5);
        song2.rate(1.5);
        song3.rate(1.5);
        song4.rate(1.5);
        song5.rate(1.5);
        song6.rate(1.5);
        song7.rate(1.5);
        song8.rate(1.5);
        song9.rate(1.5);
        song10.rate(1.5);

    }
    else if(rightWristY>300 && rightWristY<= 400){

        document.getElementById("speedee").innerHTML= "Speed=2x";
        song1.rate(2);
        song2.rate(2);
        song3.rate(2);
        song4.rate(2);
        song5.rate(2);
        song6.rate(2);
        song7.rate(2);
        song8.rate(2);
        song9.rate(2);
        song10.rate(2);

    }
}
    
        if(scoreleftwrist > 0.2)
        {
            circle(leftWristX,leftWristY,20);
            InNumberLeftWristY= Number(leftWristY);
            removeDecimals=floor(InNumberLeftWristY);
            volume=removeDecimals/500;
            document.getElementById("volumee").innerHTML="Volume ="+volume;
            song1.setVolume(volume);
            song2.setVolume(volume);
            song3.setVolume(volume);
            song4.setVolume(volume);
            song5.setVolume(volume);
            song6.setVolume(volume);
            song7.setVolume(volume);
            song8.setVolume(volume);
            song9.setVolume(volume);
            song10.setVolume(volume);
        }


}
function play() {

    song1.play();
    song1.setVolume(1);
    song1.rate(1);
    document.getElementById("stop").style.display="inline-block"
    document.getElementById("play").style.display="none"
}

function gotPoses(results) {

    if (results.length>0) {

        console.log(results);
        leftWristX=results[0].pose.leftWrist.x-100;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x-55;
        rightWristY=results[0].pose.rightWrist.y;
        scoreleftwrist= results[0].pose.keypoints[9].score;
        scorerightwrist= results[0].pose.keypoints[10].score;
    }
    
}
function stop(){
    song1.stop()
    song2.stop()
    song3.stop()
    song4.stop()
    song5.stop()
    song6.stop()
    song7.stop()
    song8.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="inline-block"
    document.getElementById("stop").style.display="none"
}
function openNav() {
 document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
 document.getElementById("mySidenav").style.width = "0";
}

function playBoyfriend() {
    song1.play();
    song1.setVolume(1)
    song1.rate(1);
    song2.stop()
    song3.stop()
    song4.stop()
    song5.stop()
    song6.stop()
    song7.stop()
    song8.stop()
    song9.stop()
    song10.stop()
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
   }
   function playDetalli() {
       song2.play();
       song2.setVolume(1)
       song2.rate(1);
       song1.stop()
       song3.stop()
       song4.stop()
       song5.stop()
       song6.stop()
       song7.stop()
       song8.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
      function playfire() {
       song3.play();
       song3.setVolume(1)
       song3.rate(1);
       song1.stop()
       song2.stop()
       song4.stop()
       song5.stop()
       song6.stop()
       song7.stop()
       song8.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
   
      function playfriends() {
       song4.play();
       song4.setVolume(1)
       song4.rate(1);
       song1.stop()
       song2.stop()
       song3.stop()
       song5.stop()
       song6.stop()
       song7.stop()
       song8.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
   
      function playharekrishna() {
       song5.play();
       song5.setVolume(1)
       song5.rate(1);
       song1.stop()
       song2.stop()
       song3.stop()
       song4.stop()
       song6.stop()
       song7.stop()
       song8.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
   
      function playQaafirana() {
       song6.play();
       song6.setVolume(1)
       song6.rate(1);
       song1.stop()
       song2.stop()
       song3.stop()
       song4.stop()
       song5.stop()
       song7.stop()
       song8.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
   
      function playsulthan() {
       song7.play();
       song7.setVolume(1)
       song7.rate(1);
       song1.stop()
       song2.stop()
       song3.stop()
       song4.stop()
       song5.stop()
       song6.stop()
       song8.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
   
      function playMonster() {
       song8.play();
       song8.setVolume(1)
       song8.rate(1);
       song1.stop()
       song2.stop()
       song3.stop()
       song4.stop()
       song5.stop()
       song6.stop()
       song7.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
   
      function playToofan() {
       song9.play();
       song9.setVolume(1)
       song9.rate(1);
       song1.stop()
       song2.stop()
       song3.stop()
       song4.stop()
       song5.stop()
       song6.stop()
       song7.stop()
       song8.stop()
       song10.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
   
      function playyadavbrand2() {
       song10.play();
       song10.setVolume(1)
       song10.rate(1);
       song1.stop()
       song2.stop()
       song3.stop()
       song4.stop()
       song5.stop()
       song6.stop()
       song7.stop()
       song8.stop()
       song9.stop()
       document.getElementById("play").style.display="none"
       document.getElementById("stop").style.display="inline-block"
      }
   
      
   
   
   
   
   
      