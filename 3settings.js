//empty
//not anymore
//copied from Chase a little dot 2-1
//at 8/29/2022 3:02 PM CST

var settings={
  /*Input various settings here, in the following format:
  //Short description for attribute
  attributeNameInCammelCase:value,

  The last attribute does not need a comma after it, 
  but it works with it
  */
  //Player acceleration in units/second/second
  //for example if a direction is held down for one second then the
  //acceleration is changed by this many units?
  //it seems that the default must be 100
  speed:1000,
  //speed:10000,
  cameraSpeed:10000,

  //Player force (how much the other things are attracted to it)
  //it seems that the default must be 0.2
  //funny things seem to happen when it is 0 
  //for circles circles drawing
  playerForce:0.2,
  
  //FPS
  fps:60,

  //Target speed
  targetSpeed:0,

  //Move with the mouse or with WASD
  moveWithMouse:false,

  //number of black holes
  numBlackHoles:3,

  spf:"spf here is not set yet",

  //whether orn ot stuff bounces off of the walls
  wallBounce:false,

  //whether or not the player interacts with the target
  scoreOn:true,

  //whether or not the screen centers on the center of mass
  //of all objects
  centerOnMassOfAll:true,

  //oh huh ok it can end with a comma... ok...
  //but maybe only here well ok then...
  //anyways here lies the stuff for this specific project
  //what the text should be and the size and scales and stuffs
  //all of that sort of things...
  theScale:50,
  theString:"kittycraft0",
  theColor1:"red",
  theColor2:"lime",
  theColor3:"orange",
  theColor4:"yellow",
  theSize:3,

  //uncap fps so its faster idk
  uncapFPS:false,

  //settings for the recording and stuff
  //amount of milliseconds until velocity reverse
  //or else number of frames until velocity reverse...
  reverseTime:60*5,
  //whether or not to pause after double reverse time
  pauseOnDoubleReverseTime:true,
  //whether or not the recording will eventually run
  recordingRuns:true,

  //hide text for final animation
  //initial state of whether the text is hidden or not
  //toggle key is a "few" (ignoring comments) lines down
  hideText:false,

  //add random velocities to both x and y with a max of this number
  //it seems that the default is 1
  randomSpeed:1,

  //number of balls
  //20 is always a good number
  numBalls:100,

  //key that toggles text being shown or hte settings.hideText
  //a few lines up
  //debug text? all text? currently theres like no difference but
  //too bad so sad future me go fix it yourself
  //-9/6/2022 Tuesday 2:51 PM CST
  toggleTextKey:'1',

  //youuu
  animatedLinesWhileLoopFPS:60,
  animatedLinesWhileLoopSPF:"spf not here yet either",

  //key that makes it skip the slow loop of lining all of the 
  //objects indvidually and just basically does the same as the 
  //previous version did
  //yay changed the names all correctly on the first try
  //ill just leave this here cuz why not
  linesAnimationKey:'2',

  toggleProgressBarKey:'a',

  //good intiial value for finding the smallest value in a list...
  //if its not large enough then just set it to something bigger
  //ITS Infinity NOT infinity COME ON
  //aReallyReallyLargeValue=Infinity,
  //oh whoops its colon not equal sign
  aReallyReallyLargeNumber:Infinity,
  //aReallyReallyLargeNumber:10000,

  //for the lines connecting a circle of circles
  //power number here, raise it to decrease the amount of 
  //lines going to farther points
  //must be greater than 0
  powerNumber:0,
  //numer that the powerNumber goes up by each frame\
  powerNumberAddition:0.01,

  //attraction multiplier for balls and stuffs
  attractionMultiplier:1,

  

  //gravity in pixels per SECOND... sureee...
  //to get pixels per frame multiply it by mspf
  gravity:6,
  //acceleration - like gravity but better
  acceleration:[0,1],
  //dampening - it dampens, multiplies velocity values by these numbers
  dampening:[1,1],

  rectStartX:0,
  rectStartY:0,
  rectWidth:1000,
  rectHeight:100,
  rectMovementSpeed:0.5,
  
  aReallyReallyLargeNumber:Infinity,

  //blacklisted object names such that these objects dont get
  //the gravity
  //why didn't i just use a list of strings...? oh yeah... 
  //the for each loop or whatever... but still...
  gravityBlackListOriginal:[
    "box1",
    "ballPositionGraph","ballVelocityGraph","ballAccelerationGraph"
  ],
  gravityBlackList:{},
};

//spf (seconds per frame)
if(!settings.uncapFPS){
  settings.spf=1000/settings.fps;
  settings.mspf=settings.spf;
}else{
  settings.spf=0;
  settings.mspf=0;
}

for(var i=0;i<settings.gravityBlackListOriginal.length;i++){
  settings.gravityBlackList[settings.gravityBlackListOriginal[i]]=1;
}

//animated lines while loop spf set
settings.animatedLinesWhileLoopSPF=
  1000/settings.animatedLinesWhileLoopFPS;

//console.log("FPS: "+settings.fps);

console.log("3 settings loaded!");