//copied Text from particles-3
//at 9/2/2022 2:09 PM CST Friday

//letters all finally made at 8/30/2022 10:13 AM CST Tuesday!!!
//now to test if my hypothesis of reversing all of their trajectories
//makes them go back in time basically is true!!!...
//i hope its true, it was a cool effect i had in mind...
//but if that somehow fails i guess i can just basically record their
//positions and play it back backwards though...

//yes!
var n=0;


//maybe i should have gotten more used to using while(true){}s
//instead of these... these sure are nice but they are not in like
//any other language...
data.loopFunction=(code)=>{
  //pause();
  resetCanvasSize();
  //clear the canvas
  ctx.clear();
  //reset/use the text object
  //console.log(data);
  data.text.reset();
  
  //if(n>=1)
  //  pause();

  
  

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
    pause();
  }
}
  
  //gets the keys to all objects
  //set it to something else as in some keys but not all to have
  //things only done to those some keys
  var objectKeys=Object.keys(data.objects);
  //console.log(objectKeys);
  //console.log("length: "+objectKeys.length);
  //console.log(objectKeys[3]);
  //console.log(objectKeys[21]);
  //for(var i=0;i<objectKeys.length;i++){
  //for(var i=0;i<201;i++){
  //i needs to be at minimum 198? what is this?
  //for(var i=0;i<198;i++){
  //  console.log("what");
  //}
  //console.log(
  //  "box1:",
  //  data.objects["box1"].pos[0],
  //  data.objects["box1"].pos[1],
  //  data.objects["box1"].vel[0],
  //  data.objects["box1"].vel[1]
  //);
  //console.log("box1"+" here"+"\n"+
  //  data.objects["box1"].pos[0]+" "+
  //  data.objects["box1"].pos[1]+" "+
  //  data.objects["box1"].vel[0]+" "+
  //  data.objects["box1"].vel[1]
  //);
  //console.log(data.objects["ball0"] instanceof);
  //make the balls move and orbit each other
  for(var i=0;i<objectKeys.length;i++){
    //somehow THIS THING breaks it???
    //no its just a thing thats wrong with replit...
    //console.log(typeof objectKeys[i]);
    //console.log("no");
    //try{
      //console.log("no");
    //}catch(e){
      //console.log(typeof e);
    //}
    var rect=data.objects["box1"];
    if(settings.gravityBlackList[objectKeys[i]]!=1){
      for(var j=i+1;j<objectKeys.length;j++){
  //      //console.log(j);
  //      //console.log(objectKeys[i]);
  //      //console.log(objectKeys[j]);
        if(settings.gravityBlackList[objectKeys[j]]!=1){
          data.objects[objectKeys[i]].attractBoth(
            data.objects[objectKeys[j]],settings.attractionMultiplier);
        }
      }
    }
  }
  
  for(var i=0;i<objectKeys.length;i++){
    //wall bounce
    data.objects[objectKeys[i]].wallBounce(rect);
    
    //update the positions
    //velocity should be in pixels per second not pixels per frame
    //well too bad i think i broke it...
    data.objects[objectKeys[i]].updatePositionByVelocity();
  }
  //console.log(data.camera.vel[0]);
  data.camera.updatePosition();
  //zoomControls();
  
  //return value from the loop if it is ever needed or required
  var loopReturnValue=false;
  
  //runs the recording playback code; 
  //when it ends, just press exit a few times
  //recordingAndRunbackCode(objectKeys);
  
  
  


  //print the powerNumber
  //if(!settings.hideText) 
  //  data.text.println("settings.powerNumber: "+
  //    (Math.floor(settings.powerNumber/settings.powerNumberAddition)
  //     /(1/settings.powerNumberAddition))
  //  );
  //circleOfBallsLines
  //circleOfBallsLines(objectKeys);

  
    
  //run the code in paramter if inputted, otherwise don't try
  code?code:false;
  data.code?data.code():false;

  var objectKeys=Object.keys(data.objects);
  for(var i=0;i<objectKeys;i++){
    for(var j=i+1;j<objectKeys;j++){
      data.objects[i].attractBoth(data.objects[j]);
    }
  }

  //console.log(data.objects);
  //player ball stuffs
  data.objects["ball1"].getControlsFromKeyboard();
  data.objects["ball1"].move();
  //console.log(data.objects["ball1"].up);
  //data.objects["ball1"].vel[0]+=-.1;
  
  for(var name in data.objects){
    //data.objects[name].updatePositionByVelocity();
  }
  //data.objects["testGraph"].data[
  //  data.objects["testGraph"].data.length
  //]=data.objects["ball1"].vel[0];
  
  data.objects["ballPositionGraph"].addData(
    data.objects["ball1"].pos[0]);
  data.objects["ballPositionGraph"].cutData(1000);
  
  data.objects["ballVelocityGraph"].addData(
    data.objects["ball1"].vel[0]);
  data.objects["ballVelocityGraph"].cutData(1000);
  
  
  data.objects["ballAccelerationGraph"].addData(
    data.objects["ball1"].vel[0]);
  data.objects["ballAccelerationGraph"].cutData(1000);
  
  //center the camera on the blue square?
  //data.camera.pos[0]=Math.cos(n/10)*100;
  //data.camera.pos[1]=Math.sin(n/10)*100;
  //data.camera.scale=Math.sin(n/10);
  
  //render the balls and objects and stuffs
  for(var name in data.objects){
    var theObject=data.objects[name];
    //console.log(name);
    //console.log(theObject);
    //render the objects
    //comment the below line to not render the objects
    //if(name!="box1")
    theObject.render();
  }

  
  //runs the toggle for whether or not to show lines
  lineAnimationToggle(objectKeys);


  //let the text be toggled on and off
  //for the possibility at great viewing pleasure
  if(!keyPressed(settings.toggleTextKey)){
    //text key is not pressed
    textKeyPressed=false;
  }
  if(keyPressed(settings.toggleTextKey)&&!textKeyPressed){
    //text key is pressed
    textKeyPressed=true;
    
    //toggle text
    settings.hideText=!settings.hideText;
  }
  //note for future: put toggle above implementation, not below

  //incrememnt n for frame count
  n++
  
  //console.log("FPS: "+settings.fps);

  //get fps counter
  var currentTime=new Date().getTime();
  var frameTime=currentTime-lastTime;
  lastTime=currentTime;
  var theFPS=Math.round((1000/frameTime)*10)/10;
  
  //print the fps
  if(!settings.hideText) 
    data.text.println("FPS: "+theFPS);
  
  //get the amount of time that has elapsed since the start
  var time=(new Date().getTime()-startTime)/1000;

  //print the time
  if(!settings.hideText)
    data.text.println(`Time in seconds: ${time}`);
  //print the number of frames
  if(!settings.hideText)
    data.text.println(`Frames gone by so far: ${n}`);
  //print the number of objects
  if(!settings.hideText)
    data.text.println(`Number of objects: ${objectKeys.length}`);

  return(loopReturnValue);
}

console.log("6 loop loaded!");