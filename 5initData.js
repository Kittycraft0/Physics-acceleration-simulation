//empty as of now


//copied from Chase a little dot 2-1/5initJada.js
//at 8/29/2022 3:09 PM CST Monday

//var data=new Data();
data=new Data();

//ctx.line(2,3,4,5,6);

/*data.addObject("player",new PlayerBall(0,0,0,0,settings.playerForce,10,"blue",true));
//console.log(settings.playerForce);
//data.objects.player.force=settings.playerForce;
//console.log(data.player.force);

data.addObject("target",new TargetBall(0,0,0,0,5,"red",true));
data.objects.target.newPositionAndVelocity(settings.targetSpeed*Math.random());*/

data.text=new Text(48,"serif","white");
//remember y is negative

//settings
var theScale=settings.theScale;
var theString=settings.theString;
var theColor1=settings.theColor1;
var theColor2=settings.theColor2;
var theColor3=settings.theColor3;
var theColor4=settings.theColor4;
var theSize=settings.theSize;
console.log(theSize);



var score=0;

//fps and time stuffs
var startTime=new Date().getTime();
var lastTime=new Date().getTime();



//amount of milliseconds until velocity reverse
//or else number of frames until velocity reverse...
var reverseTime=settings.reverseTime;
//whether or not to pause after double reverse time
var pauseOnDoubleReverseTime=settings.pauseOnDoubleReverseTime;
//boolean of which reverse has happened already or not
var reverse1Happened=false;
//pause at double reversetime happened already or not
var reverse2Happened=false;
//boolean to tell whether or not the recording is running (backwards...)
var runningRecording=false;
//starting frame of when the recording was started
//unknown yet... so -1...
//maybe better to not be in the settings because changing it does
//nothing... but eh idk... oh i think i will do that actually...
var startedRunningRecordingFrame=false;
//whether or not the recording will eventually run
var recordingRuns=settings.recordingRuns;

//frameList for recording if that is ever turned on again
var frameList=[];


console.log(
  settings.rectStartX,settings.rectStartY,settings.rectWidth,settings.rectHeight);
data.objects["box1"]=new Rectangle(
  settings.rectStartX,
  settings.rectStartY,
  0,0,
  settings.rectWidth,
  settings.rectHeight,
  "#0000ff"
);

//define the text key
var textKeyPressed=false;
//sorry mobile users if this is off

//define the lines animation key
var linesAnimationKeyPressed=false;
//again too bad mobile users

//define the progress bar key
var progressBarKeyPressed=false;
//mobile users just get a computer simple 
//problems require simple solutions like just come on really

console.log("5 initData loaded!");

data.dt=data.dt?data.dt:1;

/*for(var i=0;i<settings.numBalls;i++){
  //remember +x is right and +y is DOWN not up
  //because canvas s htat way
  console.log("new ball");
  data.objects["ball"+i]=new WallBouncingOrb(
    //poler equation thing
    i*Math.cos(i)*settings.theScale+settings.rectStartX,
    i*Math.sin(i)*settings.theScale+settings.rectStartY,
    settings.speed*settings.spf,
    //inverted
    settings.speed*settings.spf,(settings.numBalls/Math.PI)-(i/Math.PI)
    //settings.speed*settings.spf,i/Math.PI
  );
  //console.log(
  //  data.objects["ball"+i].pos[0],data.objects["ball"+i].pos[1],
  //  data.objects["ball"+i].vel[0],data.objects["ball"+i].vel[1]
  //);
  //console.log(data.objects["ball"+i]);
}


//make sure nothing isNaN
var objectKeys=Object.keys(data.objects);
//console.log(objectKeys);
for(var i=0;i<objectKeys.length;i++){
  var obj=data.objects[objectKeys[i]];
  //console.log(obj);
  if(
    isNaN(obj.pos[0])||
    isNaN(obj.pos[1])||
    isNaN(obj.vel[0])||
    isNaN(obj.vel[1])
  ){
    console.error(
      objectKeys[i]+" contains undefined values"+"\n"+
      obj.pos[0]+" "+
      obj.pos[1]+" "+
      obj.vel[0]+" "+
      obj.vel[1]
    );
  }
}*/


//make the box
//make the initial ball
data.objects["ball1"]=new WallBouncingOrb(
  0,
  0,
  5,
  0,
);



//console.log("FPS: "+settings.fps);

console.log("5 initData loaded!");